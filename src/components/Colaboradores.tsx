/* eslint-disable @next/next/no-img-element */
// components/Colaboradores.tsx
"use client"
import React, { useState } from "react"

const colaboradores = [
  { nombre: "Prof. Victoria Arrascaete", foto: "", descripcion: "" },
  { nombre: "Dr. Leonardo Fuentes", foto: "", descripcion: "" },
  { nombre: "Prof. Florencia Ramón", foto: "/MariaRamon.jpg", descripcion: "Florencia Ramón es Profesora en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires, Especialista en Educación y Derechos Humanos y Técnica Superior en Administración de Documentos y Archivos por el Instituto Superior de Formación Docente N°8. Se dedica a la identificación, clasificación y conservación de archivos en diferentes formatos y edades. Colabora en los proyectos editoriales del instituto y administración de repositorios documentales. Brinda asesoría sobre tratamiento y gestión documental a instituciones y organizaciones sociales públicas y privadas. Trabaja como archivista en el Centro de Documentación de Geografía, Historia y Ciencias Sociales. Forma parte del programa Universidad y Dictadura. Realiza tareas de divulgación en escuelas y en organizaciones sociales sobre  la importancia de los archivos y su preservación." },
  { nombre: "Prof. Luciano Di Salvo", foto: "/LucianoDiSalvo.jpg", descripcion: "Luciano di Salvo es Profesor en Historia, título otorgado por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Ha realizado una Especialización sobre Problemáticas de la Enseñanza de las Ciencias Sociales y diplomaturas sobre la fotografía como herramienta de investigación social en la Universidad de Buenos Aires, la historia pública y la divulgación social de la historia en la Universidad Nacional de Quilmes. En el año 2017 ingresó a la Carrera de Personal de Apoyo en Investigación en el Instituto de Geografía, Historia y Ciencias Sociales donde realiza tareas de rastreo, traslado, gestión, digitalización y edición de documentos gráficos para la publicación del Atlas que se realiza a partir del Proyecto Unidad Ejecutora “Configuración y reconfiguración socioterritorial de la Argentina en tiempos del bicentenario” y documentos a solicitud de los investigadores y becarios de la institución. Administra el programa Centro de Documentación de Geografía, Historia y Ciencias Sociales. Realiza la curatoría de registros del Repositorio Digital de Ciencias Humanas y la curatoría, publicación y revisión de registros del Instituto de Geografía, Historia y Ciencias Sociales para el Repositorio Institucional CONICET Digital. Administra canales institucionales de comunicación (intra e interinstitucionales y hacia la comunidad) a través de la página web y redes sociales del  Instituto de Geografía, Historia y Ciencias Sociales y Red de Estudios Interdisciplinarios sobre Derechas." },
];

export default function Colaboradores() {
  const [popupIdx, setPopupIdx] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1
  className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow-md tracking-tight leading-relaxed"
>
        Colaboradores/as
      </h1>
       <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
  {colaboradores.map((inv, idx) => (
    <div
      key={inv.nombre}
      onClick={() => setPopupIdx(idx)}
      className="
        flex flex-col justify-between rounded-3xl shadow-xl
        transition-transform duration-200 hover:-translate-y-1 cursor-pointer
        bg-white overflow-hidden min-h-[380px]
        border border-[#134e5e]/15
      "
    >
      {/* ---------- Cuerpo ---------- */}
      <div className="flex flex-col items-center px-6 pt-10 pb-6 flex-1">
        <img
          src={
            inv.foto ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(inv.nombre)}&background=134e5e&color=fff`
          }
          alt={inv.nombre}
          className="
            w-24 h-24 rounded-full object-cover mb-4
            border-4 border-white shadow-md ring-2 ring-[#134e5e]/15
          "
        />
        <p className="text-xs text-[#f9623e] mb-1 tracking-wide uppercase">
          Colaboradores/as
        </p>
        <h3 className="text-[1.1rem] font-semibold text-[#134e5e] text-center mb-2">
          {inv.nombre}
        </h3>
        <p className="text-sm text-gray-600 text-center line-clamp-3">
          {inv.descripcion || "—"}
        </p>
      </div>
      {/* ---------- Franja inferior bicolor SIN TEXTO NI ICONOS ---------- */}
      <div
  className="grid grid-cols-3 text-center text-white text-[0.7rem] font-medium
             bg-gradient-to-r from-[#134e5e] to-[#f9623e]"
>
  <div className="py-3">&nbsp;</div>
  <div className="py-3">&nbsp;</div>
  <div className="py-3">&nbsp;</div>
</div>

    </div>
  ))}
</div>
      {/* Modal popup */}
      {popupIdx !== null && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setPopupIdx(null)}
          />
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="bg-white border-2 border-[#134e5e] rounded-2xl shadow-2xl px-12 py-6 w-full max-w-2xl flex flex-col items-center relative animate-fadein"
              style={{
                minHeight: "220px",
                maxWidth: "600px",
              }}
            >
              {/* Cerrar */}
              <button
                onClick={() => setPopupIdx(null)}
                className="absolute top-3 right-4 text-2xl text-[#134e5e] font-bold hover:text-black"
                aria-label="Cerrar"
              >
                ×
              </button>
              <img
                src={
                  colaboradores[popupIdx].foto ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    colaboradores[popupIdx].nombre
                  )}&background=134e5e&color=fff`
                }
                alt={colaboradores[popupIdx].nombre}
                className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-[#134e5e]/30"
              />
              <div className="text-lg font-bold text-[#134e5e] text-left mb-2 w-full">
                {colaboradores[popupIdx].nombre}
              </div>
              <p className="text-gray-800 text-sm text-left whitespace-pre-line w-full">
                {colaboradores[popupIdx].descripcion}
              </p>
            </div>
          </div>
        </>
      )}
      <style>
        {`
          @keyframes fadein { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
          .animate-fadein { animation: fadein 0.2s ease; }
        `}
      </style>
    </section>
  );
}
