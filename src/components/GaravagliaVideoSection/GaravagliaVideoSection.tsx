import styles from './GaravagliaVideoSection.module.css';
import type { VideoCategory } from '../../data/garavaglia';

interface VideoSectionProps {
  categories: VideoCategory[];
}

/**
 * Renders an accordion of video categories.  Each category can be
 * expanded or collapsed to show its list of videos.  Videos are
 * embedded via <iframe> elements; ensure that the embed URLs are
 * correct YouTube or other provider embeds.
 */
export default function GaravagliaVideoSection({ categories }: VideoSectionProps) {
  return (
    <section id="videos" className={styles.videos}>
      <h2 className={styles.title}>Videos</h2>
      <div className={styles.accordion}>
        {categories.map((cat) => (
          <details key={cat.name} className={styles.category}>
            {/* Use <summary> for the clickable header of each accordion item */}
            <summary className={styles.summary}>{cat.name}</summary>
            <div className={styles.videoList}>
              {cat.videos.map((video) => (
                <div key={video.id} className={styles.videoItem}>
                  <h3 className={styles.videoTitle}>{video.title}</h3>
                  {video.description && (
                    <p className={styles.videoDescription}>{video.description}</p>
                  )}
                  <div className={styles.videoWrapper}>
                    <iframe
                      src={video.url}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}