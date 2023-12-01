import React from "react";
import { motion } from "framer-motion";
import { useAnimationControl } from "../hooks/useAnimationControl";

function AnimateInView({
  children,
  className,
  style,
  delay,
  duration,
  noShift,
  threshold,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
  noShift?: boolean;
  threshold?: number;
}) {
  const { mounted, ref, inView } = useAnimationControl(
    delay ? delay : 0,
    threshold ? threshold : 0.2
  );

  const standardVariants = !noShift
    ? {
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: duration ? duration : 1, delay: delay },
        },
        hidden: { opacity: 0, scale: 1, y: 50 },
      }
    : {
        visible: {
          opacity: 1,
          scale: 1,
          transition: { duration: duration ? duration : 1, delay: delay },
        },
        hidden: { opacity: 0, scale: 1 },
      };

  return (
    <motion.div
      style={style}
      variants={standardVariants}
      ref={ref}
      initial="hidden"
      animate={mounted ? "visible" : inView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default AnimateInView;
