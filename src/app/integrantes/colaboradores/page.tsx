import Header from "@/components/Header";
import Colaboradores from "@/components/Colaboradores";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Colaboradores/as – IEHS – UNICEN",
  description: "Colaboradores/as del IEHS",
};

export default function ColaboradoresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white">
        <Colaboradores />
      </main>
      <Footer />
    </div>
  );
}
