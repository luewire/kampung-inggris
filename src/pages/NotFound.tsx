import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  // ambil path tanpa "/"
  const path = location.pathname.replace("/", "");

  return (
    <div className="min-h-screen bg-[#6D8A59] text-white flex items-center justify-center relative overflow-hidden">
      {/* Huge 404 Background */}
      <div className="absolute inset-0 flex items-center justify-center text-[50vw] font-extrabold text-white/10 select-none leading-none -rotate-12">
  404
</div>


      {/* Content */}
      <div className="relative z-10 text-right w-full max-w-7xl px-8">
        <p className="text-2xl md:text-3xl font-medium text-white">
          Halaman ini tidak tersedia.
        </p>

        {/* Tambahan info path */}
        {path && (
          <p className="mt-2 text-lg text-white/70">
            “<span className="text-white">{path}</span>” yang Anda cari tidak ditemukan.
          </p>
        )}

        <div className="mt-8">
          <Button
            asChild
            variant="outline"
            className="rounded-full border-white text-white hover:bg-white/10"
          >
            <Link to="/">← Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
