import { Check } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Paket Starter",
      description: "Cocok untuk pemula yang ingin memulai perjalanan belajar",
      originalPrice: "Rp 2.500.000",
      currentPrice: "Rp 1.500.000",
      duration: "4 Minggu",
      maxStudents: "Max 15 Siswa",
      whatsappMessage: "Hi%2C+saya+ingin+mendaftar+Paket+Starter",
      isBestSeller: false,
    },
    {
      name: "Paket Reguler",
      description: "Cocok untuk siswa yang ingin belajar dengan intensitas menengah",
      originalPrice: "Rp 3.500.000",
      currentPrice: "Rp 2.800.000",
      duration: "4 Minggu",
      maxStudents: "Max 15 Siswa",
      whatsappMessage: "Hi%2C+saya+ingin+mendaftar+Paket+Reguler",
      isBestSeller: true,
    },
    {
      name: "Paket Intensive",
      description: "Program lengkap untuk hasil maksimal dalam waktu singkat",
      originalPrice: "Rp 5.500.000",
      currentPrice: "Rp 4.200.000",
      duration: "4 Minggu",
      maxStudents: "Max 15 Siswa",
      whatsappMessage: "Hi%2C+saya+ingin+mendaftar+Paket+Intensive",
      isBestSeller: false,
    },
  ];

  return (
    <section className="py-20 px-6" style={{ backgroundColor: '#6D8A59' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Paket Pembelajaran Kami
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Beragam pilihan paket yang fleksibel dan terjangkau untuk mendukung proses belajar 
            bahasa Inggris sesuai kebutuhan dan tujuan anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className="relative">
              {pkg.isBestSeller && (
                <div className="absolute -top-3 right-4 z-10">
                  <span 
                    className="px-4 py-1 text-sm font-semibold text-white rounded-full"
                    style={{ backgroundColor: '#5B362B' }}
                  >
                    Best Seller
                  </span>
                </div>
              )}
              
              <div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full"
                style={{ backgroundColor: '#F5EFE4' }}
              >
                <div className="text-center mb-6">
                  <h3 
                    className="text-xl font-bold mb-2"
                    style={{ color: '#5B362B' }}
                  >
                    {pkg.name}
                  </h3>
                  <p 
                    className="text-sm mb-4"
                    style={{ color: '#5B362B', opacity: 0.7 }}
                  >
                    {pkg.description}
                  </p>
                  
                  <div className="mb-2">
                    <span 
                      className="text-sm line-through"
                      style={{ color: '#5B362B', opacity: 0.5 }}
                    >
                      {pkg.originalPrice}
                    </span>
                  </div>
                  <div 
                    className="text-3xl font-bold"
                    style={{ color: '#5B362B' }}
                  >
                    {pkg.currentPrice}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#6B8757' }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span 
                      className="text-sm"
                      style={{ color: '#5B362B' }}
                    >
                      {pkg.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#6B8757' }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span 
                      className="text-sm"
                      style={{ color: '#5B362B' }}
                    >
                      {pkg.maxStudents}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={`https://wa.me/6281234567890?text=${pkg.whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-6 text-center font-semibold text-white rounded-lg transition-all duration-300 hover:opacity-90"
                    style={{ backgroundColor: '#6B8757' }}
                  >
                    Daftar Sekarang
                  </a>
                  
                  <a
                    href={`https://wa.me/6281234567890?text=${pkg.whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center text-sm font-medium underline transition-colors duration-300 hover:opacity-70"
                    style={{ color: '#5B362B' }}
                  >
                    Garansi 1 Bulan Bisa
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white mb-6">Masih bingung memilih paket yang tepat?</p>
          <a
            href="https://wa.me/6281234567890?text=Hi%2C+saya+ingin+konsultasi+tentang+paket+pembelajaran"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-white text-center font-semibold rounded-lg transition-all duration-300 hover:opacity-90"
            style={{ color: '#5B362B' }}
          >
            Konsultasi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;