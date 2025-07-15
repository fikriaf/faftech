// src/components/FadeInOnScroll.tsx
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

interface Props {
children: React.ReactNode;
delay?: number;
}

const FadeInOnScroll: React.FC<Props> = ({ children, delay = 0 }) => {
const ref = useRef(null);
const isInView = useInView(ref, { once: false });
const controls = useAnimation();

useEffect(() => {
if (isInView) {
    controls.start('visible');
} else {
    controls.start('hidden');
}
}, [isInView, controls]);


return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    transition={{ duration: 0.8, delay }}
    variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
    }}
    style={{width: 'inherit'}}
    >
    {children}
    </motion.div>
);
};

export default FadeInOnScroll;
