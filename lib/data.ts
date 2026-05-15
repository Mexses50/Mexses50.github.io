import type { Service, PortfolioItem, TeamMember, Testimonial } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    title: "İkinci El Araç Satışı",
    description:
      "Geniş stokumuzdan hayalinizdeki araca ulaşın. Tüm araçlarımız ekspertizden geçmiş, garantili ve belgeli olarak satışa sunulmaktadır.",
    icon: "Car",
    price: "₺500.000'den başlayan",
    features: ["Ekspertiz Raporu", "Tramer Kaydı Sorgulama", "Test Sürüşü", "Garanti Seçenekleri"],
  },
  {
    id: "2",
    title: "Araç Alım",
    description:
      "Aracınızı en yüksek fiyata satın alıyoruz. Ücretsiz değerleme hizmetimizle aracınızın gerçek piyasa değerini öğrenin.",
    icon: "HandCoins",
    price: "Ücretsiz Değerleme",
    features: ["Anında Değerleme", "Yerinde İnceleme", "Hızlı Ödeme", "Resmi Devir İşlemleri"],
  },
  {
    id: "3",
    title: "Takas",
    description:
      "Mevcut aracınızı yeni bir araçla takas edin. Fark tutarı için avantajlı ödeme seçenekleriyle kolayca araç yenileyin.",
    icon: "ArrowLeftRight",
    price: "Değerleme Ücretsiz",
    features: ["Anında Fiyat Teklifi", "Avantajlı Fark Ödemesi", "Hızlı İşlem", "Tüm Markalar Kabul"],
  },
  {
    id: "4",
    title: "Kredi Danışmanlığı",
    description:
      "20+ banka ve finans kuruluşuyla çalışıyoruz. En uygun faiz oranı ve vade seçenekleriyle hayalinizdeki araca kavuşun.",
    icon: "CreditCard",
    price: "Danışmanlık Ücretsiz",
    features: ["20+ Banka Anlaşması", "En Düşük Faiz", "Hızlı Onay", "Esnek Vade"],
  },
  {
    id: "5",
    title: "Ekspertiz Hizmeti",
    description:
      "Almayı düşündüğünüz araç için bağımsız ekspertiz raporu hazırlıyoruz. Doğru kararı güvenle verin.",
    icon: "ClipboardCheck",
    price: "₺1.500'den başlayan",
    features: ["Tam Teknik İnceleme", "Kaza Kaydı Sorgulama", "Elektronik Test", "Detaylı Rapor"],
  },
  {
    id: "6",
    title: "Araç Kiralama",
    description:
      "Günlük, haftalık veya aylık araç kiralama seçenekleriyle her bütçeye uygun premium araçlar.",
    icon: "KeyRound",
    price: "₺2.500/günden başlayan",
    features: ["Günlük / Haftalık / Aylık", "Kasko Dahil", "7/24 Destek", "Kapıya Teslim"],
  },
];

export const portfolio: PortfolioItem[] = [
  {
    id: "1",
    title: "BMW 5 Serisi 520i",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    year: 2022,
    client: "185.000 km",
    description: "Otomatik, Benzin, Gri, Hasar Kayıtsız. Servis bakımlı, ilk sahibinden.",
  },
  {
    id: "2",
    title: "Mercedes C200 AMG",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    year: 2023,
    client: "42.000 km",
    description: "Otomatik, Benzin, Siyah, Hasar Kayıtsız. Fabrika çıkışı AMG paketi.",
  },
  {
    id: "3",
    title: "Audi A6 3.0 TDI",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
    year: 2021,
    client: "210.000 km",
    description: "Otomatik, Dizel, Beyaz, Hasar Kayıtsız. Tam donanım, panoramik tavan.",
  },
  {
    id: "4",
    title: "Porsche Cayenne",
    category: "kampanya",
    imageUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    year: 2022,
    client: "95.000 km",
    description: "Otomatik, Benzin, Lacivert, Hasar Kayıtsız. Bose ses sistemi, deri döşeme.",
  },
  {
    id: "5",
    title: "Volkswagen Passat",
    category: "web",
    imageUrl: "https://images.unsplash.com/photo-1471479917193-f00955256257?w=800&q=80",
    year: 2021,
    client: "155.000 km",
    description: "Otomatik, Dizel, Gümüş, Hasar Kayıtsız. Ekonomik ve konforlu aile aracı.",
  },
  {
    id: "6",
    title: "Toyota Corolla Cross",
    category: "branding",
    imageUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    year: 2023,
    client: "28.000 km",
    description: "Otomatik, Hibrit, Beyaz, Hasar Kayıtsız. Yakıt tasarruflu, az kullanılmış.",
  },
  {
    id: "7",
    title: "Range Rover Sport",
    category: "kampanya",
    imageUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
    year: 2022,
    client: "78.000 km",
    description: "Otomatik, Dizel, Siyah, Hasar Kayıtsız. Full aksesuar, meridian ses sistemi.",
  },
  {
    id: "8",
    title: "Tesla Model 3",
    category: "motion",
    imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80",
    year: 2023,
    client: "35.000 km",
    description: "Otomatik, Elektrik, Kırmızı, Hasar Kayıtsız. Long range batarya, autopilot.",
  },
];

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Kemal Arslan",
    role: "Kurucu & Genel Müdür",
    bio: "20 yıllık otomotiv sektörü deneyimiyle Prestige Auto Gallery'yi kurdu. Binlerce mutlu müşterinin güvenilir ismi.",
    avatarUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: "2",
    name: "Serkan Yıldız",
    role: "Kıdemli Satış Danışmanı",
    bio: "8 yıllık deneyimiyle premium segment uzmanı. BMW, Mercedes ve Audi konusunda derin bilgi sahibi.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    social: { linkedin: "#", instagram: "#" },
  },
  {
    id: "3",
    name: "Ayşe Kılıç",
    role: "Kredi & Finansman Uzmanı",
    bio: "20'den fazla banka ile anlaşmalı. Müşterilerine en uygun finansman çözümünü buluyor.",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    social: { linkedin: "#" },
  },
  {
    id: "4",
    name: "Murat Demir",
    role: "Ekspertiz Uzmanı",
    bio: "Oto ekspertiz sertifikalı teknisyen. 15 yıllık deneyimiyle her araçtaki gizli sorunu tespit eder.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    social: { linkedin: "#" },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Hasan Çelik",
    company: "BMW 5 Serisi Aldı",
    quote: "Prestige'de araç almak çok rahat bir deneyimdi. Serkan Bey hiçbir konuda bizi yanıltmadı, ekspertiz raporu eksiksizdi. Kesinlikle tavsiye ederim.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
  },
  {
    id: "2",
    name: "Fatma Yılmaz",
    company: "Toyota Corolla Cross Aldı",
    quote: "Aracımı takas edip yenisini aldım. Fiyat konusunda çok adillerdi, beklediğimden daha iyi teklif verdiler. Tüm evrak işlerini kendileri halletti.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
  },
  {
    id: "3",
    name: "Emre Şahin",
    company: "Range Rover Sport Aldı",
    quote: "İstanbul'da çok galeri gezdim ama Prestige'in dürüstlüğü ve profesyonelliği farkı çok büyüktü. Aracım eksiksiz teslim edildi, teşekkürler.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
  },
  {
    id: "4",
    name: "Zeynep Kara",
    company: "Mercedes C200 Aldı",
    quote: "Ayşe Hanım kredi konusunda inanılmaz yardımcı oldu. Başka bankalardan alamadığım oranı burada aldım. Araç da mükemmel durumda geldi.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
  },
  {
    id: "5",
    name: "Burak Öztürk",
    company: "Tesla Model 3 Aldı",
    quote: "Elektrikli araç konusunda çok bilgilendirilmeden sattılar. Şarj altyapısından vergi avantajlarına kadar her şeyi anlattılar. Harika hizmet.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
  },
  {
    id: "6",
    name: "Mehmet Aydın",
    company: "Porsche Cayenne Aldı",
    quote: "Murat Bey'in yaptığı ekspertiz raporu sayesinde aracın tüm geçmişini öğrendim. Güvenle aldım. Fiyat/performans açısından çok memnunum.",
    rating: 5,
    avatarUrl: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
  },
];
