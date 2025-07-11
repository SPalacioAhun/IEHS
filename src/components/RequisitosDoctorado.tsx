/* eslint-disable @next/next/no-img-element */
// components/RequisitosDoctorado.tsx

// components/RequisitosDoctorado.tsx

export default function RequisitosDoctorado() {
  return (
    <div className="relative flex flex-col items-center">
      {/* Onda superior */}
      <svg viewBox="0 0 600 80" className="w-full h-16 -mb-2" preserveAspectRatio="none">
        <path
          d="M0,40 Q300,80 600,40 L600,80 L0,80 Z"
          fill="url(#gradRequisitos)"
        />
        <defs>
          <linearGradient id="gradRequisitos" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#dde9f3" />
            <stop offset="0.5" stopColor="#e7f5fa" />
            <stop offset="1" stopColor="#f9623e" />
          </linearGradient>
        </defs>
      </svg>

      <section
        id="requisitos"
        className="relative w-full max-w-5xl mx-auto shadow-2xl px-0 py-0 bg-gradient-to-br from-[#f8fafc]/95 via-[#e7f5fa]/80 to-[#fff7f3]/90
        rounded-b-[2.5rem] rounded-t-[2.5rem] border-[3px] border-[#f9623e]/70
        before:absolute before:inset-0 before:rounded-[2.5rem] before:shadow-[0_6px_50px_0_rgba(20,79,94,0.07)] before:pointer-events-none"
        style={{
          overflow: "visible",
          zIndex: 1,
        }}
      >
        {/* MARCA DE AGUA, siempre detrás del contenido */}
        <img
          src="/logo-iehs.gif"
          alt="Marca de agua IEHS"
          className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          style={{
            width: "820px",   // Bien grande!
            maxWidth: "98vw",
            height: "auto",
            opacity: 0.10,
            filter: "blur(0.5px)",
            zIndex: 0,
            objectFit: "contain",
            userSelect: "none",
          }}
        />

        {/* GRID FLEXIBLE */}
        <div className="relative z-10 flex flex-col md:flex-row gap-0 md:gap-8 items-stretch">
          {/* TEXTO */}
          <div className="flex-1 px-8 py-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-5">
                {/* Ícono académico */}
                <svg className="w-10 h-10 text-[#134e5e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M12 3L2 9l10 6 10-6-10-6z" stroke="#134e5e" strokeWidth={2} strokeLinejoin="round"/>
                  <path d="M2 17l10 6 10-6" stroke="#f9623e" strokeWidth={2} strokeLinejoin="round"/>
                  <path d="M2 9v8" stroke="#134e5e" strokeWidth={2}/>
                  <path d="M22 9v8" stroke="#f9623e" strokeWidth={2}/>
                </svg>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#134e5e] drop-shadow tracking-wide">Requisitos</h2>
              </div>
              <div className="text-[#15394b] text-lg md:text-xl font-medium space-y-5 leading-relaxed drop-shadow-sm max-w-2xl">
                <p>
                  <b className="text-[#134e5e] uppercase tracking-wider">REQUISITOS de admisión y permanencia</b>
                </p>
                <p>
                  Para ingresar al Programa de Doctorado es requisito indispensable poseer título de grado de <b>Licenciado o Profesor en Historia</b> correspondiente a estudios de duración no inferior a 4 (cuatro) años, expedido por una universidad argentina nacional o privada o extranjeras reconocidas.
                </p>
                <p>
                  Con carácter excepcional también podrán ser admitidos como alumnos aspirantes con otros títulos universitarios equivalentes en disciplinas afines a la historia o los incluidos en el artículo 39 bis de la Ley de Educación Superior que, en opinión del CAPH, estén en condiciones de llevar a cabo los estudios correspondientes. En estos casos el CAPH podrá establecer requisitos adicionales, previos al ingreso, los que deberán contar con la aprobación del Consejo Académico.
                </p>
                <p>
                  Los alumnos efectuarán su solicitud de inscripción al CAPH adjuntando un breve texto (2.500 palabras aproximadamente) donde se delinee un área de interés y la restante documentación que le sea requerida. El CAPH evaluará la solicitud por los medios que estime conveniente, lo que normalmente consistirá en una entrevista de admisión.
                </p>
                <p>
                  Si la solicitud fuera aprobada, se elevará para su consideración al Consejo Académico, y con la aprobación de este, se la comunicará al Departamento de Alumnos de la Facultad, a los efectos de que el aspirante pueda realizar su inscripción en dicho Departamento como alumno del doctorado. El Departamento de Alumnos llevará el registro de los cursos aprobados y los créditos reunidos, y gestionará el título correspondiente.
                </p>
                <p className="font-bold text-[#f9623e] uppercase text-base md:text-lg tracking-wide">
                  LA INSCRIPCIÓN AL DOCTORADO PUEDE REALIZARSE A LO LARGO DE TODO EL AÑO, SALVO EN LOS PERIODOS DE RECESO OBLIGATORIO.
                </p>
                <p>
                  Anualmente los alumnos deberán entregar un informe donde consten los cursos realizados, los aprobados, el número de créditos alcanzados y el estado de avance de la tesis.
                </p>
              </div>
            </div>
            {/* Botón reglamento */}
            <div className="flex justify-start mt-8">
              <a
                href="https://iehs.unicen.edu.ar/doctorado/Reglamento%20doctorado.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-[#f9623e] text-white font-extrabold shadow hover:bg-[#134e5e] transition text-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M7 4V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v2" stroke="#fff"/>
                  <rect x="7" y="4" width="10" height="16" rx="2" stroke="#fff"/>
                  <path d="M11 8h2" stroke="#fff"/>
                </svg>
                Reglamento del Doctorado
              </a>
            </div>
          </div>
          {/* (El bloque de la imagen individual se elimina, solo la marca de agua queda) */}
        </div>
      </section>

      {/* Onda inferior */}
      <svg viewBox="0 0 600 80" className="w-full h-16 -mt-2" preserveAspectRatio="none">
        <path
          d="M0,40 Q300,0 600,40 L600,0 L0,0 Z"
          fill="url(#gradRequisitos)"
        />
      </svg>
    </div>
  );
}
