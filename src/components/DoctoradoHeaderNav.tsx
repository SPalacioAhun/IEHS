"use client";

import { useState, useRef, useEffect } from "react";

const subCuerpo = [
  { id: "autoridades", label: "Autoridades" },
  { id: "comite", label: "Comité Académico de Posgrado en Historia" },
  { id: "planta", label: "Planta Permanente de Docentes del Doctorado" },
  { id: "invitados", label: "Profesores Invitados" },
];

export default function DoctoradoHeaderNav() {
  const [openCuerpo, setOpenCuerpo] = useState(false);
  const cuerpoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (!cuerpoRef.current?.contains(e.target as Node)) {
        setOpenCuerpo(false);
      }
    }
    if (openCuerpo) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [openCuerpo]);

  const scrollToSection = (id: string) => {
    setOpenCuerpo(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", "#" + id);
    }
  };

  return (
    <nav className="flex flex-wrap gap-4 justify-center text-[#134e5e] font-semibold relative text-base">
  <div className="relative" ref={cuerpoRef}>
    <button
      type="button"
      className={`px-4 py-2 rounded-2xl bg-white border border-[#f9623e] shadow-sm text-[#f9623e] 
        hover:bg-[#f9623e] hover:text-white focus:bg-[#134e5e] focus:text-white 
        transition-all duration-200 font-semibold flex items-center gap-1`}
      onClick={() => setOpenCuerpo((v) => !v)}
      aria-expanded={openCuerpo}
    >
      <span>Cuerpo</span>
      <span className={`ml-1 transition-transform ${openCuerpo ? "rotate-180" : ""}`}>▼</span>
    </button>
    {openCuerpo && (
      <div
        className="absolute left-0 z-20 mt-2 rounded-2xl shadow-xl bg-white border text-[#134e5e] py-2 px-3 animate-fade-in-down flex flex-col gap-1 min-w-[350px]"
        style={{ whiteSpace: "nowrap" }}
      >
        {subCuerpo.map((sub) => (
          <button
            key={sub.id}
            className="w-full text-left px-4 py-2 rounded-xl font-semibold text-base whitespace-nowrap 
              hover:bg-[#f9623e] hover:text-white focus:bg-[#134e5e] focus:text-white transition-all duration-200"
            style={{ minWidth: 320 }}
            onClick={() => scrollToSection(sub.id)}
          >
            {sub.label}
          </button>
        ))}
      </div>
    )}
  </div>
  <a
    href="#requisitos"
    className="px-4 py-2 rounded-2xl bg-white border border-[#f9623e] shadow-sm text-[#f9623e] 
      hover:bg-[#f9623e] hover:text-white focus:bg-[#134e5e] focus:text-white 
      transition-all duration-200 font-semibold"
  >
    Requisitos
  </a>
  <a
    href="#matricula"
    className="px-4 py-2 rounded-2xl bg-white border border-[#f9623e] shadow-sm text-[#f9623e] 
      hover:bg-[#f9623e] hover:text-white focus:bg-[#134e5e] focus:text-white 
      transition-all duration-200 font-semibold"
  >
    Matrícula
  </a>
  <a
    href="#tesis"
    className="px-4 py-2 rounded-2xl bg-white border border-[#f9623e] shadow-sm text-[#f9623e] 
      hover:bg-[#f9623e] hover:text-white focus:bg-[#134e5e] focus:text-white 
      transition-all duration-200 font-semibold"
  >
    Tesis
  </a>
  <a
    href="#cursos"
    className="px-4 py-2 rounded-2xl bg-white border border-[#f9623e] shadow-sm text-[#f9623e] 
      hover:bg-[#f9623e] hover:text-white focus:bg-[#134e5e] focus:text-white 
      transition-all duration-200 font-semibold"
  >
    Cursos
  </a>
  <a
    href="#graduados"
    className="px-4 py-2 rounded-2xl bg-white border border-[#f9623e] shadow-sm text-[#f9623e] 
      hover:bg-[#f9623e] hover:text-white focus:bg-[#134e5e] focus:text-white 
      transition-all duration-200 font-semibold"
  >
    Graduados
  </a>
</nav>

  );
}
