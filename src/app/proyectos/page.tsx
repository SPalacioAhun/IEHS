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
            <h1 className="text-4xl font-bold text-[#134e5e] mb-8 text-center">
              Proyectos de Investigación
            </h1>

            <div className="max-w-2xl mx-auto">
              <Proyectos />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
