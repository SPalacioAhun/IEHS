import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Proyectos from "@/components/Proyectos";

export const metadata = {
  title: "Proyectos - IEHS",
  description:
    "Líneas de investigación y proyectos del Instituto de Estudios Histórico-Sociales",
};

export default function ProyectosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow bg-[#f9fbfc] py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight leading-[1.18] bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow mb-6">
              Proyectos de Investigación
            </h1>

            <div className="max-w-7xl mx-auto">
              <Proyectos />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
