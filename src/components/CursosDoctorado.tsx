"use client";
import React from "react";

export default function CursosDoctorado() {
  return (
    <section
      id="cursos"
      className="relative w-full max-w-5xl mx-auto my-12 px-0 py-0 select-none"
      style={{ zIndex: 1 }}
    >
      {/* Onda superior */}
      <svg viewBox="0 0 600 80" className="w-full h-16 -mb-2" preserveAspectRatio="none">
        <path
          d="M0,40 Q300,80 600,40 L600,80 L0,80 Z"
          fill="url(#gradCursos)"
        />
        <defs>
          <linearGradient id="gradCursos" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#dde9f3" />
            <stop offset="0.5" stopColor="#f3fafd" />
            <stop offset="1" stopColor="#134e5e" />
          </linearGradient>
        </defs>
      </svg>

      {/* Tarjeta principal */}
      <div className="relative shadow-2xl border-[3px] border-[#134e5e]/50 rounded-t-[2.5rem] rounded-b-[2.5rem] overflow-hidden">
        {/* Gradiente animado sutil */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(110deg, #fff7f3 10%, #e7f5fa 65%, #dde9f3 100%)",
            animation: "gradientMove 10s ease-in-out infinite alternate"
          }}
        />
        {/* Adorno SVG institucional */}
        <svg
          className="absolute top-0 right-0 w-52 opacity-10 pointer-events-none select-none z-0"
          viewBox="0 0 140 140"
          fill="none"
        >
          <ellipse cx="110" cy="30" rx="65" ry="32" fill="#f9623e" />
        </svg>

        <div className="relative z-10 px-10 py-12 flex flex-col gap-6">
          {/* Header */}
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-11 h-11 text-[#134e5e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="16" rx="4" stroke="#134e5e" strokeWidth="2" fill="none"/>
              <path d="M7 4v2m10-2v2M3 10h18" stroke="#f9623e" strokeWidth="2"/>
            </svg>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#134e5e] tracking-wide drop-shadow">
              Cursos del Doctorado
            </h2>
          </div>

          {/* Contenido */}
          <div className="text-[#15394b] text-lg md:text-xl font-medium space-y-5 leading-relaxed">
  <p>
    <b className="text-[#134e5e] uppercase tracking-wider">Cursos (información sobre oferta de seminarios)</b>
  </p>
  <p>
    Los cursos están a cargo de docentes reconocidos especialistas, tanto de la PDP como profesores externos invitados a dictar un seminario. Los cursos se dictan, en general, de manera intensiva a lo largo de una semana. En ocasiones, los mismos pueden dividirse en dos partes a dictarse con un intervalo de un mes aproximadamente.
  </p>
  <p>
    Cada curso dará 1 (un) crédito cada diez (10) horas reloj dictadas. La calificación se establecerá en una escala de 0 a 10, requiriéndose un mínimo de 6 (seis) puntos para la aprobación. El CAPH podrá autorizar que los alumnos tomen cursos y seminarios en otras Unidades Académicas Universitarias del país o del exterior, siempre que la solicitud se hubiere realizado previamente y se considere que reúnen las condiciones académicas mínimas de nivel y exigencia y relevancia para la labor específica del alumno.
  </p>
  <p>
    A tal efecto deberá adjuntar a la solicitud de autorización, el programa del mismo, el CV del docente a cargo, la duración en horas reloj y la forma de evaluación. Se reconocerá hasta un máximo del 50% de los créditos cursados posteriores al ingreso por la totalidad de los cursos efectuados en otras unidades académicas, salvo en casos excepcionales, a criterio del CAPH.
  </p>
  <p>
    El Doctorado admite la inscripción de alumnos externos a los seminarios que ofrece. Para ello deberá enviarse copia del título de grado en Historia o disciplinas afines, copia de 1° y 2° hoja del DNI, copia de partida de nacimiento si en el DNI no figura la ciudad correspondiente y la planilla de inscripción correspondiente que se puede obtener en esta misma página.
  </p>
  <p>
  <b>
    Los alumnos extranjeros deben comunicarse con el área de Relaciones Internacionales. Contacto: Ines Sack, E-mail: <a href="mailto:gabrielainesack@gmail.com" className="underline text-[#134e5e] hover:text-[#f9623e] transition">gabrielainesack@gmail.com</a>, Tel: <a href="tel:54249442200" className="underline text-[#134e5e] hover:text-[#f9623e]">54-0249-442200 interno 182</a>.
  </b>
</p>

</div>


          {/* Botón de descarga */}
          <div className="flex justify-start mt-6">
            <a
              href="/inscripción_a_seminario_alumnos_externos.doc"
              download
              className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#f9623e] text-white font-extrabold shadow hover:bg-[#134e5e] transition text-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="4" y="20" width="16" height="2" rx="1" fill="#fff" />
              </svg>
              Descargar Inscripción a Cursos (Alumnos Externos)
            </a>
          </div>
        </div>
      </div>

      {/* Onda inferior */}
      <svg viewBox="0 0 600 80" className="w-full h-16 -mt-2" preserveAspectRatio="none">
        <path
          d="M0,40 Q300,0 600,40 L600,0 L0,0 Z"
          fill="url(#gradCursos)"
        />
      </svg>

      {/* Keyframes para gradiente animado */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        div[style*="gradient"] {
          background-size: 200% 200%;
        }
      `}</style>
    </section>
  );
}
