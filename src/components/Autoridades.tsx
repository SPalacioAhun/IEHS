/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react"

const autoridades = [
  {
    nombre: "Melina Yangilevich",
    cargo: "Directora",
    foto: "/melina.png", // Cambia el path según tus imágenes
  },
  {
    nombre: "Paola Gallo",
    cargo: "Vicedirectora",
    foto: "/paolagallo.png",
  },
]

const consejo = [
  { nombre: "Marina Adamini", foto: "/marina.png" },
  { nombre: "Lucas Bilbao", foto: "/lucas.png" },
  { nombre: "Magdalena López Pons", foto: "/autoridades/magdalena.jpg" },
  { nombre: "Juan Ignacio Quintián", foto: "/juan.png" },
  { nombre: "Carla Dátola", foto: "/autoridades/carla.jpg" },
]

export default function Autoridades() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-[#134e5e]">
        Autoridades
      </h1>
      {/* Directora y Vicedirectora */}
      <div className="flex flex-col md:flex-row gap-8 justify-center mb-12">
        {autoridades.map((a) => (
          <div
            key={a.nombre}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 w-full md:w-1/2 hover:scale-105 hover:shadow-2xl transition text-black"
          >
            <img
              src={a.foto}
              alt={a.nombre}
              className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-[#134e5e]/20"
              onError={(e) =>
                (e.currentTarget.src =
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(a.nombre)}&background=134e5e&color=fff`)
              }
            />
            <div className="text-xl font-bold">{a.nombre}</div>
            <div className="text-[#134e5e] font-semibold">{a.cargo}</div>
          </div>
        ))}
      </div>
      {/* Consejo de Dirección */}
      <h2 className="text-2xl font-bold mb-4 text-center text-[#134e5e]">Consejo de Dirección</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {consejo.map((c) => (
          <div
            key={c.nombre}
            className="flex flex-col items-center bg-white rounded-xl shadow p-4 hover:scale-105 hover:shadow-2xl transition text-black"
          >
            <img
              src={c.foto}
              alt={c.nombre}
              className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-[#134e5e]/10"
              onError={(e) =>
                (e.currentTarget.src =
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(c.nombre)}&background=134e5e&color=fff`)
              }
            />
            <div className="text-base font-semibold text-center">{c.nombre}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
