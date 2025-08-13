// import styles from './GaravagliaVideoSection.module.css';
// import type { VideoCategory } from '../../data/garavaglia';

// interface VideoSectionProps {
//   categories: VideoCategory[];
// }

// /**
//  * Renders an accordion of video categories.  Each category can be
//  * expanded or collapsed to show its list of videos.  Videos are
//  * embedded via <iframe> elements; ensure that the embed URLs are
//  * correct YouTube or other provider embeds.
//  */
// export default function GaravagliaVideoSection({ categories }: VideoSectionProps) {
//   return (
//     <section id="videos" className={styles.videos}>
//       <h2 className={styles.title}>Videos</h2>
//       <div className={styles.accordion}>
//         {categories.map((cat) => (
//           <details key={cat.name} className={styles.category}>
//             {/* Use <summary> for the clickable header of each accordion item */}
//             <summary className={styles.summary}>{cat.name}</summary>
//             <div className={styles.videoList}>
//               {cat.videos.map((video) => (
//                 <div key={video.id} className={styles.videoItem}>
//                   <h3 className={styles.videoTitle}>{video.title}</h3>
//                   {video.description && (
//                     <p className={styles.videoDescription}>{video.description}</p>
//                   )}
//                   <div className={styles.videoWrapper}>
//                     <iframe
//                       src={video.url}
//                       title={video.title}
//                       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                       allowFullScreen
//                     ></iframe>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </details>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useRef } from "react";
import styles from "./GaravagliaVideoSection.module.css";
import type { VideoCategory } from "@/data/garavaglia";

interface VideoSectionProps {
  categories: VideoCategory[];
}

export default function GaravagliaVideoSection({ categories }: VideoSectionProps) {
  const sectionRef = useRef<HTMLElement | null>(null);

  // Abre una sola categoría por vez
  const handleToggle: React.ComponentProps<"details">["onToggle"] = (e) => {
    const current = e.currentTarget;
    if (current.open) {
      const siblings = current.parentElement?.querySelectorAll("details[open]");
      siblings?.forEach((el) => {
        if (el !== current) (el as HTMLDetailsElement).open = false;
      });
    }
  };

  // Deep-link: #video-<id>
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash || !hash.startsWith("#video-")) return;

    const target = document.querySelector(hash) as HTMLElement | null;
    if (!target) return;

    const details = target.closest("details") as HTMLDetailsElement | null;
    if (details && !details.open) details.open = true;

    setTimeout(() => {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  }, []);

  // Helper para renderizar párrafos de carta (separa por doble salto de línea)
  const renderLetter = (text: string) => {
    return text
      .split(/\n\s*\n/) // separa por líneas en blanco
      .map((para, idx) => (
        <p key={idx} className={styles.letterParagraph}>
          {para.trim()}
        </p>
      ));
  };

  return (
    <section id="videos" ref={sectionRef} className={styles.videos}>
      <h2 className={styles.title}>Videos</h2>

      <div className={styles.accordion}>
        {categories.map((cat, idx) => (
          <details
            key={cat.name}
            className={styles.category}
            onToggle={handleToggle}
            {...(idx === 0 ? { open: true } : {})}
          >
            <summary className={styles.summary}>
              <span className={styles.catName}>{cat.name}</span>
              <span className={styles.count}>{cat.videos.length}</span>
            </summary>

            <div className={styles.videoList}>
              {cat.videos.map((video) => (
                <article
                  key={video.id}
                  id={`video-${video.id}`}
                  className={styles.videoItem}
                >
                  <header className={styles.videoHeader}>
                    <h3 className={styles.videoTitle}>{video.title}</h3>
                    {video.description && (
                      <p className={styles.videoDescription}>
                        {video.description}
                      </p>
                    )}
                  </header>

                  <div className={styles.videoWrapper}>
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                    />
                  </div>

                  {/* ⬇️ Carta opcional: solo se muestra si existe video.letter */}
                  {"letter" in video && video.letter && (
                    <section className={styles.videoLetter} aria-label="Carta relacionada al video">
                      {renderLetter(video.letter)}
                      {/* Si querés agregar una firma al final, podés usar: */}
                      {video.letterSignature && (
                        <>
                          <hr className={styles.letterDivider} />
                          <p className={styles.letterSignature}>{video.letterSignature}</p>
                        </>
                      )}
                    </section>
                  )}
                </article>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
