import Image from "next/image";
import { Linkedin, Twitter, Instagram } from "lucide-react";
import { team } from "@/lib/data";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { TeamMember } from "@/types";

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  return (
    <AnimatedSection delay={index * 100}>
      <div className="group">
        {/* Photo */}
        <div className="relative aspect-[3/4] overflow-hidden bg-surface-2 mb-5">
          <Image
            src={member.avatarUrl}
            alt={member.name}
            fill
            className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          {/* Social overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="text-cream hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="text-cream hover:text-gold transition-colors" aria-label="Twitter">
                <Twitter size={16} />
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} className="text-cream hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Info */}
        <div>
          <h3 className="font-display text-lg text-cream mb-1">{member.name}</h3>
          <p className="text-xs text-gold font-semibold tracking-widest uppercase mb-3">
            {member.role}
          </p>
          <p className="font-body text-sm text-muted leading-relaxed">{member.bio}</p>
        </div>
      </div>
    </AnimatedSection>
  );
}

export function Team() {
  return (
    <section id="ekip" className="py-28 section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <SectionLabel>Ekibimiz</SectionLabel>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="section-title max-w-md">
              Güvenilir{" "}
              <span className="gold-text italic">uzman</span> kadro
            </h2>
            <p className="font-body text-cream-dim text-sm max-w-xs leading-relaxed">
              20 yıllık deneyimli ekibimiz, size en doğru aracı en iyi fiyatla bulmak için burada.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.id} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
