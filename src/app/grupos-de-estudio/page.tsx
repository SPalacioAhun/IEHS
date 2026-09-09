import type { Metadata } from "next"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Grupos de Estudio – IEHS – UNICEN",
  description: "Grupos de estudio del Instituto de Estudios Histórico-Sociales.",
}

type GrupoEstudio = {
  nombre: string
  descripcion: string[]
  coordinadores: string[]
  integrantes: string[]
  contacto: string
}

const gruposEstudio: GrupoEstudio[] = [
  {
    nombre: "Historia socio-cultural y política de la Argentina Contemporánea",
    descripcion: [
      "El Grupo de Estudios se propone estimular el examen crítico de la historia socio-cultural y política de la Argentina del siglo XX y primeras décadas del siglo XXI, incentivando y acompañando la elaboración de tesis de grado y posgrado vinculadas a los nudos problemáticos de la historia argentina contemporánea, a partir de dos ejes centrales de indagación. Por un lado, el estudio de la historia política (dinámicas, actores, problemas); por el otro, el estudio de las reconfiguraciones sociales y culturales que experimentó la sociedad argentina a lo largo del siglo XX y las primeras décadas del siglo XXI.",
      "Se propone, así, enfocar sobre problemas que enlazan la política, la sociedad y la cultura, en diversas escalas, y atendiendo a una multiplicidad de objetos y actores: partidos políticos, dirigencias, juventudes, iglesia católica, prensa periódica, asociaciones civiles, familias, infancias, consumos culturales, identidades, prácticas y representaciones.",
    ],
    coordinadores: ["Dra. Paola Gallo", "Lic. Juan Pablo Fossati"],
    integrantes: [
      "Prof. Marcos Paoletta",
      "Prof. Alexandra Jensen",
      "Estudiante Rocío Benítez Blasco",
      "Estudiante Rocío Benítez",
      "Estudiante Sol Pérez",
      "Estudiante Martina Fernández Quiroga",
      "Estudiante Agustín Aguirre",
    ],
    contacto: "historiasocioculypol@fch.unicen.edu.ar",
  },
]

function GrupoEstudioArticle({ grupo }: { grupo: GrupoEstudio }) {
  return (
    <article className="overflow-hidden rounded-md border border-slate-200/90 bg-white shadow-[0_10px_30px_rgba(19,78,94,0.06)]">
      <div className="h-1 bg-[#2f7d78]" aria-hidden="true" />
      <div className="grid md:grid-cols-[minmax(0,1.85fr)_minmax(15rem,1fr)]">
        <div className="px-5 py-7 sm:px-8 sm:py-9 md:px-10 md:py-11">
          <h2 className="max-w-3xl text-2xl font-bold leading-tight tracking-tight text-[#134e5e] sm:text-3xl md:text-[2rem]">
            {grupo.nombre}
          </h2>
          <div className="mt-6 max-w-3xl space-y-5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">
            {grupo.descripcion.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
          </div>
        </div>

        <aside className="border-t border-slate-200 bg-[#f7fafb] px-5 py-7 sm:px-8 sm:py-9 md:border-l md:border-t-0 md:px-8 md:py-11" aria-label={`Información del grupo ${grupo.nombre}`}>
          <section>
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Coordinación</h3>
            <ul className="mt-3 space-y-2 text-base leading-6 text-slate-700">
              {grupo.coordinadores.map((coordinador) => (
                <li key={coordinador}>{coordinador}</li>
              ))}
            </ul>
          </section>

          <section className="mt-7 border-t border-slate-200 pt-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Integrantes</h3>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
              {grupo.integrantes.map((integrante) => (
                <li key={integrante}>{integrante}</li>
              ))}
            </ul>
          </section>

          <section className="mt-7 border-t border-slate-200 pt-7">
            <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Contacto</h3>
            <a
              className="mt-3 inline-block max-w-full break-all font-semibold text-[#134e5e] underline decoration-[#f9623e] decoration-2 underline-offset-4 transition-colors hover:text-[#f9623e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#134e5e]"
              href={`mailto:${grupo.contacto}`}
            >
              {grupo.contacto}
            </a>
          </section>
        </aside>
      </div>
    </article>
  )
}

export default function GruposDeEstudioPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fa]">
      <Header />

      <main className="flex-grow px-4 py-8 sm:px-6 sm:py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <header className="border-b border-slate-200 pb-6 md:pb-7">
            <h1 className="text-3xl font-bold tracking-tight text-[#134e5e] md:text-4xl">Grupos de Estudio</h1>
          </header>

          <section className="mt-7 space-y-8 md:mt-8" aria-label="Grupos de estudio">
            {gruposEstudio.map((grupo) => (
              <GrupoEstudioArticle key={grupo.nombre} grupo={grupo} />
            ))}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
