/* eslint-disable @next/next/no-img-element */
// "use client"
// import React from "react"

// const autoridades = [
//   {
//     nombre: "Melina Yangilevich",
//     cargo: "Directora",
//     foto: "/melina.png", // Cambia el path según tus imágenes
//   },
//   {
//     nombre: "Paola Gallo",
//     cargo: "Vicedirectora",
//     foto: "/paolagallo.png",
//   },
// ]

// const consejo = [
//   { nombre: "Marina Adamini", foto: "/marina.png" },
//   { nombre: "Lucas Bilbao", foto: "/lucas.png" },
//   { nombre: "Magdalena López Pons", foto: "/autoridades/magdalena.jpg" },
//   { nombre: "Juan Ignacio Quintián", foto: "/juan.png" },
//   { nombre: "Carla Dátola", foto: "/autoridades/carla.jpg" },
// ]

// export default function Autoridades() {
//   return (
//     <section className="max-w-4xl mx-auto px-4 py-12">
//       <h1 className="text-4xl font-extrabold mb-8 text-center text-[#134e5e]">
//         Autoridades
//       </h1>
//       {/* Directora y Vicedirectora */}
//       <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
//         {autoridades.map((a) => (
//           <div
//             key={a.nombre}
//             className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2 hover:scale-105 hover:shadow-2xl transition text-black"
//           >
//             <img
//               src={a.foto}
//               alt={a.nombre}
//               className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-[#134e5e]/20"
//               onError={(e) =>
//                 (e.currentTarget.src =
//                   `https://ui-avatars.com/api/?name=${encodeURIComponent(a.nombre)}&background=134e5e&color=fff`)
//               }
//             />
//             <div className="text-xl font-bold">{a.nombre}</div>
//             <div className="text-[#134e5e] font-semibold">{a.cargo}</div>
//           </div>
//         ))}
//       </div>
//       {/* Consejo de Dirección */}
//       <h2 className="text-2xl font-bold mb-4 text-center text-[#134e5e]">Consejo de Dirección</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//         {consejo.map((c) => (
//           <div
//             key={c.nombre}
//             className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition text-black"
//           >
//             <img
//               src={c.foto}
//               alt={c.nombre}
//               className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-[#134e5e]/10"
//               onError={(e) =>
//                 (e.currentTarget.src =
//                   `https://ui-avatars.com/api/?name=${encodeURIComponent(c.nombre)}&background=134e5e&color=fff`)
//               }
//             />
//             <div className="text-base font-semibold text-center">{c.nombre}</div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }



"use client";
import React from "react";

const autoridades = [
  { nombre: "Melina Yangilevich", cargo: "Directora", foto: "/MelinaYan.jpg" },
  { nombre: "Paola Gallo",       cargo: "Vicedirectora", foto: "/PaolaGallo.jpg" },
];

const consejo = [
  { nombre: "Marina Adamini", foto: "/MarinaAdamini.jpg" },
  { nombre: "Lucas Bilbao",   foto: "/LucasMatias.jpg" },
  { nombre: "Magdalena López Pons", foto: "/autoridades/magdalena.jpg" },
  { nombre: "Juan Ignacio Quintián", foto: "/JuanIgnacio.jpg" },
  { nombre: "Carla Dátola",   foto: "/autoridades/carla.jpg" },
];

export default function Autoridades() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#134e5e] to-[#1f697a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título Principal */}
        <h1 className="relative text-5xl font-extrabold text-center text-white mb-16 drop-shadow-lg">
          <span className="inline-block relative">
            <span className="relative z-10">Autoridades</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-32 bg-[#f9623e] rounded-full"></span>
          </span>
        </h1>

        {/* Directora y Vicedirectora */}
        <div className="grid gap-12 sm:grid-cols-2 mb-16">
          {autoridades.map((a) => (
            <div key={a.nombre} className="flex flex-col items-center text-center">
              <img
                src={a.foto}
                alt={a.nombre}
                className="w-40 h-48 object-cover mb-4 rounded-full border-4 border-[#f9623e]/50"
                onError={(e) =>
                  (e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    a.nombre
                  )}&background=f9623e&color=fff&format=png&size=160`)
                }
              />
              <div className="text-white text-2xl font-bold drop-shadow-md">
                {a.nombre}
              </div>
              <div className="text-gray-200 italic mt-1">{a.cargo}</div>
            </div>
          ))}
        </div>

        {/* Subtítulo Consejo */}
        <h2 className="relative text-3xl font-bold text-center text-white mb-10 drop-shadow-md">
          <span className="inline-block relative">
            <span className="relative z-10">Consejo de Dirección</span>
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-24 bg-[#f9623e] rounded-full"></span>
          </span>
        </h2>
        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {consejo.map((c) => (
            <div key={c.nombre} className="flex flex-col items-center text-center">
              <img
                src={c.foto}
                alt={c.nombre}
                className="w-32 h-40 object-cover mb-3 rounded-full border-2 border-[#f9623e]/40"
                onError={(e) =>
                  (e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    c.nombre
                  )}&background=f9623e&color=fff&format=png&size=128`)
                }
              />
              <div className="text-white text-lg font-semibold drop-shadow-sm">
                {c.nombre}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
