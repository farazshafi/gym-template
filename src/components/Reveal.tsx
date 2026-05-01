import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "fade" | "zoom";

const buildVariants = (direction: Direction, distance: number): Variants => {
  const map: Record<Direction, { x?: number; y?: number; scale?: number }> = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    fade: {},
    zoom: { scale: 0.85 },
  };
  return {
    hidden: { opacity: 0, ...map[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
    },
  };
};

export function Reveal({
  children,
  delay = 0,
  className,
  as: As = "div",
  direction = "up",
  distance = 32,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: keyof typeof motion;
  direction?: Direction;
  distance?: number;
}) {
  const Comp = motion[As] as typeof motion.div;
  return (
    <Comp
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={buildVariants(direction, distance)}
      transition={{ delay }}
    >
      {children}
    </Comp>
  );
}
