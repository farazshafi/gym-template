import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Quote, Star } from "lucide-react";

const quotes = [
  { name: "Jordan M.", role: "Member, 3 yrs", text: "Lost 42 lbs and finally hit a 405 deadlift. The coaches actually care — they don't just count reps." },
  { name: "Priya S.", role: "Member, 1 yr", text: "The HIIT classes wrecked me in the best way. Down two pant sizes and stronger than I've ever been." },
  { name: "Devon T.", role: "Member, 5 yrs", text: "Best gym I've ever trained in. 24/7 access, equipment is always pristine, community is unmatched." },
];

export function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Real Results"
          title={<>Member <span className="text-gradient-ember">Stories</span></>}
        />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {quotes.map((q, i) => (
            <Reveal key={q.name} delay={i * 0.1}>
              <figure className="relative h-full border border-border bg-card p-8">
                <Quote className="absolute right-6 top-6 h-10 w-10 text-primary/20" />
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-relaxed text-foreground">
                  "{q.text}"
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <div className="font-display text-sm font-bold uppercase">{q.name}</div>
                  <div className="text-xs text-muted-foreground">{q.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
