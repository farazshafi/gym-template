import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import strength from "@/assets/equip-strength.jpg";
import cardio from "@/assets/equip-cardio.jpg";
import functional from "@/assets/equip-functional.jpg";
import cable from "@/assets/equip-cable.jpg";

const items = [
  { img: strength, cat: "Strength", title: "Power Racks & Free Weights", desc: "Olympic barbells, bumper plates, dumbbells up to 120 lbs.", span: "lg:col-span-2" },
  { img: cardio, cat: "Cardio", title: "Premium Cardio Floor", desc: "Treadmills, rowers, assault bikes, stair climbers.", span: "" },
  { img: functional, cat: "Functional", title: "Kettlebells & Battle Ropes", desc: "Full functional zone with rigs, sleds, and rope systems.", span: "" },
  { img: cable, cat: "Machines", title: "Cable & Pulley Systems", desc: "Dual-stack cable rigs and isolation machines.", span: "lg:col-span-2" },
];

export function Equipment() {
  return (
    <section id="equipment" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Equipment"
          title={<>Built for <span className="text-gradient-ember">Real Work</span></>}
          description="Commercial-grade gear, replaced and serviced regularly. No broken machines. No waiting in line."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.1} className={it.span}>
              <article className="group relative h-80 overflow-hidden border border-border bg-card">
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="relative flex h-full flex-col justify-end p-6">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                    {it.cat}
                  </span>
                  <h3 className="font-display mt-2 text-2xl font-bold uppercase">{it.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
