"use client";

import { useMemo, useState } from "react";
import styles from "./GaravagliaWorks.module.css";
import type { Work } from "@/data/garavaglia";

interface WorksProps {
  works: Work[];
}

type PartKey = 1 | 2 | 3;

export default function GaravagliaWorks({ works }: WorksProps) {
  // Parte activa (por defecto 1)
  const [activePart, setActivePart] = useState<PartKey>(1);
  // Mostrar todo o sólo 8
  const [showAll, setShowAll] = useState(false);

  // Conteos por parte
  const counts = useMemo(() => {
    const c1 = works.filter((w) => w.part === 1).length;
    const c2 = works.filter((w) => w.part === 2).length;
    const c3 = works.filter((w) => w.part === 3).length;
    return { 1: c1, 2: c2, 3: c3 } as Record<PartKey, number>;
  }, [works]);

  const filtered = useMemo(
    () => works.filter((w) => w.part === activePart),
    [works, activePart]
  );

  const visible = useMemo(
    () => (showAll ? filtered : filtered.slice(0, 8)),
    [filtered, showAll]
  );

  const handleChangePart = (p: PartKey) => {
    setActivePart(p);
    setShowAll(false); // al cambiar de parte, volvemos a 8
  };

  return (
    <section id="trabajos" className={styles.works}>
      <h2 className={styles.title}>Trabajos disponibles</h2>

      {/* Controles de partes */}
      <div
        className={styles.controls}
        role="tablist"
        aria-label="Partes de trabajos"
      >
        {[1, 2, 3].map((p) => (
          <button
            key={p}
            role="tab"
            aria-selected={activePart === p}
            className={`${styles.partBtn} ${
              activePart === p ? styles.partBtnActive : ""
            }`}
            onClick={() => handleChangePart(p as PartKey)}
          >
            Página {p}{" "}
            <span className={styles.badge}>{counts[p as PartKey] ?? 0}</span>
          </button>
        ))}
      </div>

      {/* Lista de trabajos */}
      <ul className={styles.list} aria-live="polite">
        {visible.map((w, idx) => (
          <li key={`${w.title}-${w.year}-${idx}`} className={styles.item}>
            <a
              href={w.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              title={w.title}
            >
              <span className={styles.itemTitle}>{w.title}</span>
            </a>
            {typeof w.year === "number" && (
              <span className={styles.year}> ({w.year})</span>
            )}
            {w.details && (
              <span className={styles.details}> — {w.details}</span>
            )}
          </li>
        ))}
      </ul>

      {/* Ver más / Ver menos */}
      {filtered.length > 8 && (
        <div className={styles.actions}>
          <button
            className={styles.moreBtn}
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? "Ver menos" : "Ver más"}
          </button>
          <span className={styles.hint}>
            {showAll
              ? `Mostrando ${filtered.length} trabajos.`
              : `Mostrando 8 de ${filtered.length}.`}
          </span>
        </div>
      )}
    </section>
  );
}
