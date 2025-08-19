/* eslint-disable @next/next/no-img-element */
import React from "react";

// Rutas a los PDFs y las imágenes de tapa
const tesis = [
  {
    grado: "Tesis de Licenciatura",
    titulo:
      "Autoritarismo y represión. Los enemigos de la sociedad militarizada. Argentina 1976-1983",
    img: "/LIC.png", // Cambia por tu imagen real
  },
  {
    grado: "Tesis de Doctorado",
    titulo:
      '"Una inteligencia disciplinada y disciplinante". Los intelectuales autoritarios de derechas: su concepción estética ideológica y la representación de la sociedad. Argentina, primeras décadas del siglo XX.',
    img: "/DOC.png", // Cambia por tu imagen real
  },
];

const TesisOlga: React.FC = () => (
  <section className="max-w-5xl mx-auto mb-20 px-4">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-14 text-center bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow tracking-tight uppercase">
      Tesis de Licenciatura y Doctorado de Olga Echeverría
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
      {tesis.map((tes, i) => (
        <div
          key={i}
          className="flex flex-col items-center bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-8"
        >
          {/* Imagen */}
          <div className="w-full flex justify-center mb-6">
            <img
              src={tes.img}
              alt={tes.grado}
              className="h-64 w-56 object-cover rounded-xl border-4 border-[#134e5e]/30 shadow"
            />
          </div>
          {/* Info */}
          <h3 className="text-2xl font-bold text-[#134e5e] mb-2 text-center">
            {tes.grado}
          </h3>
          <p className="text-gray-800 text-base mb-6 text-center font-serif leading-relaxed">
            {tes.titulo}
          </p>
          
        </div>
      ))}
    </div>
  </section>
);

export default TesisOlga;
