import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Instagram, Twitter, Facebook } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";

const trainers = [
  { img: t1, name: "Marcus Reid", spec: "Strength & Powerlifting", years: 12 },
  { img: t2, name: "Elena Vasquez", spec: "HIIT & Conditioning", years: 8 },
  { img: t3, name: "Kai Bennett", spec: "CrossFit & Functional", years: 10 },
  { img: t4, name: "Sofia Lang", spec: "Yoga & Mobility", years: 9 },
];

export function Trainers() {
  return (
    <section id="trainers" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our Coaches"
          title={<>Meet the <span className="text-gradient-ember">Iron</span> Crew</>}
          description="Certified, battle-tested, and obsessed with your results. Every coach here has walked the walk."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <article className="group relative overflow-hidden border border-border bg-card">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={t.img}
                    alt={t.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                    {t.years} yrs
                  </div>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-background/95 p-4 transition-transform duration-500 group-hover:translate-y-0">
                    <div className="flex justify-center gap-4">
                      {[Instagram, Twitter, Facebook].map((Icon, idx) => (
                        <a key={idx} href="#" aria-label="social" className="text-muted-foreground transition-colors hover:text-primary">
                          <Icon className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold uppercase">{t.name}</h3>
                  <p className="mt-1 text-sm text-primary">{t.spec}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
