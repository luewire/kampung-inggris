import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.png"; 
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { 
  Users, 
  MapPin, 
  MessageCircle, 
  Shield, 
  Home, 
  BookOpen,
  Calendar,
  BookOpenCheck,
  GraduationCap,
  Award,
  Check,
  Clock,
  Menu,
  X
} from "lucide-react";
import heroImage from "@/assets/students-conversation.webp";
import studentsImage from "@/assets/hero-students.webp";
import { Link, Element } from "react-scroll";

const packages = [
  {
    name: "Paket 2 Minggu",
    description: "Cocok untuk pemula yang ingin memulai perjalanan bahasa Inggris",
    price: "999.000",
    originalPrice: "2.000.000",
    features: [
      { icon: Clock, text: "2 Minggu" },
      { icon: Users, text: "15 member" },
    ],
    primaryAction: {
      text: "Daftar Sekarang",
      link: "https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20mendaftar%20Paket%202%20Minggu",
      className: "bg-[#8FA683] hover:bg-[#7d8f73] text-white"
    },
    // Garansi hanya untuk 2 bulan ke atas
  },
  {
    name: "Paket 1 Bulan",
    description: "Program terpopuler untuk menguasai bahasa Inggris dengan percaya diri",
    price: "1.500.000",
    originalPrice: "3.000.000",
    features: [
      { icon: Clock, text: "4 Minggu" },
      { icon: Users, text: "15 member" },
    ],
    primaryAction: {
      text: "Daftar Sekarang",
      link: "https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20mendaftar%20Paket%201%20Bulan",
      className: "bg-[#8FA683] hover:bg-[#7d8f73] text-white"
    },
    // Garansi hanya untuk 2 bulan ke atas
  },
  {
    name: "Paket 2 Bulan",
    description: "Program intensif untuk menguasai bahasa Inggris dengan percaya diri",
    price: "2.500.000",
    originalPrice: "5.000.000",
    features: [
      { icon: Clock, text: "8 Minggu" },
      { icon: Users, text: "15 member" },
    ],
    primaryAction: {
      text: "Daftar Sekarang",
      link: "https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20mendaftar%20Paket%202%20Bulan",
      className: "bg-[#8FA683] hover:bg-[#7d8f73] text-white"
    },
    secondaryAction: {
        text: "Garansi 1 Bulan Bisa",
        className: "bg-transparent border-[#8FA683] text-[#5A382D] hover:bg-white/50"
    }
  },
  {
    name: "Paket 3 Bulan + Gratis 1 Bulan",
    description: "Program komprehensif dengan bonus 1 bulan gratis untuk hasil maksimal",
    price: "4.500.000",
    originalPrice: "9.000.000",
    features: [
      { icon: Clock, text: "12 Minggu (+ 1 bulan gratis)" },
      { icon: Users, text: "15 member" },
    ],
    primaryAction: {
      text: "Daftar Sekarang",
      link: "https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20mendaftar%20Paket%203%20Bulan%20%2B%20Gratis%201%20Bulan",
      className: "bg-[#8FA683] hover:bg-[#7d8f73] text-white"
    },
    secondaryAction: {
        text: "Garansi 1 Bulan Bisa",
        className: "bg-transparent border-[#8FA683] text-[#5A382D] hover:bg-white/50"
    }
  },
  {
    name: "Paket 6 Bulan + Gratis 3 Bulan",
    description: "Program premium dengan bonus 3 bulan gratis untuk transformasi total",
    price: "8.999.000",
    originalPrice: "18.000.000",
    features: [
      { icon: Clock, text: "24 Minggu (+ 3 bulan gratis)" },
      { icon: Users, text: "15 member" },
    ],
    primaryAction: {
      text: "Daftar Sekarang",
      link: "https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20mendaftar%20Paket%206%20Bulan%20%2B%20Gratis%203%20Bulan",
      className: "bg-[#8FA683] hover:bg-[#7d8f73] text-white"
    },
    secondaryAction: {
        text: "Garansi 1 Bulan Bisa",
        className: "bg-transparent border-[#8FA683] text-[#5A382D] hover:bg-white/50"
    }
  }
];

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // WhatsApp widget state
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        setIsNavbarVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setIsNavbarVisible(false);
        setIsMobileMenuOpen(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsNavbarVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Floating button -> open chat widget first
  const handleFABClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsChatOpen(true);
  };

  const closeChatWidget = () => setIsChatOpen(false);

  const openWhatsApp = () => {
    const message = "Halo, saya ingin bertanya tentang program Kampung Inggris Indonesia";
    const url = `https://api.whatsapp.com/send?phone=6282137984673&text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className={`w-full py-4 px-6 bg-background border-b border-border fixed top-0 z-50 transition-transform duration-300 ${
        isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
  <div className="max-w-7xl mx-auto flex items-center justify-between">
    <div className="flex items-center space-x-3 pl-5">
  <a href="/">
    <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
  </a>
</div>

<nav className="hidden md:flex items-center space-x-14 font-semibold">
  <Link to="tentang" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-accent" className="cursor-pointer">
    Tentang
  </Link>
  <Link to="benefit" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-accent" className="cursor-pointer">
    Benefit
  </Link>
  <Link to="program" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-accent" className="cursor-pointer">
    Program
  </Link>
  <Link to="paket" smooth={true} duration={500} offset={-80} spy={true} activeClass="text-accent" className="cursor-pointer">
    Paket
  </Link>
</nav>

<div className="flex items-center space-x-4">
  <a
    href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20berkonsultasi%20tentang%20paket"
    target="_blank"
    rel="noopener noreferrer"
    className="hidden md:block"
  >
    <Button variant="cta" size="sm">
      Konsultasi Gratis
    </Button>
  </a>
  
  {/* Mobile Menu Button */}
  <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
  >
    {isMobileMenuOpen ? (
      <X className="h-6 w-6 text-gray-700" />
    ) : (
      <Menu className="h-6 w-6 text-gray-700" />
    )}
  </button>
</div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg z-40">
            <nav className="flex flex-col py-4">
              <Link 
                to="tentang" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                spy={true} 
                activeClass="text-accent" 
                className="cursor-pointer px-6 py-3 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link 
                to="benefit" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                spy={true} 
                activeClass="text-accent" 
                className="cursor-pointer px-6 py-3 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Benefit
              </Link>
              <Link 
                to="program" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                spy={true} 
                activeClass="text-accent" 
                className="cursor-pointer px-6 py-3 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Program
              </Link>
              <Link 
                to="paket" 
                smooth={true} 
                duration={500} 
                offset={-80} 
                spy={true} 
                activeClass="text-accent" 
                className="cursor-pointer px-6 py-3 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Paket
              </Link>
              <div className="px-6 py-3">
                <a
                  href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20berkonsultasi%20tentang%20paket"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Button variant="cta" size="sm" className="w-full">
                    Konsultasi Gratis
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
  <Element name="tentang">
  <section id="tentang" className="py-20 px-6 bg-[#ECE2D2] mt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Kuasai Bahasa Inggris di{" "}
                <span className="text-accent">Kampung Inggris Indonesia</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Bergabunglah dengan program pembelajaran bahasa Inggris intensif di lingkungan yang mendukung, 
                dengan tutor berpengalaman dan suasana budaya Jogja yang khas
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="text-lg px-8">
                <Home className="mr-2 h-5 w-5" />
                Gratis Asrama
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                24 Jam English Area
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Students learning English in Jogja" 
              className=""
            />
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-xl shadow-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="bg-accent text-accent-foreground p-2 rounded-full">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">GARANSI</div>
                  <div className="text-sm text-muted-foreground">1 Bulan Bisa Speaking</div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </section>
  </Element>

      {/* Why Choose Section */}
  <Element name="benefit">
  <section id="benefit" className="py-20 px-6 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Kenapa Harus Kampung Inggris Indonesia?
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={studentsImage} 
                alt="English conversation practice" 
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lokasi di Jogja</h3>
                  <p className="text-muted-foreground">
                    Jogja kota pelajar yang ramah untuk belajar bahasa Inggris, lingkungan kondusif dan biaya hidup yang terjangkau
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full flex-shrink-0">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Lokasi Strategis</h3>
                  <p className="text-muted-foreground">
                    Berada dekat pusat kota sehingga akses ke fasilitas dan transportasi sangat mudah
                  </p>
                </div>
              </div>
              {/* Bagian latihan sama bule dihapus sesuai permintaan */}
            </div>
          </div>
        </div>
  </section>
  </Element>

      {/* Why Choose Us Cards */}
  <section id="benefit-2" className="py-20 px-6 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Mengapa Memilih Kampung Inggris Indonesia?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Kami menyediakan lingkungan pembelajaran yang optimal untuk mengembangkan kemampuan bahasa Inggris Anda
          </p>
          <div className="flex flex-nowrap gap-8 overflow-x-auto snap-x snap-mandatory -mx-6 px-6 pb-2 [&::-webkit-scrollbar]:hidden">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 flex-none w-80 md:w-[360px] lg:w-[380px] snap-start">
              <CardContent className="space-y-4">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Garansi 1 Bulan Bisa Speaking</h3>
                <p className="text-muted-foreground">
                  Kalau setelah 1 bulan kamu belum bisa speaking, garansi uang kembali 100%
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 flex-none w-80 md:w-[360px] lg:w-[380px] snap-start">
              <CardContent className="space-y-4">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Gratis Asrama Selama Menjadi Member</h3>
                <p className="text-muted-foreground">
                  Tidak perlu khawatir biaya, kami menyediakan asrama gratis selama kamu di Jogja. Asrama sudah dilengkapi dengan fasilitas lengkap
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 flex-none w-80 md:w-[360px] lg:w-[380px] snap-start">
              <CardContent className="space-y-4">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Gratis Modul dan e-sertifikat</h3>
                <p className="text-muted-foreground">
                  Modul pembelajaran dan e-sertifikat sudah disediakan. Langsung dengan tools lengkap untuk belajar
                </p>
              </CardContent>
            </Card>
            {/* Tambahan poin benefit */}
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 flex-none w-80 md:w-[360px] lg:w-[380px] snap-start">
              <CardContent className="space-y-4">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Daftar 2 GRATIS 1 <p>Daftar 3 GRATIS 2</p></h3>
                <p className="text-muted-foreground">
                  Ajak temanmu, biar lebih seru dan bisa bareng. Lebih banyak, lebih murah.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 flex-none w-80 md:w-[360px] lg:w-[380px] snap-start">
              <CardContent className="space-y-4">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Home className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Fasilitas Asrama</h3>
                <p className="text-muted-foreground">
                  Free Wifi. Free Air Mineral. Free PDAM. Kitchen set (kulkas, kompor, dll). Spring bed dan linen dengan kualitas villa Kamar Tamu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

  {/* Program Section */}
<Element name="program">
<section id="program" className="py-20 px-6 bg-[#E6D8C4]">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-[#5B362B] mb-4">
      Apa Yang Akan Kamu Pelajari?
    </h2>
    <p className="text-lg text-[#3D2B25] text-center mb-16 max-w-3xl mx-auto">
      Kamu nggak cuma belajar bahasa Inggris, tapi juga dibentuk jadi orang yang berani bicara, dan siap memimpin. Berikut penjelasannya
    </p>

    <div className="grid md:grid-cols-2 gap-6">
      {[
        {
          icon: <MessageCircle className="h-6 w-6 text-white" />,
          title: "Daily Talk",
          desc: "Latihan speaking intensif setiap hari lewat role play, dan game. Kamu juga wajib speaking bahasa Inggris dari bangun tidur sampai tidur lagi."
        },
        {
          icon: <BookOpenCheck className="h-6 w-6 text-white" />,
          title: "EC X",
          desc: "Belajar tampil di depan public, goalnya adalah bagaimana tampil mempesona. Bukan sekadar jago speaking, tapi juga berdampak."
        },
        {
          icon: <Users className="h-6 w-6 text-white" />,
          title: "Kelas Teori",
          desc: "Grammar, vocabulary, dan pronunciation diajarkan dengan cara cepat, ringkas, dan langsung praktik."
        },
        {
          icon: <Award className="h-6 w-6 text-white" />,
          title: "Leadership",
          desc: "Kamu nggak cuma belajar bahasa international, tapi juga dilatih jadi leader dunia"
        }
      ].map((item, i) => (
        <Card
          key={i}
          className="p-6 rounded-xl bg-[#FFFFFC] shadow-md border border-gray-100"
        >
          <CardContent className="flex items-start gap-4">
            <div className="bg-[#6D8A59] p-3 rounded-lg flex items-center justify-center">
              {item.icon}
            </div>
            <div>
              <h3 className="text-base font-semibold text-[#5B362B] mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-[#5B362B]">{item.desc}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>
</Element>


  {/* Pricing Section */}
  <Element name="paket">
  <section id="paket" className="py-20 bg-[#6D8A59]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
            Promo Anggakatan Pertama. Diskon 50%!
          </h2>
          <p className="text-lg text-white/80 text-center mb-16 max-w-3xl mx-auto">
          Kami membuka program Kampung Inggris Indonesia dengan penawaran spesial untuk angkatan pertama. Daftar Sekarang, Bayar Separuh Harga!
          </p>
        </div>
          
          <div className="flex overflow-x-auto gap-6 px-6 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden">
            {packages.map((pkg, index) => (
              <Card key={index} className="relative bg-[#FAF8F2] rounded-3xl border-none shadow-lg transition-all duration-300 flex-shrink-0 w-80 snap-center">
                <CardContent className="p-8 pb-10 text-center flex flex-col justify-between h-full">
                  <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-[#3D3D3D] mb-2">{pkg.name}</h3>
                      <p className="text-sm text-gray-500 mb-6 h-10">{pkg.description}</p>
                      
                    <div className="flex justify-center items-baseline gap-2 mb-6">
  <span className="text-lg text-gray-400 line-through">Rp {pkg.originalPrice}</span>
  <span className="text-lg font-bold text-[#3D3D3D]">Rp {pkg.price}</span>
</div>


                      <div className="space-y-4 text-left my-8">
                          {pkg.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-3">
                              <feature.icon className="h-5 w-5 text-[#8FA683]" />
                              <span className="text-md text-gray-700">{feature.text}</span>
                          </div>
                          ))}
                      </div>
                  </div>

                  <div className="mt-auto w-full pt-2 min-h-[140px]">
                    {pkg.secondaryAction ? (
                      <div className="flex flex-col items-center justify-end space-y-2 h-full">
                        <Button asChild size="lg" className={`w-full sm:w-64 md:w-72 rounded-full font-semibold text-base py-6 ${pkg.primaryAction.className}`}>
                          <a href={pkg.primaryAction.link} target="_blank" rel="noopener noreferrer">
                            {pkg.primaryAction.text}
                          </a>
                        </Button>
                        <Button size="lg" variant="outline" className={`w-full sm:w-64 md:w-72 rounded-full font-semibold text-base py-6 border-2 ${pkg.secondaryAction.className}`}>
                          {pkg.secondaryAction.text}
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full">
                        <Button asChild size="lg" className={`w-full sm:w-64 md:w-72 rounded-full font-semibold text-base py-6 ${pkg.primaryAction.className}`}>
                          <a href={pkg.primaryAction.link} target="_blank" rel="noopener noreferrer">
                            {pkg.primaryAction.text}
                          </a>
                        </Button>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mt-20">
            <p className="text-white text-lg mb-4">Masih bingung memilih paket yang tepat?</p>
            <Button asChild variant="outline" size="lg" className="bg-[#FAF8F2] text-[#5A382D] border-none hover:bg-white rounded-full font-semibold py-6 px-8">
              <a href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20berkonsultasi%20tentang%20paket" target="_blank" rel="noopener noreferrer">
                  Konsultasi Gratis Sekarang
              </a>
            </Button>
          </div>
        </div>
  </section>
  </Element>


      {/* Footer */}
      <footer className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">Kampung Inggris Indonesia</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Tempat terbaik untuk belajar bahasa Inggris dengan suasana budaya Jogja yang khas. Bergabunglah dengan komunitas pembelajar yang supportif dan raih impian Anda.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
    <ul className="space-y-3">
  <li>
    <Link to="tentang" smooth={true} duration={500} className="cursor-pointer text-primary-foreground/80 hover:text-primary-foreground transition-colors">
      Tentang
    </Link>
  </li>
  <li>
    <Link to="benefit" smooth={true} duration={500} className="cursor-pointer text-primary-foreground/80 hover:text-primary-foreground transition-colors">
      Benefit
    </Link>
  </li>
  <li>
    <Link to="program" smooth={true} duration={500} className="cursor-pointer text-primary-foreground/80 hover:text-primary-foreground transition-colors">
      Program
    </Link>
  </li>
  <li>
    <Link to="paket" smooth={true} duration={500} className="cursor-pointer text-primary-foreground/80 hover:text-primary-foreground transition-colors">
      Paket
    </Link>
  </li>
</ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Kontak Kami</h3>
            <div className="space-y-3 text-primary-foreground/80">
             
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Kampung Inggris Indonesia. All rights reserved.
          </p>
        </div>
      </footer>


      {/* Chat widget (full on mobile, panel on desktop) */}
      {isChatOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/30 z-50" onClick={closeChatWidget} />
          {/* Panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="wa-widget-title"
            className="fixed inset-0 md:inset-auto md:bottom-24 md:right-6 z-[60] w-full h-full md:w-[420px] md:h-[540px] bg-white md:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="bg-[#25D366] text-white flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-white" />
                <span id="wa-widget-title" className="font-semibold">WhatsApp</span>
              </div>
              <button onClick={closeChatWidget} aria-label="Tutup" className="p-1 rounded-full hover:bg-white/10">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex-1 bg-white p-4 overflow-y-auto">
              <div className="bg-white rounded-2xl ring-1 ring-gray-200 shadow-sm p-4 text-sm text-gray-700 leading-relaxed">
                Halo! Selamat datang di Kampung Inggris Indonesia. Jika ada pertanyaan tentang PROGRAM dan PROMO, silakan klik tombolnya yaa :)
              </div>
            </div>
            <div className="p-4 bg-white border-t">
              <Button onClick={openWhatsApp} className="w-full bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full font-semibold py-6 flex items-center justify-center gap-2 shadow">
                Tanyakan Sekarang!!
                <MessageCircle className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </>
      )}

      <a
        href="https://api.whatsapp.com/send?phone=6282137984673&text=Halo%2C%20saya%20ingin%20bertanya%20tentang%20program%20Kampung%20Inggris%20Indonesia"
        onClick={handleFABClick}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat via WhatsApp"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-105 bg-[#25D366]">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
      </a>
    </div>
  );
};

export default Index;
