import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message sent! We'll be in touch within 24 hours.");
    }, 800);
  }

  return (
    <section id="contact" className="relative bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Get in Touch"
          title={<>Ready to <span className="text-gradient-ember">Start</span>?</>}
          description="Drop us a line, swing by, or book a free intro session. We'll show you around."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <div className="space-y-6">
              {[
                { icon: MapPin, label: "Visit", value: "1287 Forge Street, Brooklyn, NY 11201" },
                { icon: Phone, label: "Call", value: "+1 (555) 010-IRON" },
                { icon: Mail, label: "Email", value: "hello@ironforge.gym" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 border border-border bg-card p-5 rounded-2xl">
                  <div className="grid h-11 w-11 flex-shrink-0 place-items-center bg-primary text-primary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">{c.label}</div>
                    <div className="mt-1 text-sm text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}

              <div className="overflow-hidden border border-border rounded-2xl">
                <iframe
                  title="IronForge location map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-73.998%2C40.690%2C-73.978%2C40.704&layer=mapnik"
                  className="h-64 w-full grayscale"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5 border border-border bg-card p-8 rounded-3xl">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Name</label>
                  <Input id="name" name="name" required placeholder="Your name" className="h-12 rounded-full border-border bg-background" />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email</label>
                  <Input id="email" name="email" type="email" required placeholder="you@email.com" className="h-12 rounded-full border-border bg-background" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea id="message" name="message" required rows={6} placeholder="Tell us about your goals..." className="rounded-2xl border-border bg-background" />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="h-13 w-full rounded-full bg-primary py-4 font-display text-base uppercase tracking-wider text-primary-foreground hover:bg-primary/90 ember-glow"
              >
                {sending ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
