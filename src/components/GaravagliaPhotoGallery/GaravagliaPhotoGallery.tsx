import Image from 'next/image';
import styles from './GaravagliaPhotoGallery.module.css';
import type { Photo } from '../../data/garavaglia';

interface PhotoGalleryProps {
  photos: Photo[];
}

/**
 * Displays a responsive gallery of photographs.  Each image is rendered
 * via `next/image` to ensure proper optimisation.  Captions appear
 * below each photograph and can include explanatory text, dates or
 * names.
 */
export default function GaravagliaPhotoGallery({ photos }: PhotoGalleryProps) {
  return (
    <section id="fotos" className={styles.gallery}>
      <h2 className={styles.title}>Fotos</h2>
      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <figure key={index} className={styles.card}>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={800}
              height={600}
              className={styles.image}
              sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
            />
            <figcaption className={styles.caption}>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}