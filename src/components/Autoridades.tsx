/* eslint-disable @next/next/no-img-element */
// "use client";
// import React from "react";

// const autoridades = [
//   { nombre: "Melina Yangilevich", cargo: "Directora", foto: "/MelinaYan.jpg" },
//   { nombre: "Paola Gallo",       cargo: "Vicedirectora", foto: "/PaolaGallo.jpg" },
// ];

// const consejo = [
//   { nombre: "Marina Adamini", foto: "/MarinaAdamini.jpg" },
//   { nombre: "Lucas Bilbao",   foto: "/LucasMatias.jpg" },
//   { nombre: "Magdalena López Pons", foto: "/autoridades/magdalena.jpg" },
//   { nombre: "Juan Ignacio Quintián", foto: "/JuanIgnacio.jpg" },
//   { nombre: "Carla Dátola",   foto: "/autoridades/carla.jpg" },
// ];

// export default function Autoridades() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-[#134e5e] to-[#1f697a]">
//       <div className="max-w-6xl mx-auto px-6">
//         {/* Título Principal */}
//         <h1 className="relative text-5xl font-extrabold text-center text-white mb-16 drop-shadow-lg">
//           <span className="inline-block relative">
//             <span className="relative z-10">Autoridades</span>
//             <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-32 bg-[#f9623e] rounded-full"></span>
//           </span>
//         </h1>

//         {/* Directora y Vicedirectora */}
//         <div className="grid gap-12 sm:grid-cols-2 mb-16">
//           {autoridades.map((a) => (
//             <div key={a.nombre} className="flex flex-col items-center text-center">
//               <img
//                 src={a.foto}
//                 alt={a.nombre}
//                 className="w-40 h-48 object-cover mb-4 rounded-full border-4 border-[#f9623e]/50"
//                 onError={(e) =>
//                   (e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                     a.nombre
//                   )}&background=f9623e&color=fff&format=png&size=160`)
//                 }
//               />
//               <div className="text-white text-2xl font-bold drop-shadow-md">
//                 {a.nombre}
//               </div>
//               <div className="text-gray-200 italic mt-1">{a.cargo}</div>
//             </div>
//           ))}
//         </div>

//         {/* Subtítulo Consejo */}
//         <h2 className="relative text-3xl font-bold text-center text-white mb-10 drop-shadow-md">
//           <span className="inline-block relative">
//             <span className="relative z-10">Consejo de Dirección</span>
//             <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-24 bg-[#f9623e] rounded-full"></span>
//           </span>
//         </h2>
//         <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
//           {consejo.map((c) => (
//             <div key={c.nombre} className="flex flex-col items-center text-center">
//               <img
//                 src={c.foto}
//                 alt={c.nombre}
//                 className="w-32 h-40 object-cover mb-3 rounded-full border-2 border-[#f9623e]/40"
//                 onError={(e) =>
//                   (e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
//                     c.nombre
//                   )}&background=f9623e&color=fff&format=png&size=128`)
//                 }
//               />
//               <div className="text-white text-lg font-semibold drop-shadow-sm">
//                 {c.nombre}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
// }

"use client";
import React from "react";

const autoridades = [
  { nombre: "Melina Yangilevich", cargo: "Directora", foto: "/MelinaYan.jpg" },
  { nombre: "Paola Gallo", cargo: "Vicedirectora", foto: "/PaolaGallo.jpg" },
];

const consejo = [
  { nombre: "Marina Adamini", foto: "/MarinaAdamini.jpg" },
  { nombre: "Lucas Bilbao", foto: "/LucasMatias.jpg" },
  { nombre: "Magdalena López Pons", foto: "/autoridades/magdalena.jpg" },
  { nombre: "Juan Ignacio Quintián", foto: "/JuanIgnacio.jpg" },
  { nombre: "Carla Dátola", foto: "/autoridades/carla.jpg" },
];

export default function Autoridades() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#134e5e] to-[#1f697a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Título Principal */}
        <h1
          className="relative text-6xl font-extrabold text-center text-white mb-16 drop-shadow-lg"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.03em",
          }}
        >
          <span className="inline-block relative">
            <span className="relative z-10">Autoridades</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-32 bg-[#f9623e] rounded-full"></span>
          </span>
        </h1>

        {/* Directora y Vicedirectora */}
        <div className="grid gap-10 sm:grid-cols-2 mb-16">
          {autoridades.map((a) => (
            <div
              key={a.nombre}
              className="relative flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={a.foto}
                alt={a.nombre}
                className="w-32 h-32 object-cover mb-4 rounded-full border-4 border-[#f9623e]/60 shadow-md"
                onError={(e) =>
                  (e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    a.nombre
                  )}&background=f9623e&color=fff&format=png&size=160`)
                }
              />
              <div className="text-white text-2xl font-bold drop-shadow-md">
                {a.nombre}
              </div>
              <div className="text-white mt-1 uppercase tracking-wide text-sm font-semibold">
                {a.cargo}
              </div>
            </div>
          ))}
        </div>

        {/* Subtítulo Consejo */}
        <h2
          className="relative text-4xl font-bold text-center text-white mb-10 drop-shadow-md"
          style={{
            fontFamily: "'Playfair Display', serif",
            letterSpacing: "0.02em",
          }}
        >
          <span className="inline-block relative">
            <span className="relative z-10">Consejo de Dirección</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-24 bg-[#f9623e] rounded-full"></span>
          </span>
        </h2>

        {/* Miembros del Consejo */}
        <div className="grid gap-8 sm:grid-cols-3 md:grid-cols-5">
          {consejo.map((c) => (
            <div
              key={c.nombre}
              className="flex flex-col items-center text-center bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-md transition transform hover:-translate-y-2 hover:shadow-2xl"
            >
              <img
                src={c.foto}
                alt={c.nombre}
                className="w-24 h-24 object-cover mb-3 rounded-full border-2 border-[#f9623e]/50 shadow-sm"
                onError={(e) =>
                  (e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    c.nombre
                  )}&background=f9623e&color=fff&format=png&size=128`)
                }
              />
              <div className="text-white text-base font-medium drop-shadow-sm">
                {c.nombre}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
