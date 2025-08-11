// src/components/HiloDeFotos.tsx
"use client";
import Image from "next/image";
import React from "react";

type HiloDeFotosProps = {
  images: { src: string; alt?: string }[];
  /** Segundos que tarda en cruzar una tanda completa */
  speedSec?: number;
  /** Alto del carril en px */
  height?: number;
  /** Separación entre fotos en px */
  gap?: number;
  /** Bordes redondeados en px */
  radius?: number;
  /** Relación ancho/alto del marco (ej: 1.5 ≈ 3:2) */
  aspect?: number;
};

export default function HiloDeFotos({
  images,
  speedSec = 28,
  height = 150,
  gap = 20,
  radius = 20,
  aspect = 1.5,
}: HiloDeFotosProps) {
  // Duplicamos para loop continuo
  const loop = [...images, ...images];
  const frameW = Math.round(height * aspect);
  const innerRadius = Math.max(0, radius - 2);

  return (
    <div
      className="relative overflow-hidden w-full"
      style={{ height }}
      aria-label="Galería de fotos IEHS en desplazamiento automático"
    >
      {/* Gradientes laterales sutiles */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f3f4d] to-transparent opacity-60" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f3f4d] to-transparent opacity-60" />

      {/* Pista animada */}
      <div
        className="flex items-center will-change-transform animate-marquee hover:[animation-play-state:paused]"
        style={{ gap, animationDuration: `${speedSec}s` }}
      >
        {loop.map((img, i) => (
          <div key={`${img.src}-${i}`} className="flex-shrink-0" style={{ height }}>
            {/* CONTENEDOR EXTERNO: ring + borderRadius (no tiene overflow hidden) */}
            <div
              className="shadow-md ring-4 ring-[#f9623e]/60 bg-white"
              style={{
                borderRadius: radius,
                height,
                width: frameW,
              }}
            >
              {/* CONTENEDOR INTERNO: recorta solo la imagen */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: innerRadius,
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt ?? "Foto IEHS"}
                  fill
                  className="object-cover"
                  loading="eager" // evita lazy-load en carrusel animado
                  sizes={`${frameW}px`}
                  onError={() => console.warn("No cargó la imagen:", img.src)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CSS de la animación */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%); /* recorre exactamente un set */
          }
        }
        .animate-marquee {
          display: inline-flex;
          animation-name: marquee;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
