/* eslint-disable @next/next/no-img-element */

// components/Investigadores.tsx
"use client"
import React, { useState } from "react"

const investigadores = [
  { nombre: "Marina Adamini", foto: "/MarinaAdamini.jpg", descripcion: "Marina Adamini es Licenciada en Sociología y Doctora en Ciencias Sociales por la Universidad Nacional de La Plata, especializada en Sociología del Trabajo. Sus temas de investigación son la precarización laboral juvenil  y sus implicancias en las identidades sociales. Indaga cómo afectan las transformaciones del mundo del trabajo a la formación identitaria de los jóvenes como trabajadores, y que estrategias individuales y colectivas despliegan frente al avance de la precarización laboral. Sus herramientas metodológicas de trabajo son de tipo cualitativo (entrevistas en profundidad, relevamiento de fuentes documentales, análisis del discurso y de contenido), las cuales articula con el procesamiento de fuentes estadísticas para la reconstrucción del marco contextual. Entre 2010 y 2016, sus estudios se radicaron en grandes entornos urbanos (La Plata y Capital Federal) en donde analizó el caso de los pasantes universitarios y jóvenes trabajadores de call centers. Desde 2017 se encuentro estudiando el caso de los jóvenes trabajadores del sector de software y servicios informáticos en Tandil. A partir de este estudio, busca analizar las transformaciones del mundo del trabajo post-industrial, indagando de forma puntual sus formas de precarización laboral y las acciones individuales y colectivas que desarrollan los jóvenes informáticos para mejorar sus condiciones de trabajo, a la luz de las particularidades que asume la sociabilidad laboral en una ciudad media." },
  { nombre: "Lucas Bilbao", foto: "/LucasMatias.jpg", descripcion: "Lucas Bilbao es Doctor en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Sus investigaciones se centran el estudio del catolicismo, el clero, la Iglesia y algunas de sus instituciones en los siglos XIX y XX. En su tesis doctoral estudió la construcción de la institución eclesiástica en el espacio rural de la campaña bonaerense, las agencias de los sacerdotes y la religiosidad de esa sociedad, durante la segunda mitad del siglo XIX. La construcción institucional de la Iglesia, su territorialización en un nuevo espacio, sus vínculos con el Estado y las comunidades locales, son algunas de las problemáticas que sustentan sus análisis. También ha desarrollado trabajos sobre el Vicariato Castrense y las relaciones entre la Iglesia y las FF. AA. durante la segunda mitad del siglo XX, con énfasis en las décadas de 1960 y 1970. Actualmente investiga el desarrollo, despliegue y agencias de las congregaciones religiosas masculinas y femeninas en la provincia de Buenos Aires, entre las últimas décadas del siglo XIX y las primeras del XX. Al mismo tiempo, se desempeño como gestor de documentación histórica en el Centro de Documentación de Geografía, Historia y Ciencias Sociales, centrándose en los fondos existentes sobre el Movimiento de Sacerdotes para el Tercer Mundo." },
  { nombre: "Gisela Coronado Schwindt", foto: "", descripcion: "" },
  { nombre: "Yolanda de Paz Trueba", foto: "/YolandaTrueba.jpg", descripcion: "Yolanda de Paz Trueba es Profesora, Licenciada y Doctora en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires y se desempeño como  Profesora Adjunta de la carrera de Historia en esa casa de estudios. Desde 2004 ha investigado  sobre el lugar de las mujeres en la esfera pública a fines del siglo XIX y primeras décadas del XX y desarrolló proyectos sobre las prácticas sociales, políticas e institucionales sobre la infancia (especialmente las niñas) entre 1880 y 1920 en la provincia de Buenos Aires. Actualmente  desarrolla el proyecto “Las infancias, los pobres, el Estado y los particulares. Demandas, intervenciones y percepciones en la provincia de Buenos Aires entre 1913 y 1930”. El objetivo central de su proyecto es estudiar el complejo proceso de reconfiguración asistencial, en especial hacia los menores de edad, que tuvo lugar en la provincia de Buenos Aires desde 1913, con una perspectiva que combina una óptica institucional (políticas públicas de los estados provincial y municipal y acciones de organizaciones privadas de la sociedad civil) con las demandas y recepción de las intervenciones por parte de los sujetos socorridos. Esa reconfiguración se entiende como un pasaje sinuoso desde la acción caritativa basada en un modelo cristiano en el que subyacía la compasión por el otro, a una concepción de derechos que tímidamente se abría paso al menos en relación a ciertos sujetos sociales, y de la mano con la demandas de los propios actores asistidos y demandantes." },
  { nombre: "Pablo de Grande", foto: "/PabloDeGrande.jpg", descripcion: "Pablo De Grande es Doctor en Ciencias Sociales y Humanidades por la Universidad Nacional de Quilmes y Licenciado en Sociología por la Universidad de Buenos Aires. Es investigador del Consejo Nacional de Investigaciones Científicas y Técnicas en temáticas vinculadas con la infancia y los cuidados en el Instituto de Estudios Histórico-Sociales de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires y del Instituto de Geografía, Historia y Ciencias Sociales. Colabora en el Centro de Estudios Desigualdades, Sujetos e Instituciones de la Universidad Nacional de San Martín. Es profesor en la Universidad Nacional del Centro de la Provincia de Buenos Aires. Fundó el proyecto Acta Académica y trabaja activamente por la difusión de la información pública y la ciencia abierta en la Argentina, siendo coordinador del proyecto Poblaciones, el cual es una iniciativa conjunta del Observatorio de la Deuda Social de la Universidad Católica Argentina y el Consejo Nacional de Investigaciones Científicas y Técnicas para facilitar la visualización y archivo de datos georreferenciados a nivel nacional." },
  { nombre: "Daniel Dicósimo (emérito)", foto: "", descripcion: "" },
  { nombre: "Marcelino Irianni", foto: "/MarcelinoIrianni.jpg", descripcion: "Marcelino Irianni es Doctor en Historia. Como historiador, estudia la conformación de espacios nuevos de frontera, especialmente al Sur del río Salado, entre 1840 y 1875. Con  foco en los procesos y coyunturas que moldean las conductas de los inmigrantes tempranos que siguen tierra adentro, la mirada holística reúne a nativos e indígenas amistosos cercanos. Un espacio nuevo a medio construir, precapitalista como es el centro de la provincia aún sin delimitar, se presenta como una maqueta ideal para cotejar comportamientos con escenarios urbanos cercanos al puerto. Un Estado ocupado en guerras con países vecinos, conflictos intestinos y presiones externas -bloqueos al puerto- para que ordene el territorio, espera el fin de la guerra con Paraguay para unir regiones, pensar en un ferrocarril, planificar mercados de tierra y trabajo. Actualmente avanza en observar continuidades y rupturas en comportamientos de inmigrantes a ambos lados del océano. Como un déja vu, artesanos, relojeros, zapateros y comerciantes europeos escapando de los efectos del capitalismo, se topan en un margen occidental americano con el mismo fenómeno que comienza a tomar impulso. Esos inmigrantes conocen el problema y sus consecuencias, pero también adivinan la manera de capitalizarse y alterar su rol en el nuevo torbellino al que penetran. El efecto del consumismo en criollos e indígenas, colectivos heterogéneos por cierto, no es menos interesante." },
  { nombre: "Paola Gallo", foto: "/PaolaGallo.jpg", descripcion: "Paola Gallo es Profesora y Licenciada en Historia, Diplomada en Estudios Avanzados de Cultura y Sociedad por el Instituto de Altos Estudios Sociales de la Universidad Nacional de San Martín, y Doctora en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Se desempeña como docente de grado y posgrado de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires, e investigadora del Instituto de Estudios Histórico-Sociales e Instituto de Geografía, Historia y Ciencias Sociales. Integra la Red de Estudios de Historias de las Infancias en América Latina (REHIAL). Desde la historia sociocultural de la familia y la educación, sus temas de investigación han girado en torno a las dinámicas de modernización y prácticas de representación en la Argentina del siglo XX." },
  { nombre: "Lucía Lionetti (emérita)", foto: "", descripcion: "" },
  { nombre: "Magdalena López Pons", foto: "", descripcion: "" },
  { nombre: "Magdalena Magneres", foto: "", descripcion: "" },
  { nombre: "Julio César Melón (emérito)", foto: "", descripcion: "" },
  { nombre: "Daniel Míguez", foto: "/DMiguez.jpg", descripcion: "Daniel Míguez es Licenciado en Sociología por la Universidad de Buenos Aires y Doctor en Antropología y Sociología del Desarrollo por la Universidad Libre de Ámsterdam. Desde 1998 ha investigado sobre el vínculo entre cultura cívica y gestión de las instituciones públicas. Ha sido investigador invitado en la Universidad de Yale (Estados Unidos) en la Universidad de Wuppertal y del Instituto Max Planck para el Estudio de las Sociedades (Alemania). Fue director del Observatorio de Violencia en Escuelas de la Universidad de San Martín y el Ministerio de Educación Ciencia y Tecnología de la Nación  entre 2004 y 2008. Asimismo, ha sido director del Instituto de Estudios Histórico-Sociales  entre 2011 y 2014 de la Universidad Nacional de la Provincia de Buenos Aires y ha dirigido la Maestría en Antropología Social y Política entre 2012 y 2013 de la Facultad Latinoamericana de Ciencias Sociales. Es Investigador principal del Consejo Nacional de Investigaciones Científicas y Técnicas con lugar de trabajo en el Instituto de geografía, Historia y Ciencias Sociales y profesor titular ordinario de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires." },
  { nombre: "Eduardo Míguez (emérito)", foto: "", descripcion: "" },
  { nombre: "Hernán Otero", foto: "/HernanOtero.jpg", descripcion: "Hernán Otero se ha especializado en la demografía histórica y la historia de la población del período 1850-1950. Sus líneas de investigación se han caracterizado por la combinación entre las técnicas micro demográficas, sobre todo de la escuela francesa, y el análisis cualitativo. En primer lugar trabajó sobre la inmigración francesa en la Argentina, con énfasis en el análisis de redes sociales y en el estudio de pautas demográficas, pero incluyendo también los efectos de la Primera Guerra Mundial sobre la comunidad.  En segundo término, abordó la historia institucional y conceptual del sistema estadístico argentino, con especial referencia a los censos nacionales de población, siendo precursor en nuestro país y Latinoamérica de la socio-historia de la estadística. Más recientemente, y partiendo de la teoría del envejecimiento demográfico, se consagró a la historia de la vejez durante el período previo a la universalización de los sistemas jubilatorios. Sus tareas de investigación se articulan con la promoción de la disciplina, habiéndose desempeñado como miembro del Consejo Directivo de la Asociación Latinoamericana de Población, como presidente de la Asociación de Estudios de Población de la Argentina y como vicepresidente de la Asociación Argentina de Investigadores en Historia. Dirigió el Instituto de Geografía, Historia y Ciencias Sociales desde su creación en 2012 hasta el año 2018. Actualmente integra el Consejo Directivo y es miembro de número de la Academia Nacional de Historia." },
  { nombre: "Ricardo Pasolini", foto: "/RicardoPasolini.jpg", descripcion: "Ricardo Pasolini es especialista en investigación y docencia sobre historia de los intelectuales en una perspectiva comparativa entre Europa y la Argentina, formaciones culturales, sociabilidades e identidades políticas, y en epistemología y metodología de la historia y las ciencias del espíritu, a partir de su cargo de Profesor Titular Ordinario en esa área. Sus intereses giran también en torno a la historia de las ideas estéticas y de los consumos culturales, que ha dado como resultado oportunamente la obtención de una maestría donde estudié el teatro, la música, la ópera y el circo criollo en la Argentina entre los siglos XIX y XX. Así todo, desde la experiencia de la licenciatura y hasta hoy -luego de pasar por la instancia de formación doctoral y el ingreso a la Carrera de Investigador Científico en el Consejo Nacional de Investigaciones Científicas y Técnicas – su tema de investigación dominante es la cultura política antifascista desde una dimensión transnacional, atendiendo a los diversos grupos que la animaron en el largo plazo que va del período de entreguerras hasta bien entrado el siglo XX, incluso con reminiscencias actuales. En un sentido más amplio, sus preocupaciones intelectuales en el campo de la historiografía se centran en los modos de pensar y en las metodologías y técnicas de investigación propias de la historia cultural. Todo ello también sin dejar de participar activamente en la gestión de instituciones académicas como el Instituto de Estudios Histórico-Sociales y su Anuario, el Instituto de Geografía, Historia y Ciencias Sociales, y el Doctorado en Historia de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires, ocupando diversos cargos de relevancia." },
  { nombre: "Juan Ignacio Quintián", foto: "/JuanIgnacio.jpg", descripcion: "Juan Ignacio Quintián es graduado en Historia por la Universidad de Buenos Aires. Realizó un Máster en Historia Hispanoamericana en Madrid y se doctoró en la Universidad de San Andrés. Su trayectoria en investigación comenzó por la historia tardocolonial y las rebeliones calchaquíes. Posteriormente se volcó a un tema clásico de la historiografía latinoamericana contemporánea: la formación de elites políticas y su relación con la consolidación de los estados nacionales. En su tesis doctoral estudió la formación de los principales dirigentes políticos de Salta a mediados del siglo XIX. El análisis demostró la importancia de los lazos de parentesco establecidos entre los clanes familiares, sus bases económicas, las estrategias empleadas para la conservación y trasmisión del patrimonio; las solidaridades y conflictos entre dirigentes provinciales y nacionales que, a su vez, fueron los principales resultados publicados en revistas académicas. Desde el 2012 integra distintos proyectos de investigación a través en los cuales desarrolló sus investigaciones sobre la dirigencia política salteña de la segunda mitad del siglo XIX. Actualmente, se interesa en el estudio de los comandantes militares que actuaron en los espacios de frontera y contribuyeron la formación de un orden político nacional." },
  { nombre: "Gisela Sedeillán", foto: "/GiselaSedeillan.jpg", descripcion: "Gisela Sedeillan es Licenciada y Doctora en Historia por la Universidad Nacional del Centro de la Provincia de Buenos Aires. Su investigación se centra en analizar el diseño de políticas públicas en materia de justicia penal y en la praxis judicial en la provincia de Buenos Aires en las últimas décadas del siglo XIX y primeras del XX. Desde los últimos años indaga en particular en el periodo que va de 1906 a 1930, se detiene en distintos proyectos legislativos, en los cambios en la legislación y en las prácticas con el fin de identificar las transformaciones experimentadas en la organización y funcionamiento de los tribunales. Además de participar en proyectos relacionados con su temática de estudio y en distintos grupos de investigación, se desempeña como Profesora Adjunta de la cátedra de Derecho Político de la Facultad de Derecho de la Universidad Nacional de Mar del Plata. Asimismo, es miembro titular del Instituto de Historia del Derecho y del comité editorial del Anuario del IEHS." },
  { nombre: "Estela Spinelli (emérita)", foto: "", descripcion: "" },
  { nombre: "Martín Vicente", foto: "/MartinVicente.jpeg", descripcion: "Martín Vicente es Licenciado en Comunicación Social, Magíster en Ciencia Política y Doctor en Ciencias Sociales. Su trabajo se centra en la historia político-intelectual de las derechas, con especial énfasis en la tradición liberal-conservadora argentina en el siglo XX. Se interesa especialmente el análisis del rol político de las figuras intelectuales y las experiencias de publicaciones político-culturales a la luz de su rol en la historia política argentina, en cruce con tendencias internacionales, tradiciones ideológicas y sus relaciones con las industrias culturales y el universo político-partidario. Actualmente, su investigación se centra en los usos del totalitarismo en la Argentina. Sobre estas temáticas, además, dictó diversos cursos de grado y posgrado en distintas universidades. En 2015 publicó el libro “De la refundación al ocaso. Los intelectuales liberal-conservadores ante la última dictadura” y actualmente es co-coordinador de los dos volúmenes de “Las derechas argentinas en el siglo XX”, junto a sus colegas Ernesto Bohoslavsky y Olga Echeverría y de “La Argentina y el siglo del totalitarismo. Usos locales de un debate internacional”, junto a Mercedes López Cantera. Además de publicar artículos en revistas académicas locales e internacionales y libros colectivos, escribe regularmente textos para divulgación en medios especializados en política y cultura." },
  { nombre: "Melina Yangilevich", foto: "/MelinaYan.jpg", descripcion: "Melina Yangilevich se ha especializado en el estudio de la dinámica de conformación y consolidación estatal a lo largo del siglo XIX. Sus líneas de investigación indagan en la administración de justicia criminal en la provincia de Buenos Aires y la organización del sistema penal en el siglo decimonónico desde la perspectiva de la historia social de las instituciones. Trabaja sobre las prácticas judiciales de agentes y usuarios de la justicia, atendiendo al rol desempeñado por los sujetos ubicados en los márgenes sociales, la formación letrada de los magistrados, la judicialización de los delitos, las transformaciones normativas, así como el rol de los juzgados de paz y los jueces en la articulación del orden social en la campaña. Más recientemente, se abocó al estudio de la organización y funcionamiento de las cárceles en el territorio bonaerense atendiendo a las prácticas sociales, los vínculos establecidos en su interior y con el afuera en la dinámica de la construcción de estatalidad. Los aportes realizados se volcaron en publicaciones nacionales e internacionales, así como en el dictado de clases en el grado y el postgrado. Junto con estas tareas, se desempeña como directora del Departamento de Historia y del Instituto de Estudios Histórico-Sociales “Prof. Juan Carlos Grosso” ambos de la Facultad de Ciencias Humanas de la Universidad Nacional del Centro de la Provincia de Buenos Aires. Asimismo, integra el Consejo Directivo del Instituto de Geografía, Historia y Ciencias Sociales y de la Asociación Argentina de Historia Económica." },
];

export default function Investigadores() {
  // Estado para popup modal
  const [popupIdx, setPopupIdx] = useState<number | null>(null);

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
        <h1
  className="text-4xl md:text-5xl font-extrabold mb-10 text-center bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow-md tracking-tight leading-relaxed"
      >
  Investigadores
        </h1>

    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
  {investigadores.map((inv, idx) => (
    <div
      key={inv.nombre}
      onClick={() => setPopupIdx(idx)}
      className="
        flex flex-col justify-between rounded-3xl shadow-xl
        transition-transform duration-200 hover:-translate-y-1 cursor-pointer
        bg-white overflow-hidden min-h-[380px]
        border border-[#134e5e]/15
      "
    >
      {/* ---------- Cuerpo ---------- */}
      <div className="flex flex-col items-center px-6 pt-10 pb-6 flex-1">
        <img
          src={
            inv.foto ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(inv.nombre)}&background=134e5e&color=fff`
          }
          alt={inv.nombre}
          className="
            w-24 h-24 rounded-full object-cover mb-4
            border-4 border-white shadow-md ring-2 ring-[#134e5e]/15
          "
        />
        <p className="text-xs text-[#f9623e] mb-1 tracking-wide uppercase">
          Investigador/a
        </p>
        <h3 className="text-[1.1rem] font-semibold text-[#134e5e] text-center mb-2">
          {inv.nombre}
        </h3>
        <p className="text-sm text-gray-600 text-center line-clamp-3">
          {inv.descripcion || "—"}
        </p>
      </div>
      {/* ---------- Franja inferior bicolor SIN TEXTO NI ICONOS ---------- */}
      <div
  className="grid grid-cols-3 text-center text-white text-[0.7rem] font-medium
             bg-gradient-to-r from-[#134e5e] to-[#f9623e]"
>
  <div className="py-3">&nbsp;</div>
  <div className="py-3">&nbsp;</div>
  <div className="py-3">&nbsp;</div>
</div>

    </div>
  ))}
</div>





      {/* Modal centrado en pantalla */}
      {popupIdx !== null && (
  <>
    {/* Fondo oscuro */}
    <div
      className="fixed inset-0 bg-black/40 z-40"
      onClick={() => setPopupIdx(null)}
    />
    {/* Modal: más alto y angosto */}
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="bg-white border-2 border-[#134e5e] rounded-2xl shadow-2xl px-12 py-6 w-full max-w-2x1 flex flex-col items-center relative animate-fadein"
        style={{
          minHeight: "220px",  // Más alto
          maxWidth: "600px",   // Más angosto
        }}
      >
        {/* Botón cerrar */}
        <button
          onClick={() => setPopupIdx(null)}
          className="absolute top-3 right-4 text-2xl text-[#134e5e] font-bold hover:text-black"
          aria-label="Cerrar"
        >
          ×
        </button>
        <img
          src={
            investigadores[popupIdx].foto ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              investigadores[popupIdx].nombre
            )}&background=134e5e&color=fff`
          }
          alt={investigadores[popupIdx].nombre}
          className="w-24 h-24 rounded-full mb-3 object-cover border-4 border-[#134e5e]/30"
        />
        <div className="text-lg font-bold text-[#134e5e] text-center mb-2 w-full">
          {investigadores[popupIdx].nombre}
        </div>
        <p className="text-gray-800 text-sm text-left whitespace-pre-line w-full">
          {investigadores[popupIdx].descripcion}
        </p>
      </div>
    </div>
  </>
)}
      <style>
        {`
          @keyframes fadein { from { opacity: 0; transform: scale(0.96); } to { opacity: 1; transform: scale(1); } }
          .animate-fadein { animation: fadein 0.2s ease; }
        `}
      </style>
    </section>
  );
}
