import styles from './GaravagliaWorks.module.css';
import type { Work } from '../../data/garavaglia';

interface WorksProps {
  works: Work[];
}

/**
 * Renders a list of available works authored by Juan Carlos Garavaglia.
 * Each entry includes a title, year and optional details.  All links
 * open in a new tab since they point to PDFs or external repositories.
 */
export default function GaravagliaWorks({ works }: WorksProps) {
  return (
    <section id="trabajos" className={styles.works}>
      <h2 className={styles.title}>Trabajos disponibles</h2>
      <ul className={styles.list}>
        {works.map((w, index) => (
          <li key={index} className={styles.item}>
            <a
              href={w.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {w.title}
            </a>
            <span className={styles.year}> ({w.year})</span>
            {w.details && <span className={styles.details}> — {w.details}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}