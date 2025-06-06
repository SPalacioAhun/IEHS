import Header from "@/components/Header"
import Autoridades from "@/components/Autoridades"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Autoridades – IEHS – UNICEN",
  description: "Equipo directivo del Instituto de Estudios Histórico-Sociales",
}

export default function AutoridadesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow py-16 bg-white">
        <Autoridades />
      </main>

      <Footer />
    </div>
  )
}
