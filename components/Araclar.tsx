"use client";

import { useState } from "react";
import Image from "next/image";

const araclar = [
  {
    id: 1,
    baslik: "BMW 5 Serisi 520i",
    kategori: "lüks",
    resim: "/images/bmw-520i.jpg",
    yil: 2022,
    km: "185.000 km",
    aciklama: "Otomatik, Benzin, Gri, Hasar Kayıtsız. Servis bakımlı, ilk sahibinden.",
  },
  {
    id: 2,
    baslik: "Mercedes C200 AMG",
    kategori: "lüks",
    resim: "/images/mercedes-c200.jpg",
    yil: 2023,
    km: "42.000 km",
    aciklama: "Otomatik, Benzin, Siyah, Hasar Kayıtsız. Fabrika çıkışı AMG paketi.",
  },
  {
    id: 3,
    baslik: "Audi A6 3.0 TDI",
    kategori: "lüks",
    resim: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    yil: 2021,
    km: "210.000 km",
    aciklama: "Otomatik, Dizel, Beyaz, Hasar Kayıtsız. Tam donanım, panoramik tavan.",
  },
  {
    id: 4,
    baslik: "Porsche Cayenne",
    kategori: "lüks",
    resim: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    yil: 2022,
    km: "95.000 km",
    aciklama: "Otomatik, Benzin, Lacivert, Hasar Kayıtsız. Bose ses sistemi, deri döşeme.",
  },
  {
    id: 5,
    baslik: "Range Rover Sport",
    kategori: "lüks",
    resim: "/images/range-rover.webp",
    yil: 2022,
    km: "78.000 km",
    aciklama: "Otomatik, Dizel, Siyah, Hasar Kayıtsız. Full aksesuar, meridian ses sistemi.",
  },
  {
    id: 6,
    baslik: "Volkswagen Passat",
    kategori: "sedan-suv",
    resim: "/images/vw-passat.jpg",
    yil: 2021,
    km: "155.000 km",
    aciklama: "Otomatik, Dizel, Gümüş, Hasar Kayıtsız. Ekonomik ve konforlu aile aracı.",
  },
  {
    id: 7,
    baslik: "Toyota Corolla Cross",
    kategori: "sedan-suv",
    resim: "/images/toyota-cross.jpg",
    yil: 2023,
    km: "28.000 km",
    aciklama: "Otomatik, Hibrit, Beyaz, Hasar Kayıtsız. Yakıt tasarruflu, az kullanılmış.",
  },
  {
    id: 8,
    baslik: "Audi A5 Sedan 40 TDI quattro",
    kategori: "sedan-suv",
    resim: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    yil: 2022,
    km: "89.000 km",
    aciklama: "Otomatik, Dizel, Gri, Hasar Kayıtsız. Quattro 4x4, S-Line paket, panoramik tavan.",
  },
  {
    id: 10,
    baslik: "Range Rover Sport",
    kategori: "buyuk-suv",
    resim: "/images/range-rover.webp",
    yil: 2022,
    km: "78.000 km",
    aciklama: "Otomatik, Dizel, Siyah, Hasar Kayıtsız. Full aksesuar, meridian ses sistemi.",
  },
];

const kategoriler = [
  { key: "hepsi", label: "Tümü" },
  { key: "lüks", label: "Lüks" },
  { key: "sedan-suv", label: "Sedan & SUV" },
  { key: "buyuk-suv", label: "Büyük SUV" },
];

export default function Araclar() {
  const [aktifKategori, setAktifKategori] = useState("hepsi");

  const filtrelenmis = aktifKategori === "hepsi"
    ? araclar
    : araclar.filter((a) => a.kategori === aktifKategori);

  return (
    <section id="araclar" style={{ padding: "6rem 2rem", backgroundColor: "#111" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#c9a84c" }}></div>
          <span style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Araç Stoku</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f5f0e8", marginBottom: "2rem" }}>
          Seçkin <span style={{ fontStyle: "italic", color: "#c9a84c" }}>araç</span> koleksiyonu
        </h2>

        {/* kategori butonları */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
          {kategoriler.map((k) => (
            <button
              key={k.key}
              onClick={() => setAktifKategori(k.key)}
              style={{
                padding: "8px 20px",
                border: aktifKategori === k.key ? "1px solid #c9a84c" : "1px solid rgba(255,255,255,0.1)",
                backgroundColor: aktifKategori === k.key ? "#c9a84c" : "transparent",
                color: aktifKategori === k.key ? "#0a0a0a" : "#d4c9b5",
                cursor: "pointer",
                fontSize: "0.8rem",
                fontWeight: aktifKategori === k.key ? 600 : 400,
                transition: "all 0.2s"
              }}>
              {k.label}
            </button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.5rem" }}>
          {filtrelenmis.map((arac) => (
            <div key={arac.id} style={{ backgroundColor: "#0a0a0a", overflow: "hidden", border: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <Image
                  src={arac.resim}
                  alt={arac.baslik}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized
                />
                <div style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "#c9a84c", color: "#0a0a0a", padding: "4px 10px", fontSize: "0.7rem", fontWeight: 700 }}>
                  {arac.yil}
                </div>
              </div>
              <div style={{ padding: "1.25rem" }}>
                <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.1rem", color: "#f5f0e8", marginBottom: "0.4rem" }}>{arac.baslik}</h3>
                <p style={{ fontSize: "0.75rem", color: "#c9a84c", marginBottom: "0.75rem" }}>{arac.km}</p>
                <p style={{ fontSize: "0.8rem", color: "#6b6b6b", lineHeight: 1.6, marginBottom: "1rem" }}>{arac.aciklama}</p>
                <button
                  onClick={() => document.querySelector("#randevu")?.scrollIntoView({ behavior: "smooth" })}
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(201,168,76,0.4)",
                    color: "#c9a84c",
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontSize: "0.75rem",
                    width: "100%"
                  }}>
                  Test Sürüşü Talep Et
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
