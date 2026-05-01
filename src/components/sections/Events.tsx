import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";
import football from "@/assets/event-football.jpg";
import challenge from "@/assets/event-challenge.jpg";
import comp from "@/assets/event-comp.jpg";

const events = [
  { img: football, title: "Monthly Football Match", date: "May 18, 2026", location: "Riverside Field", desc: "Members vs. coaches under the floodlights. Crowd, cleats, glory." },
  { img: challenge, title: "Iron 30 Fitness Challenge", date: "June 02, 2026", location: "Main Floor", desc: "30-day strength + conditioning challenge with prizes for top movers." },
  { img: comp, title: "Summer Showdown Comp", date: "July 14, 2026", location: "Main Stage", desc: "Annual lifting and physique competition. Open to all members." },
];

export function Events() {
  return (
    <section id="events" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Upcoming"
          title={<>Events & <span className="text-gradient-ember">Competitions</span></>}
          description="From friendly football to all-out competitions, we keep the calendar loaded."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.1}>
              <article className="group flex h-full flex-col border border-border bg-card transition-all hover:border-primary/60">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={e.img}
                    alt={e.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 bg-background/80 px-3 py-1.5 text-xs font-semibold backdrop-blur">
                    {e.date}
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-bold uppercase">{e.title}</h3>
                  <p className="mt-3 flex-1 text-sm text-muted-foreground">{e.desc}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs uppercase tracking-wider">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <MapPin className="h-3.5 w-3.5" /> {e.location}
                    </span>
                    <a href="#contact" className="flex items-center gap-1 text-primary transition-transform group-hover:translate-x-1">
                      Register <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
