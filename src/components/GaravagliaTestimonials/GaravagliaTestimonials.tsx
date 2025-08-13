/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import styles from "./GaravagliaTestimonials.module.css";
import type { Testimonial } from "../../data/garavaglia";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

// Nota: asumimos Testimonial con campo opcional `thumb?: string`
export default function GaravagliaTestimonials({ testimonials }: TestimonialsProps) {
  const [selected, setSelected] = useState<Testimonial | null>(null);

  const handleOpen = (t: Testimonial) => {
    // Para enlaces externos, abrimos nueva pestaña (evita X-Frame-Options)
    if (t.type === "external") {
      window.open(t.href, "_blank", "noopener,noreferrer");
      return;
    }
    setSelected(t);
  };

  return (
    <section id="testimonios" className={styles.testimonials}>
      <h2 className={styles.title}>Testimonios</h2>

      <div className={styles.grid}>
        {testimonials.map((t, index) => (
          <div
            key={index}
            className={styles.card}
            onClick={() => handleOpen(t)}
          >
            <div className={styles.thumbWrapper}>
              <img
                src={t.thumb ?? "/imagenes/pdf-placeholder.png"}
                alt={t.title}
                className={styles.thumb}
                loading="lazy"
                decoding="async"
              />
              <span className={styles.badge}>
                {t.type === "pdf" ? "PDF" : "Externo"}
              </span>
            </div>
            <div className={styles.meta}>
              <h3 className={styles.cardTitle}>{t.title}</h3>
              <p className={styles.cardAuthor}>{t.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal PDF */}
      {selected && selected.type === "pdf" && (
        <div className={styles.modalOverlay} onClick={() => setSelected(null)}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              // encodeURI para rutas con espacios
              src={encodeURI(selected.href)}
              title={selected.title}
              className={styles.pdfViewer}
            />
            <button
              className={styles.closeButton}
              onClick={() => setSelected(null)}
              aria-label="Cerrar"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
