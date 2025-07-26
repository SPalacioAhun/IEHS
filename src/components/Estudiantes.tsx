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


       <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
  {estudiantes.map((inv, idx) => (
    <div
      key={inv.nombre}
      onClick={() => setPopupIdx(idx)}
      className="
        flex flex-col justify-between rounded-3xl shadow-xl
        transition-transform duration-200 hover:-translate-y-1 cursor-pointer
        bg-white overflow-hidden min-h-[380px]
        border border-[#134e5e]/15
      "
    >
      {/* ---------- Cuerpo ---------- */}
      <div className="flex flex-col items-center px-6 pt-10 pb-6 flex-1">
        <img
          src={
            inv.foto ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(inv.nombre)}&background=134e5e&color=fff`
          }
          alt={inv.nombre}
          className="
            w-24 h-24 rounded-full object-cover mb-4
            border-4 border-white shadow-md ring-2 ring-[#134e5e]/15
          "
        />
        <p className="text-xs text-[#f9623e] mb-1 tracking-wide uppercase">
          Miembros estudiantes
        </p>
        <h3 className="text-[1.1rem] font-semibold text-[#134e5e] text-center mb-2">
          {inv.nombre}
        </h3>
        <p className="text-sm text-gray-600 text-center line-clamp-3">
          {inv.descripcion || "—"}
        </p>
      </div>
      {/* ---------- Franja inferior bicolor SIN TEXTO NI ICONOS ---------- */}
      <div
  className="grid grid-cols-3 text-center text-white text-[0.7rem] font-medium
             bg-gradient-to-r from-[#134e5e] to-[#f9623e]"
>
  <div className="py-3">&nbsp;</div>
  <div className="py-3">&nbsp;</div>
  <div className="py-3">&nbsp;</div>
</div>

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
        className="
          relative flex flex-col items-center
          rounded-[2rem] shadow-2xl border border-[#22677e]/25
          max-w-xl w-full pt-16 pb-8 px-8
          bg-gradient-to-br from-[#eaf3fa] via-[#f7fafc] to-[#fce4d6]
          animate-fadein
        "
        style={{ minHeight: "360px" }}
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
              <div className="text-lg font-bold text-[#134e5e] text-center  w-full">
          {estudiantes[popupIdx].nombre}
        </div>
        <div className="w-16 h-1 rounded-full my-2 bg-gradient-to-r from-[#134e5e] to-[#f9623e]" />
        <p className="text-gray-800 text-sm text-justify whitespace-pre-line w-full">
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
