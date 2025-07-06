import React, { useEffect, useRef, useState } from "react";

interface CategoryGroupProps {
  children: React.ReactNode[];
  className: string;
}

const CategoryGroup: React.FC<CategoryGroupProps> = ({ children, className }) => {
  const [expanded, setExpanded] = useState(false);
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const visibleItems = expanded ? children : children.slice(0, 4);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "-1");
          if (entry.isIntersecting) {
            setVisibleIndexes((prev) => [...prev, index]);
          } else {
            setVisibleIndexes((prev) => prev.filter((i) => i !== index));
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleItems]);

  return (
    <>
      <div className="row g-4" style={{fontFamily: "Heebo"}}>
        {visibleItems.map((child, index) => (
          <div
            key={index}
            data-index={index}
            ref={(el) => {itemRefs.current[index] = el}}
            className={`col-lg-3 col-sm-6 ${className} fade-up ${
              visibleIndexes.includes(index) ? "visible" : ""
            }`}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center align-items-center text-center mt-4 w-100">
        {!expanded ? (
          <button onClick={() => setExpanded(true)} className="btn btn-primary w-100">
            View All
          </button>
        ) : (
          <button onClick={() => setExpanded(false)} className="btn btn-primary w-100">
            Hide
          </button>
        )}
      </div>
    </>
  );
};

export default CategoryGroup;
