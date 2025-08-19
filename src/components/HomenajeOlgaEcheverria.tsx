"use client";
/* eslint-disable @next/next/no-img-element */
// components/HomenajeOlgaEcheverria.tsx
import React, { useRef } from "react";

import Publicaciones from "./Publicaciones";
import VideosOlga from "./VideosOlga";
import RepositoriosOlga from "./RepositoriosOlga";
import TesisOlga from "./TesisOlga";
import FotosOlga from "./FotosOlga";

const navItems = [
  { id: "publicaciones", label: "Publicaciones" },
  { id: "videos", label: "Videos" },
  { id: "repositorio", label: "Repositorio" },
  { id: "tesis", label: "Tesis" },
  { id: "fotos", label: "Fotos" },
];

const HomenajeOlgaEcheverria: React.FC = () => {
  // Para navegación suave por anclas
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleNavClick = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full max-w-5xl mx-auto p-4">
      {/* HERO estilo Eternal Candle */}
      <div className="relative h-[420px] flex items-center justify-center rounded-3xl shadow-xl mb-10 overflow-hidden">
        {/* Imagen de fondo de Olga */}
        <img
          src="/1.jpg" // Cambia por la ruta de tu imagen de Olga
          alt="Olga Echeverría"
          className="absolute inset-0 w-full h-full object-cover object-center"
          draggable={false}
        />
        {/* Degradado estilo naranja-violeta */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f96b1cdd] via-[#a043d3cc] to-[#1e1446ee] mix-blend-multiply" />
        {/* Overlay para oscurecer un poco */}
        <div className="absolute inset-0 bg-black opacity-30" />
        {/* Título central */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-4 tracking-tight">
            Olga Echeverría
          </h1>
        </div>
      </div>

      {/* Introducción */}
      <div className="mb-8 bg-[#f5f5f5] p-6 rounded-xl shadow text-gray-800 leading-relaxed font-serif text-lg md:text-xl italic">
        <p>
          Egresada y docente de la Facultad de Ciencias Humanas (UNICEN) e
          investigadora del IEHS, IGEHCS, CONICET/UNICEN. Compartimos recursos
          que recorren su carrera académica, su producción en el Anuario IEHS
          (cuyo Comité Académico integró y del que fue Directora entre los años
          2017 y 2021), su participación en distintos eventos académicos y
          producciones audiovisuales, sus trabajos académicos alojados en el
          Repositorio CONICET Digital, imágenes que evocan su trayectoria y,
          finalmente, la tesis con la que accedió al título de Licenciada en
          Historia, y su tesis doctoral, defendida en el marco del Doctorado en
          Historia (UNICEN). Especialista reconocida en estudios sobre las
          derechas argentinas y del cono sur. Olga fue una activa y comprometida
          militante por los derechos humanos.
        </p>
      </div>
      {/* Navegación interna */}
      <nav className="flex flex-wrap justify-center gap-3 mb-8">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-[#f96b1c] via-[#a043d3] to-[#1e1446] text-white font-bold text-lg shadow-lg transition-all duration-200 transform hover:scale-105 hover:from-[#a043d3] hover:to-[#f96b1c] focus:outline-none focus:ring-2 focus:ring-[#a043d3]"
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Separador moderno y elegante */}
      <div className="w-full flex justify-center my-10">
        <div className="w-2/3 h-2 rounded-full bg-gradient-to-r from-[#f96b1c] via-[#a043d3] to-[#1e1446] opacity-70" />
      </div>

      {/* Secciones */}
      <div
        ref={(el) => {
          sectionRefs.current["publicaciones"] = el;
        }}
      >
        <Publicaciones />
      </div>

      {/* Separador entre secciones */}
      <div className="w-full flex justify-center my-10">
        <div className="w-2/3 h-2 rounded-full bg-gradient-to-r from-[#f96b1c] via-[#a043d3] to-[#1e1446] opacity-70" />
      </div>

      <div
        ref={(el) => {
          sectionRefs.current["videos"] = el;
        }}
      >
        <VideosOlga />
      </div>

      {/* Separador entre secciones */}
      <div className="w-full flex justify-center my-10">
        <div className="w-2/3 h-2 rounded-full bg-gradient-to-r from-[#f96b1c] via-[#a043d3] to-[#1e1446] opacity-70" />
      </div>

      <div
        ref={(el) => {
          sectionRefs.current["repositorio"] = el;
        }}
      >
        <RepositoriosOlga />
      </div>

      {/* Separador entre secciones */}
      <div className="w-full flex justify-center my-10">
        <div className="w-2/3 h-2 rounded-full bg-gradient-to-r from-[#f96b1c] via-[#a043d3] to-[#1e1446] opacity-70" />
      </div>

      <div
        ref={(el) => {
          sectionRefs.current["tesis"] = el;
        }}
      >
        <TesisOlga />
      </div>

      {/* Separador entre secciones */}
      <div className="w-full flex justify-center my-10">
        <div className="w-2/3 h-2 rounded-full bg-gradient-to-r from-[#f96b1c] via-[#a043d3] to-[#1e1446] opacity-70" />
      </div>

      <div
        ref={(el) => {
          sectionRefs.current["fotos"] = el;
        }}
      >
       <FotosOlga />
      </div>

      {/* Footer opcional */}
      <footer className="mt-12 py-8 text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} Instituto de Estudios Histórico-Sociales,
        UNICEN
      </footer>
    </section>
  );
};

export default HomenajeOlgaEcheverria;
