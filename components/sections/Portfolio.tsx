"use client";

import { useState } from "react";
import Image from "next/image";
import { Fuel, Settings2 } from "lucide-react";
import { portfolio } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { PortfolioItem } from "@/types";

const categories = [
  { key: "all", label: "Tümü" },
  { key: "branding", label: "Lüks" },
  { key: "web", label: "Sedan & SUV" },
  { key: "kampanya", label: "Büyük SUV" },
  { key: "motion", label: "Elektrik" },
] as const;

function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <AnimatedSection delay={index * 60}>
      <div className="group relative overflow-hidden bg-surface-2 aspect-[4/3] cursor-pointer">
        <Image
          src={item.imageUrl}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <span className="text-xs text-gold font-semibold tracking-widest uppercase mb-2">
            {item.year} Model
          </span>
          <h3 className="font-display text-xl text-cream mb-2">{item.title}</h3>
          <p className="font-body text-xs text-cream-dim mb-3">{item.description}</p>
          <div className="flex items-center gap-4 text-xs text-muted font-body">
            <span className="flex items-center gap-1"><Settings2 size={12} /> Otomatik</span>
            <span className="flex items-center gap-1"><Fuel size={12} /> {item.client}</span>
          </div>
        </div>
        {/* KM badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-gold text-background text-xs font-bold font-body tracking-wide">
          {item.client}
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Portfolio() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <section id="stok" className="py-28 section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Araç Stoku</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <h2 className="section-title max-w-md">
              Seçili{" "}
              <span className="gold-text italic">araçlar</span>
            </h2>

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActive(cat.key)}
                  className={`px-4 py-2 text-xs font-body font-semibold tracking-wide transition-all duration-200 border ${
                    active === cat.key
                      ? "border-gold bg-gold text-background"
                      : "border-white/10 text-cream-dim hover:border-gold/50 hover:text-cream"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
          {filtered.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <AnimatedSection delay={200}>
          <div className="mt-12 text-center">
            <p className="font-body text-cream-dim text-sm mb-4">
              Aradığınız aracı bulamadınız mı?
            </p>
            <button
              onClick={() => document.querySelector("#iletisim")?.scrollIntoView({ behavior: "smooth" })}
              className="font-body text-sm text-gold hover:text-gold-light transition-colors duration-300 underline underline-offset-4"
            >
              Bize bildirin, sizin için bulalım →
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
