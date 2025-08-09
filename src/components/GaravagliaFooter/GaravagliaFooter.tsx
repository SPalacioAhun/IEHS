import styles from './GaravagliaFooter.module.css';

interface FooterProps {
  address: string;
  email: string;
  license: string;
  credits: string;
}

/**
 * Footer component displaying contact information, licensing details
 * and credits for the site.  The content is divided into three
 * columns that wrap on smaller screens.  Links are styled to match
 * the rest of the site.
 */
export default function GaravagliaFooter({ address, email, license, credits }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h3 className={styles.heading}>Contacto</h3>
          <p className={styles.text}>{address}</p>
          <p className={styles.text}>
            Correo: <a href={`mailto:${email}`} className={styles.link}>{email}</a>
          </p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.heading}>Licencia</h3>
          <p className={styles.text}>{license}</p>
        </div>
        <div className={styles.section}>
          <h3 className={styles.heading}>Créditos</h3>
          <p className={styles.text}>{credits}</p>
        </div>
      </div>
    </footer>
  );
}