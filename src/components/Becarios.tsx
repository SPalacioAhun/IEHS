/* eslint-disable @next/next/no-img-element */
// components/Becarios.tsx
"use client"
import React, { useState } from "react"

const becarios = [
  { nombre: "Lic. Giuliana Castiglia", foto: "", descripcion: "" },
  { nombre: "Lic. Luna Dobal", foto: "/LunaDobal.jpg", descripcion: "Luna Dobal es Profesora y Licenciada en Historia por la Universidad del Centro de la Provincia de Buenos Aires. Actualmente se encuentra cursando el Doctorado en Historia del Instituto de Estudios Histórico-Sociales de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires. Es docente en institutos terciarios en la ciudad de Azul. Cuenta con una beca interna doctoral con lugar de trabajo en el Instituto de Estudios Histórico-Sociales e Instituto de Geografía, Historia y Ciencias Sociales. En su tema de investigación aborda los procesos de construcción de la ciudadanía femenina, en la zona sudeste de la provincia de Buenos Aires, desde un enfoque que dialoga con los aportes de la historia de las emociones, los estudios de género y la política." },
  { nombre: "Lic. Juan Pablo Fosatti", foto: "/JuanFossati.jpg", descripcion: "Juan Pablo Fossati es Profesor y Licenciado en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Cursa el Doctorado en Historia de la Facultad de Humanas de la mencionada casa de estudios. Es becario doctoral, con lugar de trabajo en el Instituto de Estudios Histórico-Sociales e Instituto de Geografía, Historia y Ciencias Sociales. Se desempeña como ayudante diplomado con dedicación simple de las cátedras de Historia Social General Contemporánea de la carrera de Trabajo Social y de Historia General VI de la carrera de Historia de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires. Su línea de investigación se enfoca en analizar la dinámica política del Partido Justicialista bonaerense, esto implica examinar el comportamiento de los distintos actores que dinamizaron la vida interna del órgano partidario durante los primeros años de reconstrucción democrática, precisamente entre 1982 y 1987." },
  { nombre: "Lic. Julia Olazábal", foto: "/JuliaOlazabal.jpeg", descripcion: "Julia Olazábal es Profesora y Licenciada en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Es becaria doctoral con lugar de trabajo en el Instituto de Geografía, Historia y Ciencias Sociales. Su tema de investigación se centra en el análisis de la obra pedagógica desarrollada por Lev Tolstóy, indagando, por un lado, la forma en que dicho proyecto interactuó con las premisas educativas de la sociedad rusa entre fines del siglo XIX y comienzos del XX y, por el otro, el modo en el cual estos escritos circularon y fueron recepcionados dentro de las fronteras del Imperio Ruso, en el período comprendido entre 1860 y 1920. Para ello, analiza el rol de Tolstóy en tanto intelligent (un sujeto ocupado con el trabajo intelectual pero que asume de modo paralelo un fuerte compromiso moral), considerando no sólo sus tratados sobre educación, sino también el modo en que el autor incluía estas cuestiones en las obras literarias, desde la crítica al sistema educativo imperante hasta las justificaciones del mismo, y la forma en que pensó su contexto. Paralelamente se focaliza, entre otras cuestiones, en el tipo de educación que recibían niños y niñas en la Rusia finisecular según los roles de género establecidos, pero también, en las influencias posteriores que tuvo este proyecto en el campo de la pedagogía y en el desarrollo de la ciencia de la educación." },
  { nombre: "Mgt. Bárbara Sosa", foto: "/BarbaraSosa.jpg", descripcion: "Bárbara Sosa es Magíster en Arte y Sociedad en Latinoamérica por la Universidad Nacional del Centro de la Provincia de Buenos Aires, Licenciada en Museología y Repositorios Culturales y Naturales por la Universidad Nacional de Avellaneda y Técnica Superior en Gestión Cultural por el Instituto de Formación Docente y Técnica N°10. Ha desarrollado numerosos proyectos vinculados al patrimonio cultural en museos y redes de instituciones culturales, a la vez que se ha desempeñado de manera profesional brindando servicios en museos públicos y privados. Su área de estudios se ha orientado al arte público, a la salvaguarda y difusión del patrimonio cultural en vinculación con las manifestaciones culturales y con procesos socio-territoriales y a la comunicación en museos y su vínculo con la memoria social. Es becaria doctoral con lugar de trabajo en el Instituto de Estudios Histórico-Sociales e Instituto de Geografía, Historia y Ciencias Sociales. Cursa el Doctorado en Historia del Instituto de Estudios Histórico-Sociales de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires. En el marco de su beca, su investigación se orienta al patrimonio histórico material e inmaterial asociado a la explotación artesanal de la piedra en la ciudad de Tandil." },
  { nombre: "Dra. Selene Arislur", foto: "", descripcion: "" },
  { nombre: "Dra. María de la Paz Bidauri", foto: "/PazBidauri.jpg", descripcion: "María de la Paz Bidauri es Licenciada y Profesora de Sociología y Doctora en Ciencias Sociales por la la Universidad Nacional de La Plata. Obtuvo dos especializaciones del Ministerio de Educación en Políticas y Programas Socioeducativos y en Problemática del Mundo Contemporáneo. Actualmente cursa la Especialización y Maestría en Docencia Universitaria en la UTN en la ciudad de La Plata. Ha participado en diversos proyectos de investigación en la Universidad Nacional de La Plata dirigidos por Leticia Muñiz Terra sobre trayectorias laborales, clases sociales y desigualdad. Además ha formado parte de la Internacional Network for Comparative Social Inequalities de la Unión Europea, desarrollando estancias en el exterior. Es docente de nivel secundario y de la carrera de sociología en la Universidad Nacional de La Plata. Como profesora invitada ha dado clase en grado en la Universidad Pedagógica Nacional y en posgrado en la Universidad Nacional de Tres de Febrero y en la Universidad Nacional de Misiones.  Ha desarrollado tareas de gestión en la UTN La Plata en el acompañamiento a las trayectorias y en la Unidad de Género. Desarrolló su beca doctoral a través del Consejo Nacional de Investigaciones Científicas y Técnicas en temas estratégicos en el Centro Interdisciplinario de Metodología de las Ciencias Sociales del Instituto de Investigaciones en Humanidades y Ciencias Sociales. Actualmente se incorporó como becaria pos doctoral en el Instituto de Geografía, Historia y Ciencias Sociales. El objetivo de la beca consiste en el análisis de las trayectorias educativo-laborales de jóvenes egresadas de educación técnica en electromecánica y automotores considerando cómo inciden la socialización laboral de una ciudad intermedia como Tandil. Sus intereses de investigación son la sociología del trabajo: trayectorias laborales, programas de empleo e inserción; la sociología y economía de la educación: trayectorias educativas, modalidad de educación técnico-profesional, programas de terminalidad abordando la dinámica educación-trabajo; desigualdad social abordando dimensiones como género, edad y clase social; métodos y técnicas de Investigación: abordajes cualitativos, enfoque biográfico." },
  { nombre: "Dra. María Soledad González", foto: "/MariaGonzalez.jpg", descripcion: "María Soledad González es Doctora en Historia por  la Universidad Nacional del Centro de la Provincia de Buenos Aires. Cuenta con una beca posdoctoral con lugar de trabajo en el Instituto de Estudios Histórico-Sociales e Instituto de Geografía, Historia y Ciencias sociales donde investiga las configuraciones y trayectorias culturales e intelectuales en el interior bonaerense a partir del abordaje de la localidad de Azul, sus vínculos regionales, nacionales e transnacionales en el periodo que comprende las décadas de 1920 a 1960. Allí profundiza sobre el rol de las mujeres ligadas a la docencia que irrumpieron en lo público en espacios de sociabilidad cultural y oficiando como destacadas gestoras culturales, editoras y escritoras." },
];

export default function Becarios() {
  const [popupIdx, setPopupIdx] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h1
  className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow-md tracking-tight leading-relaxed"
>
        Becarios/as
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {becarios.map((bec, idx) => (
          <div
            key={bec.nombre}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition cursor-pointer group"
            onClick={() => setPopupIdx(idx)}
          >
            <img
              src={
                bec.foto ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(bec.nombre)}&background=134e5e&color=fff`
              }
              alt={bec.nombre}
              className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-[#134e5e]/20"
            />
            <div className="text-xl font-bold text-[#134e5e] text-center">{bec.nombre}</div>
          </div>
        ))}
      </div>

      {/* Modal centrado horizontal, textos alineados a la izquierda */}
      {popupIdx !== null && (
        <>
          {/* Fondo oscuro */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setPopupIdx(null)}
          />
          {/* Modal rectangular horizontal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="bg-white border-2 border-[#134e5e] rounded-2xl shadow-2xl px-12 py-6 w-full max-w-2xl flex flex-col items-center relative animate-fadein"
              style={{
                minHeight: "220px",
                maxWidth: "600px",
              }}
            >
              {/* Botón cerrar */}
              <button
                onClick={() => setPopupIdx(null)}
                className="absolute top-3 right-4 text-2xl text-[#134e5e] font-bold hover:text-black"
                aria-label="Cerrar"
              >
                ×
              </button>
              <img
                src={
                  becarios[popupIdx].foto ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    becarios[popupIdx].nombre
                  )}&background=134e5e&color=fff`
                }
                alt={becarios[popupIdx].nombre}
                className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-[#134e5e]/30"
              />
              <div className="text-lg font-bold text-[#134e5e] text-left mb-2 w-full">
                {becarios[popupIdx].nombre}
              </div>
              <p className="text-gray-800 text-sm text-left whitespace-pre-line w-full">
                {becarios[popupIdx].descripcion}
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
