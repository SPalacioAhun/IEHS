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
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Autoridades from "@/components/Autoridades";
import Link from "next/link";

export const metadata = {
  title: "IEHS – UNICEN",
  description: "Instituto de Estudios Histórico-Sociales",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* SECCIÓN BIENVENIDA */}
      <section className="relative bg-gradient-to-b from-[#0f3f4d] to-[#1f697a] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 items-center gap-12 relative z-10">
          {/* Texto */}
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
              Bienvenidos al IEHS
            </h1>
            <div className="space-y-4 text-base md:text-lg max-w-2xl">
              <p>
                El Instituto de Estudios Histórico-Sociales se creó en 1986 en el
                marco del clima institucional y académico que propuso a la
                Universidad como el centro privilegiado de producción del
                conocimiento científico de excelencia.
              </p>
              <p>
                Desde entonces el IEHS estimula la labor de investigación de gran
                parte de los docentes del Departamento de Historia y de otros
                espacios académicos de la Facultad de Ciencias Humanas de la
                UNCPBA.
              </p>
              <p>
                Diferentes temáticas de estudio, en particular, la historia y la
                sociedad argentina y americana son abordadas desde entonces por
                los investigadores que se agrupan en diferentes programas de
                investigación. Como instancia de intercambio, que favorece el
                desarrollo en esta tarea, el IEHS organiza diversas actividades
                académicas como reuniones científicas, conferencias y
                publicaciones con participación de investigadores nacionales e
                internacionales.
              </p>
              <p>
                Gracias a la continuidad de esta política académica, se ha podido
                estimular y garantizar la formación de recursos humanos de alta
                calificación que hoy se desempeñan como docentes e investigadores
                de esta casa de estudios. Desde 2012, el IEHS integra el IGEHCS,
                unidad ejecutora conjunta del CONICET y la UNCPBA.
              </p>
              <p>
                Vinculación reconocida por convenios con: Universidad Autónoma de
                Nuevo León; Instituto de Investigaciones Antropológicas – UNAM
                (México); Centro de Investigaciones y Estudios Superiores en
                Antropología Social (México); Instituto Mora (México).
              </p>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative self-start md:justify-self-end">
            <div className="overflow-hidden rounded-[80px] ring-4 ring-[#f9623e]/60 shadow-xl">
              <Image
                src="/frente.iehs.png"
                alt="Instalaciones del IEHS"
                width={640}
                height={430}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
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
    {/* BLOQUE DOCTORADO ENLAZADO */}
    <Link
      href="/doctorado"
      className="p-8 bg-white rounded-xl shadow-md border hover:shadow-lg hover:bg-[#134e5e]/10 transition cursor-pointer block"
      prefetch
    >
      <h2 className="text-2xl font-bold text-[#134e5e] mb-2">Doctorado</h2>
      <p className="text-gray-700">
        Información del programa doctoral y requisitos de inscripción.
      </p>
    </Link>
  </section>
</main>


      {/* Sección Autoridades en Landing */}
      <Autoridades />

      <Footer />
    </div>
  );
}
