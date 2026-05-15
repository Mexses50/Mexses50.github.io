"use client";

const hizmetler = [
  {
    baslik: "İkinci El Araç Satışı",
    aciklama: "Geniş stokumuzdan hayalinizdeki araca ulaşın. Tüm araçlarımız ekspertizden geçmiş, garantili ve belgeli olarak satışa sunulmaktadır.",
    fiyat: "₺500.000'den başlayan",
    ozellikler: ["Ekspertiz Raporu", "Tramer Kaydı Sorgulama", "Test Sürüşü", "Garanti Seçenekleri"],
  },
  {
    baslik: "Araç Alım",
    aciklama: "Aracınızı en yüksek fiyata satın alıyoruz. Ücretsiz değerleme hizmetimizle aracınızın gerçek piyasa değerini öğrenin.",
    fiyat: "Ücretsiz Değerleme",
    ozellikler: ["Anında Değerleme", "Yerinde İnceleme", "Hızlı Ödeme", "Resmi Devir İşlemleri"],
  },
  {
    baslik: "Takas",
    aciklama: "Mevcut aracınızı yeni bir araçla takas edin. Fark tutarı için avantajlı ödeme seçenekleriyle kolayca araç yenileyin.",
    fiyat: "Değerleme Ücretsiz",
    ozellikler: ["Anında Fiyat Teklifi", "Avantajlı Fark Ödemesi", "Hızlı İşlem", "Tüm Markalar Kabul"],
  },
  {
    baslik: "Kredi Danışmanlığı",
    aciklama: "20+ banka ve finans kuruluşuyla çalışıyoruz. En uygun faiz oranı ve vade seçenekleriyle hayalinizdeki araca kavuşun.",
    fiyat: "Danışmanlık Ücretsiz",
    ozellikler: ["20+ Banka Anlaşması", "En Düşük Faiz", "Hızlı Onay", "Esnek Vade"],
  },
  {
    baslik: "Ekspertiz Hizmeti",
    aciklama: "Almayı düşündüğünüz araç için bağımsız ekspertiz raporu hazırlıyoruz. Doğru kararı güvenle verin.",
    fiyat: "₺1.500'den başlayan",
    ozellikler: ["Tam Teknik İnceleme", "Kaza Kaydı Sorgulama", "Elektronik Test", "Detaylı Rapor"],
  },
  {
    baslik: "Araç Kiralama",
    aciklama: "Günlük, haftalık veya aylık araç kiralama seçenekleriyle her bütçeye uygun premium araçlar.",
    fiyat: "₺2.500/günden başlayan",
    ozellikler: ["Günlük / Haftalık / Aylık", "Kasko Dahil", "7/24 Destek", "Kapıya Teslim"],
  },
];

export default function Hizmetler() {
  return (
    <section id="hizmetler" style={{ padding: "6rem 2rem", backgroundColor: "#0a0a0a" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1.5rem" }}>
          <div style={{ width: "32px", height: "1px", backgroundColor: "#c9a84c" }}></div>
          <span style={{ color: "#c9a84c", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Hizmetler</span>
        </div>
        <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(2rem, 4vw, 3.5rem)", color: "#f5f0e8", marginBottom: "3rem" }}>
          Her ihtiyaca <span style={{ fontStyle: "italic", color: "#c9a84c" }}>özel</span> hizmet
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", backgroundColor: "rgba(255,255,255,0.05)" }}>
          {hizmetler.map((h) => (
            <div key={h.baslik} style={{ backgroundColor: "#111", padding: "2rem", transition: "border-color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.2rem", color: "#f5f0e8", marginBottom: "0.75rem" }}>{h.baslik}</h3>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "0.85rem", color: "#6b6b6b", lineHeight: 1.6, marginBottom: "1.25rem" }}>{h.aciklama}</p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.25rem" }}>
                {h.ozellikler.map(o => (
                  <li key={o} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.8rem", color: "#d4c9b5", marginBottom: "6px" }}>
                    <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#c9a84c", flexShrink: 0, display: "inline-block" }}></span>
                    {o}
                  </li>
                ))}
              </ul>
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1rem" }}>
                <span style={{ color: "#c9a84c", fontSize: "0.8rem", fontWeight: 600 }}>{h.fiyat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
