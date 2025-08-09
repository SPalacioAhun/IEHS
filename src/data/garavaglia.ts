/**
 * Data definitions for the homenaje a Juan Carlos Garavaglia.
 *
 * This file contains structured data used by the components.  Keeping the
 * data separate from the presentation allows the UI to be written once
 * while still making it easy to update or expand the content later on.
 */

export interface Photo {
  /**
   * Relative path to the image within the `public` directory.  These images
   * should be placed under `public/images/garavaglia/`.
   */
  src: string;
  /**
   * Alternative text describing the contents of the photograph for
   * accessibility.  Always provide meaningful descriptions; avoid leaving
   * this string empty.
   */
  alt: string;
  /**
   * Short caption shown beneath the photograph.  Captions may include
   * dates, locations and names of the people pictured.
   */
  caption: string;
}

export interface Video {
  /** Unique identifier for the video (e.g. slug or number). */
  id: string;
  /** Title displayed to the user. */
  title: string;
  /**
   * Embedded video URL, typically a YouTube embed URL.  This should be a
   * fully‑qualified URL beginning with https://.  For local files you can
   * instead provide a relative path within `/public/videos/`.
   */
  url: string;
  /**
   * Optional longer description of the video.  Use this to contextualise
   * the recording (e.g. event name, date, participants).  If omitted
   * the title alone will be shown.
   */
  description?: string;
}

export interface VideoCategory {
  /** Category name shown in the accordion header. */
  name: string;
  /** List of videos belonging to this category. */
  videos: Video[];
}

export interface Testimonial {
  title: string;
  author: string;
  /**
   * URL to the full testimonial.  This can be an absolute URL (e.g. to a
   * PDF on an external site) or a relative path that will be resolved
   * within the Next.js application.  Always open external links in a new
   * tab to avoid disrupting the user’s flow.
   */
  href: string;
  /**
   * Indicates whether the link points to a PDF file or an external site.
   * This can be used to display an appropriate icon next to the link.
   */
  type?: 'pdf' | 'external';
}

export interface Work {
  title: string;
  /** Year of publication or completion. */
  year: number;
  /** Additional reference information such as page numbers. */
  details?: string;
  /** URL to the work itself (external or internal). */
  href: string;
}

export interface Review {
  title: string;
  author: string;
  href: string;
  /** Additional reference information, such as where the review was published. */
  details?: string;
}

// Introductory paragraphs describing the purpose and motivation for the
// homage.  These strings are written in Spanish to reflect the language
// used on the original site.  Feel free to edit the text to more closely
// match the original wording.
export const introParagraphs: string[] = [
  'Esta página es un homenaje a Juan Carlos Garavaglia, creada por sus amigos y colegas Raúl Fradkin y Jorge Gelman con el objetivo de reunir la producción y el recuerdo de este historiador, tras su fallecimiento en 2017.',
  'Su generosidad y compromiso intelectual dejaron una huella indeleble en el Instituto de Estudios Histórico-Sociales (IEHS) y en la revista Anuario IEHS, proyectos que contribuyó a gestar.',
  'Aquí encontrarás fotografías, materiales audiovisuales, testimonios de colegas y estudiantes, una selección de sus trabajos más importantes y reseñas sobre sus obras.',
  'Este portal aspira a convertirse en un espacio de memoria y difusión accesible para docentes, investigadores, estudiantes y el público en general.'
];

// Sample photo data.  Replace the `src` values with the filenames of the
// images you place under `public/images/garavaglia/`.  Ensure the paths
// start with `/images/garavaglia/` so that Next.js resolves them from
// the public directory.
export const photos: Photo[] = [
  {
    src: '/images/garavaglia/quito-2012.jpg',
    alt: 'Juan Carlos Garavaglia con colegas en Quito en 2012',
    caption: 'Quito, 2012: junto a Raúl Fradkin, Luis Alberto Romero y otros colegas.'
  },
  {
    src: '/images/garavaglia/paris-1998.jpg',
    alt: 'Juan Carlos Garavaglia en París en 1998',
    caption: 'París, 1998: paseo con Jorge Gelman por las calles de la ciudad.'
  },
  {
    src: '/images/garavaglia/santiago-2011.jpg',
    alt: 'Juan Carlos Garavaglia en un simposio en Santiago en 2011',
    caption: 'Santiago, 2011: simposio internacional Chile–Argentina.'
  }
];

// Sample video categories.  Populate with the embed URLs of the real videos
// when available.  The YouTube IDs used here are placeholders; replace
// them with the actual IDs of the tribute recordings.
export const videoCategories: VideoCategory[] = [
  {
    name: 'Homenaje Ravignani 2017',
    videos: [
      {
        id: 'presentacion-gelman-fradkin',
        title: 'Presentación de Gelman y Fradkin',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Homenaje realizado en marzo de 2017 en el Instituto Ravignani con la participación de Jorge Gelman y Raúl Fradkin.'
      },
      {
        id: 'despedida-garavaglia',
        title: 'Despedida y agradecimientos',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Palabras de despedida y agradecimientos de colegas y amigos.'
      }
    ]
  },
  {
    name: 'XVI Jornadas Interescuelas',
    videos: [
      {
        id: 'mesa-redonda',
        title: 'Mesa redonda en las XVI Jornadas Interescuelas',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        description: 'Mesa redonda dedicada a la memoria de Juan Carlos Garavaglia durante las XVI Jornadas Interescuelas.'
      }
    ]
  }
];

// Sample testimonials.  Replace the `href` values with the actual paths to
// the PDF files or routes within your Next.js application.  If the link
// points to an external site, set `type` to 'external' to indicate that
// it should open in a new tab.  Otherwise, omit the type or set it to
// 'pdf'.
export const testimonials: Testimonial[] = [
  {
    title: 'Adieux Gara',
    author: 'Pilar González Bernaldo de Quirós',
    href: '/testimonios/adieux-gara.pdf',
    type: 'pdf'
  },
  {
    title: 'Juan Carlos Garavaglia, el pastuzo porteño',
    author: 'Carmen Bernand',
    href: '/testimonios/pastuzo-porteno.pdf',
    type: 'pdf'
  },
  {
    title: 'Juan Carlos Garavaglia. Hasta siempre.',
    author: 'Christophe Giudicelli',
    href: '/testimonios/hasta-siempre.pdf',
    type: 'pdf'
  },
  {
    title: 'Para Juan Carlos Garavaglia',
    author: 'Wilma Peres Costa',
    href: '/testimonios/para-garavaglia.pdf',
    type: 'pdf'
  },
  {
    title: 'Una historia mejor',
    author: 'María Elena Barral',
    href: 'https://www.pagina12.com.ar/',
    type: 'external'
  }
];

// Sample works (trabajos).  Add as many items as necessary; include
// informative titles and links to the digital versions of the works.
export const works: Work[] = [
  {
    title: 'El comercio virreinal 1779–1784',
    year: 1970,
    details: 'Tesis de licenciatura (UBA)',
    href: 'https://repositorio.uba.ar/comm/handle/123456789/12345'
  },
  {
    title: 'Los textiles de la tierra en el contexto colonial rioplatense',
    year: 1986,
    details: 'Anuario IEHS 1 (1986): 73–93',
    href: 'https://repositorio.iehs/1986-textiles.pdf'
  },
  {
    title: '¿Existieron los gauchos?',
    year: 1987,
    details: 'Anuario IEHS 2 (1987): 45–62',
    href: 'https://repositorio.iehs/1987-gauchos.pdf'
  }
];

// Sample reviews of Garavaglia’s work.  Each item cites the work reviewed
// and the reviewer.  The `details` field can include the publication
// reference or context.
export const reviews: Review[] = [
  {
    title: 'Expansión capitalista y transformaciones regionales',
    author: 'Daniel Santilli',
    href: '/reseñas/expansion-capitalista.pdf',
    details: 'Reseña de la obra de Gelman, Garavaglia y Zeberio (1999)'
  },
  {
    title: 'Los caminos de la justicia rural',
    author: 'Melina Yangilevich',
    href: '/reseñas/caminos-justicia.pdf',
    details: 'Comentarios sobre la obra dirigida por Garavaglia (1999)'
  },
  {
    title: 'Pastores y labradores de Buenos Aires',
    author: 'Julio Djenderedjian',
    href: '/reseñas/pastores-labradores.pdf',
    details: 'Reseña sobre el libro de Garavaglia (1999)'
  }
];