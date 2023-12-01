import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export const useAnimationControl = (delay: number, threshold: number) => {
  const [ref, inView] = useInView({
    threshold,
    delay,
  });
  const controls = useAnimation();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
      setMounted(true);
    }
  }, [controls, inView]);

  return {
    mounted,
    ref,
    inView,
  };
};
