/* eslint-disable @next/next/no-page-custom-font */
// app/page.tsx
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Autoridades from "@/components/Autoridades";
import Link from "next/link";
import Head from "next/head";
import HiloDeFotos from "@/components/HiloDeFotos";

export const metadata = {
  title: "IEHS",
  description: "Instituto de Estudios Histórico-Sociales",
};

const FOTOS_IEHS = [
  {
    src: "/fotos/Actividad de extensión El Tata Dios y el ocaso de la frontera. Museo del Fuerte.JPG",
    alt: "Actividad académica 1",
  },
  {
    src: "/fotos/Archivo Del Movimiento de Sacerdotes para el Tercer Mundo.JPG",
    alt: "Actividad académica 2",
  },
  { src: "/fotos/2.webp", alt: "Investigadores 1" },
  {
    src: "/fotos/Doctorado en Historia-Seminario Dra. Hutchinson (Universidad de Nueva México).JPG",
    alt: "Investigadores 2",
  },
  { src: "/fotos/Flyer IEHS.JPG", alt: "Biblioteca IEHS" },
  { src: "/fotos/Hemeroteca IEHS.jpg", alt: "Conferencia 1" },
  {
    src: "/fotos/Investigadores en reunión de trabajo.jpg",
    alt: "Conferencia 2",
  },
  {
    src: "/fotos/Investigadores IEHS Presentación Libro Tandil de aldea a ciudad.JPG",
    alt: "Edificio IEHS",
  },
  { src: "/fotos/frente.iehsReal.png", alt: "Reunión científica" },
  {
    src: "/fotos/Jornadas Pensar las Derechas (IEHS-UNGS).JPG",
    alt: "Equipo de trabajo",
  },
  {
    src: "/fotos/Práctica Socioeducativa. FCEx-FCH (IEHS-NEES).JPG",
    alt: "Aula 1",
  },
  { src: "/fotos/Visita estudiantes secundario.JPG", alt: "Aula 2" },
  { src: "/fotos/biblioteca.webp", alt: "Archivo histórico" },
  { src: "/fotos/unnamed (1).webp", alt: "Visita institucional" },
];

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Merriweather:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        {/* Banner Superior */}
        <div className="w-full bg-[#0f3f4d]">
          <Image
            src="/1500x500.jpg"
            alt="Instituto de Estudios Histórico-Sociales (IEHS)"
            width={1500}
            height={500}
            priority
            className="w-full h-auto block"
          />
        </div>

        {/* SECCIÓN BIENVENIDA */}
        <section className="relative bg-gradient-to-b from-[#0f3f4d] to-[#1f697a] text-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 py-16 md:py-20 relative z-10 space-y-10">
            {/* Título */}
            <h1
              className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg text-center"
              style={{
                fontFamily: "'Merriweather', serif",
                letterSpacing: "0.04em",
                textShadow: "0 4px 24px rgba(0,0,0,0.25)",
              }}
            >
              Bienvenidos al IEHS
            </h1>

            {/* Texto */}
            <div className="mx-auto max-w-5xl">
              <div
                className="space-y-6 text-lg md:text-xl text-justify bg-white/10 p-6 rounded-xl shadow-lg"
                style={{
                  fontFamily: "'Lora', serif",
                  color: "rgba(255,255,255,0.95)",
                  lineHeight: "1.7",
                }}
              >
                <p>
                  El Instituto de Estudios Histórico-Sociales se creó en 1986 en
                  el marco del clima institucional y académico que propuso a la
                  Universidad como el centro privilegiado de producción del
                  conocimiento científico de excelencia.
                </p>
                <p>
                  Desde entonces el IEHS estimula la labor de investigación de
                  gran parte de los docentes del Departamento de Historia y de
                  otros espacios académicos de la Facultad de Ciencias Humanas
                  de la UNCPBA.
                </p>
                <p>
                  Diferentes temáticas de estudio, en particular, la historia y
                  la sociedad argentina y americana son abordadas desde entonces
                  por los investigadores que se agrupan en diferentes programas
                  de investigación. Como instancia de intercambio, que favorece
                  el desarrollo en esta tarea, el IEHS organiza diversas
                  actividades académicas como reuniones científicas,
                  conferencias y publicaciones con participación de
                  investigadores nacionales e internacionales.
                </p>
                <p>
                  Gracias a la continuidad de esta política académica, se ha
                  podido estimular y garantizar la formación de recursos humanos
                  de alta calificación que hoy se desempeñan como docentes e
                  investigadores de esta casa de estudios. Desde 2012, el IEHS
                  integra el IGEHCS, unidad ejecutora conjunta del CONICET y la
                  UNCPBA.
                </p>
                <p>
                  Vinculación reconocida por convenios con: Universidad Autónoma
                  de Nuevo León; Instituto de Investigaciones Antropológicas –
                  UNAM (México); Centro de Investigaciones y Estudios Superiores
                  en Antropología Social (México); Instituto Mora (México).
                </p>
              </div>
            </div>

            {/* --- AQUÍ VA EL NUEVO HILO DE FOTOS --- */}
            <div className="mt-4">
              <HiloDeFotos
                images={FOTOS_IEHS}
                speedSec={40} // más chico = más rápido; ajustá a gusto
                height={160} // alto del trencito en px
                gap={20} // separación entre fotos en px
                radius={20} // redondeado de cada foto
              />
            </div>
            {/* --- FIN HILO DE FOTOS --- */}
          </div>

          {/* Fondo sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.06)_0%,_transparent_70%)]" />
        </section>

        {/* Sección Proyectos */}
        <main className="flex-grow bg-[#f9fbfc] py-16" id="proyectos">
          <section className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link
              href="/proyectos"
              className="relative p-8 bg-white rounded-xl shadow-md border hover:shadow-lg hover:bg-[#134e5e]/10 transition cursor-pointer overflow-hidden flex items-center justify-center min-h-[140px]"
              prefetch
              aria-label="Ir a Proyectos"
            >
              {/* Marca de agua: logo centrado, opaco y no interactivo */}
              <Image
                src="/logo-iehs.gif"
                alt="Logo como marca de agua"
                width={380}
                height={380}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"
              />

              {/* Contenido en primer plano */}
              <div className="relative z-10 text-center">
                <h2 className="text-2xl font-bold text-[#134e5e] mb-2">
                  Proyectos
                </h2>
                <p className="text-gray-700">
                  Conocé las líneas de investigación y proyectos vigentes en el
                  IEHS.
                </p>
              </div>
            </Link>

            <a
              href="https://ojs2.fch.unicen.edu.ar/ojs-3.1.0/index.php/anuario-ies/index"
              target="_blank"
              rel="noopener noreferrer"
              className="relative p-8  rounded-xl shadow-md border hover:shadow-lg hover:bg-[#134e5e]/10 transition cursor-pointer w-full overflow-hidden flex items-center justify-center min-h-[140px]"
            >
              {/* Fondo con imagen y opacidad */}
              <Image
                src="/fotos/Anuario IEHS.jpg"
                alt="Anuario IEHS"
                fill
                className="object-cover opacity-50 absolute inset-0 z-0"
              />

              {/* Contenido en primer plano */}
              <div className="relative z-10 text-center">
                <h2 className="text-2xl font-bold text-[#134e5e] mb-2">
                  Anuario IEHS
                </h2>
              </div>
            </a>

            <Link
              href="/doctorado"
              className="relative p-8 bg-white rounded-xl shadow-md border hover:shadow-lg hover:bg-[#134e5e]/10 transition cursor-pointer overflow-hidden flex items-center justify-center min-h-[140px]"
              prefetch
            >
              {/* Marca de agua: logo centrado, opaco y no interactivo */}
              <Image
                src="/logo-iehs.gif"
                alt="Logo como marca de agua"
                width={380}
                height={380}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"
              />

              {/* Contenido en primer plano */}
              <div className="relative z-10 text-center">
                <h2 className="text-2xl font-bold text-[#134e5e] mb-2">
                  Doctorado
                </h2>
                <p className="text-gray-700">
                  Información del programa doctoral y requisitos de inscripción.
                </p>
              </div>
            </Link>
          </section>
        </main>

        {/* Autoridades */}
        <Autoridades />
        <main className="flex-grow bg-[#f9fbfc] py-16" id="proyectos">
          <section className="container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <Link
              href="/homenajeOlga"
              className="relative p-8 bg-white rounded-xl shadow-md border hover:shadow-lg hover:bg-[#134e5e]/10 transition cursor-pointer w-full overflow-hidden flex items-center justify-center min-h-[140px]"
              prefetch
            >
              {/* Marca de agua: logo centrado, opaco y no interactivo */}
              <Image
                src="/logo-iehs.gif"
                alt="Logo como marca de agua"
                width={450}
                height={450}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="text-2xl font-bold text-[#134e5e] m-0">
                  Homenaje a Olga Echeverría
                </h2>
              </div>
            </Link>

            <Link
              href="/homenaje-garavaglia"
              className="relative p-8 bg-white rounded-xl shadow-md border hover:shadow-lg hover:bg-[#134e5e]/10 transition cursor-pointer w-full overflow-hidden flex items-center justify-center min-h-[140px]"
              prefetch
            >
              {/* Marca de agua: logo centrado, opaco y no interactivo */}
              <Image
                src="/logo-iehs.gif"
                alt="Logo como marca de agua"
                width={450}
                height={450}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none"
              />
              <div className="relative z-10 w-full text-center">
                <h2 className="text-2xl font-bold text-[#134e5e] m-0 whitespace-nowrap">
                  Homenaje a Juan Carlos Garavaglia
                </h2>
              </div>
            </Link>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
