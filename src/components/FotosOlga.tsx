import React, { useState } from "react";
import Image from "next/image";

// Lista de fotos con rutas, pies de foto y descripciones opcionales
const fotos = [
  {
    src: "/1.jpg",
    alt: "Olga en presentacion",
    pie: "Olga Echeverría en la presentación del libro de Lucas Bilbao y Ariel Lede ",
    descripcion:
      "“Profeta del genocidio. El Vicariato castrense y los diarios del obispo Bonamín en la última dictadura”, Consejo Superior de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Estefanía Schegtel Torres, 9 de abril de 2016.",
  },
  {
    src: "/2.jpg",
    alt: "Olga en conmemoracion",
    pie: "Olga Echeverría en el panel en conmemoración del 40° aniversario de la creación de la UNICEN  y del 50° aniversario de creación de la Facultad de Ciencias del Hombre.",
    descripcion:
      "Pabellón de Aulas Comunes II del Campus Universitario de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Rody Becchi, 3 de noviembre de 2014.",
  },
  {
    src: "/3.jpg",
    alt: "Olga con colegas",
    pie: "Sergio Celani y Olga Echeverría en el panel “Historia, economía y ciencia: políticas de la independencia”",
    descripcion:
      "celebrado en el marco de la Jornada participativa “A 200 años del congreso de Tucumán nos preguntamos: Independencia ¿de qué y de quiénes?” en conmemoración del Bicentenario de la Independencia, Salón de los Espejos del Centro Cultural Universitario de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Bernarda Ballesteros, 11 de agosto de 2016.",
  },
  {
    src: "/7.jpg",
    alt: "Olga en apertura de jornadas",
    pie: "Martín Vicente, Lucía Lionetti y Olga Echeverría en la apertura de las Jornadas “Las derechas argentinas en el siglo XX”",
    descripcion:
      "Instituto de Estudios Histórico-Sociales de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Luciano di Salvo, 11 de octubre de 2018.",
  },
  {
    src: "/9.jpg",
    alt: "Olga dando charla debate",
    pie: "Analía La Banca, Lucía Lionetti, Josefina Dobinger Álvarez y Olga Echeverría ",
    descripcion:
      "Charla debate “Una herida colectiva. Lxs migrantes hondureñxs. Impactos emocionales en los cuerpos, los lenguajes y los afectos”, Instituto de Estudios Histórico-Sociales de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Luciano di Salvo, 27 de noviembre de 2018.",
  },
  {
    src: "/10.jpg",
    alt: "Olga en jornada de retratos",
    pie: "Florencia Ramón, Olga Echeverría, Bernarda Ballesteros y Luciano di Salvo ",
    descripcion:
      "Jornada de realización de retratos para la actividad de extensión “43 Retratos X Ayotzinapa”, Instituto de Estudios Histórico-Sociales de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Bernarda Ballesteros, 11 de diciembre de 2014.",
  },
  {
    src: "/16.jpg",
    alt: "Olga en presentación de libro",
    pie: "Ariel Lede, Petra Marzocca, Olga Echeverría y Lucas Bilbao ",
    descripcion:
      "Presentación del libro “Profeta del genocidio. El Vicariato castrense y los diarios del obispo Bonamín en la última dictadura”, Consejo Superior de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Bernarda Ballesteros, 9 de abril de 2016.",
  },
  {
    src: "/21.jpg",
    alt: "Olga en presentación de libro",
    pie: "Olga Echeverría en la presentación del libro de Hugo Mengascini",
    descripcion:
      "“Huelgas y conflictos ferroviarios. Los trabajadores de Tandil en la segunda mitad del siglo XX” en la 8° Feria del Libro de Tandil, Cámara Empresaria de Tandil, Tandil, Estefanía Schegtel Torres, 6 de agosto de 2011.",
  },
  {
    src: "/30.jpg",
    alt: "Olga en presentación de libro",
    pie: "Domingo Bresci, María del Carmen Silva y Olga Echeverría ",
    descripcion:
      "Presentación del libro “MSTM. Historia de un compromiso. A cincuenta años del Movimiento de Sacerdotes para el Tercer Mundo”, Consejo Superior de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Luciano di Salvo, 30 de noviembre de 2018.",
  },
  {
    src: "/31.jpg",
    alt: "Olga en actividad de extension",
    pie: "Gustavo Primucci, Analía La Banca, Lucía Lionetti, Cecilia Di Marco, Santiago Linares, Damián de Carli y Olga Echeverría",
    descripcion:
      "Actividad de extensión “¡Ayotzinapa vive! ¡Ayotzinapa somos todos!”, Centro Cultural La Compañía, Tandil, Bernarda Ballesteros, 27 de marzo de 2015.",
  },
  {
    src: "/32.jpg",
    alt: "Olga en charla debate",
    pie: "Olga Echeverría en la Charla debate “Una herida colectiva. Lxs migrantes hondureñxs.",
    descripcion:
      "Impactos emocionales en los cuerpos, los lenguajes y los afectos”, Instituto de Estudios Histórico-Sociales de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Luciano di Salvo, 27 de noviembre de 2018.",
  },
  {
    src: "/34.jpg",
    alt: "Olga en defensa de tesis",
    pie: "Luciano di Salvo, Juan Martín Duana, Lucas Bilbao, María Soledad González, Olga Echeverría y Manuela Calvo",
    descripcion: `Defensa de la tesis de Maestría “Victoria Ocampo: escritura, poder y representaciones”, Consejo Académico de la Facultad de Ciencias Humanas, Campus Universitario de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Luciano di Salvo, 19 de octubre de 2017.`,
  },
  {
    src: "/35.jpg",
    alt: "Olga en manifestación",
    pie: "Lucas Corrales, Olga Echeverría, Lucía Lionetti y Melina Yangilevich",
    descripcion:
      "Jornada de manifestación contra las políticas de recorte y ajuste en ciencia y tecnología, Plaza Independencia, Tandil, Luciano di Salvo, 21 de diciembre de 2016.",
  },
  {
    src: "/38.jpg",
    alt: "Olga en conmemoración",
    pie: "Daniel Dicósimo y Olga Echeverría en el panel en conmemoración",
    descripcion:
      "40° aniversario de la creación de la Universidad Nacional del Centro de la Provincia de Buenos Aires y del 50° aniversario de creación de la Facultad de Ciencias del Hombre, Pabellón de Aulas Comunes II del Campus Universitario de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Rody Becchi, 3 de noviembre de 2014.",
  },
  {
    src: "/42.jpg",
    alt: "Olga en inauguración",
    pie: "Olga Echeverría, Florencia Ramón y Luciano di Salvo en la inauguración del Aula de la Memoria y la Democracia de la Facultad de Ciencias del Hombre",
    descripcion:
      "Pabellón de Aulas Comunes II del Campus Universitario de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Rody Becchi, 3 de noviembre de 2014.",
  },
  {
    src: "/46.jpg",
    alt: "Olga en apertura de las jornadas",
    pie: "Martín Vicente, Ernesto Bohoslavsky y Olga Echeverría ",
    descripcion:
      "Apertura de las Jornadas “Las derechas argentinas en el siglo XX”, Instituto de Estudios Histórico-Sociales de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires, Tandil, Luciano di Salvo, 11 de octubre de 2018.",
  },
];

const FotosOlga: React.FC = () => {
  const [fotoSeleccionada, setFotoSeleccionada] = useState<
    null | (typeof fotos)[0]
  >(null);
  const [fullscreen, setFullscreen] = useState(false);
  const [zoom, setZoom] = useState(1);

  // Obtener el índice de la foto seleccionada
  const fotoIndex = fotoSeleccionada
    ? fotos.findIndex((f) => f.src === fotoSeleccionada.src)
    : -1;

  // Funciones para navegar
  const mostrarAnterior = () => {
    if (fotoIndex > 0) setFotoSeleccionada(fotos[fotoIndex - 1]);
  };
  const mostrarSiguiente = () => {
    if (fotoIndex < fotos.length - 1) setFotoSeleccionada(fotos[fotoIndex + 1]);
  };

  // Reset zoom/fullscreen al cerrar
  const cerrarModal = () => {
    setFotoSeleccionada(null);
    setFullscreen(false);
    setZoom(1);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 mb-20">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow tracking-tight uppercase">
        Álbum Fotográfico
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {fotos.map((foto, i) => (
          <figure
            key={i}
            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col cursor-pointer"
            onClick={() => setFotoSeleccionada(foto)}
          >
            <div className="relative w-full h-64">
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <figcaption className="p-4 text-sm text-gray-700 text-center italic bg-gray-50 border-t">
              {foto.pie}
            </figcaption>
          </figure>
        ))}
      </div>

      {/* Modal para mostrar imagen ampliada y descripción */}
      {fotoSeleccionada && (
  <div
    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
    onClick={cerrarModal}
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Escape") cerrarModal();
      if (e.key === "ArrowLeft") mostrarAnterior();
      if (e.key === "ArrowRight") mostrarSiguiente();
    }}
  >
    {/* Controles arriba a la derecha */}
    <div className="fixed top-4 right-4 flex gap-3 z-[52]">
      <button
        className="bg-white/80 hover:bg-white text-gray-700 hover:text-[#f9623e] shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-2xl border-2 border-white transition"
        onClick={(e) => { e.stopPropagation(); setFullscreen((f) => !f); }}
        title={fullscreen ? "Salir de pantalla completa" : "Pantalla completa"}
      >
        {fullscreen ? "⤢" : "⤡"}
      </button>
      <button
        className="bg-white/80 hover:bg-white text-gray-700 hover:text-[#f9623e] shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-2xl border-2 border-white transition"
        onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.min(z + 0.2, 2.5)); }}
        title="Zoom in"
      >
        +
      </button>
      <button
        className="bg-white/80 hover:bg-white text-gray-700 hover:text-[#f9623e] shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-2xl border-2 border-white transition"
        onClick={(e) => { e.stopPropagation(); setZoom((z) => Math.max(z - 0.2, 0.6)); }}
        title="Zoom out"
      >
        –
      </button>
      <button
        className="bg-white/80 hover:bg-white text-gray-700 hover:text-[#f9623e] shadow-lg rounded-full w-12 h-12 flex items-center justify-center text-2xl border-2 border-white transition"
        onClick={(e) => { e.stopPropagation(); cerrarModal(); }}
        aria-label="Cerrar"
        title="Cerrar"
      >
        ×
      </button>
    </div>

    {/* Flechas navegación */}
    <button
      className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 hover:text-[#f9623e] shadow-lg rounded-full w-14 h-14 flex items-center justify-center text-4xl border-2 border-white transition"
      onClick={(e) => { e.stopPropagation(); mostrarAnterior(); }}
      disabled={fotoIndex === 0}
      aria-label="Anterior"
      style={{ zIndex: 51 }}
    >
      ←
    </button>
    <button
      className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 hover:text-[#f9623e] shadow-lg rounded-full w-14 h-14 flex items-center justify-center text-4xl border-2 border-white transition"
      onClick={(e) => { e.stopPropagation(); mostrarSiguiente(); }}
      disabled={fotoIndex === fotos.length - 1}
      aria-label="Siguiente"
      style={{ zIndex: 51 }}
    >
      →
    </button>

    {/* Contenedor modal */}
    <div
      className={`bg-white rounded-xl p-4 md:p-6 relative flex flex-col items-center`}
      onClick={(e) => e.stopPropagation()}
      style={{
        zIndex: 50,
        // MÁS GRANDE por defecto; en fullscreen ocupa todo
        width: fullscreen ? "100vw" : "min(92vw, 1200px)",
        height: fullscreen ? "100vh" : "auto",
        maxHeight: fullscreen ? "100vh" : "min(88vh, 900px)",
      }}
    >
      {/* Imagen agrandada */}
      <div
        className="relative mb-3 md:mb-4 flex items-center justify-center w-full"
        style={{
          height: fullscreen ? "calc(100vh - 160px)" : "min(72vh, 760px)", // ↑ MÁS ALTO
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            transform: `scale(${zoom})`,
            transition: "transform 0.2s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            src={fotoSeleccionada.src}
            alt={fotoSeleccionada.alt}
            fill
            className="object-contain rounded"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      {/* Pie y descripción MÁS CHICOS */}
      <h3 className="font-semibold text-sm md:text-base mb-1 text-center text-black leading-snug">
        {fotoSeleccionada.pie}
      </h3>
      <p className="text-gray-700 text-xs md:text-sm text-center mb-1 md:mb-2 max-w-4xl">
        {fotoSeleccionada.descripcion || ""}
      </p>
    </div>
  </div>
)}

    </section>
  );
};

export default FotosOlga;
