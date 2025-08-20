"use client";

import styles from "./GaravagliaReviews.module.css";
import type { Review } from "@/data/garavaglia";

interface ReviewsProps {
  reviews: Review[];
}

/**
 * Sección "Leer a Garavaglia": grilla de 12 reseñas/enlaces
 * - Tarjetas clickeables completas
 * - Indicador de enlace externo
 */
export default function GaravagliaReviews({ reviews }: ReviewsProps) {
  return (
    <section id="reseñas" className={styles.reviews} aria-labelledby="reviews-title">
      <h2 id="reviews-title" className={styles.title}>Leer a Garavaglia</h2>
      <p className={styles.subtitle}>Reseñas de autores</p>

      <div className={styles.grid} role="list">
        {reviews.slice(0, 12).map((r, index) => {
          const isExternal = r.href.startsWith("http");
          return (
            <a
              key={index}
              role="listitem"
              className={styles.card}
              href={r.href}
              target="_blank"                 // 👈 siempre en nueva pestaña
              rel="noopener noreferrer"
              title={r.title}
            >
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{r.title}</h3>
                <p className={styles.cardMeta}>
                  <span className={styles.author}>{r.author}</span>
                  {r.details && <span className={styles.dot} aria-hidden>•</span>}
                  {r.details && <span className={styles.details}>{r.details}</span>}
                </p>
              </div>

              <div className={styles.cardIcon} aria-hidden>
                {isExternal ? (
                  // icono “external link”
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"></path>
                    <path d="M5 5h6V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-2v6H5V5z"></path>
                  </svg>
                ) : (
                  // flecha “ir”
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 4l1.41 1.41L8.83 10H20v2H8.83l4.58 4.59L12 18l-8-8 8-8z"></path>
                  </svg>
                )}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}
