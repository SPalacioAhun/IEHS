import styles from './GaravagliaTestimonials.module.css';
import type { Testimonial } from '../data/garavaglia';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

/**
 * Displays a list of testimonials written in homenaje a Juan Carlos
 * Garavaglia.  Each item lists the title and author, and indicates
 * whether the link points to a PDF or an external site.  External
 * links open in a new tab to avoid losing the user’s place.
 */
export default function GaravagliaTestimonials({ testimonials }: TestimonialsProps) {
  return (
    <section id="testimonios" className={styles.testimonials}>
      <h2 className={styles.title}>Testimonios</h2>
      <ul className={styles.list}>
        {testimonials.map((t, index) => (
          <li key={index} className={styles.item}>
            <a
              href={t.href}
              target={t.type === 'external' ? '_blank' : undefined}
              rel={t.type === 'external' ? 'noopener noreferrer' : undefined}
              className={styles.link}
            >
              {t.title}
            </a>
            <span className={styles.author}> — {t.author}</span>
            {t.type && (
              <span className={styles.type}>
                {t.type === 'pdf' ? '(PDF)' : '(externo)'}
              </span>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}