import GaravagliaHeader from '@/components/GaravagliaHeader/GaravagliaHeader';
import GaravagliaIntro from '@/components/GaravagliaIntro/GaravagliaIntro';
import GaravagliaPhotoGallery from '@/components/GaravagliaPhotoGallery/GaravagliaPhotoGallery';
import GaravagliaVideoSection from '@/components/GaravagliaVideoSection/GaravagliaVideoSection';
import GaravagliaTestimonials from '@/components/GaravagliaTestimonials/GaravagliaTestimonials';
import GaravagliaWorks from '@/components/GaravagliaWorks/GaravagliaWorks';
import GaravagliaReviews from '@/components/GaravagliaReviews/GaravagliaReviews';
import GaravagliaFooter from '@/components/GaravagliaFooter/GaravagliaFooter';

import {
  introParagraphs,
  photos,
  videoCategories,
  testimonials,
  works,
  reviews
} from '../../data/garavaglia';

/**
 * Page component for the Juan Carlos Garavaglia homage.  This page
 * assembles the various sections into a cohesive layout.  If you wish
 * to split the homage into multiple pages, you can reuse the
 * individual components elsewhere.
 */
export default function HomenajeGaravagliaPage() {
  return (
    <>
      <GaravagliaHeader />
      <main>
        <GaravagliaIntro paragraphs={introParagraphs} />
        <GaravagliaPhotoGallery photos={photos} />
        <GaravagliaVideoSection categories={videoCategories} />
        <GaravagliaTestimonials testimonials={testimonials} />
        <GaravagliaWorks works={works} />
        <GaravagliaReviews reviews={reviews} />
      </main>
      <GaravagliaFooter
        address="Instituto de Estudios Histórico-Sociales (IEHS) – Facultad de Humanidades, UNICEN, Tandil, Argentina"
        email="iehs@fh.unicen.edu.ar"
        license="Esta obra está bajo una Licencia Creative Commons Atribución-NoComercial 4.0 Internacional."
        credits="Sitio desarrollado a partir de una plantilla TEMPLATED y actualizado por el equipo IEHS."
      />
    </>
  );
}