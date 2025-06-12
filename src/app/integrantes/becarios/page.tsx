// src/app/integrantes/becarios/page.tsx
import Header from "@/components/Header"
import Becarios from "@/components/Becarios"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Becarios/as – IEHS – UNICEN",
  description: "Equipo de becarios/as del IEHS",
}

export default function BecariosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white">
        <Becarios />
      </main>
      <Footer />
    </div>
  )
}
