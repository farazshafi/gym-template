import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { User, Users, Flame, Apple, Activity, HeartPulse } from "lucide-react";

const services = [
  { icon: User, title: "Personal Training", desc: "1-on-1 sessions tailored to your goals, schedule, and starting point." },
  { icon: Users, title: "Group Classes", desc: "High-energy HIIT, spin, boxing, and strength classes daily." },
  { icon: Flame, title: "Weight Loss Programs", desc: "12-week transformation programs with measurable results." },
  { icon: Apple, title: "Nutrition Plans", desc: "Custom macros and meal plans built by registered dietitians." },
  { icon: Activity, title: "Performance Coaching", desc: "Sports-specific programming for athletes and competitors." },
  { icon: HeartPulse, title: "Recovery & Mobility", desc: "Stretching sessions, foam rolling zones, and recovery rooms." },
];

export function Services() {
  return (
    <section id="services" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What We Offer"
          title={<>Services that <span className="text-gradient-ember">Deliver</span></>}
          description="Everything you need under one roof — from your first session to your strongest year."
        />

        <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="group relative h-full bg-background p-8 transition-all duration-300 hover:bg-card">
                <div className="absolute left-0 top-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                <s.icon className="h-10 w-10 text-primary transition-transform duration-300 group-hover:-translate-y-1" />
                <h3 className="font-display mt-5 text-xl font-bold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
