"use client";

import { useRef, MouseEvent } from "react";
import { Car, HandCoins, ArrowLeftRight, CreditCard, ClipboardCheck, KeyRound } from "lucide-react";
import { services } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Service } from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Car,
  HandCoins,
  ArrowLeftRight,
  CreditCard,
  ClipboardCheck,
  KeyRound,
};

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  };

  const Icon = iconMap[service.icon] ?? Car;

  return (
    <AnimatedSection delay={index * 80}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transition: "transform 0.15s ease, box-shadow 0.3s ease" }}
        className="group h-full bg-surface border border-white/5 hover:border-gold/30 p-8 cursor-default hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)]"
      >
        {/* Icon */}
        <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-300">
          <Icon size={22} className="text-gold" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl text-cream mb-3 group-hover:text-gold transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-body text-sm text-muted leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {service.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs text-cream-dim font-body">
              <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="pt-4 border-t border-white/5">
          <span className="text-xs text-gold font-semibold tracking-wide">
            {service.price}
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Services() {
  return (
    <section id="hizmetler" className="py-28 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Hizmetler</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="section-title max-w-lg">
              Her ihtiyaca{" "}
              <span className="gold-text italic">özel</span> hizmet
            </h2>
            <p className="font-body text-cream-dim text-sm max-w-xs leading-relaxed">
              Alım, satım, takas ve finansmanda İstanbul'un güvenilir adresi.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
