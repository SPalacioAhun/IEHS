// app/publicaciones/ediciones/page.tsx
import Header from "@/components/Header";
import Ediciones from "@/components/EdicionesPage";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ediciones y Coediciones – IEHS – UNICEN",
  description: "Libros y publicaciones editadas por el IEHS",
};

export default function EdicionesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white">
        <Ediciones />
      </main>
      <Footer />
    </div>
  );
}
