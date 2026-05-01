import { useEffect, useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const HEADER_OFFSET = 80;

function smoothScrollTo(href: string) {
  if (!href.startsWith("#")) return;
  const id = href.slice(1);
  if (id === "top" || id === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: "smooth" });
}

function handleAnchorClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  href: string,
  onAfter?: () => void,
) {
  if (!href.startsWith("#")) return;
  e.preventDefault();
  smoothScrollTo(href);
  history.replaceState(null, "", href);
  onAfter?.();
}

const links = [
  { href: "#about", label: "About" },
  { href: "#trainers", label: "Trainers" },
  { href: "#equipment", label: "Equipment" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#events", label: "Events" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" onClick={(e) => handleAnchorClick(e, "#top")} className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground">
            <Dumbbell className="h-5 w-5" />
          </span>
          <span className="font-display text-xl font-bold uppercase tracking-wider">
            Iron<span className="text-primary">Forge</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={(e) => handleAnchorClick(e, l.href)}
                className="text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full bg-primary font-display uppercase tracking-wider text-primary-foreground hover:bg-primary/90">
            <a href="#pricing" onClick={(e) => handleAnchorClick(e, "#pricing")}>Join Now</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border/60 bg-background/95 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleAnchorClick(e, l.href, () => setOpen(false))}
                  className="block py-2 text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild className="w-full rounded-full bg-primary font-display uppercase">
                <a href="#pricing" onClick={(e) => handleAnchorClick(e, "#pricing", () => setOpen(false))}>Join Now</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
