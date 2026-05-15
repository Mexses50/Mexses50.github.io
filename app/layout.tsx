import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prestige Auto Gallery — İkinci El Premium Araç Galerisi İstanbul",
  description:
    "İstanbul Bağcılar'da 20 yıllık deneyimle premium ikinci el araç alım, satım, takas ve kredi hizmetleri. BMW, Mercedes, Audi, Porsche ve daha fazlası.",
  keywords: "ikinci el araba İstanbul, premium araç galerisi, araç alım satım Bağcılar, BMW Mercedes ikinci el",
  openGraph: {
    title: "Prestige Auto Gallery — Premium İkinci El Araç Galerisi",
    description: "İstanbul'un güvenilir premium ikinci el araç galerisi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-background text-cream font-body antialiased">
        {children}
      </body>
    </html>
  );
}
