import { Instagram, Linkedin, Youtube, Phone } from "lucide-react";

const footerLinks = {
  Hizmetler: [
    "İkinci El Araç Satışı",
    "Araç Alım",
    "Takas",
    "Kredi Danışmanlığı",
    "Ekspertiz Hizmeti",
    "Araç Kiralama",
  ],
  Galeri: ["Araç Stoku", "Lüks Araçlar", "SUV'lar", "Elektrikli Araçlar", "Ekibimiz"],
  İletişim: [
    "0212 000 00 00",
    "0532 000 00 00",
    "info@prestigeautogallery.com",
    "Bağcılar, İstanbul",
  ],
};

const socials = [
  { Icon: Instagram, label: "Instagram", href: "#" },
  { Icon: Linkedin, label: "LinkedIn", href: "#" },
  { Icon: Youtube, label: "YouTube", href: "#" },
  { Icon: Phone, label: "WhatsApp", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5">
      {/* Main */}
      <div className="section-padding py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-display text-3xl font-bold text-cream mb-2">
              PRESTIGE<span className="text-gold">.</span>
            </p>
            <p className="font-body text-xs text-gold tracking-widest uppercase mb-4">
              Auto Gallery
            </p>
            <p className="font-body text-sm text-muted leading-relaxed max-w-xs mb-6">
              İstanbul&apos;un en güvenilir ikinci el araç galerisi. 20 yıllık deneyim,
              500+ mutlu müşteri, garantili araçlar.
            </p>
            <div className="flex gap-4">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 flex items-center justify-center text-muted hover:border-gold hover:text-gold transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-5 font-body">
                {title}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-body text-sm text-muted hover:text-cream transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="section-padding py-6 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted">
            © {new Date().getFullYear()} Prestige Auto Gallery. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-xs text-muted hover:text-cream transition-colors duration-300">
              Gizlilik Politikası
            </a>
            <a href="#" className="font-body text-xs text-muted hover:text-cream transition-colors duration-300">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
