import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logo from "@/assets/logo.png"; 
import { Badge } from "@/components/ui/badge";
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
  Check
} from "lucide-react";
import heroImage from "@/assets/students-conversation.png";
import studentsImage from "@/assets/hero-students.png";
import { Link } from "react-scroll";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="w-full py-4 px-6 bg-background border-b border-border">
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

       <a
  href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20berkonsultasi%20tentang%20paket"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="cta" size="sm">
    Konsultasi Gratis
  </Button>
</a>
        </div>
      </header>

      {/* Hero Section */}
     <section id="tentang" name="tentang" className="py-20 px-6 bg-[#ECE2D2]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Kuasai Bahasa Inggris di{" "}
                <span className="text-accent">Kampung Inggris Jogja</span>
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
                  <div className="text-sm text-muted-foreground">1 Bulan Bisa Ngomong</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
   <section id="benefit" name="benefit" className="py-20 px-6 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            Kenapa Harus Kampung Inggris Jogja by PARE?
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
              <div className="flex items-start space-x-4">
                <div className="bg-accent text-accent-foreground p-3 rounded-full flex-shrink-0">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Bisa Langsung Latihan Sama Bule</h3>
                  <p className="text-muted-foreground">
                    Praktik langsung dengan native speaker dan turis asing yang sering berkunjung ke Jogja
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Cards */}
     <section id="benefit" name="benefit" className="py-20 px-6 bg-[#FFFFFC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            Mengapa Memilih Kampung Inggris Jogja?
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Kami menyediakan lingkungan pembelajaran yang optimal untuk mengembangkan kemampuan bahasa Inggris Anda
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Garansi 1 Bulan Bisa Ngomong</h3>
                <p className="text-muted-foreground">
                  Kalau setelah 1 bulan kamu belum bisa ngomong, garansi uang kembali 100%
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
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
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <CardContent className="space-y-4">
                <div className="bg-accent text-accent-foreground p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Gratis Modul dan Sertifikat</h3>
                <p className="text-muted-foreground">
                  Modul pembelajaran dan sertifikat sudah disediakan. Langsung dengan tools lengkap untuk belajar
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Section */}
<section id="program" name="program" className="py-20 px-6 bg-card">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
      Program Pembelajaran Kami
    </h2>
    <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
      Program terstruktur yang dirancang untuk memaksimalkan kemampuan bahasa Inggris Anda
    </p>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        {
          icon: <MessageCircle className="h-6 w-6" />,
          title: "Daily Speaking Classes",
          desc: "Kelas speaking intensif setiap hari untuk meningkatkan kemampuan berbicara"
        },
        {
          icon: <BookOpenCheck className="h-6 w-6" />,
          title: "Grammar Workshops",
          desc: "Workshop grammar komprehensif untuk memperkuat struktur bahasa"
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Cultural Immersion Events",
          desc: "Acara budaya mingguan untuk praktek bahasa dalam konteks nyata"
        },
        {
          icon: <Award className="h-6 w-6" />,
          title: "Certification Program",
          desc: "Sertifikat resmi sebagai pengakuan program pembelajaran"
        }
      ].map((item, i) => (
        <Card
          key={i}
          className="p-6 rounded-xl bg-[#FFFFFC] dark:bg-neutral-900 shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <CardContent className="space-y-4">
            <div className="bg-accent text-accent-foreground p-3 rounded-lg w-12 h-12 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


{/* Pricing Section */}
<section id="paket" name="paket" className="py-20 px-6 bg-accent">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center text-accent-foreground mb-4">
      Paket Pembelajaran Kami
    </h2>
    <p className="text-lg text-accent-foreground/80 text-center mb-16 max-w-3xl mx-auto">
      Beragam pilihan paket yang fleksibel dan terjangkau untuk mendukung proses belajar bahasa Inggris sesuai kebutuhan dan tujuan Anda
    </p>
    <div className="grid md:grid-cols-3 gap-8">
      {/* Starter Package */}
      <Card className="relative p-8 bg-background border-2 border-border hover:shadow-xl transition-all duration-300">
        <CardContent className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Paket Starter</h3>
            <p className="text-sm text-muted-foreground mb-4">Cocok untuk yang baru memulai belajar bahasa Inggris</p>
            <span className="text-sm text-muted-foreground line-through">Rp 2.000.000</span>
            <div className="text-4xl font-bold text-foreground mb-2">Rp 1.500.000</div>
            <p className="text-sm text-muted-foreground">per program</p>
          </div>
          <div className="space-y-3">
            {["4 Minggu", "Max 15 orang", "Garansi 1 Bulan Bisa"].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-accent" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
       <Button
  asChild
  variant="outline"
  className="w-full"
>
  <a
    href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20mendaftar%20paket%20Starter"
    target="_blank"
    rel="noopener noreferrer"
  >
    Daftar Sekarang
  </a>
</Button>

<Button
  asChild
  variant="link"
  className="w-full text-sm"
>
  <a
    href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20berkonsultasi%20tentang%20paket%20Starter"
    target="_blank"
    rel="noopener noreferrer"
  >
    Konsultasi Paket Starter
  </a>
</Button>

        </CardContent>
      </Card>

      {/* Regular Package */}
<Card className="relative p-8 bg-background border-1 border-accent rounded-lg hover:shadow-xl transition-all duration-300 transform scale-105">
  <div className="absolute top-0 right-0 pointer-events-none">
    <Badge
      className="bg-[#5A382D] text-[#FFFFFC] px-3 py-1 rounded-tl-lg text-xs font-semibold"
    >
      Best Seller
    </Badge>
  </div>

        <CardContent className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Paket Regular</h3>
            <p className="text-sm text-muted-foreground mb-4">Cocok untuk yang ingin belajar dengan intensitas menengah</p>
            <div className="mb-2 flex flex-col items-center">
              <span className="text-sm text-muted-foreground line-through">Rp 3.500.000</span>
              <span className="text-4xl font-bold text-foreground">Rp 2.800.000</span>
            </div>
            <p className="text-sm text-muted-foreground">per program</p>
          </div>
          <div className="space-y-3">
            {["4 Minggu", "Max 15 orang", "Garansi 1 Bulan Bisa"].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-accent" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        <Button
  asChild
  variant="cta"
  className="w-full"
>
  <a
    href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20mendaftar%20paket%20Regular"
    target="_blank"
    rel="noopener noreferrer"
  >
    Daftar Sekarang
  </a>
</Button>

<Button
  asChild
  variant="link"
  className="w-full text-sm"
>
  <a
    href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20berkonsultasi%20tentang%20paket%20Regular"
    target="_blank"
    rel="noopener noreferrer"
  >
    Konsultasi Paket Regular
  </a>
</Button>

        </CardContent>
      </Card>

      {/* Intensive Package */}
      <Card className="relative p-8 bg-background border-2 border-border hover:shadow-xl transition-all duration-300">
        <CardContent className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-2">Paket Intensive</h3>
            <p className="text-sm text-muted-foreground mb-4">Cocok untuk yang ingin belajar dengan intensitas tinggi</p>
            <span className="text-sm text-muted-foreground line-through">Rp 5.000.000</span>
            <div className="text-4xl font-bold text-foreground mb-2">Rp 4.200.000</div>
            <p className="text-sm text-muted-foreground">per program</p>
          </div>
          <div className="space-y-3">
            {["4 Minggu", "Max 10 orang", "Garansi 1 Bulan Bisa"].map((benefit, i) => (
              <div key={i} className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-accent" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        <Button
  asChild
  variant="outline"
  className="w-full"
>
  <a
    href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20mendaftar%20paket%20Intensive"
    target="_blank"
    rel="noopener noreferrer"
  >
    Daftar Sekarang
  </a>
</Button>

<Button
  asChild
  variant="link"
  className="w-full text-sm"
>
  <a
    href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20berkonsultasi%20tentang%20paket%20Intensive"
    target="_blank"
    rel="noopener noreferrer"
  >
    Konsultasi Paket Intensive
  </a>
</Button>


        </CardContent>
      </Card>
    </div>

    <div className="text-center mt-12">
      <p className="text-accent-foreground mb-6">Masih bingung memilih paket yang tepat?</p>
     <a
  href="https://api.whatsapp.com/send?phone=6282137984673&text=Saya%20ingin%20berkonsultasi%20tentang%20paket"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="outline"
    size="lg"
    className="bg-background text-foreground border-background hover:bg-background/90"
  >
    Konsultasi Gratis Sekarang
  </Button>
</a>

    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-16 px-6 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">Kampung Inggris Jogja</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Tempat terbaik untuk belajar bahasa Inggris dengan suasana budaya Jogja yang khas. 
              Bergabunglah dengan komunitas pembelajar bahasa Inggris yang supportif dan sah dengan tutor 
              yang berpengalaman di Jogja.
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
              <p>📍 bandul</p>
              <p>📞 1234</p>
              <p>✉️ info@kampunginggrisindonesia</p>
              <p>🌐 www.kampunginggrisindonesia.com</p>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60">
            © 2025 Kampung Inggris Jogja. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;