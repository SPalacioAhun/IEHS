"use client";
/* eslint-disable @next/next/no-img-element */
// components/HomenajeOlgaEcheverria.tsx
import React, { useRef } from "react";
import Publicaciones from "./Publicaciones";

// Ejemplo de datos: reemplazá por tus datos reales después


const videos = [
  {
    titulo: "Presentación de libro Profeta del genocidio",
    evento: "Libro de Lucas Bilbao y Ariel Lede",
    fecha: "2016",
    url: "https://youtube.com/", // link o null
  },
  // ...más videos
];

const trabajos = [
  {
    tipo: "Artículo",
    titulo: "En busca de un orden jerárquico...",
    anio: 2013,
    url: "https://digital.conicet.gov.ar/", // link real
  },
  // ...más trabajos
];

const tesis = [
  {
    grado: "Licenciatura",
    titulo: "Autoritarismo y represión...",
    url: "/pdfs/tesis-lic.pdf",
  },
  {
    grado: "Doctorado",
    titulo: "‘Una inteligencia disciplinada y disciplinante’...",
    url: "/pdfs/tesis-doc.pdf",
  },
];

const fotos = [
  {
    src: "/fotos/olga1.jpg",
    alt: "Olga Echeverría presentando libro en 2016",
    pie: "Presentación de libro Profeta del genocidio, 2016 – Foto: Luciano Di Salvo",
  },
  // ...más fotos
];

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
            Homenaje a Olga Echeverría
          </h1>
          {/* Si querés subtítulo o frase, descomentá esto: */}
          <p className="text-lg md:text-2xl text-white font-medium drop-shadow mt-2 max-w-xl">
            “Página dedicada a Olga Echeverría en la cual recorreremos su
            trayectoria.”
          </p>
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
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#f96b1c] via-[#a043d3] to-[#1e1446] text-white font-semibold shadow-lg transition-all duration-200 transform hover:scale-105 hover:from-[#a043d3] hover:to-[#f96b1c] focus:outline-none focus:ring-2 focus:ring-[#a043d3]"
            onClick={() => handleNavClick(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* Secciones */}
      <div
        ref={(el) => {
          sectionRefs.current["publicaciones"] = el;
        }}
      >
        <Publicaciones />
      </div>

      <div
        ref={(el) => {
          sectionRefs.current["videos"] = el;
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Fragmentos de Videos</h2>
        <ul className="mb-8 space-y-4">
          {videos.map((vid, i) => (
            <li key={i}>
              <p className="font-semibold">{vid.titulo}</p>
              <span className="text-gray-500">
                {vid.evento} – {vid.fecha}
              </span>
              {vid.url && (
                <div className="mt-2">
                  {/* Si tenés video embebido: */}
                  <iframe
                    src={vid.url}
                    title={vid.titulo}
                    className="w-full max-w-xl aspect-video rounded-xl shadow"
                    allowFullScreen
                  />
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={(el) => {
          sectionRefs.current["repositorio"] = el;
        }}
      >
        <h2 className="text-2xl font-bold mb-4">
          Producciones en Repositorio CONICET Digital
        </h2>
        <ul className="mb-8 space-y-2">
          {trabajos.map((trab, i) => (
            <li key={i}>
              <span className="font-bold">{trab.tipo}</span> –{" "}
              <span>{trab.titulo}</span> ({trab.anio}){" "}
              {trab.url && (
                <a
                  href={trab.url}
                  className="ml-2 text-blue-600 underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={(el) => {
          sectionRefs.current["tesis"] = el;
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Tesis</h2>
        <ul className="mb-8 space-y-4">
          {tesis.map((tes, i) => (
            <li key={i}>
              <span className="font-bold">{tes.grado}</span> –{" "}
              <span>{tes.titulo}</span>
              <a
                href={tes.url}
                className="ml-2 px-3 py-1 bg-blue-600 text-white rounded-full text-sm shadow hover:bg-blue-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar PDF
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={(el) => {
          sectionRefs.current["fotos"] = el;
        }}
      >
        <h2 className="text-2xl font-bold mb-4">Álbum Fotográfico</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {fotos.map((foto, i) => (
            <figure key={i} className="rounded-xl bg-gray-100 shadow p-3">
              <img
                src={foto.src}
                alt={foto.alt}
                className="rounded-xl object-cover w-full h-56 mb-3"
              />
              <figcaption className="text-sm text-gray-600">
                {foto.pie}
              </figcaption>
            </figure>
          ))}
        </div>
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
