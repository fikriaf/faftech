// src/components/Breadcrumbs.tsx
import { Link, useLocation } from "react-router-dom";
import "./styles/Breadcrumbs.css"

const Breadcrumbs = () => {
const location = useLocation();
const pathnames = location.pathname.split("/").filter(Boolean);

return (
    <nav aria-label="breadcrumb" className="mx-md-5 position-absolute" style={{zIndex: "999999"}}>
    <ol className="breadcrumb bg-secondary py-0">
        <li className="breadcrumb-item">
        <Link to="/" style={{fontSize: "1rem", fontWeight: "500"}}>Home</Link>
        </li>
        {pathnames.map((segment, index) => {
        const path = "/" + pathnames.slice(0, index + 1).join("/");
        const isLast = index === pathnames.length - 1;
        const formatted = segment.charAt(0).toUpperCase() + segment.slice(1);
        return isLast ? (
            <li className="breadcrumb-item active" style={{fontSize: "1rem", fontWeight: "500"}} key={path} aria-current="page">
            {formatted}
            </li>
        ) : (
            <li className="breadcrumb-item" key={path}>
            <Link to={path} style={{fontSize: "1rem", fontWeight: "500"}}>
            {formatted}
            </Link>
            </li>
        );
        })}
    </ol>
    </nav>
);
};

export default Breadcrumbs;
