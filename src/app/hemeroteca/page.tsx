import type { Metadata } from "next"

import Footer from "@/components/Footer"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Hemeroteca – IEHS – UNICEN",
  description: "Biblioteca-Hemeroteca del Instituto de Estudios Histórico-Sociales.",
}

// Actualizar este valor cuando IEHS confirme la URL institucional del catálogo.
const CATALOGO_URL: string | null = null

const contactDetails = [
  {
    label: "Email",
    value: "hemero@fch.unicen.edu.ar",
    href: "mailto:hemero@fch.unicen.edu.ar",
  },
  {
    label: "Teléfono",
    value: "249-445683",
    href: "tel:249445683",
  },
]

export default function HemerotecaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9fbfc]">
      <Header />

      <main className="flex-grow px-6 py-10 md:py-12">
        <div className="mx-auto max-w-5xl">
          <section
            className="grid gap-10 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm md:grid-cols-[1.65fr_1fr] md:gap-12 md:p-10"
            aria-labelledby="hemeroteca-heading"
          >
            <div className="flex flex-col items-start">
              <h1
                id="hemeroteca-heading"
                className="text-sm font-bold uppercase tracking-[0.16em] text-[#134e5e]"
              >
                Biblioteca-Hemeroteca del IEHS
              </h1>
              <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700 md:text-2xl md:leading-10">
                Especializada en Historia y Ciencias Sociales, la Biblioteca-Hemeroteca del IEHS cuenta actualmente con aproximadamente 8.500 títulos a disposición.
              </p>

              <div className="mt-8 flex flex-col items-start gap-2">
              {CATALOGO_URL ? (
                <a
                  className="rounded-md bg-[#134e5e] px-7 py-3 font-bold tracking-wide text-white transition-colors hover:bg-[#f9623e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#134e5e]"
                  href={CATALOGO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CATÁLOGO
                </a>
              ) : (
                <>
                  <button
                    className="cursor-not-allowed rounded-md bg-slate-300 px-7 py-3 font-bold tracking-wide text-slate-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#134e5e]"
                    type="button"
                    disabled
                    aria-describedby="catalogo-pendiente"
                  >
                    CATÁLOGO
                  </button>
                  <p id="catalogo-pendiente" className="text-sm text-slate-500">
                    Enlace pendiente de actualización
                  </p>
                </>
              )}
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <h2 className="text-lg font-semibold text-[#134e5e]">Información</h2>
              <div className="mt-5 divide-y divide-slate-200">
                <div className="pb-5">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">Horarios</h3>
                  <p className="mt-2 leading-7 text-slate-700">
                    Los horarios de atención son de lunes a viernes de 9.00 a 15:00 horas.
                  </p>
                </div>
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="py-5 last:pb-0">
                    <h3 className="text-xs font-bold uppercase tracking-wide text-slate-500">{detail.label}</h3>
                    <a
                      className="mt-2 inline-block break-words font-medium text-[#134e5e] underline decoration-[#f9623e] decoration-2 underline-offset-4 transition-colors hover:text-[#f9623e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#134e5e]"
                      href={detail.href}
                    >
                      {detail.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
