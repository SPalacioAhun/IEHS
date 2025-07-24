/* eslint-disable @next/next/no-img-element */
// components/Estudiantes.tsx
"use client"
import React, { useState } from "react"

const estudiantes = [
  { nombre: "Prof. Juan Martín Duana", foto: "", descripcion: "" },
  { nombre: "Prof. Iñaki Martínez", foto: "", descripcion: "" },
  { nombre: "Lic. Carla Dátola", foto: "", descripcion: "" },
];

export default function Estudiantes() {
  const [popupIdx, setPopupIdx] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
     <h1
  className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow-md tracking-tight leading-relaxed md:whitespace-nowrap"
>
  Miembros estudiantes de grado y postgrado
</h1>


      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {estudiantes.map((est, idx) => (
          <div
            key={est.nombre}
            className="flex flex-col items-center bg-white rounded-xl shadow-lg p-6 hover:scale-105 hover:shadow-2xl transition cursor-pointer group"
            onClick={() => setPopupIdx(idx)}
          >
            <img
              src={
                est.foto ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(est.nombre)}&background=134e5e&color=fff`
              }
              alt={est.nombre}
              className="w-28 h-28 rounded-full mb-4 object-cover border-4 border-[#134e5e]/20"
            />
            <div className="text-xl font-bold text-[#134e5e] text-center">{est.nombre}</div>
          </div>
        ))}
      </div>

      {/* Modal popup */}
      {popupIdx !== null && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setPopupIdx(null)}
          />
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div
              className="bg-white border-2 border-[#134e5e] rounded-2xl shadow-2xl px-12 py-6 w-full max-w-2xl flex flex-col items-center relative animate-fadein"
              style={{
                minHeight: "220px",
                maxWidth: "600px",
              }}
            >
              {/* Cerrar */}
              <button
                onClick={() => setPopupIdx(null)}
                className="absolute top-3 right-4 text-2xl text-[#134e5e] font-bold hover:text-black"
                aria-label="Cerrar"
              >
                ×
              </button>
              <img
                src={
                  estudiantes[popupIdx].foto ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    estudiantes[popupIdx].nombre
                  )}&background=134e5e&color=fff`
                }
                alt={estudiantes[popupIdx].nombre}
                className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-[#134e5e]/30"
              />
              <div className="text-lg font-bold text-[#134e5e] text-left mb-2 w-full">
                {estudiantes[popupIdx].nombre}
              </div>
              <p className="text-gray-800 text-sm text-left whitespace-pre-line w-full">
                {estudiantes[popupIdx].descripcion}
              </p>
            </div>
          </div>
        </>
      )}
      <style>
        {`
          @keyframes fadein { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
          .animate-fadein { animation: fadein 0.2s ease; }
        `}
      </style>
    </section>
  );
}
