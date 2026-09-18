import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function AnimatedContent({
  children,
  distance = 50,
  direction = "vertical",
  reverse = false,
  duration = 0.6,
  delay = 0,
  ease = "easeOut",
  initialOpacity = 0,
  animateOpacity = true,
  scale = 1,
  threshold = 0.1,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: threshold, once: true });

  const directions = {
    vertical: "y",
    horizontal: "x",
  };

  const axis = directions[direction];
  const offset = reverse ? -distance : distance;

  return (
    <motion.div
      ref={ref}
      initial={{
        [axis]: offset,
        opacity: animateOpacity ? initialOpacity : 1,
        scale: scale,
      }}
      animate={
        inView
          ? {
              [axis]: 0,
              opacity: 1,
              scale: 1,
            }
          : {}
      }
      transition={{
        duration,
        delay,
        ease,
      }}
    >
      {children}
    </motion.div>
  );
}