import type { Metadata } from "next"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Fondos Documentales – IEHS – UNICEN",
  description:
    "Fondos documentales conservados por el Instituto de Estudios Histórico-Sociales.",
}

type FondoDocumental = {
  nombre: string
  descripcion?: string
  estado?: "disponible" | "pendiente"
}

const fondosDocumentales: FondoDocumental[] = [
  {
    nombre: "El Eco de Tandil",
    descripcion:
      "El Eco de Tandil. Fundado en 1832, se trata del cuarto periódico en actividad más antiguo del país. El repositorio contiene ejemplares microfilmados (1832-1930) y en formato papel (1930-1970).",
  },
  {
    nombre: "Archivo del Movimiento de Sacerdotes para el Tercer Mundo",
    descripcion:
      "Fondo documental del Archivo del Movimiento de Sacerdotes para el Tercer Mundo inscripto en el Programa Memoria del Mundo de la UNESCO (MoWLAC) en 2024.",
  },
  {
    nombre: "Archivo Estévez",
    estado: "pendiente",
  },
]

function FondoDocumentalItem({ fondo, indice }: { fondo: FondoDocumental; indice: number }) {
  const informacionPendiente = fondo.estado === "pendiente" && !fondo.descripcion

  return (
    <article className="border-b border-slate-200/90 py-6 last:border-b-0 md:py-7">
      <div className="grid grid-cols-[2rem_minmax(0,1fr)] gap-4 md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-5">
        <span className="pt-1 font-mono text-xs tracking-[0.14em] text-slate-400" aria-hidden="true">
          {String(indice + 1).padStart(2, "0")}
        </span>
        <div className="max-w-3xl">
          <h2 className="text-xl font-semibold leading-snug text-[#134e5e] md:text-2xl">
            {fondo.nombre}
          </h2>
          {fondo.descripcion ? (
            <p className="mt-2.5 text-base leading-7 text-slate-700 md:text-lg md:leading-8">{fondo.descripcion}</p>
          ) : null}
          {informacionPendiente ? (
            <p className="mt-2.5 text-sm italic leading-6 text-slate-500">
              Información institucional pendiente
            </p>
          ) : null}
        </div>
      </div>
    </article>
  )
}

export default function FondosDocumentalesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f6f9fa]">
      <Header />

      <main className="flex-grow px-4 py-8 sm:px-6 sm:py-10 md:py-14">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-md border border-slate-200/90 bg-white shadow-[0_10px_30px_rgba(19,78,94,0.06)]">
          <div className="h-1 bg-[#2f7d78]" aria-hidden="true" />
          <div className="px-5 py-7 sm:px-8 sm:py-9 md:px-12 md:py-11">
            <section className="border-b border-slate-200 pb-7 md:pb-8" aria-labelledby="fondos-heading">
              <h1 id="fondos-heading" className="text-3xl font-bold tracking-tight text-[#134e5e] md:text-4xl">
                Fondos Documentales
              </h1>
              <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-700 md:text-xl">
                En el IEHS se resguardan los siguientes Fondos Documentales:
              </p>
            </section>

            <section aria-label="Fondos documentales conservados">
              {fondosDocumentales.map((fondo, indice) => (
                <FondoDocumentalItem key={fondo.nombre} fondo={fondo} indice={indice} />
              ))}
            </section>

            <section className="mt-7 border border-slate-200/90 bg-[#f7fafb] px-5 py-6 md:mt-8 md:px-7 md:py-7" aria-labelledby="consulta-heading">
              <h2 id="consulta-heading" className="text-2xl font-semibold text-[#134e5e] md:text-3xl">
                Consulta
              </h2>
              <p className="mt-3 max-w-3xl text-base leading-7 text-slate-700 md:text-lg md:leading-8">
                Estos fondos forman parte del Centro de Documentación de Geografía, Historia y Ciencias Sociales (CEGEHCS), y se encuentran abiertos a su consulta.
              </p>
              <a
                className="mt-4 inline-block max-w-full break-all font-semibold text-[#134e5e] underline decoration-[#f9623e] decoration-2 underline-offset-4 transition-colors hover:text-[#f9623e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#134e5e]"
                href="mailto:iehs@fch.unicen.edu.ar"
              >
                iehs@fch.unicen.edu.ar
              </a>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
