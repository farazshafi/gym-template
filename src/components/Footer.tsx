import { useState } from "react";
import { Dumbbell, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export function Footer() {
  const [email, setEmail] = useState("");
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
              <Dumbbell className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold uppercase tracking-wider">
              Iron<span className="text-primary">Forge</span>
            </span>
          </a>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Premium training, elite coaches, and a community built to push you past every limit.
            Brooklyn's strongest gym since 2010.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="social"
                className="grid h-10 w-10 place-items-center border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {["About", "Trainers", "Equipment", "Services", "Pricing", "Events"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-primary">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-widest">Newsletter</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Training tips, event drops, and member-only deals.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!email) return;
              setEmail("");
              toast.success("You're in. Welcome to the crew.");
            }}
            className="mt-4 flex gap-2"
          >
            <Input
              type="email"
              required
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 flex-1 rounded-full border-border bg-card"
            />
            <Button type="submit" className="h-11 rounded-full bg-primary px-5 font-display uppercase">
              Join
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} IronForge Gym. All rights reserved.</p>
          <p>Forged in Brooklyn.</p>
        </div>
      </div>
    </footer>
  );
}
