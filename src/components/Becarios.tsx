"use client"

import { useEffect, useState } from "react"

type Becario = {
  nombre: string
  descripcion: string
  contacto: string
}

const becarios: Becario[] = [
  { nombre: "Luna Dobal", descripcion: "Luna Dobal es Profesora y Licenciada en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires, y doctoranda del Programa de Doctorado en Historia del Instituto de Estudios Histórico-Sociales (FCH-UNICEN).\n\nEs becaria posdoctoral CONICET.\n\nProyecto: Amor, mujeres y política: El amor como práctica y discurso en los procesos de construcción de la ciudadanía femenina.", contacto: "mailto:lunadobal@gmail.com" },
  { nombre: "Juan Pablo Fossati", descripcion: "Juan Pablo Fossati es Profesor y Licenciado en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires, y doctorando del Programa de Doctorado en Historia del Instituto de Estudios Histórico-Sociales (FCH-UNICEN).\n\nEs becario doctoral CONICET\n\nProyecto: La dinámica interna del Partido Justicialista en la provincia de Buenos Aires durante la reconstrucción democrática (1982- 1987)", contacto: "mailto:j.pfossati.jpf@gmail.com" },
  { nombre: "Julia Olazábal", descripcion: "Julia Olazábal es Profesora y Licenciada en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires, y doctoranda del Programa de Doctorado en Historia del Instituto de Estudios Histórico-Sociales (FCH-UNICEN).\n\nBecaria doctoral CONICET\n\nProyecto: El escritor ruso como intelligent y la literatura como teoría pedagógica. La construcción de un proyecto educativo en la obra de Lev Tolstóy (1860-1920).", contacto: "mailto:olazabaljulia@gmail.com" },
  { nombre: "Bárbara Sosa", descripcion: "Bárbara Soca es Técnica Superior en gestión cultural, Licenciada en Museología y repositorios culturales y naturales (UNDAV) y Magister en Arte y Sociedad en Latinoamérica (Facultad de Arte- UNICEN). Doctoranda en el Programa de Doctorado en Historia del Instituto de Estudios Histórico-Sociales (FCH-UNICEN).\n\nEs becaria doctoral CONICET\n\nProyecto: Patrimonio y Comunidad. La protección del legado histórico y cultural a través de la memoria social del barrio Cerro Leones de la ciudad de Tandil, provincia de Buenos Aires.", contacto: "mailto:barbara.sosa04@gmail.com" },
  { nombre: "Selene Arislur", descripcion: "Selene Arislur es Diplomada Universitaria Superior en Comunicación Pública (UNICEN) y Doctora en Arqueología y Licenciada en Ciencias Antropológicas con orientación Arqueológica por la Universidad de Buenos Aires.\n\nBecaria posdoctoral CONICET\n\nProyecto: Estudio comparativo multilineal de colecciones arqueológicas privadas y conjuntos de recolección superficial sistemática de sitios arqueológicos en el partido de Tandil (provincia de Buenos Aires).", contacto: "mailto:arislurselene@gmail.com" },
  { nombre: "María de la Paz Bidauri", descripcion: "María de la Paz Bidauri es Licenciada y Profesora de Sociología y Doctora en Ciencias Sociales por la Universidad Nacional de La Plata.\n\nBecaria posdoctoral CONICET\n\nProyecto: Trayectorias educativo-laborales de mujeres técnicas. El caso de egresadas en automotores y electromecánica en Tandil (2018-2023)", contacto: "mailto:paz.bidauri86@gmail.com" },
  { nombre: "María Soledad González", descripcion: "María Soledad González es Doctora en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires.\n\nBecaria posdoctoral CONICET\n\nProyecto: Educadoras, gestoras y mediadoras culturales en el interior bonaerense (1960-1980)", contacto: "mailto:msgonzalez@live.com.ar" },
]

export default function Becarios() {
  const [seleccionado, setSeleccionado] = useState<Becario | null>(null)

  useEffect(() => {
    if (!seleccionado) return
    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSeleccionado(null)
    }
    document.addEventListener("keydown", cerrarConEscape)
    return () => document.removeEventListener("keydown", cerrarConEscape)
  }, [seleccionado])

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow-md tracking-tight leading-relaxed">
        Becarios
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {becarios.map((becario) => (
          <article key={becario.nombre} className="flex h-full flex-col rounded-3xl border border-[#134e5e]/15 bg-white p-6 shadow-xl transition-transform duration-200 hover:-translate-y-1">
            <p className="mb-1 text-xs uppercase tracking-wide text-[#134e5e]">Becario/a</p>
            <h2 className="mb-3 text-[1.1rem] font-semibold text-[#134e5e]">{becario.nombre}</h2>
            <p className="mb-5 line-clamp-3 flex-1 whitespace-pre-line text-sm text-gray-600">{becario.descripcion}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[#134e5e]/15 pt-4 text-sm font-medium">
              <button type="button" onClick={() => setSeleccionado(becario)} className="text-[#134e5e] underline-offset-4 hover:text-[#f9623e] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9623e]">Ver perfil</button>
              <a href={becario.contacto} className="text-[#134e5e] underline-offset-4 hover:text-[#f9623e] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9623e]">Contacto</a>
            </div>
          </article>
        ))}
      </div>

      {seleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
          <button type="button" aria-label="Cerrar perfil" className="absolute inset-0 cursor-default bg-black/40" onClick={() => setSeleccionado(null)} />
          <div role="dialog" aria-modal="true" aria-labelledby="modal-becario-titulo" className="relative z-10 max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-[#22677e]/25 bg-gradient-to-br from-[#eaf3fa] via-[#f7fafc] to-[#fce4d6] px-6 py-8 shadow-2xl animate-fadein sm:px-8 sm:py-10">
            <button type="button" onClick={() => setSeleccionado(null)} className="absolute right-4 top-3 text-2xl font-bold text-[#134e5e] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9623e]" aria-label="Cerrar perfil">×</button>
            <h2 id="modal-becario-titulo" className="pr-8 text-center text-lg font-bold text-[#134e5e]">{seleccionado.nombre}</h2>
            <div className="my-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#134e5e] to-[#f9623e]" />
            <p className="whitespace-pre-line text-justify text-sm text-gray-800">{seleccionado.descripcion}</p>
            <a href={seleccionado.contacto} className="mt-6 inline-block text-sm font-medium text-[#134e5e] underline-offset-4 hover:text-[#f9623e] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9623e]">Contacto</a>
          </div>
        </div>
      )}
      <style>{`@keyframes fadein { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } } .animate-fadein { animation: fadein 0.2s ease; }`}</style>
    </section>
  )
}
