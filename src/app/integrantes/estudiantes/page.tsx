import Header from "@/components/Header";
import Estudiantes from "@/components/Estudiantes";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Miembros estudiantes de grado y postgrado – IEHS – UNICEN",
  description: "Estudiantes de grado y postgrado del IEHS",
};

export default function EstudiantesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white">
        <Estudiantes />
      </main>
      <Footer />
    </div>
  );
}
