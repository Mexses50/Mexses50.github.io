"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef.current, subRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(24px)";
      setTimeout(() => {
        if (!el) return;
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 200 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center section-padding overflow-hidden grain-overlay">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface pointer-events-none" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 w-px h-40 bg-gradient-to-b from-transparent via-gold to-transparent ml-6 md:ml-12 lg:ml-24" />

      <div className="relative z-10 max-w-5xl">
        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-8 h-px bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase flex items-center gap-2">
            <MapPin size={12} /> Bağcılar, İstanbul
          </span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-display text-5xl md:text-7xl lg:text-8xl text-cream leading-[1.05] tracking-tight mb-8"
        >
          Premium araçlar,{" "}
          <span className="gold-text italic">güvenilir</span>
          <br />
          alışveriş deneyimi.
        </h1>

        {/* Subtext */}
        <p
          ref={subRef}
          className="font-body text-lg md:text-xl text-cream-dim max-w-xl leading-relaxed mb-12"
        >
          20 yıllık deneyimle İstanbul'un en güvenilir ikinci el araç galerisi.
          BMW, Mercedes, Audi, Porsche ve daha fazlası.
        </p>

        {/* CTA */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Button
            size="lg"
            variant="primary"
            onClick={() => document.querySelector("#stok")?.scrollIntoView({ behavior: "smooth" })}
          >
            Stoku İncele
          </Button>
          <Button
            size="lg"
            variant="ghost"
            onClick={() => document.querySelector("#rezervasyon")?.scrollIntoView({ behavior: "smooth" })}
          >
            Test Sürüşü Talep Et →
          </Button>
        </div>

        {/* Quick info */}
        <div className="mt-16 flex flex-wrap gap-8">
          <div>
            <p className="font-display text-3xl font-bold text-gold">500+</p>
            <p className="font-body text-xs text-muted mt-1">Mutlu Müşteri</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-gold">20</p>
            <p className="font-body text-xs text-muted mt-1">Yıllık Deneyim</p>
          </div>
          <div>
            <p className="font-display text-3xl font-bold text-gold">50+</p>
            <p className="font-body text-xs text-muted mt-1">Araç Stoku</p>
          </div>
          <div className="flex items-center gap-2 text-cream-dim font-body text-sm">
            <Phone size={14} className="text-gold" />
            <span>0212 000 00 00</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => document.querySelector("#hizmetler")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-gold transition-colors duration-300"
        aria-label="Aşağı kaydır"
      >
        <span className="text-xs tracking-widest uppercase font-body">Keşfet</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>

      {/* Decorative */}
      <div className="absolute right-0 bottom-0 font-display text-[12rem] md:text-[18rem] font-bold text-white/[0.02] leading-none select-none pointer-events-none translate-y-8">
        P
      </div>
    </section>
  );
}
