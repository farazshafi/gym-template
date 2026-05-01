import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const photos = [
  { src: g1, alt: "Battle ropes training", className: "row-span-2" },
  { src: g2, alt: "Group HIIT class", className: "" },
  { src: g3, alt: "Boxing training", className: "" },
  { src: g4, alt: "Pull up workout", className: "row-span-2" },
  { src: g5, alt: "Squat rack training", className: "" },
  { src: g6, alt: "Yoga and stretching", className: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Inside the Forge"
          title={<>The <span className="text-gradient-ember">Atmosphere</span></>}
          description="A look inside our space — the gear, the grind, the people who show up every day."
        />

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {photos.map((p, i) => (
            <Reveal key={i} delay={i * 0.06} className={p.className}>
              <button
                onClick={() => setActive(i)}
                className="group relative h-full w-full overflow-hidden border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`Open ${p.alt}`}
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 transition-opacity group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-background/95 p-4 backdrop-blur-xl"
            onClick={() => setActive(null)}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-6 top-6 grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-foreground hover:bg-secondary"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <motion.img
              key={active}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-h-[88vh] max-w-[92vw] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
