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
   * Relative path to the full-size image within the `public` directory.
   */
  fullSrc: string;
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
  `Esta página es el resultado de una iniciativa de sus dos amigos, colegas y compañeros de ruta del querido Juan Carlos Garavaglia. En el medio del dolor, la tristeza de una ausencia que había que aceptar y acostumbrarse, Raúl Fradkin y Jorge Gélman tuvieron esta idea de dejar registro de todo lo que ese hermano de la vida generó a nivel humano y profesional. Recuerdos, anécdotas, fotos personales y laborales y una vasta e invalorable producción de libros, capítulos de libros, artículos, ponencias, conferencias y entrevistas tenían que quedar registrado en un sitio, en una página que todos pudiéramos visitar: docentes, investigadores, estudiantes, público en general. Un rasgo que caracterizó a Juan Carlos fue el de su generosidad con el conocimiento y su capacidad de seducir a sus públicos con su pluma y su personalidad franca y abierta y eso debía quedar como testimonio para quienes tuvimos la alegría de conocerlos pero también para esos estudiantes y futuros colegas que quedarán atrapados con su obra.`,
  `Jorge Gelman y Raúl Fradkin también con su generosidad compartieron esta iniciativa convocado al IEHS, ese lugar caro en el afecto y el recuerdo del amigo. Si, efectivamente, el Instituto de Estudios Histórico Sociales, y su reconocida revista el Anuario IEHS, fueron la obra del Juan Carlos Garavaglia que vino a incorporarse a la Carrera de Historia -Facultad de Humanidades de la UNICEN- en los tiempos de la democratización de la universidad, junto a otros reconocidos colegas que dejaron una huella y una senda a seguir.`,
  `Si, el lugar del recuerdo y la nostalgia y también del dolor por la pérdida de otro de sus entrañables amigos y colega, Juan Carlos Grosso. La expectativa por su llegada fue totalmente superada por la dinámica de su trabajo. Apoyado por ese conjunto de colegas, que participaron de su proyecto, fue posible concretar la creación del Instituto como modelo de centro de investigación no solo para nuestra casa de estudios, como una posibilidad de hacer una historia profesional desde el interior e, incluso, desde una Universidad pequeña.`,
  `GRACIAS a los amigos y colegas que nos acompañaron a lo largo de estos meses acercando fotos y escritos que están en esta página como el registro de una vida pero también del permanente reconocimiento a nuestro incansable Juan Carlos Garavaglia.`
];


// Sample photo data.  Replace the `src` values with the filenames of the
// images you place under `public/images/garavaglia/`.  Ensure the paths
// start with `/images/garavaglia/` so that Next.js resolves them from
// the public directory.
export const photos: Photo[] = [
  {
    src: '/garavaglia/01.jpg',
    fullSrc: '/full/full01.jpg',
    alt: 'Juan Carlos Garavaglia con colegas en Quito en 2012',
    caption: 'Quito, octubre de 2012. Juan Carlos Garavaglia y Jorge Gelman durante una excursión.'
  },
  {
    src: '/garavaglia/02.jpg',
    fullSrc: '/full/full02.jpg',
    alt: 'Juan Carlos Garavaglia en Quito',
    caption: 'Quito, octubre de 2012. Charlando durante una pausa de nuestra reunión State Building con Jorge Gelman y Juan Pro Ruiz'
  },
  {
    src: '/garavaglia/03.jpg',
    fullSrc: '/full/full03.jpg',
    alt: 'Juan Carlos',
    caption: 'Juan Carlos con Ricardo Pasolini'
  },
  {
    src: '/garavaglia/04.jpg',
    fullSrc: '/full/full04.jpg',
    alt: 'noviembre de 2011',
    caption: 'Noviembre de 2011, gracias a las actividades que llevábamos adelante con el proyecto State Building in Latin America, coincidimos en el Archivo General de la Nación.'
  },
  { 
    src: '/garavaglia/05.jpg', 
    fullSrc: '/full/full05.jpg', 
    alt: 'Noviembre de 2011',
    caption: 'Noviembre de 2011. Gracias a las actividades que llevábamos adelante con el proyecto State Building in Latin America, coincidimos en el Archivo General de la Nación.' 
  },
  { 
    src: '/garavaglia/41.jpg', 
    fullSrc: '/full/full44.jpg', 
    alt: '23 de septiembre de 2015',
    caption: 'Junto a Lucia Lionetti en el cierre de la conferencia Desigualdad, finanzas y guerra. Argentina, 1865-1870. 23 de setiembre 2015 en el IEHS.' 
  },
  { 
    src: '/garavaglia/07.jpg', 
    fullSrc: '/full/full07.jpg', 
    alt: '24 de junio de 2007',
    caption: '24 de junio de 2007. Juan Carlos Garavaglia, Miriam Casco, Elisa Caselli.Estación de metro: Place d’Italie, Paris.' 
  },
  { 
    src: '/garavaglia/08.jpg', 
    fullSrc: '/full/full08.jpeg', 
    alt: 'Mayo de 1998', 
    caption: 'Mayo de 1998. Canchero y simpático - como siempre - en su oficina de la EHESS.' 
  },
  { 
    src: '/garavaglia/09.jpg', 
    fullSrc: '/full/full09.jpeg', 
    alt: 'Mayo de 1998', 
    caption: 'Mayo 1998. En el Sena, un día en que logré (Raúl Fradkin) sacarlo de la oficina y nos fuimos a recorrer París.' 
  },
  { src: '/garavaglia/10.jpg', 
    fullSrc: '/full/full10.jpeg', 
    alt: 'Setiembre de 2002', 
    caption: 'Setiembre de 2002. Juan estaba por entonces comenzando su investigación junto a Charo Prieto sobre la historia agraria mendocina. Alquilamos (Raúl Fradkin) un auto y fuimos a recorrer los paisajes que tan bien conocía a través de la documentación. Junto a María Elida Blasco.' 
  },
  { 
    src: '/garavaglia/11.jpg', 
    fullSrc: '/full/full11.jpg', 
    alt: 'Mayo de 2008', 
    caption: 'Mayo de 2008. Paseando por Tarragona junto Josep M. Fradera. A Juan le debo (Raúl Fradkin)también haber conocido a algunos de mis amigos más queridos.' 
  },
  { 
    src: '/garavaglia/12.jpg', 
    fullSrc: '/full/full12.jpg', 
    alt: 'Mayo de 2009', 
    caption: 'Mayo de 2009. Juan Carlos frente a su primera casa en Argeles sur Mer. Vivir frente o muy cerca del Mediterráneo era un sueño que llevaba muchos años.' 
  },
  { 
    src: '/garavaglia/13.jpg', 
    fullSrc: '/full/full13.jpg', 
    alt: 'Mayo de 1995', 
    caption: ' Mayo de 1995. Juan Carlos trabajando en el jardín de su casa Saint-Leu d´Esserent. Mucho había costado ponerlo tan hermoso y lo amaba y lo disfrutaba. Y sobre todo amaba su parrilla que tantos conflictos generó con aquel vecino que no lograba entender estas bárbaras costumbres del lejano sur. Aunque gustaba de la carne casi cruda preparar el asado era uno de sus mayores placeres. Solía reírse con ganas cuando le decía que estudiar la yerba mate y la ganadería vacuna habían sido solo proyecciones académicas de sus placeres.' 
  },
  { 
    src: '/garavaglia/14.jpg', 
    fullSrc: '/full/full14.jpg', 
    alt: 'Mayo de 1995', 
    caption: 'Mayo de 1995.Pero nada le gustaba más que la forêt abrumando a sus acompañantes con mil datos sobre las plantas y árboles, la historia y párrafos que decía de memoria de G.H. Hudson. Era claro que el ambiente y la naturaleza no solo eran para Juan un objeto de estudio. Aquí estamos (Raúl Fradkin) junto a Luciano.' 
  },
  { 
    src: '/garavaglia/15.jpg', 
    fullSrc: '/full/full15.jpg', 
    alt: 'Mayo de 1995', 
    caption: 'Mayo de 1995. No era fácil que dejara de trabajar y se hiciera tiempo para pasear. Esa vez lo logré (Raúl Fradkin).Anduvimos recorriendo la campiña de los alrededores de su casa. Aquí está, saboreando en un helado frente a la Abadía de San Juan de los Bosques. ' 
  },
  { 
    src: '/garavaglia/16.jpg', 
    fullSrc: '/full/full16.jpg', 
    alt: 'Mayo de 1995', 
    caption: 'Mayo de 1995. Muy cerca de su casa en Saint-Leu estaba este pasaje. Salimos (Raúl Fradkin) a conocer el pueblo cuando me topé con este cartel y recuerdo como se rió cuando le dije: Ah, bueno, ¡no podías haber elegido un lugar más adecuado! ¡los campesinos no se te olvidan! ' 
  },
  { 
    src: '/garavaglia/17.jpg', 
    fullSrc: '/full/full17.jpg', 
    alt: 'Bahía Blanca,24 de agosto de 1973', 
    caption: "Bahía Blanca,24 de agosto de 1973, Iglesia de Lourdes, Gara dirigiéndoles algún comentario socarrón a los novios. Juan Carlos era director del Instituto de Estudios para el Tercer Mundo 'Eva Perón' y profesor del Departamento de Humanidades, ambos de la Universidad Nacional del Sur." 
  },
  { 
    src: '/garavaglia/18.jpg', 
    fullSrc: '/full/full18.jpg', 
    alt: 'Rosario 2016', 
    caption: 'Rosario, 3 y 4 de agosto de 2016.III Workshop Historia Social de la Justicia. Justicias de equidad y Justicias de Primera Instancia. Elencos, culturas y prácticas. Buenos Aires, Santa Fe, Mendoza y Tucumán, siglos XVIII y XIX, CCT CONICET/Universidad Nacional de Rosario  ' 
  },
  { 
    src: '/garavaglia/19.jpg', 
    fullSrc: '/full/full19.jpg', 
    alt: 'Rosario 2016', 
    caption: 'Agosto 2016, Rosario. Cierre de las jornadas en la casa de Miriam Moriconi y Darío Barriera.' 
  },
  { 
    src: '/garavaglia/20.png', 
    fullSrc: '/full/full20.jpg', 
    alt: 'santiago de chile', 
    caption: 'Sábado 26 noviembre de 2011. Juan Carlos, en Santiago de Chile, durante el simposio realizado en la Universidad Diego Portales.' 
  },
  { 
    src: '/garavaglia/21.jpg', 
    fullSrc: '/full/full21.jpg', 
    alt: '12 de octubre', 
    caption: '12 de Octubre de 2012. Paseo por el hito de la línea del ecuador: de arriba a abajo y de izquierda a derecha: Roberto Ramírez, Gaetano Sabattini, Pablo Rodríguez Solano, María Elida Blasco, Rodolfo González Lebrero, Evangelina De Los Ríos, Jorge Gelman, Raúl Fradkin, Juan Carlos Sarazúa, Mario Etchechury, Elisa Caselli, Juan Carlos Garavaglia, Juan Pro Ruiz, Elvira López Taverne, Viviana Velasco Herrera, Claudia Contente Y Silvia Ratto.' 
  },
  { 
    src: '/garavaglia/22.png', 
    fullSrc: '/full/full22.jpg', 
    alt: 'sabado 20 de agosto', 
    caption: 'Sábado 20 de agosto de 2011. Un recreo en medio del taller Guerra, violencia y construcción del Estado. América Latina, siglo XIX, (CIAPA, San José de Costa Rica). De izquierda a derecha: Alejandro Rabinovich, Juan Carlos Sarazúa, Roberto Ramírez, Juan Carlos Garavaglia, Pilar López Bejarano, Mario Etchechury y Viviana Velasco Herrera.' 
  },
  { 
    src: '/garavaglia/23.jpg', 
    fullSrc: '/full/full23.jpg', 
    alt: 'Juan Carlos de joven', 
    caption: 'Juan Carlos de joven' 
  },
  { 
    src: '/garavaglia/24b.png', 
    fullSrc: '/full/full24.jpg', 
    alt: 'Barcelona año 2010', 
    caption: 'Barcelona: encuentro del año 2010 del proyecto State Building in Latin America. En la Universidad Pompeu Favra de Barcelona. De izquierda a derecha: parados Juan Carlos Sarazúa; Pablo Rodríguez Solano, Pilar López Bejarano; Mario Etchechury; Juan Carlos Garavaglia y Tomás Mantecón. Sentadas: Evangelina de los Ríos; Mariana Flores da Cunha Thompson; Viviana Velasco Herrera y Elvira López Taverne' 
  },
  { 
    src: '/garavaglia/25.png', 
    fullSrc: '/full/full25.jpg', 
    alt: 'Barcelona 2010', 
    caption: 'Barcelona 2010 En pleno desarrollo de la reunión. Juan Carlos en el uso de la palabra, junto a Mariana Flores da Cunha Thompson y Evangelina de los Ríos.' 
  },
  { 
    src: '/garavaglia/26b.png', 
    fullSrc: '/full/full26.jpg', 
    alt: 'Barcelona 2010', 
    caption: 'Barcelona 2010 Almuerzo de cierre de las actividades, en un restaurante frente al mar. De izquierda a derecha: Pablo Rodríguez Solano; Elvira López Taverne; Pilar López Bejarano; Evangelina de los Ríos; Viviana Velesco Herrera; Rodolfo E. González Lebrero (parado); María Elisa Caselli; Juan Carlos Garavaglia; Juan Carlos Sarazúa; Mariana Flores da Cunha Thompson; Mario Etchechury; Claudia Contente y Tomás Mantecón' 
  },
  { 
    src: '/garavaglia/24.jpg', 
    fullSrc: '/full/full27.jpg', 
    alt: 'Rosario 2014', 
    caption: 'En Rosario 2014' 
  },
  { 
    src: '/garavaglia/25a.jpg', 
    fullSrc: '/full/full28.jpg', 
    alt: 'Paris 2007', 
    caption: 'Paris 2007' 
  },
  { 
    src: '/garavaglia/26.jpg', 
    fullSrc: '/full/full29.jpg', 
    alt: 'Sitges 2008', 
    caption: 'Sitges 2008' 
  },
  { 
    src: '/garavaglia/27.jpg', 
    fullSrc: '/full/full30.jpg', 
    alt: 'Barcelona 2009', 
    caption: 'Barcelona 2009' 
  },
  { 
    src: '/garavaglia/28.jpg', 
    fullSrc: '/full/full31.jpg', 
    alt: 'Bariloche 2012', 
    caption: 'Bariloche 2012' 
  },
  { 
    src: '/garavaglia/29.jpg', 
    fullSrc: '/full/full32.jpg', 
    alt: 'Barcelona 2014', 
    caption: 'Barcelona 2014' 
  },
  { 
    src: '/garavaglia/30.jpg', 
    fullSrc: '/full/full33.jpg', 
    alt: 'Rosario 2014', 
    caption: 'Rosario 2014' 
  },
  { 
    src: '/garavaglia/31.jpg', 
    fullSrc: '/full/full34.jpg', 
    alt: 'Besalú 2016', 
    caption: 'Besalú 2016' 
  },
  { 
    src: '/garavaglia/32.jpg', 
    fullSrc: '/full/full35.jpg', 
    alt: 'Madrid 2016', 
    caption: 'Madrid 2016' 
  },
  { 
    src: '/garavaglia/33.jpg', 
    fullSrc: '/full/full36.jpg', 
    alt: 'Marzo de 2001', 
    caption: 'Marzo de 2001 en un bar de Sevilla festejando la defensa de María Elena Barral. Jorge fue el director y Juan Carlos uno de los jurados' 
  },
  { 
    src: '/garavaglia/34.jpg', 
    fullSrc: '/full/full37.jpg', 
    alt: 'Marzo de 1999', 
    caption: 'Marzo de 1999, UPO 2000. Asado de finalización del primer año de doctorado de la Universidad Pablo de Olavide. Gara hizo el asado en el predio de la universidad' 
  },
  { 
    src: '/garavaglia/35.jpg', 
    fullSrc: '/full/full38.jpg', 
    alt: 'La Rábida 1996 ', 
    caption: 'La Rábida 1996: Tertulias en La Rábida con Juan Marchena y Patricia Rodas' 
  },
  { 
    src: '/garavaglia/36.jpg', 
    fullSrc: '/full/full39.jpg', 
    alt: 'Sevilla 1999', 
    caption: 'Sevilla 1999a: empezando en Doctorado en la UPO con Mañe y Maño' 
  },
  { 
    src: '/garavaglia/37.jpg', 
    fullSrc: '/full/full40.jpg', 
    alt: 'La Rábida 1996', 
    caption: 'UIA La Rábida 1996: Despedida de Gara con Maño y Patricia Rodas' 
  },
  { 
    src: '/garavaglia/38.jpg', 
    fullSrc: '/full/full41.jpg', 
    alt: 'La Rábida 1996', 
    caption: 'UIA La Rábida, 1996, con Paco Rubio, Selva Senor, Pachy Fernández y Mañe' 
  },
  { 
    src: '/garavaglia/39.jpg', 
    fullSrc: '/full/full42.jpg', 
    alt: 'Jornadas de Columnaria 2015', 
    caption: 'Jornadas de Columnaria en 2015.Tandil' 
  },
  { 
    src: '/garavaglia/40.jpg', 
    fullSrc: '/full/full43.jpg', 
    alt: 'seminario', 
    caption: 'Junto a Raúl Fradkin, Noemí Goldman, Alejandro Rabinovich y Natalia Sobrevilla en la coordinación. Seminario Internacional: Las independencias iberoamericanas. Actualizaciones historiográficas y debates, organizado por el proyecto “War and Nation: identity and the process of state-building in South America”. USAL, julio del 2016' 
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