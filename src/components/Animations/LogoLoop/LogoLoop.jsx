import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

export default function LogoLoop({
  logos = [],
  speed = 50,
  direction = "left",
  pauseOnHover = true,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimationControls();

  // Duplicate the list enough times so the marquee is continuous
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  useEffect(() => {
    if (pauseOnHover && isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        transition: {
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        },
      });
    }
  }, [controls, direction, isHovered, pauseOnHover, speed]);

  return (
    <div
      style={{
        overflow: "hidden",
        display: "flex",
        width: "100%",
        userSelect: "none",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={controls}
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {duplicatedLogos.map((item, idx) => (
          <div
            key={idx}
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            {item.node}
          </div>
        ))}
      </motion.div>
    </div>
  );
}