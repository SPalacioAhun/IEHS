import React from "react";

export default function TesisDoctorado() {
  return (
    <section
      id="tesis"
      className="relative w-full max-w-4xl mx-auto my-12 shadow-xl
        bg-gradient-to-br from-[#f3fafd]/90 via-[#fff7f3]/95 to-[#e7f5fa]/90
        rounded-b-[2.5rem] rounded-t-[2.5rem] border-[3px] border-[#f9623e]/40
        px-0 py-0 overflow-visible"
      style={{ zIndex: 1 }}
    >
      {/* Onda superior */}
      <svg
        viewBox="0 0 600 80"
        className="w-full h-16 -mb-2"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 Q300,80 600,40 L600,80 L0,80 Z"
          fill="url(#tesisGradient)"
        />
        <defs>
          <linearGradient id="tesisGradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f9623e" />
            <stop offset="0.3" stopColor="#e7f5fa" />
            <stop offset="1" stopColor="#134e5e" />
          </linearGradient>
        </defs>
      </svg>

      {/* SVG adornos */}
      <svg
        className="absolute top-8 left-8 w-16 h-16 opacity-10"
        fill="#134e5e"
        viewBox="0 0 100 100"
      >
        <circle cx="50" cy="50" r="40" />
      </svg>
      <svg
        className="absolute bottom-8 right-8 w-20 h-20 opacity-10"
        fill="#f9623e"
        viewBox="0 0 100 100"
      >
        <rect x="10" y="10" width="80" height="80" rx="30" />
      </svg>

      {/* Panel principal */}
      <div className="relative z-10 px-8 py-12 md:py-14 rounded-2xl backdrop-blur-md bg-white/75 shadow-xl border border-[#134e5e]/15 mx-2">
        <div className="flex items-center gap-3 mb-4">
          <svg
            className="w-10 h-10 text-[#f9623e]"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <rect x="3" y="4" width="18" height="16" rx="3" stroke="#f9623e" strokeWidth="2" fill="none"/>
            <path d="M7 4v2m10-2v2M3 10h18" stroke="#134e5e" strokeWidth="2"/>
          </svg>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f9623e] tracking-wider drop-shadow">
            Tesis
          </h2>
        </div>
        <div className="text-[#15394b] text-lg md:text-xl font-medium space-y-4 leading-relaxed mb-10">
          <p>
            <b className="text-[#134e5e] uppercase tracking-wider underline decoration-[#f9623e]/40 underline-offset-4">
              Presentación de Tesis
            </b>
          </p>
          <p>
            Una vez completados los <b className="text-[#f9623e] underline underline-offset-2">30 créditos requeridos</b>, se adquiere la condición de doctorando/a y se está en condiciones de presentar la tesis con el aval del/la directora/a para su consideración por parte de un jurado formado por tres especialistas en la temática.
          </p>
          <p>
            La <b>presentación de la tesis</b> y su defensa deben cumplir con las normas formales y de evaluación establecidas en el reglamento del programa. El trabajo debe tener entre <b>75.000 y 150.000 palabras</b>, contener índice general, notas al pie y bibliografía ordenada según formato de ciencias sociales.
          </p>
          <p>
            Para guiarte en el proceso, te dejamos las <b>normas oficiales y la guía para proyectos de tesis</b>:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <a
            href="/NORMAS%20PARA%20PRESENTACIÓN%20Y%20DEFENSA.pdf"
            download
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#134e5e] text-white font-extrabold shadow-xl hover:bg-[#f9623e] transition-all duration-200 hover:scale-105 focus:scale-100 text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="20" width="16" height="2" rx="1" fill="#fff" />
            </svg>
            Descargar Normas para Presentación y Defensa
          </a>
          <a
            href="/GUIA%20PARA%20PROYECTOS%20DE%20TESIS.pdf"
            download
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-[#f9623e] text-white font-extrabold shadow-xl hover:bg-[#134e5e] transition-all duration-200 hover:scale-105 focus:scale-100 text-lg"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="20" width="16" height="2" rx="1" fill="#fff" />
            </svg>
            Descargar Guía para Proyectos de Tesis
          </a>
        </div>
      </div>

      {/* Onda inferior */}
      <svg
        viewBox="0 0 600 80"
        className="w-full h-16 -mt-2"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 Q300,0 600,40 L600,0 L0,0 Z"
          fill="url(#tesisGradient)"
        />
      </svg>
    </section>
  );
}
