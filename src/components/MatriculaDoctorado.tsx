import React from "react";

export default function MatriculaDoctorado() {
  return (
    <section
      id="matricula"
      className="relative w-full max-w-4xl mx-auto my-14
        px-0 py-0 shadow-2xl rounded-b-[2.5rem] rounded-t-[2.5rem]
        border-[3px] border-[#134e5e]/60
        bg-gradient-to-tr from-[#fff7f3] via-[#f3fafd]/95 to-[#e7f5fa]"
      style={{ overflow: "visible", zIndex: 1 }}
    >
      {/* SVG Adorno Superior */}
      <svg className="absolute top-0 left-0 w-full h-20 opacity-40 pointer-events-none" viewBox="0 0 1440 80" fill="none">
        <path
          d="M0,40 Q720,110 1440,40 L1440,80 L0,80 Z"
          fill="url(#gradMatricula)"
        />
        <defs>
          <linearGradient id="gradMatricula" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f9623e" />
            <stop offset="1" stopColor="#134e5e" />
          </linearGradient>
        </defs>
      </svg>

      {/* SVG Adorno Esquina */}
      <svg className="absolute top-10 right-4 w-32 h-32 opacity-15 rotate-12 pointer-events-none" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="40" fill="#f9623e"/>
      </svg>

      {/* SVG Adorno Esquina */}
      <svg className="absolute bottom-2 left-0 w-28 h-28 opacity-10 -rotate-12 pointer-events-none" viewBox="0 0 100 100">
        <rect x="10" y="10" width="80" height="80" rx="30" fill="#134e5e"/>
      </svg>

      {/* Contenido */}
      <div className="relative z-10 px-8 py-12 flex flex-col gap-7">
        <div className="flex items-center gap-3 mb-2">
          <svg className="w-10 h-10 text-[#134e5e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="16" rx="3" stroke="#134e5e" strokeWidth="2" fill="none"/>
            <path d="M7 4v2m10-2v2M3 10h18" stroke="#f9623e" strokeWidth="2"/>
          </svg>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#134e5e] tracking-wide drop-shadow">
            Matrícula
          </h2>
        </div>
        <div className="text-[#15394b] text-lg md:text-xl font-medium space-y-4 leading-relaxed md:pl-6">
          <p>
            <b className="text-[#134e5e] uppercase tracking-wider">Matrícula anual y aranceles</b>
          </p>
          <p>
            <span className="font-bold text-[#f9623e]">Matrícula Anual: $62.000.</span>
            <br />
            <span className="text-[#134e5e]">
              Docentes de Universidades Nacionales, egresados de la Facultad de Ciencias Humanas de la UNICEN y becarios (CONICET, AGENCIA, etc.): <span className="font-bold text-[#f9623e]">$33.000</span>
            </span>
          </p>
          <p>
            <span className="font-bold text-[#134e5e]">Valor de los cursos para alumnos externos al Programa:</span>{" "}
            <span className="font-bold text-[#f9623e]">$26.000</span>
          </p>
          <p>
            <span className="font-bold text-[#134e5e]">
              Para los egresados de la Facultad de Ciencias Humanas, docentes de Universidades Nacionales y becarios (CONICET, AGENCIA, etc.), el arancel es de:
            </span>{" "}
            <span className="font-bold text-[#f9623e]">$16.000</span>
          </p>
          <p>
            <span className="font-bold text-[#134e5e]">Derecho de Defensa de Tesis:</span>{" "}
            <span className="font-bold text-[#f9623e]">$88.000</span>
          </p>
        </div>
        {/* Botón de descarga */}
        <div className="flex mt-6">
          <a
            href="/inscripción_a_seminario.doc"
            download
            className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#134e5e] to-[#f9623e] text-white font-extrabold shadow hover:brightness-110 transition text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="20" width="16" height="2" rx="1" fill="#fff" />
            </svg>
            Descargar formulario de inscripción
          </a>
        </div>
      </div>
    </section>
  );
}
