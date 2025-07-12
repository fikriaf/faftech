import { motion } from "framer-motion";

interface PageWrapperProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "up" | "down";
}

export default function PageWrapper({ children, direction = "left" }: PageWrapperProps) {
  const variants = {
    initial: (dir: string) => {
        switch (dir) {
        case "right":
            return { x: "100%", opacity: 0 }; // masuk dari kanan
        case "left":
            return { x: "-100%", opacity: 0 }; // masuk dari kiri
        case "up":
            return { y: "100%", opacity: 0 };
        case "down":
            return { y: "-100%", opacity: 0 };
        default:
            return { x: "100%", opacity: 0 };
        }
    },
    animate: { x: 0, y: 0, opacity: 1 },
    exit: (dir: string) => {
        switch (dir) {
        case "right":
            return { x: "100%", opacity: 0 }; // keluar ke kanan (sama arah)
        case "left":
            return { x: "-100%", opacity: 0 }; // keluar ke kiri (sama arah)
        case "up":
            return { y: "100%", opacity: 0 };
        case "down":
            return { y: "-100%", opacity: 0 };
        default:
            return { x: "100%", opacity: 0 };
        }
    },
    };


  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
