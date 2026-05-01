import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative isolate flex min-h-screen items-center overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Athlete lifting heavy barbell in dark gym"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="mx-auto w-full max-w-7xl px-6 pt-32 pb-20">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-primary"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Open 24 / 7 — Now Enrolling
        </motion.span>

        <motion.h5
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display mt-6 max-w-4xl text-4xl font-bold uppercase leading-[0.9] sm:text-6xl md:text-8xl lg:text-[7.5rem]"
        >
          Forge Your <br />
          <span className="text-gradient-ember ember-text-glow">Strongest</span> Self
        </motion.h5>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
        >
          Premium training, world-class coaches, and a community built to push you past every limit.
          This is where champions are made.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="group h-14 rounded-full bg-primary px-8 font-display text-base uppercase tracking-wider text-primary-foreground hover:bg-primary/90 ember-glow"
          >
            <a href="#pricing">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-14 rounded-full border-border bg-transparent px-8 font-display text-base uppercase tracking-wider hover:bg-secondary"
          >
            <a href="#about">
              <Play className="mr-2 h-4 w-4 fill-current" />
              Take a Tour
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 grid max-w-2xl grid-cols-3 gap-6 border-t border-border/60 pt-8"
        >
          {[
            { v: "12K+", l: "Members" },
            { v: "45+", l: "Coaches" },
            { v: "15", l: "Years" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-3xl font-bold text-primary sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
          <div className="h-10 w-px bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
