// // app/page.tsx
// import Header from "@/components/Header"
// import HistorySection from "@/components/HistorySection"
// import Footer from "@/components/Footer"

// export const metadata = {
//   title: "IEHS – UNICEN",
//   description: "Instituto de Estudios Histórico-Sociales",
// }

// export default function Home() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <Header />
//       <main className="flex-grow container mx-auto px-8 py-16">
//         {/* Sección Historia incluye hero y descripción */}
//         <HistorySection />

//         {/* Ejemplo de otras secciones */}
//         <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="p-6 border rounded shadow-sm hover:shadow-lg transition">
//             <h2 className="text-2xl font-semibold mb-2">Proyectos</h2>
//             <p className="text-gray-600">
//               Conocé las líneas de investigación y proyectos vigentes en el IEHS.
//             </p>
//           </div>
//           <div className="p-6 border rounded shadow-sm hover:shadow-lg transition">
//             <h2 className="text-2xl font-semibold mb-2">Doctorado</h2>
//             <p className="text-gray-600">
//               Información del programa doctoral y requisitos de inscripción.
//             </p>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   )
// }

// app/page.tsx
import Header from "@/components/Header"
import HistorySection from "@/components/HistorySection"
import Footer from "@/components/Footer"

export const metadata = {
  title: "IEHS – UNICEN",
  description: "Instituto de Estudios Histórico-Sociales",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* Sección historia: ancho completo */}
      <HistorySection />

      {/* Main con margen solo para el resto del contenido */}
      <main className="flex-grow py-16 bg-white">
        <section className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 border rounded shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Proyectos</h2>
            <p className="text-gray-600">
              Conocé las líneas de investigación y proyectos vigentes en el IEHS.
            </p>
          </div>
          <div className="p-6 border rounded shadow-sm hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">Doctorado</h2>
            <p className="text-gray-600">
              Información del programa doctoral y requisitos de inscripción.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
