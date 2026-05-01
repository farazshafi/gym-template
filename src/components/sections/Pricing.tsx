import { useState } from "react";
import { Reveal } from "../Reveal";
import { SectionHeader } from "../SectionHeader";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

type BillingCycle = "monthly" | "quarterly" | "yearly";

const plans = [
  {
    name: "Basic",
    prices: { monthly: 1000, quarterly: 2500, yearly: 9000 },
    perks: ["Gym access (6am-10pm)", "Locker room access", "1 group class / week", "Free WiFi"],
    popular: false,
  },
  {
    name: "Standard",
    prices: { monthly: 1800, quarterly: 4500, yearly: 16000 },
    perks: ["24/7 gym access", "All group classes", "1 PT session / month", "Nutrition consultation", "Recovery room"],
    popular: true,
  },
  {
    name: "Premium",
    prices: { monthly: 3000, quarterly: 7500, yearly: 27000 },
    perks: ["Everything in Standard", "4 PT sessions / month", "Custom nutrition plan", "Massage therapy", "Guest passes"],
    popular: false,
  },
];

const cycleLabels: Record<BillingCycle, string> = {
  monthly: "Monthly",
  quarterly: "3 Months",
  yearly: "Yearly",
};

const cycleSuffix: Record<BillingCycle, string> = {
  monthly: "/mo",
  quarterly: "/3 mo",
  yearly: "/yr",
};

const formatINR = (n: number) => "₹" + n.toLocaleString("en-IN");

export function Pricing() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Membership"
          title={<>Pick Your <span className="text-gradient-ember">Plan</span></>}
          description="No contracts. Cancel anytime. Save more with longer commitments."
        />

        <Reveal direction="zoom">
          <div className="mt-10 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
              {(Object.keys(cycleLabels) as BillingCycle[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCycle(c)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold uppercase tracking-wider transition-colors ${
                    cycle === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cycleLabels[c]}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.12} direction="up">
              <div
                className={`relative flex h-full flex-col rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-1 ${
                  p.popular
                    ? "border-primary ember-glow lg:scale-105"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-bold uppercase">{p.name}</h3>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold sm:text-6xl">
                    {formatINR(p.prices[cycle])}
                  </span>
                  <span className="text-sm text-muted-foreground">{cycleSuffix[cycle]}</span>
                </div>
                {cycle !== "monthly" && (
                  <p className="mt-1 text-xs text-primary">
                    Just {formatINR(Math.round(p.prices[cycle] / (cycle === "quarterly" ? 3 : 12)))}/month
                  </p>
                )}
                <ul className="mt-8 space-y-3">
                  {p.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 h-12 w-full rounded-full font-display uppercase tracking-wider ${
                    p.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <a href="#contact">Get Started</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
