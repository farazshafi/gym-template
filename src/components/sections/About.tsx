import { Reveal } from "../Reveal";
import { Target, Eye, Award, Flame } from "lucide-react";
import gallery5 from "@/assets/gallery-5.jpg";

const highlights = [
  { icon: Target, title: "Our Mission", text: "Empower every member to unlock their strongest, healthiest self." },
  { icon: Eye, title: "Our Vision", text: "Build the world's most relentless fitness community." },
  { icon: Award, title: "15 Years", text: "Of building champions, transforming bodies and mindsets." },
  { icon: Flame, title: "12K+ Members", text: "Trust us with their daily grind and breakthrough goals." },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <Reveal direction="right">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 bg-primary/20 blur-3xl" />
            <img
              src={gallery5}
              alt="Athlete training in IronForge gym"
              loading="lazy"
              width={1280}
              height={1024}
              className="h-[560px] w-full rounded-3xl object-cover grayscale-[20%]"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-primary p-6 text-primary-foreground sm:block">
              <div className="font-display text-5xl font-bold">15+</div>
              <div className="text-xs uppercase tracking-widest">Years Forging Strength</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal direction="left">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              About IronForge
            </span>
          </Reveal>
          <Reveal direction="left" delay={0.1}>
            <h2 className="font-display mt-4 text-4xl font-bold uppercase leading-[0.95] sm:text-5xl md:text-6xl">
              Where <span className="text-gradient-ember">Discipline</span> Becomes Identity
            </h2>
          </Reveal>
          <Reveal direction="left" delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground">
              Since 2010, IronForge has been more than a gym — it's a proving ground. We built this place
              for people who refuse to coast. Elite coaches, hand-picked equipment, and a culture of grit
              that turns showing up into a way of life.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={0.1 + i * 0.08} direction="zoom">
                <div className="group h-full rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/60">
                  <h.icon className="h-6 w-6 text-primary transition-transform group-hover:scale-110" />
                  <div className="mt-3 font-display text-sm font-bold uppercase tracking-wider">
                    {h.title}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
