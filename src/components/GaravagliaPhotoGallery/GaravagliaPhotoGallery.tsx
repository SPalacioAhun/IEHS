/* eslint-disable @next/next/no-img-element */
// "use client";

// import { useCallback, useEffect, useMemo, useState } from "react";
// import Image from "next/image";
// import styles from "./GaravagliaPhotoGallery.module.css";
// import type { Photo } from "@/data/garavaglia";

// interface PhotoGalleryProps {
//   photos: Photo[];
// }

// /** Inserta `/full/` antes del nombre de archivo si no se provee fullSrc */
// function getFullSrc(src: string) {
//   // Ej: /garavaglia/01.jpg -> /garavaglia/full/01.jpg
//   //     /images/garavaglia/01.jpg -> /images/garavaglia/full/01.jpg
//   return src.replace(/\/([^\/]+)$/, "/full/$1");
// }

// export default function GaravagliaPhotoGallery({ photos }: PhotoGalleryProps) {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const open = useCallback((idx: number) => setOpenIndex(idx), []);
//   const close = useCallback(() => setOpenIndex(null), []);
//   const next = useCallback(
//     () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
//     [photos.length]
//   );
//   const prev = useCallback(
//     () =>
//       setOpenIndex((i) =>
//         i === null ? null : (i - 1 + photos.length) % photos.length
//       ),
//     [photos.length]
//   );

//   // Cierra con Escape y navega con flechas
//   useEffect(() => {
//     if (openIndex === null) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") close();
//       if (e.key === "ArrowRight") next();
//       if (e.key === "ArrowLeft") prev();
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, [openIndex, close, next, prev]);

//   const current = useMemo(
//     () => (openIndex !== null ? photos[openIndex] : null),
//     [openIndex, photos]
//   );

//   return (
//     <section id="fotos" className={styles.gallery}>
//       <h2 className={styles.title}>Fotos</h2>

//       <div className={styles.grid}>
//         {photos.map((photo, index) => (
//           <figure key={index} className={styles.card}>
//             <button
//               type="button"
//               className={styles.thumbButton}
//               onClick={() => open(index)}
//               aria-label={`Ver foto: ${photo.alt || "ampliar"}`}
//             >
//               <Image
//                 src={photo.src}
//                 alt={photo.alt}
//                 width={800}
//                 height={600}
//                 className={styles.image}
//                 sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
//               />
//             </button>
//             {photo.caption && (
//               <figcaption className={styles.caption}>{photo.caption}</figcaption>
//             )}
//           </figure>
//         ))}
//       </div>

//       {/* Lightbox */}
//       {current && openIndex !== null && (
//         <div
//           className={styles.lightboxOverlay}
//           role="dialog"
//           aria-modal="true"
//           aria-label="Visor de imagen ampliada"
//           onClick={close}
//         >
//           <div
//             className={styles.lightboxDialog}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className={styles.closeBtn}
//               onClick={close}
//               aria-label="Cerrar"
//             >
//               ×
//             </button>

//             <button
//               className={`${styles.navBtn} ${styles.prevBtn}`}
//               onClick={prev}
//               aria-label="Anterior"
//             >
//               ‹
//             </button>

//             <div className={styles.imageWrap}>
//               {/* Para la grande usamos <Image> de Next.js */}
//               <Image
//                 src={current.fullSrc ? current.fullSrc : getFullSrc(current.src)}
//                 alt={current.alt}
//                 className={styles.fullImage}
//                 width={1200}
//                 height={900}
//                 style={{ objectFit: "contain" }}
//                 sizes="100vw"
//                 priority
//               />
//               {current.caption && (
//                 <div className={styles.fullCaption}>{current.caption}</div>
//               )}
//             </div>

//             <button
//               className={`${styles.navBtn} ${styles.nextBtn}`}
//               onClick={next}
//               aria-label="Siguiente"
//             >
//               ›
//             </button>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import styles from "./GaravagliaPhotoGallery.module.css";
import type { Photo } from "@/data/garavaglia";

interface PhotoGalleryProps {
  photos: Photo[]; // Photo puede tener: { src, alt, caption, fullSrc? }
}

/** Si no viene fullSrc, inserta `/full/` antes del nombre de archivo */
function getFullSrc(src: string) {
  // /garavaglia/01.jpg -> /garavaglia/full/01.jpg
  // /images/garavaglia/01.jpg -> /images/garavaglia/full/01.jpg
  return src.replace(/\/([^\/]+)$/, "/full/$1");
}

export default function GaravagliaPhotoGallery({ photos }: PhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const open = useCallback((idx: number) => setOpenIndex(idx), []);
  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );
  const prev = useCallback(
    () =>
      setOpenIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );

  // Navegación por teclado en el lightbox
  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  // Evita que se scrollee el body cuando el lightbox está abierto
  useEffect(() => {
    if (openIndex === null) return;
    const { style } = document.body;
    const prevOverflow = style.overflow;
    style.overflow = "hidden";
    return () => {
      style.overflow = prevOverflow;
    };
  }, [openIndex]);

  const current = useMemo(
    () => (openIndex !== null ? photos[openIndex] : null),
    [openIndex, photos]
  );

  // Mostrar solo las primeras 8 fotos si showAll es false
  const visiblePhotos = showAll ? photos : photos.slice(0, 8);

  return (
    <section id="fotos" className={styles.gallery}>
      <h2 className={styles.title}>Fotos</h2>

      <div className={styles.grid}>
        {visiblePhotos.map((photo, index) => (
          <figure key={index} className={styles.card}>
            <button
              type="button"
              className={styles.thumbButton}
              onClick={() => open(showAll ? index : index)}
              aria-label={`Ver foto: ${photo.alt || "ampliar"}`}
            >
              {/* Miniatura SIN recorte ni zoom: respeta el aspecto real */}
              <img
                src={photo.src}
                alt={photo.alt}
                className={styles.image}
                loading="lazy"
                decoding="async"
              />
            </button>
            {photo.caption && (
              <figcaption className={styles.caption}>
                {photo.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {/* Botón Ver más/Ver menos */}
      {photos.length > 8 && (
        <div style={{ textAlign: "center", margin: "1.5rem 0" }}>
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            style={{
              background: "var(--card-bg, #fff)",
              border: "1px solid var(--border-color, #e2e8f0)",
              borderRadius: "0.5rem",
              padding: "0.75rem 1.5rem",
              fontSize: "1rem",
              cursor: "pointer",
              color: "var(--text-primary, #0f172a)",
              boxShadow: "0 2px 8px rgba(0,0,0,.04)",
            }}
            aria-expanded={showAll}
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
        </div>
      )}

      {/* Lightbox */}
      {current && openIndex !== null && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Visor de imagen ampliada"
          onClick={close}
        >
          <div
            className={styles.lightboxDialog}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeBtn}
              onClick={close}
              aria-label="Cerrar"
            >
              ×
            </button>

            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={prev}
              aria-label="Anterior"
            >
              ‹
            </button>

            <div className={styles.imageWrap}>
              {/* Foto grande SIN recortes ni zoom forzado */}
              <img
                src={
                  current.fullSrc ? current.fullSrc : getFullSrc(current.src)
                }
                alt={current.alt}
                className={styles.fullImage}
                loading="eager"
                decoding="async"
              />
              {current.caption && (
                <div className={styles.fullCaption}>{current.caption}</div>
              )}
            </div>

            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={next}
              aria-label="Siguiente"
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
