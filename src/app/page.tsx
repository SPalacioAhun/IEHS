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

//       {/* Sección historia: ancho completo */}
//       <HistorySection />

//       {/* Main con margen solo para el resto del contenido */}
//       <main className="flex-grow py-16 bg-white">
//         <section className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
import Footer from "@/components/Footer"
import Image from "next/image"

export const metadata = {
  title: "IEHS – UNICEN",
  description: "Instituto de Estudios Histórico-Sociales",
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* HERO SECCIÓN HISTORIA */}
      <section className="relative bg-gradient-to-b from-[#0f3f4d] to-[#1f697a] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 z-10 relative">
          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Historia
            </h1>
            <h2 className="text-xl md:text-2xl font-light mb-6">
              Interpretamos el pasado, comprendemos el presente
            </h2>
            <p className="text-md md:text-lg mb-8 max-w-lg">
              El IEHS lleva adelante investigaciones de alto nivel en historia, ciencias sociales y humanidades desde la Universidad Nacional del Centro.
            </p>
            <a
              href="#proyectos"
              className="inline-block px-6 py-3 bg-white text-[#134e5e] font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Conocé más
            </a>
          </div>

          {/* Imagen curva */}
          <div className="relative">
            <div className="overflow-hidden rounded-tl-[60px] rounded-br-[60px] shadow-lg">
              <Image
                src="/frente.iehs.png" // asegurate de tener esta imagen en /public
                alt="Equipo investigando en biblioteca"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        {/* Elemento decorativo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06)_0%,_transparent_70%)]" />
      </section>

      {/* SECCIONES: Proyectos y Doctorado */}
      <main className="flex-grow bg-[#f9fbfc] py-16" id="proyectos">
        <section className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-8 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-[#134e5e] mb-2">Proyectos</h2>
            <p className="text-gray-700">
              Conocé las líneas de investigación y proyectos vigentes en el IEHS.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-md border hover:shadow-lg transition">
            <h2 className="text-2xl font-bold text-[#134e5e] mb-2">Doctorado</h2>
            <p className="text-gray-700">
              Información del programa doctoral y requisitos de inscripción.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
