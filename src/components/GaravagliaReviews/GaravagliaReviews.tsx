import styles from './GaravagliaReviews.module.css';
import type { Review } from '../../data/garavaglia';

interface ReviewsProps {
  reviews: Review[];
}

/**
 * Displays a list of reviews written about the work of Juan Carlos
 * Garavaglia.  Reviews include the title, reviewer and additional
 * context.  As these often point to external journals, links open in
 * new tabs.
 */
export default function GaravagliaReviews({ reviews }: ReviewsProps) {
  return (
    <section id="reseñas" className={styles.reviews}>
      <h2 className={styles.title}>Leer a Garavaglia: reseñas</h2>
      <ul className={styles.list}>
        {reviews.map((r, index) => (
          <li key={index} className={styles.item}>
            <a
              href={r.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {r.title}
            </a>
            <span className={styles.author}> — {r.author}</span>
            {r.details && <span className={styles.details}> — {r.details}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}