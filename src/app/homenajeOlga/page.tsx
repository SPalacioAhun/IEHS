import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HomenajeOlgaEcheverria from "@/components/HomenajeOlgaEcheverria"

export const metadata = {
  title: "Homenaje a Olga Echeverría – IEHS – UNICEN",
  description: "Página de homenaje y legado académico de la Dra. Olga Echeverría, investigadora y docente de la UNICEN.",
}

export default function OlgaEcheverriaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      <main className="flex-grow py-16 bg-white">
        <HomenajeOlgaEcheverria />
      </main>

      <Footer />
    </div>
  )
}
