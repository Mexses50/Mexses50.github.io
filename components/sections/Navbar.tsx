"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Araç Stoku", href: "#stok" },
  { label: "Ekip", href: "#ekip" },
  { label: "Yorumlar", href: "#referanslar" },
  { label: "İletişim", href: "#iletisim" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <nav className="section-padding flex items-center justify-between h-20">
        {/* Logo */}
        <a
          href="#"
          className="font-display text-xl font-bold text-cream tracking-tight"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          PRESTIGE<span className="text-gold">.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-body text-cream-dim hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleNavClick("#rezervasyon")}
          >
            Randevu Al
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-cream p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menü"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 overflow-hidden bg-surface border-b border-white/5",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-base font-body text-cream-dim hover:text-gold transition-colors duration-300 w-full text-left py-1"
              >
                {link.label}
              </button>
            </li>
          ))}
          <li className="pt-2">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              onClick={() => handleNavClick("#rezervasyon")}
            >
              Randevu Al
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
