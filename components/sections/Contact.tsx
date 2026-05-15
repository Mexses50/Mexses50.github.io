"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import type { ContactFormData } from "@/types";

const FORMSPREE_CONTACT_ID = "YOUR_FORMSPREE_CONTACT_ID";

function InputField({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-semibold tracking-widest uppercase text-cream-dim font-body">
        {label}
      </label>
      {children}
      {error && (
        <span className="text-xs text-red-400 font-body">{error}</span>
      )}
    </div>
  );
}

const inputClass =
  "w-full bg-transparent border-b border-white/20 hover:border-gold/50 focus:border-gold outline-none py-3 text-cream font-body text-sm placeholder-muted transition-colors duration-300";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_CONTACT_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="iletisim" className="py-28 section-padding bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <AnimatedSection>
          <SectionLabel>İletişim</SectionLabel>
          <h2 className="section-title mb-6">
            Aracınızı bulmak için{" "}
            <span className="gold-text italic">yazın</span>
          </h2>
          <p className="font-body text-cream-dim leading-relaxed mb-10 max-w-sm">
            Aradığınız araç stokta yok mu? Bize bildirin, sizin için bulalım.
            24 saat içinde dönüş yapıyoruz.
          </p>

          <div className="space-y-6 font-body text-sm text-cream-dim">
            <div>
              <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">Telefon</p>
              <p>0212 000 00 00</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">WhatsApp</p>
              <p>0532 000 00 00</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">E-posta</p>
              <p>info@prestigeautogallery.com</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">Adres</p>
              <p>Güneşli Mah. Atatürk Cad. No:42, Bağcılar / İstanbul</p>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-gold font-semibold mb-1">Çalışma Saatleri</p>
              <p>Hafta içi 09:00 – 19:00</p>
              <p>Cumartesi 09:00 – 18:00</p>
              <p>Pazar Kapalı</p>
            </div>
          </div>
        </AnimatedSection>

        {/* Right — Form */}
        <AnimatedSection delay={150}>
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 py-20 text-center">
              <CheckCircle size={48} className="text-gold" />
              <h3 className="font-display text-2xl text-cream">Mesajınız İletildi</h3>
              <p className="font-body text-cream-dim text-sm">
                En kısa sürede size dönüş yapacağız.
              </p>
              <Button variant="ghost" size="sm" onClick={() => setStatus("idle")}>
                Yeni Mesaj Gönder
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <InputField label="Adınız *" error={errors.name?.message}>
                  <input
                    {...register("name", { required: "Ad zorunludur" })}
                    placeholder="Ali Yılmaz"
                    className={inputClass}
                  />
                </InputField>
                <InputField label="Telefon / E-posta *" error={errors.email?.message}>
                  <input
                    {...register("email", {
                      required: "Bu alan zorunludur",
                    })}
                    placeholder="0532 000 00 00"
                    className={inputClass}
                  />
                </InputField>
              </div>

              <InputField label="İlgilendiğiniz Araç">
                <input
                  {...register("company")}
                  placeholder="Örn: BMW 5 Serisi, Mercedes C Serisi..."
                  className={inputClass}
                />
              </InputField>

              <InputField label="Mesajınız *" error={errors.message?.message}>
                <textarea
                  {...register("message", { required: "Mesaj zorunludur" })}
                  rows={4}
                  placeholder="Aradığınız araç hakkında bilgi verin, bütçenizi belirtin..."
                  className={`${inputClass} resize-none`}
                />
              </InputField>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm font-body">
                  <AlertCircle size={16} />
                  Bir hata oluştu. Lütfen tekrar deneyin.
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="gap-2"
              >
                {status === "loading" ? "Gönderiliyor..." : "Mesaj Gönder"}
                <Send size={16} />
              </Button>
            </form>
          )}
        </AnimatedSection>
      </div>
    </section>
  );
}
