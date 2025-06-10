import Header from "@/components/Header"
import Investigadores from "@/components/Investigadores"
import Footer from "@/components/Footer"

export const metadata = {
  title: "Investigadores – IEHS – UNICEN",
  description: "Equipo de investigadores del IEHS",
}

export default function InvestigadoresPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow py-16 bg-white">
        <Investigadores />
      </main>
      <Footer />
    </div>
  )
}
