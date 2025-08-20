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
   letter?: string;            // ⬅️ opcional, carta larga
  letterSignature?: string;   // ⬅️ opcional, firma (autor/fecha)
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
  /**
   * Optional thumbnail image for the testimonial.
   */
  thumb?: string;
}

export interface Work {
  title: string;
  /** Year of publication or completion. */
  year?: number;
  /** Additional reference information such as page numbers. */
  details?: string;
  /** URL to the work itself (external or internal). */
  href: string;
  part: 1 | 2 | 3;
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
    name: 'Homenaje del Ravignani 1',
    videos: [
      {
        id: 'rav1-video1',
        title: 'Presentación Gelman Fradkin',
        url: 'https://www.youtube.com/embed/_zOMHh1phUY',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav1-video2',
        title: 'Jose Mateo',
        url: 'https://www.youtube.com/embed/idrLAdIYrsk',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav1-video3',
        title: 'Mariana Canedo',
        url: 'https://www.youtube.com/embed/Ufy5CMj8Mbg',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav1-video4',
        title: 'Eduardo Miguez',
        url: 'https://www.youtube.com/embed/gOJqw1RDVnY',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav1-video5',
        title: 'Sara Mata',
        url: 'https://www.youtube.com/embed/oLj7dFtX4IQ',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav1-video6',
        title: 'Rossana Barragán',
        url: 'https://www.youtube.com/embed/FX_dZbnZ0Wo',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      }
    ]
  },
  {
    name: 'Homenaje del Ravignani 2',
    videos: [
      {
        id: 'rav2-video1',
        title: 'Daniel Divinsky',
        url: 'https://www.youtube.com/embed/P2X3DUutkME',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav2-video2',
        title: 'Judith Farberman',
        url: 'https://www.youtube.com/embed/-L1HcWXXUOY',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav2-video3',
        title: 'María Stella Spinelli',
        url: 'https://www.youtube.com/embed/LkWbg-3LgDc',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav2-video4',
        title: 'Ana Frega',
        url: 'https://www.youtube.com/embed/9rebMGNqVFA',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav2-video5',
        title: 'Gladys Perry',
        url: 'https://www.youtube.com/embed/K3VUCeApvHE',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav2-video6',
        title: 'Andrés Regalsky',
        url: 'https://www.youtube.com/embed/iCU0X8BqHrw',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      },
      {
        id: 'rav2-video7',
        title: 'Cuento de J. C. Garavaglia y Mensajes',
        url: 'https://www.youtube.com/embed/Ofs-8g4XIFc',
        description: 'Instituto de Historia Argentina y Americana Dr. Emilio Ravignani Bs. As. 15 de Marzo de 2017. Creación y administración del Canal YouTube del Instituto Ravignani: María Eugenia Druetta (CONICET) - Tomás Guzmán (FFyL-UBA) Grabación y Edición de video Julieta Fradkin - Christian Poczynok (FFyL-UBA) - Edgardo Riera (CONICET)'
      }
    ]
  },
  {
    name: 'Homenaje XVI Jornadas Interescuelas',
    videos: [
      {
        id: 'Mesa redonda de cierre en homenaje a Juan Carlos Garavaglia',
        title: 'Mesa redonda en las XVI Jornadas Interescuelas',
        url: 'https://www.youtube.com/embed/RxETuu4B2aI',
        description: 'XVI Jornadas Interescuelas Mar del Plata, realizadas del 9 al 11 de Agosto 2017 Integrantes de la mesa: Darío Barriera, Raúl Fradkin, Jorge Gelman, Alejandro Rabinovich “La contribución de Juan Carlos Garavaglia a la historiografía argentina y latinoamericana”. Coordinador: Eduardo Míguez (UNICEN-UNMdP)'
      }
    ]
  },
  {
    name: 'Conferencias',
    videos: [
      {
        id: 'conf-video1',
        title: 'Conferencia en la UNLPam - 2015',
        url: 'https://www.youtube.com/embed/JD70JFuFDxQ',
        description: '"Las fuerzas de guerra argentinas durante el conflicto de la Triple Alianza". Gentileza de CPA UNLPam'
      },
      {
        id: 'conf-video2',
        title: 'Conferencia en el IEHS - 2015',
        url: 'https://www.youtube.com/embed/irLWJjOLfMw',
        description: 'Conferencia del Dr. Juan Carlos Garavaglia "Desigualdad, finanzas y guerra. Argentina, 1865-1870", realizada en el Instituto de Estudios Histórico Sociales el 23 de setiembre de 2015. IEHS'
      },
      {
        id: 'conf-video3',
        title: 'Conferencia en el Seminario SIProD - 2012',
        url: 'https://www.youtube.com/embed/Hd5weyIrjfU',
        description: 'Presentación de Juan Carlos Garavaglia en el SIProD: "Elite, fiscalidad y endeudamiento en la construcción del Estado. El caso de Buenos Aires 1852-1861" (09/08/2012). (Audio aceptable, Definición de imagen regular)'
      },
    ]
  },
  {
    name: 'Gara',
    videos: [
      {
        id: 'gara-video1',
        title: 'Juan Carlos y sus dotes de bailarin',
        url: '/video/garaenaccion.mp4',
        description: 'Video grabado en la casa de una de las doctorandas del proyecto, Viviana Velasco, en Quito, en octubre de 2012. Allí estan Juan Pro, Pilar López Bejarano, Elisa Caselli, Juan Carlos, Jorge Gelman, Rodolfo González Lebrero, Silvia Battaglia. En un momento se ve también a Raúl Fradkin y a la anfitriona, Viviana. (Video de Rodolfo González Lebrero)'
      },
      {
  id: 'gara-video2',
  title: 'Juan Carlos Garavaglia en un archivo al aire libre',
  url: '/video/negrete.mp4',
  description: 'Visita a la ciudad de Ranchos, su museo, la estancia Negrete y un pequeño campo de pastores y labradores, junto a Raúl Fradkin y Rodolfo González Lebrero en agosto de 1995',
  letter: `Era agosto de 1995. En algún encuentro, Juan Carlos había comentado su interés por visitar algunas de las centenarias estancias bonaerenses, inmerso ya en la tarea de desentrañar la trama del mundo rural y la vida social de la campaña, que vislumbraba más complejo de lo que hasta entonces parecía. En aquel agosto, un par de eventos afortunados me habían abierto la posibilidad de visitar una de esas estancias: Negrete, muy cerca de Ranchos (General Paz). Un ex tambero de la zona que yo conocía, Romualdo Tati Cerio, trabajaba como encargado de la estancia. Nos contactamos con él, quien a su vez consultó con su patrona, que se mostró muy interesada en nuestra posible visita. Sólo teníamos que ponerle fecha.

Y así nos largamos el 12 de agosto, haciendo los 120 kilómetros que separan a Buenos Aires de Ranchos, Juan Carlos, Raúl Fradkin y su (ahora ex) esposa Miriam Feldman, mi mujer (Silvia Battaglia) y yo. El plan, que Tati Cerio se ocupó de facilitar, prometía mucho. Y cumplió.

La primera emoción de las varias que experimentaríamos, fue la visita a un ícono de Ranchos, el soguero Martín Gómez, visita de la cual no encuentro registros fotográficos. Pero recuerdo el entusiasmo del Gara por conversar con don Martín, como lo llamaban en el pueblo. El taller plagado de herramientas gastadas por el uso, soguitas, cuchillos y miles de lonjas de cuero colgando de techo, esperando ser transformadas en alhajados aperos o empuñaduras de facones. Juan Carlos sentía fascinación frente a los utensilios que veía. Y aunque sabía que don Martín era famoso por su trabajo, le encantó su sencillez, que pensaba característica de los hombres y mujeres que él quería rescatar del olvido.

El segundo paso, que es el que inicia el video, fue el Museo Histórico Regional “Marta Inés Martínez”. Nada de lo que allí se exponía quedó fuera de la mirada del Gara. Boleadoras, morteros, fusiles, bancos de hueso, cencerros, un arado de tiro, vestidos, muebles e incluso el edificio que albergaba la muestra fue escudriñado (nunca tan a propósito la palabreja) por los inquietos ojos de Juan Carlos. Y allí tendríamos también un adelanto de lo que íbamos a visitar al día siguiente: instrumentos para la esquila traídos de la estancia Negrete (fechados en 1826).

El domingo 13 de agosto llegamos a Negrete (4’ 35” del video). Si bien la estancia existe desde el último cuarto del siglo XVIII, fundada por Ciriaco Negrete, el casco que visitamos fue construido en 1863 por orden de otro propietario, el escocés John Hannah, que la había comprado en 1836 comenzando la cría de ovejas merino. En 1870 y antes de volver a Escocia, Hannah le vendió la estancia a David Shennan quien continúo con la cría de ovejas y la construcción de algunos de los establos y depósitos que pueden verse en el video.

Tati Cerio nos recibió en la entrada y nos acompañó todo el tiempo que duró la visita. Juan Carlos estaba exultante. Un militante de la historia recorriendo los restos casi arqueológicos de la estancia, que parecían empecinados en mantenerse en pie sólo para darle el gusto. Documentos materiales que daban carnadura a las palabras de los legajos que devoraba en los archivos con entusiasmo juvenil. Si las construcciones que veíamos lo fascinaban, su evidente fragilidad o su ruinoso estado -el cementerio de la estancia lo tocó particularmente- le provocaba una gran tristeza. La misma que lo invadía ante cada documento escrito que la indiferencia y los malos cuidados hicieran ilegible en cualquier archivo. No estoy interpretando: cuando se lo ve caminando con las manos en los bolsillos, medio cabizbajo y seguido de cerca por un perro rengo (una escena que haría las delicias del neorrealismo italiano), lo invadía, así lo dijo, un sentimiento de impotencia por el deterioro de un bien histórico que hubiera merecido mejor suerte.

La dueña del campo se sumó de a ratos al paseo, haciendo las veces de guía. Ella nos contó del árbol plantado por “el rey Jorge V” -como se me escucha repetir a mí- en 1881 (a Jorgito le faltaban casi 30 años para coronarse) y también nos mostró la placa clavada a un pilar de la entrada que dice Aquí en Negrete, el eminente criador Sr. John Hannah desarrolló la industria de la lana argentina, que Juan leyó con sorna en voz alta. Estaba Juan -todos lo estábamos- satisfecho por la visita, pero Tati Cerio nos tenía reservada una sorpresa, que sería la frutilla del postre de este fin de semana inolvidable.

Transitando por caminos de tierra en medio de campos predominantemente ganaderos, Tati nos abre la amplia tranquera de otra estancia y nos internamos en ella, hasta una más modesta puerta de alambre y palos mal conservados. Al frente, (minuto 20 del video) un grupo de construcciones de adobe y palos, nos dicen que llegamos a la casa de una familia campesina. Dueños de 25 hectáreas y rodeados por la estancia que nos abrió sus puertas, una pareja mayor nos espera. Allí estaban: la gente común del campo, los pastores y labradores que parecían emerger del siglo XIX, con su rancho de adobe más que centenario y con el piso hundido unos 50 cm respecto del campo que les daba el sustento. Juan Carlos mostraba una alegría juvenil en el descubrimiento de cada pequeña o gran cosa que lo volviera materialmente al tema que lo desvelaba por entonces. Se asombraba por los útiles de labranza, un (otro) arado de tiro, los sulkis, la oxidada balanza que me pidió filmara expresamente. Y la charla con la dueña de casa fue, en su balance, de lo más enriquecedor de la larga jornada que estaba por terminar.

Con Juan Carlos como motor de un barco que sabe adónde va, habíamos visto la vida material de la gente común y los estancieros; todo en un mismo día. Juan Carlos había puesto la misma pasión con que escribía, al examinar las piezas del museo, las ajadas paredes de la estancia Negrete o el troje lleno de choclos de los campesinos de Ranchos. Para él, museo, estancia y parcela campesina eran una especie de archivo al aire libre que contaba mucho de lo que por entonces era su interés como investigador. Además, lo que habíamos visto tenía un importante valor didáctico para el Gara. Así, en el segundo semestre de 1996, mientras dictaba un seminario de doctorado en la UBA que tituló “Historia agraria Rioplatense 1750-1885”, me pidió mostrar el video de aquellas jornadas a sus alumnos de entonces. Era coherente con lo que siempre hizo: conocer los ámbitos físicos de los temas en los que trabajaba. El mismo criterio usó en el proyecto que dirigió en Barcelona -State Building in Latin America- promoviendo reuniones de sus doctorandos en los países cuyos procesos de construcción estatal investigaban.

El entusiasmo de Juan Carlos no es precisamente una novedad para quienes lo conocieron. Pero me gustaría dar un ejemplo que me parece revelador de cuán contagioso podía ser. La pasión, el interés y los comentarios del Gara admiraron tanto a nuestro anfitrión, Tati Cerio -el tambero devenido encargado de una estancia- que compró en un remate un balde volcador, sólo para regalárselo.

Un Maestro.`,
  letterSignature: `Rodolfo Eduardo González Lebrero — julio de 2017`
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
    href: '/testimonios/Adieux Gara.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio1.jpg'
  },
  {
    title: 'Juan Carlos Garavaglia, el pastuzo porteño',
    author: 'Carmen Bernand',
    href: '/testimonios/Juan Carlos Garavaglia.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio2.jpg'
  },
  {
    title: 'Juan Carlos Garavaglia. Hasta siempre.',
    author: 'Christophe Giudicelli',
    href: '/testimonios/Juan Carlos Garavaglia-Tandil.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio3.jpg'
  },
  {
    title: 'Para Juan Carlos Garavaglia',
    author: 'Wilma Peres Costa',
    href: '/testimonios/Para Juan Carlos Garavaglia.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio4.jpg'
  },
  {
    title: 'Un torbellino intelectual: Juan Carlos Garavaglia en México en los años de 1980-1984, un testimonio personal.',
    author: 'Carlos Marichal',
    href: '/testimonios/Un torbellino intelectual Juan Carlos G, Marichal.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio5.jpg'
  },
  {
    title: 'Un gran proyecto de Juan Carlos Garavaglia: La construcción del Estado en América Latina',
    author: 'Rodolfo González Lebrero',
    href: '/testimonios/Proyecto.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio6.jpg'
  },
  {
    title: 'Juan Carlos Garavaglia hasta siempre',
    author: 'Raúl Fradkin y Jorge Gelman',
    href: '/testimonios/Anuario IEHS 32(1) o.Fradkin&Gelman.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio7.jpg'
  },
  {
    title: 'Al maestro Juan Carlos Garavaglia',
    author: 'Melina Yangilevich',
    href: '/testimonios/Anuario IEHS 32(1) o.Yangilevich.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio8.jpg'
  },
  {
    title: 'Homenaje a Juan Carlos Garavaglia',
    author: 'Instituto Ravignani',
    href: '/testimonios/Homenaje Ravignani.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio9.jpg'
  },
  {
    title: 'Homenaje a Juan Carlos Garavaglia reviviendo polémicas: el debate en torno a Orden y Virtud de Jorge Myers',
    author: 'Bárbara Caletti Garciadiego',
    href: '/testimonios/Homenaje a Juan Carlos Garavaglia reviviendo polémicas el debate en torno a Orden y Virtud de Jorge Myers.pdf',
    type: 'pdf',
    thumb: '/imagenes/testimonio10.jpg'
  },
  {
    title: 'Una historia mejor',
    author: 'María Elena Barral',
    href: 'https://www.pagina12.com.ar/16355-una-historia-mejor',
    type: 'external',
    thumb: '/imagenes/testimonio11.jpg'
  }
];


// Sample works (trabajos).  Add as many items as necessary; include
// informative titles and links to the digital versions of the works.
export const works: Work[] = [
  // ---------------------------
  // PARTE 1 (17 ítems)
  // ---------------------------
  {
    title: 'El comercio virreinal 1779–1784',
    year: 1970,
    details: 'Tesis de licenciatura. Págs. 111.',
    href: 'http://repositorio.filo.uba.ar/bitstream/handle/filodigital/4206/uba_ffyl_t_1970_se_Garavaglia.pdf?sequence=3&isAllowed=y',
    part: 1
  },
  {
    title: 'Los textiles de la tierra en el contexto colonial rioplatense: ¿una revolución industrial fallida?',
    year: 1986,
    details: 'Juan Carlos Garavaglia Anuario IEHS: Instituto de Estudios histórico sociales, ISSN 0326-9671, N. 1, 1986, Págs. 45-87.',
    href: 'http://bit.ly/2vmHw0o',
    part: 1
  },
  {
    title: '¿Existieron los gauchos?',
    year: 1987,
    details: 'Anuario IEHS: Instituto de Estudios histórico sociales, ISSN 0326-9671, N. 2, 1987, Págs. 42-52.',
    href: 'http://bit.ly/2g2OR30',
    part: 1
  },
  { 
    title: 'El abasto de una villa novohispana: mercancías y flujos mercantiles en Tepeaca (1780-1820)', 
    year: 1987, 
    details: 'Juan Carlos Garavaglia, Juan Carlos Grosso Anuario IEHS: Instituto de Estudios histórico sociales, ISSN 0326-9671, N. 2, 1987, Págs. 217-253.', 
    href: 'http://bit.ly/2wBCzVQ', 
    part: 1 
  },
  { 
    title: 'Un nuevo aporte a la historia del textil colonial: los ponchos frente al mercado porteño (1750-1850)', 
    year: 1989, 
    details: 'Juan Carlos Garavaglia, Claudia Wentzel Anuario IEHS: Instituto de Estudios histórico sociales, ISSN 0326-9671, N. 4, 1989', 
    href: 'http://bit.ly/2wBqnnR', 
    part: 1 
  },
  { 
    title: 'El comportamiento demográfico de una parroquia poblana de la colonia al México independiente: Tepeaca y su entorno agrario, 1740-1850', 
    year: 1991, 
    details: 'Juan C. Garavaglia y Juan C. Grosso,en Historia mexicana, Vol. XL, Nº 1, 1991, Págs. 615-671.', 
    href: 'http://bit.ly/2wvs2fz', 
    part: 1 
  },
  { 
    title: 'Las relaciones entre el medio y las sociedades humanas en su perspectiva histórica', 
    year: 1992, 
    details: "Anuario IEHS: Instituto de Estudios histórico sociales, ISSN 0326-9671, N. 7, 1992 (Ejemplar dedicado a: América' 92), Págs. 41-57.", 
    href: 'http://bit.ly/2vmqj7g', 
    part: 1 
  },
  { 
    title: 'De la carne al cuero. Los mercados para los productos pecuarios (Buenos Aires y su campaña, 1700-1825)', 
    year: 1994, 
    details: 'Anuario IEHS: Instituto de Estudios histórico sociales, ISSN 0326-9671, N. 9, 1994, Págs. 61-96.', 
    href: 'http://bit.ly/2vbMOMM', 
    part: 1 
  },
  { 
    title: 'Rural History of the Río de la Plata, 1600-1850: Results of a Historiographical Renaissance', 
    year: 1995, 
    details: 'Garavaglia, Juan C. y  Gelman, Jorge (1995),  en Latin American Research Review, vol 30, Nº 3, Págs. 75-105.', 
    href: 'http://bit.ly/2vbOwxH', 
    part: 1 
  },
  { 
    title: 'Indios, campesinos y mercado. La región de Puebla a finales del siglo XVIII', 
    year: 1996, 
    details: 'Juan Carlos Garavaglia, Juan Carlos Grosso Historia mexicana, ISSN 0185-0172, Vol. 46, Nº. 2, 1996, Págs. 245-278.', 
    href: 'http://bit.ly/2xpSRhx', 
    part: 1 
  },
  { 
    title: 'El teatro del poder: ceremonias, tensiones y conflictos en el estado colonial', 
    year: 1996, 
    details: ' Boletín del Instituto de Historia Ar¬gentina y Americana "Dr. Emilio Ravignani", 3a. serie, 14: Págs.7-30, Facultad de Filosofía y Letras, UBA, Buenos Aires, 1996', 
    href: 'http://bit.ly/2w0P8aQ', 
    part: 1 
  },
  { 
    title: 'De ‘mingas’ y ‘convites’: la reciprocidad campesina entre los paisanos rioplatenses', 
    year: 1997, 
    details: 'Anuario IEHS: Instituto de Estudios histórico sociales, ISSN 0326-9671, N. 12, 1997, Págs. 131-139.', 
    href: 'http://bit.ly/2wl4wBe', 
    part: 1 
  },
  { 
    title: 'Intensidad de uso de la tierra y tasas de ocupación ganadera en la pradera pampeana (1816-1852)', 
    year: 1998, 
    details: 'Quinto Sol, Revista de historia regional, 2, Instituto de Historia Regional, Universidad Nacional de la Pampa, 1998. Págs.5-23.', 
    href: 'http://bit.ly/2vWak3k', 
    part: 1 
  },
  { 
    title: 'Criollos, mestizos e indios: etnias y clases sociales en Mexico colonial a fines del siglo XVIII', 
    year: 1994, 
    details: 'Juan Carlos Garavaglia y Juan Carlos Grosso. ISSN: 0186-0348, ISSN electrónico: 2395-8464 Secuencia (1994), 29, mayo-agosto, Págs. 39-80.', 
    href: '/GARAVAGLIA GROSSO CRIOLLOS MESTIZOS E INDIOS.pdf', 
    part: 1 
  },
  { 
    title: 'Diezmos, producción agraria y mercados: Mendoza y Cuyo, 1710-1830',  
    details: 'Juan Carlos Garavaglia y María del Rosario Prieto. Boletín del Instituto de Historia Argentina y Americana "Dr. Emilio Ravignani" Tercera serie n°30. Págs. 7-33.', 
    href: '/GARAVAGLIA PRIETO DIEZMOS CUYO.pdf', 
    part: 1 
  },
  { 
    title: 'Servir al Estado, servir al poder: la burocracia en el proceso de construcción estatal en América Latina', 
    year: 2012, 
    details: 'Juan Carlos Garavaglia. Almanack. Guarulhos, n.03,1º semestre de 2012. Págs. 5-26.', 
    href: '/GARAVAGLIA SERVIR AL ESTADO.pdf', 
    part: 1 
  },
  { 
    title: 'Discursos, textos y contexto. Breves reflexiones acerca de un libro reciente. Myers, Jorge: Orden y virtud. El discurso republicano en el régimen rosista, Bernal, Universidad Nacional de Quilmes, 1995.', 
    year: 2017, 
    details: 'Reseña Juan Carlos Garavaglia. Rey Desnudo Año 6  Nº 11 - Primavera 2017. Págs 333-341', 
    href: 'https://reydesnudo.com.ar/rey-desnudo/article/view/419/376', 
    part: 1 
  },

  // ---------------------------
  // PARTE 2 (16 ítems)
  // ---------------------------
  { 
    title: 'Mucha tierra y poca gente: un nuevo balance historiográfico de la historia rural platense (1750-1850)', 
    year: 1998, 
    details: ' Garavaglia, Juan C. y  Gelman, Jorge (1998),en Historia Agraria, Nº 15, Murcia, Págs. 29-50.', 
    href: 'http://repositori.uji.es/xmlui/handle/10234/123804', 
    part: 2 
  },
  { 
    title: 'De Caseros a la guerra del Paraguay: El disciplinamiento de la población campesina en el Buenos Aires postrosista (1852-1865)', 
    year: 2001, 
    details: 'Juan Carlos Garavaglia, Illes i imperis: Estudios de historia de las sociedades en el mundo colonial y post-colonial, ISSN 1575-0698, Nº. 5, 2001, Págs. 53-80. ', 
    href: 'http://www.raco.cat/index.php/IllesImperis/article/view/69411', 
    part: 2 
  },
  { 
    title: 'Buenos Aires y Salta en rito cívico: la revolución y las Fiestas Mayas', 
    year: 2002, 
    details: ' Andes. Antropología e Historia,  13, Salta, 2002: Págs. 173-212.', 
    href: 'http://www.redalyc.org/html/127/12701307/', 
    part: 2 
  },
  { 
    title: 'Capitalismo agrario en la frontera. Buenos Aires y la región pampeana en el siglo XIX', 
    year: 2003, 
    details: 'Garavaglia, Juan C. y  Gelman, Jorge (2003), en Historia Agraria, Nº 29, Murcia, Págs. 105-122.', 
    href: 'http://www.historiaagraria.com/numero.php?n=29', 
    part: 2 
  },
  { 
    title: 'Elecciones y luchas políticas en los pueblos de la campaña de Buenos Aires: San Antonio de Areco (1813-1844)', 
    year: 2005, 
    details: 'Boletín del Instituto de Historia Ar¬gentina y Ameri¬cana "Dr. Emilio Ravignani", 3a. serie, 27, Buenos Aires, 2005: Págs. 49-74.', 
    href: 'http://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S0524-97672005000100002', 
    part: 2 
  },
  { 
    title: 'La construcción nacional en la Argentina: rentas, presupuestos y niveles de estatalidad (1856-1865)', 
    year: 2013, 
    details: 'Juan Carlos Garavaglia, Prohistoria: historia, políticas de la historia, ISSN 1514-0032, Nº. 20, 2013, Págs. 3-43.', 
    href: 'http://www.scielo.org.ar/scielo.php?script=sci_arttext&pid=S1851-95042013000200001', 
    part: 2 
  },
  { 
    title: 'Las dos márgenes de un problema', 
    year: 2017, 
    details: 'Juan Carlos Garavaglia et Denis Merklen,, Nuevo Mundo Mundos Nuevos [En ligne], Questions du temps présent, mis en ligne le 21 janvier 2008, consulté le 08 juin 2017', 
    href: 'http://nuevomundo.revues.org/17383', 
    part: 2 
  },
  { 
    title: 'Una breve nota acerca de los "patriotas criollos" en el Río de la Plata', 
    year: 2008, 
    details: 'Juan Carlos Garavaglia, Prohistoria: historia, políticas de la historia, ISSN 1514-0032, Nº. 12, 2008, Págs. 93-102.', 
    href: 'http://www.scielo.org.ar/pdf/prohist/v12/v12a04.pdf', 
    part: 2 
  },
  { 
    title: 'Intensidad de uso de la tierra y tasas de ocupación ganadera en la pradera pampeana (1816-1852) ', 
    year: 2017, 
    details: 'Juan Carlos Garavaglia, Nuevo Mundo Mundos Nuevos [En ligne], Bibliothèque des Auteurs du Centre, Garavaglia, Juan Carlos, mis en ligne le 14 février 2005, consulté le 08 juin 2017', 
    href: 'http://nuevomundo.revues.org/612', 
    part: 2 
  },
  { 
    title: 'La cuestión colonial', 
    year: 2017, 
    details: 'Juan Carlos Garavaglia, Nuevo Mundo Mundos Nuevos [En ligne], Débats, mis en ligne le 08 février 2005, consulté le 08 juin 2017', 
    href: 'http://nuevomundo.revues.org/441', 
    part: 2 
  },
  { 
    title: 'Identidad, identidades: una visión desde la América hispana siglos XVIII-XIX', 
    year: 2009, 
    details: "Juan Carlos Garavaglia, Juan Carlos Grosso Quaderns de l'Institut Català d'Antropologia, ISSN 0211-5557, Nº. 25, 2009 (Ejemplar dedicado a: Identitats Ambivalents a debat),Págs. 19-45.", 
    href: 'https://dialnet.unirioja.es/servlet/articulo?codigo=3242472', 
    part: 2 
  },
  { 
    title: 'La disputa por la Nación: rentas y aduanas en la construcción estatal argentina, 1850-1865', 
    year: 2014, 
    details: 'Juan Carlos Garavaglia Investigaciones de historia económica: revista de la Asociación Española de Historia Económica, ISSN 1698-6989, Vol. 10, Nº. 1, 2014, Págs. 34-45.', 
    href: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4603536', 
    part: 2 
  },
  { 
    title: 'Guerra y finanzas en la Argentina unificada, 1864-1872: la guerra del Paraguay y la misión De la Riestra en Londres', 
    year: 2016, 
    details: 'Juan Carlos Garavaglia. Quinto Sol, Vol. 20, Nº 3, septiembre-diciembre 2016 - ISSN 1851-2879, Págs. 1-33.', 
    href: '/GARAVAGLIA GUERRA Y FINANZAS EN LA ARGENTINA UNIFICADA.pdf', 
    part: 2 
  },
  { 
    title: 'Manifestaciones iniciales de la representación en el Río de la Plata: la revolución en la laboriosa búsqueda de la autonomía del individuo (1810-1812)', 
    year: 2004, 
    details: 'Juan Carlos Garavaglia. Revista de Indias, 2004, vol. LXIV, núm. 231 ISSN: 0034-8341. Págs. 349-382. ', 
    href: '/GARAVAGLIA MANIFESTACIONES INICIALES DE LA REPRESENTACIÓN.pdf', 
    part: 2 
  },
  { 
    title: 'Precios de los productos rurales y precios de la tierra en la campaña de Buenos Aires: 1750-1826', 
    year: 1995, 
    details: 'Juan Carlos Garavaglia. Boletín del Instituto de Historia Argentina y Americana "Dr. Emilio Ravignani" Tercera serie N°11, primer semestre de 1995. Págs 65-112.', 
    href: '/GARAVAGLIA PRECIOS DE LOS PRODUCTOS RURALES Y PRECIOS DE LA TIERRA.pdf', 
    part: 2 
  },
  { 
    title: 'Algunos aspectos preliminares acerca de la «transición fiscal» en América Latina: 1800-1850', 
    year: 2010, 
    details: 'Juan Carlos Garavaglia. Rev.Illes I Imperis-13(3GL)1 8 de Junio de 2010. Págs. 159-192.', 
    href: '/GARAVAGLIA TRANSICION FISCAL.pdf', 
    part: 2 
  },

  // ---------------------------
  // PARTE 3 (22 ítems)
  // ---------------------------
  { 
    title: 'Entrevista a Juan Carlos Garavaglia', 
    details: 'en Quinto Sol, revista de historia.', 
    href: 'http://cerac.unlpam.edu.ar/index.php/quintosol/article/view/1114', 
    part: 3 
  },
  { 
    title: 'Sara Mata de López, Tierra y poder en Salta. El noroeste argentino en vísperas de la independencia, Diputación de Sevilla, Sevilla, 2000, 367 páginas. ', 
    year: 2017, 
    details: 'RESEÑA de Juan Carlos Garavaglia Nuevo Mundo Mundos Nuevos [En ligne], Comptes rendus et essais historiographiques, mis en ligne le 07 février 2005, consulté le 08 juin 2017', 
    href: 'http://nuevomundo.revues.org/362', 
    part: 3 
  },
  { 
    title: 'Garavaglia, Juan Carlos y Pierre Gautreau (editores), Mensurar la tierra, controlar el territorio. América Latina, siglos XVIII-XIX,326 pp. ', 
    year: 2011, 
    details: 'RESEÑA de Manriana Canedo. Rosario, Prohistoria Ediciones-State Building in Latin America, 2011.', 
    href: '/Reseña Mensurar la tierra...pdf', 
    part: 3 
  },
  { 
    title: 'Garavaglia, J.C. Pastores y labradores de Buenos Aires. Una historia agraria de la campaña bonaerense, 1700-1830. 385 páginas.', 
    year: 1999, 
    details: 'RESEÑA de Julio Djenderedjian. Buenos Aires, Ediciones de la Flor, 1999.', 
    href: '/DjenderedjianPastyLabr.pdf', 
    part: 3 
  },
  { 
    title: 'PARA QUE NUESTROS HIJOS PUEDAN SABER. Garavaglia, Juan Carlos. Una juventud en los años sesenta. 208 páginas.', 
    year: 2015, 
    details: 'RESEÑA de Daniel Villar. Ciudad Autónoma de Buenos Aires, Prometeo Libros, 2015.', 
    href: '/Daniel Villar.pdf', 
    part: 3 
  },
  { 
    title: 'En busca del tiempo perdido. La economía de Buenos Aires en el país de la abundancia 1750-1865.', 
    year: 2004, 
    details: 'RESEÑA de Eduardo José Míguez. Buenos Aires, Prometeo, 2004.', 
    href: '/MIGUEZ.pdf', 
    part: 3 
  },
  { 
    title: 'Por qué leer Poder, conflicto y relaciones sociales. El Río de la Plata, XVIII y XIX', 
    details: 'RESEÑA de José Mateo.', 
    href: '/Por qué leer Poder, conflicto y relaciones sociales....pdf', 
    part: 3 
  },
  { 
    title: 'Por qué seguir leyendo Población, sociedad, familia y migraciones en el espacio rioplatense. Siglos XVIII y XIX (Buenos Aires, Cántaro, 1993) de Juan Carlos Garavaglia y José Luis Moreno (comps.)',  
    details: 'RESEÑA de Judith Farberman.', 
    href: '/Por qué seguir leyendo Población Judith Farberman.pdf', 
    part: 3 
  },
  { 
    title: 'Población, sociedad, familia y migraciones en el espacio rioplatense. Siglos XVIII y XIX', 
    year: 1994, 
    details: ' Fernando Boro, reseña de Juan Carlos Garavaglia y José Luis Moreno (comps.)Buenos Aires, Cántaro, Colección de Estudios Sociopolíticos, 1993, en Boletín del Instituto de Historia Argentina y Americana “Dr. Emilio Ravignani” Tercera serie, núm. 9, 1er- semestre de 1994.', 
    href: 'http://ravignanidigital.com.ar/_bol_ravig/n09/n09a06.pdf', 
    part: 3 
  },
  { 
    title: 'La región de Puebla y la economía novohispana: las alcabalas en la Nueva España, 1776-1821', 
    year: 1998, 
    details: 'Carlos Marichal, reseña de Juan Carlos Garavaglia y Juan Carlos Grosso,  Instituto Mora/Universidad Autónoma de Puebla, México, 1996, en Secuencia, Nº 42, 1998', 
    href: 'http://aleph.org.mx/jspui/bitstream/56789/25080/1/35-140-1986-0549.pdf', 
    part: 3 
  },
  { 
    title: 'Poder, conflicto y relaciones sociales. El Río de la Plata, XVIII-XIX', 
    year: 1999, 
    details: 'Nidia Areces, reseña de Garavaglia, Juan Carlos Colección Pasados Posibles, Horno Sapiens Ediciones, Rosario 1999. 212 pp. Gráficos, cuadros y mapas. Localización: Prohistoria: historia, políticas de la historia, ISSN 1514-0032, Nº. 3, 1999, Págs. 331-335.', 
    href: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5851815', 
    part: 3 
  },
  { 
    title: 'Pastores y labradores de Buenos Aires. Una historia agraria de la campaña bonaerense 1700-1830', 
    year: 2000, 
    details: 'Griselda Tarragó, reseña de Juan Carlos Garavaglia,  Buenos Aires, Ediciones de la Flor, 1999, 408 páginas, en Prohistoria, Nº 4, 2000.', 
    href: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5852403', 
    part: 3 
  },
  { 
    title: 'América Latina de los orígenes a la independencia', 
    year: 1990, 
    details: 'María Inés Moraes Vázquez, reseña de Juan Carlos Garavaglia y Juan MarchenaBarcelona, Crítica, 2 vols., 2005, 563 Págs., en Investigaciones de Historia Económica', 
    href: '#', 
    part: 3 
  },
  { 
    title: 'Construir el estado, inventar la nación. El Río de la Plata, siglos XVIII-XIX', 
    year: 2008, 
    details: 'Corva, María Angélica, reseña de Juan Carlos Garavaglia, en Mundo Agrario, vol. 9, núm. 17, 2008', 
    href: 'http://www.redalyc.org/articulo.oa?id=84511268011', 
    part: 3 
  },
  { 
    title: 'Renán Silva, reseña de Lois, justice, coutume. Amérique et Europe latines (16e-19e siècle)', 
    year: 2012, 
    details: 'Bajo la dirección de Juan Carlos Garavaglia,Jean-Frédéric Schaub, París: EHESS, 2005. 317 pp., en Fronteras de la Historia, Vol. 17, Nº 1, 2012.', 
    href: 'http://www.icanh.gov.co/index.php?idcategoria=12692', 
    part: 3 
  },
  { 
    title: 'Guerras, burocracias y fiscalidad: discutiendo la génesis de un problema. Las fuerzas de guerra en la construcción del Estado, América Latina, siglo XIX', 
    year: 2013, 
    details: 'reseña de Germán Soprano, de Juan Carlos Garavaglia, Juan Pro Ruiz y Eduardo Zimmermann (eds.), en Localización: PolHis: Boletín Bibliográfico Electrónico, ISSN-e 1853-7723, Año 6, Nº. 12, 2013, Págs. 307-312.', 
    href: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4739847', 
    part: 3 
  },
  { 
    title: 'Latin American Bureaucracy and the State Building Process (1780-1860)', 
    year: 2016, 
    details: 'Juan Luis Ossa Santa Cruz, reseña de Juan Carlos Garavaglia and Juan Pro Ruiz (eds.) Newcastle upon Tyne, UK: Cambridge Scholars Publishing, 2013, en Journal of Latin American Studies, Vol. 48, Nº 4, 2016 ', 
    href: 'http://www.cambridgescholars.com/download/sample/59371', 
    part: 3 
  },
  { 
    title: 'Juan Carlos Garavaglia, Una juventud en los años sesenta', 
    year: 2017, 
    details: 'Luc Capdevila, Nuevo Mundo Mundos Nuevos [En ligne], Comptes rendus et essais historiographiques, mis en ligne le 10 décembre 2016, consulté le 08 juin 2017.', 
    href: 'http://nuevomundo.revues.org/70062', 
    part: 3 
  },
  { 
    title: 'Actas de Calificaciones', 
    year: 1974, 
    details: ' Mesa de exámen del 19 diciembre de 1974, donde examinó a 27 alumnos regulares en la asignatura "Historia Argentina y Americana (S.XVI-XVIII)"', 
    href: '/Garavaglia - Acta calificaciones UNS.pdf', 
    part: 3 
  },
  { 
    title: 'Programa "Historia Argentina", 1° cuatrimestre de 1974', 
    year: 1974, 
    details: 'Juan Carlos Garavaglia, Hernán Silva y Esther Iglesias.', 
    href: '/Garavaglia - PHA UNS.pdf', 
    part: 3 
  },
  { 
    title: 'Programa "Historia Argentina Contemporánea",  2°cuatrimestre de 1974', 
    year: 1974, 
    details: ' Juan Carlos Garavaglia y E. Iglesias.', 
    href: '/Garavaglia - PHAC UNS.pdf', 
    part: 3 
  },
  { 
    title: 'Programa "Historia Argentina y Americana (s. XVI-XVIII),  2°cuatrimestre de 1974', 
    year: 1974, 
    details: ' Juan Carlos Garavaglia.', 
    href: '/Garavaglia - PHAyA UNS.pdf', 
    part: 3 
  }
];

// Sample reviews of Garavaglia’s work.  Each item cites the work reviewed
// and the reviewer.  The `details` field can include the publication
// reference or context.
export const reviews: Review[] = [
  {
    title: 'Expansión capitalista y transformaciones regionales. Relaciones sociales y empresas agrarias en la Argentina del siglo XIX',
    author: 'Daniel Santilli',
    href: '/reseñas/Daniel Santilli.pdf',
    details: 'RESEÑA de Daniel Santilli (Instituto Ravignani – UBA/CONICET). De Gelman, Jorge, Juan Carlos Garavaglia, y Blanca Zeberia. Buenos Aires: La Colmena, 1999.'
  },
  {
    title: 'Los caminos de la justicia rural',
    author: 'Melina Yangilevich',
    href: '/reseñas/reseña Etudes Rurales.pdf',
    details: 'RESEÑA de Melina Yangilevich (IEHS-IGEHCS-UNICEN/CONICET). De “Justice et sociétés rurales”, bajo la dirección de Juan Carlos Garavaglia, en Etudes Rurales, Éditions de l´Ecole des Hautes Études en Sciences Sociales, n° 149-150, 1999.'
  },
  {
    title: 'Configuraciones estatales, regiones y sociedades locales. América Latina, siglos XIX-XX.',
    author: 'Gladys Perri',
    href: '/reseñas/RESEÑA GLADYS PERRI configuraciones estatales.....pdf',
    details: 'RESEÑA de Gladys Perri (UNLu). Juan Carlos Garavaglia y Claudia Contente, editores. State Bulding in Latin America y Universitat Pompeu Fabra, Ed. Bellaterra, Barcelona, 2011.'
  },
  {
    title: 'Juan Carlos Garavaglia y Raúl Fradkin, Hombres y mujeres de la colonia',
    author: 'María Elena Barral',
    href: '/reseñas/RESEÑA DE MARIA ELENA BARRAL.pdf',
    details: 'RESEÑA de María Elena Barral. Buenos Aires, Sudamericana, 1992.'
  },
  {
    title: 'Sobre la vigencia de Modos de Producción en América Latina',
    author: 'Martín Wasserman',
    href: '/reseñas/Reseña-Homenaje Modos de Producción en América Latina.pdf',
    details: 'RESEÑA de Martín Wasserman.'
  },
  {
    title: 'Garavaglia, Juan Carlos y Pierre Gautreau (editores), Mensurar la tierra, controlar el territorio. América Latina, siglos XVIII-XIX.',
    author: 'Manriana Canedo',
    href: '/reseñas/Reseña Mensurar la tierra...pdf',
    details: 'RESEÑA de Manriana Canedo. Rosario, Prohistoria Ediciones-State Building in Latin America, 2011. 326 pp'
  },
  {
    title: 'Garavaglia, J.C. Pastores y labradores de Buenos Aires. Una historia agraria de la campaña bonaerense, 1700-1830. ',
    author: 'Julio Djenderedjian',
    href: '/reseñas/DjenderedjianPastyLabr.pdf',
    details: 'RESEÑA de Julio Djenderedjian. Buenos Aires, Ediciones de la Flor, 1999. 385 pp.'
  },
  {
    title: 'PARA QUE NUESTROS HIJOS PUEDAN SABER. Garavaglia, Juan Carlos. Una juventud en los años sesenta. ',
    author: 'Daniel Villar',
    href: '/reseñas/Daniel Villar.pdf',
    details: 'RESEÑA de Daniel Villar. Ciudad Autónoma de Buenos Aires, Prometeo Libros, 2015. 208 pp.'
  },
  {
    title: 'En busca del tiempo perdido. La economía de Buenos Aires en el país de la abundancia 1750-1865.',
    author: 'Eduardo José Míguez',
    href: '/reseñas/MIGUEZ.pdf',
    details: 'RESEÑA de Eduardo José Míguez. Buenos Aires, Prometeo, 2004.'
  },
  {
    title: 'Por qué leer Poder, conflicto y relaciones sociales. El Río de la Plata, XVIII y XIX',
    author: 'José Mateo',
    href: '/reseñas/Por qué leer Poder, conflicto y relaciones sociales....pdf',
    details: 'RESEÑA de José Mateo.'
  },
  {
    title: 'Por qué seguir leyendo Población, sociedad, familia y migraciones en el espacio rioplatense. Siglos XVIII y XIX (Buenos Aires, Cántaro, 1993) de Juan Carlos Garavaglia y José Luis Moreno (comps.)',
    author: 'Judith Farberman',
    href: '/reseñas/Por qué seguir leyendo Población Judith Farberman.pdf',
    details: 'RESEÑA de Judith Farberman.'
  },
  {
    title: 'Guerras, burocracias y fiscalidad: discutiendo la génesis de un problema. Las fuerzas de guerra en la construcción del Estado, América Latina, siglo XIX',
    author: 'Germán Soprano',
    href: 'https://dialnet.unirioja.es/servlet/articulo?codigo=4739847',
    details: 'RESEÑA de Germán Soprano, de Juan Carlos Garavaglia, Juan Pro Ruiz y Eduardo Zimmermann (eds.), en Localización: PolHis: Boletín Bibliográfico Electrónico, ISSN-e 1853-7723, Año 6, Nº. 12, 2013, Págs. 307-312.'
  }
];