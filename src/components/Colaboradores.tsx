"use client"

import { useEffect, useState } from "react"

type Colaborador = {
  nombre: string
  descripcion: string
  contacto: string
}

const colaboradores: Colaborador[] = [
  { nombre: "Victoria Arrascaete", descripcion: "Victoria Arrascaeta en Profesora de Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Estudia el Doctorado en Historia en la FaHCE, UNLP, la Maestría en Filosofía con Orientación en Filosofía e Historia de la Ciencia en la UNQ.", contacto: "mailto:victoriaarrascaete@yahoo.com.ar" },
  { nombre: "Leonardo Fuentes", descripcion: "Leonardo Fuentes es Doctor en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Su trabajo se centra en la historia política y social, específicamente en temas relacionados con radicalismo y conservadorismo en los años de 1930.", contacto: "mailto:lfuentes@fch.unicen.edu.ar" },
  { nombre: "Florencia Ramón", descripcion: "Florencia Ramón es Profesora en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires, Especialista en Educación y Derechos Humanos y Técnica Superior en Administración de Documentos y Archivos por el Instituto Superior de Formación Docente N°8. Trabaja como archivista en el Centro de Documentación de Geografía, Historia y Ciencias Sociales (IGEHCS). Realiza tareas de divulgación en escuelas y en organizaciones sociales sobre la importancia de los archivos y su preservación. Es profesional adjunta CONICET", contacto: "mailto:florencia.ramon@gmail.com" },
  { nombre: "Luciano di Salvo", descripcion: "Luciano di Salvo es Profesor en Historia, por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Ha realizado una Especialización sobre Problemáticas de la Enseñanza de las Ciencias Sociales y diplomaturas sobre la fotografía como herramienta de investigación social en la Universidad de Buenos Aires, la historia pública y la divulgación social de la historia en la Universidad Nacional de Quilmes. Administra el programa Centro de Documentación de Geografía, Historia y Ciencias Sociales (IGEHCS). Es profesional adjunto CONICET", contacto: "mailto:disalvoluciano@yahoo.com.ar" },
]

export default function Colaboradores() {
  const [seleccionado, setSeleccionado] = useState<Colaborador | null>(null)

  useEffect(() => {
    if (!seleccionado) return
    const cerrarConEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSeleccionado(null)
    }
    document.addEventListener("keydown", cerrarConEscape)
    return () => document.removeEventListener("keydown", cerrarConEscape)
  }, [seleccionado])

  const enlace = "text-[#134e5e] underline-offset-4 hover:text-[#f9623e] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9623e]"

  return (
    <section className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-10 text-center text-4xl font-extrabold leading-relaxed tracking-tight text-transparent drop-shadow-md bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text md:text-5xl">Colaboradores</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {colaboradores.map((colaborador) => (
          <article key={colaborador.nombre} className="flex h-full flex-col rounded-3xl border border-[#134e5e]/15 bg-white p-6 shadow-xl transition-transform duration-200 hover:-translate-y-1">
            <p className="mb-1 text-xs uppercase tracking-wide text-[#134e5e]">Colaborador/a</p>
            <h2 className="mb-3 text-[1.1rem] font-semibold text-[#134e5e]">{colaborador.nombre}</h2>
            <p className="mb-5 line-clamp-3 flex-1 whitespace-pre-line text-sm text-gray-600">{colaborador.descripcion}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-[#134e5e]/15 pt-4 text-sm font-medium">
              <button type="button" onClick={() => setSeleccionado(colaborador)} className={enlace}>Ver perfil</button>
              <a href={colaborador.contacto} className={enlace}>Contacto</a>
            </div>
          </article>
        ))}
      </div>

      {seleccionado && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4">
          <button type="button" aria-label="Cerrar perfil" className="absolute inset-0 cursor-default bg-black/40" onClick={() => setSeleccionado(null)} />
          <div role="dialog" aria-modal="true" aria-labelledby="modal-colaborador-titulo" className="relative z-10 max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-[2rem] border border-[#22677e]/25 bg-gradient-to-br from-[#eaf3fa] via-[#f7fafc] to-[#fce4d6] px-6 py-8 shadow-2xl animate-fadein sm:px-8 sm:py-10">
            <button type="button" onClick={() => setSeleccionado(null)} className="absolute right-4 top-3 text-2xl font-bold text-[#134e5e] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f9623e]" aria-label="Cerrar perfil">×</button>
            <h2 id="modal-colaborador-titulo" className="pr-8 text-center text-lg font-bold text-[#134e5e]">{seleccionado.nombre}</h2>
            <div className="my-3 h-1 w-16 rounded-full bg-gradient-to-r from-[#134e5e] to-[#f9623e]" />
            <p className="whitespace-pre-line text-justify text-sm text-gray-800">{seleccionado.descripcion}</p>
            <a href={seleccionado.contacto} className={`${enlace} mt-6 inline-block text-sm font-medium`}>Contacto</a>
          </div>
        </div>
      )}
      <style>{`@keyframes fadein { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } } .animate-fadein { animation: fadein 0.2s ease; }`}</style>
    </section>
  )
}
