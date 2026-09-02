"use client"

import { useEffect, useState } from "react"

type EstudiantePosgrado = {
  nombre: string
  descripcion?: string
  contacto?: string
}

const estudiantes: EstudiantePosgrado[] = [
  {
    nombre: "Pilar Bageneta",
    descripcion:
      "Pilar Bageneta es Profesora y Licenciada en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires, Magister en Historia por la Universidad de Cantabria (España) y doctoranda en el Doctorado en Historia Moderna por la misma Universidad.\n\nSu tema de investigación se centra en el estudio de los matrimonios fallidos por razón de infidelidades y otros comportamientos que provocaban tensión y quiebre en las relaciones de pareja en Cantabria y el Río de la Plata en el siglo XVIII, proponiendo indagar en los márgenes de decisión y en las capacidades de gestión de las mujeres.",
    contacto: "mailto:pilarbageneta@gmail.com",
  },
  { nombre: "Juan Martín Duana" },
  {
    nombre: "Iñaki Martínez Secchiano",
    descripcion:
      "Iñaki Martínez Secchiano es Profesor de Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Se encuentra cursando el Doctorado en Historia del Instituto de Estudios Histórico-Sociales (FCH-UNICEN). Su tema de investigación se centra en el exilio vasco en Argentina entre la Guerra Civil española y la consolidación de la España de Franco (1936-1950).",
    contacto: "mailto:inaki.mshistoria@gmail.com",
  },
  {
    nombre: "Carla Dátola",
    descripcion:
      "Carla Dátola es Profesora y Licenciada en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Doctoranda en el Programa de Doctorado en Historia del Instituto de Estudios Histórico-Sociales (IEHS-UNICEN).\n\nSu línea de investigación se centra en el estudio de las relaciones interétnicas forjadas por los cacicazgos que desenvolvieron en las pampas, que interactuaron con los actores de la frontera bonaerense y la ciudad de Buenos Aires, durante las primeras décadas del siglo XIX, más precisamente entre 1800 y 1833.",
    contacto: "mailto:carladatolavelez@gmail.com",
  },
]

export default function Estudiantes() {
  const [seleccionado, setSeleccionado] = useState<EstudiantePosgrado | null>(null)

  useEffect(() => {
    if (!seleccionado) return
    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSeleccionado(null)
    }
    document.addEventListener("keydown", cerrarConEscape)
    return () => document.removeEventListener("keydown", cerrarConEscape)
  }, [seleccionado])

  const enlace =
    "text-[#134e5e] underline-offset-4 hover:text-[#f9623e] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9623e]"

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-10 text-center text-4xl font-extrabold leading-relaxed tracking-tight text-transparent drop-shadow-md bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text md:text-5xl">
        Miembros Estudiantes de Posgrado
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {estudiantes.map((estudiante) => (
          <article
            key={estudiante.nombre}
            className="flex h-full min-h-[225px] flex-col rounded-3xl border border-[#134e5e]/15 bg-white p-6 shadow-xl transition-transform duration-200 hover:-translate-y-1"
          >
            <p className="mb-1 text-xs uppercase tracking-wide text-[#134e5e]">
              Estudiante de Posgrado
            </p>
            <h2 className="mb-3 text-[1.1rem] font-semibold text-[#134e5e]">
              {estudiante.nombre}
            </h2>
            {estudiante.descripcion && (
              <p className="mb-5 line-clamp-3 flex-1 whitespace-pre-line text-sm text-gray-600">
                {estudiante.descripcion}
              </p>
            )}
            {estudiante.contacto && (
              <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-[#134e5e]/15 pt-4 text-sm font-medium">
                <button type="button" onClick={() => setSeleccionado(estudiante)} className={enlace}>
                  Ver perfil
                </button>
                <a href={estudiante.contacto} className={enlace}>
                  Contacto
                </a>
              </div>
            )}
          </article>
        ))}
      </div>

      {seleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
          <button type="button" aria-label="Cerrar perfil" className="absolute inset-0 cursor-default bg-black/40" onClick={() => setSeleccionado(null)} />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-estudiante-titulo"
            className="relative z-10 max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-[#22677e]/25 bg-gradient-to-br from-[#eaf3fa] via-[#f7fafc] to-[#fce4d6] px-6 py-8 shadow-2xl animate-fadein sm:px-8 sm:py-10"
          >
            <button type="button" onClick={() => setSeleccionado(null)} className="absolute right-4 top-3 text-2xl font-bold text-[#134e5e] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9623e]" aria-label="Cerrar perfil">
              ×
            </button>
            <h2 id="modal-estudiante-titulo" className="pr-8 text-center text-lg font-bold text-[#134e5e]">
              {seleccionado.nombre}
            </h2>
            <div className="my-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#134e5e] to-[#f9623e]" />
            <p className="whitespace-pre-line text-justify text-sm text-gray-800">{seleccionado.descripcion}</p>
            {seleccionado.contacto && (
              <a href={seleccionado.contacto} className={`${enlace} mt-6 inline-block text-sm font-medium`}>
                Contacto
              </a>
            )}
          </div>
        </div>
      )}

      <style>{`@keyframes fadein { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } } .animate-fadein { animation: fadein 0.2s ease; }`}</style>
    </section>
  )
}
