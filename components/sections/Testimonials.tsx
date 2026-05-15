import Image from "next/image";
import { testimonials } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { Testimonial } from "@/types";

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-gold text-sm">★</span>
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="flex-shrink-0 w-80 bg-surface border border-white/5 p-7">
      <Stars rating={t.rating} />
      <p className="font-body text-sm text-cream-dim leading-relaxed mb-6 italic">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
          <Image
            src={t.avatarUrl}
            alt={t.name}
            fill
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <p className="font-body text-sm font-semibold text-cream">{t.name}</p>
          <p className="font-body text-xs text-muted">{t.company}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="referanslar" className="py-28 bg-surface overflow-hidden">
      <div className="section-padding mb-14">
        <AnimatedSection>
          <SectionLabel>Müşteri Yorumları</SectionLabel>
          <h2 className="section-title max-w-lg">
            Araç alanlar{" "}
            <span className="gold-text italic">ne diyor?</span>
          </h2>
        </AnimatedSection>
      </div>

      {/* Marquee row 1 */}
      <div className="relative flex gap-4 mb-4 overflow-hidden">
        <div className="flex gap-4 animate-marquee hover:pause-animation">
          {doubled.map((t, i) => (
            <TestimonialCard key={`a-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* Marquee row 2 — reverse */}
      <div className="relative flex gap-4 overflow-hidden">
        <div className="flex gap-4 animate-marquee-reverse hover:pause-animation">
          {doubled.map((t, i) => (
            <TestimonialCard key={`b-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
