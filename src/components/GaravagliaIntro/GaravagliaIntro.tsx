import styles from './GaravagliaIntro.module.css';

interface IntroProps {
  /**
   * Array of paragraphs to display in the introduction.  Each string
   * should represent a single paragraph; they will be rendered in
   * sequence separated by appropriate margins.
   */
  paragraphs: string[];
}

/**
 * Renders the introductory section of the homage page.  This component
 * accepts an array of paragraphs and displays them in order.  It
 * doesn't apply any headings; headings should be added by the parent
 * component if needed.
 */
export default function GaravagliaIntro({ paragraphs }: IntroProps) {
  return (
    <section id="intro" className={styles.intro}>
      {paragraphs.map((paragraph, index) => (
        <p key={index} className={styles.paragraph}>
          {paragraph}
        </p>
      ))}
    </section>
  );
}