import React from "react";

// Ejemplo de datos (completá con tus links)
const articulos = [
  {
    titulo: "En busca de un orden jerárquico: Los intentos de catolización de la sociedad argentina en la década de 1930",
    anio: 2013,
    url: "https://ri.conicet.gov.ar/handle/11336/10200",
  },
  {
    titulo: "Los intelectuales antidemocráticos frente a lo popular. Argentina, primera mitad del siglo XX",
    anio: 2013,
    url: "https://ri.conicet.gov.ar/handle/11336/1182",
  },
  {
    titulo: "Las derechas de Argentina y Uruguay en tiempos de nazi fascismos: radicalización, redefiniciones e influencias",
    anio: 2016,
    url: "https://ri.conicet.gov.ar/handle/11336/26643",
  },
  {
    titulo: "Los intelectuales de derecha frente a la nación y lo popular: Argentina, primera mitad del siglo XX",
    anio: 2016,
    url: "https://ri.conicet.gov.ar/handle/11336/10189",
  },
  {
    titulo: "El surgimiento y diversificación de las derechas de Argentina y Uruguay en la primera mitad del siglo XX",
    anio: 2017,
    url: "https://ri.conicet.gov.ar/handle/11336/40991",
  },
  {
    titulo: "Virtudes de la doctrina y errores de la política: Monseñor Gustavo Franceschi ante los 'totalitarismos' soviético, fascista y nacionalsocialista",
    anio: 2017,
    url: "https://ri.conicet.gov.ar/handle/11336/32631",
  },
  {
    titulo: "Las derechas argentinas ante las transformaciones socio-culturales de los largos años sesenta: lecturas de liberal-conservadores y nacionalistas (en coautoría con Martín Vicente)",
    anio: 2019,
    url: "https://ri.conicet.gov.ar/handle/11336/103165",
  },
  {
    titulo: "Las Doctrinas de la Seguridad Nacional Latinoamericanas: Osiris Villegas y sus teorías en tiempos de desperonización y Guerra Fría. Argentina, 1956-1985",
    anio: 2020,
    url: "https://ri.conicet.gov.ar/handle/11336/117002",
  },
  {
    titulo: '"Y todavía me siento un anormal": La definición discursiva del enemigo de las derechas argentinas, cerca de revoluciones posibles o profetizadas: 1916-1982',
    anio: 2020,
    url: "https://ri.conicet.gov.ar/handle/11336/117001",
  },
];

const libros = [
  {
    titulo: "Epidemias, tratamientos y efectos sociales a través del tiempo: Reflexiones para la enseñanza y el aprendizaje desde una perspectiva histórica (en coautoría con Yolanda de Paz Trueba, Silvana Gómez y Lucía Lionetti)",
    anio: 2020,
    url: "https://ri.conicet.gov.ar/handle/11336/114974",
  },
];

const capitulos = [
  {
    titulo: "Encuentros y disidencias políticas, ideológicas e historiográficas en los revisionismos rioplatenses (décadas de 1930 y 1940) (en coautoría con María Laura Reali)",
    anio: 2016,
    url: "https://ri.conicet.gov.ar/handle/11336/107252",
  },
  {
    titulo: "La derecha nacionalista: Decepciones políticas e influjos culturales",
    anio: 2017,
    url: "https://ri.conicet.gov.ar/handle/11336/107859",
  },
  {
    titulo: "Argumentos y anhelos golpistas en los intelectuales de derechas en la Argentina del siglo XX: Una mirada de largo plazo",
    anio: 2018,
    url: "https://ri.conicet.gov.ar/handle/11336/99193",
  },
  {
    titulo: "El proceso de la Reforma Universitaria como preocupación de la derecha nacionalista: entre el rechazo a la democratización y el anticomunismo (décadas de 1920 y 1930)",
    anio: 2018,
    url: "https://ri.conicet.gov.ar/handle/11336/98414",
  },
  {
    titulo: "Historia, violencia y memoria en la construcción de identidades: desaparecidos y sobrevivientes de la última dictadura militar en espacios locales de la provincia de Buenos Aires (en coautoría con Lucas Bilbao)",
    anio: 2019,
    url: "https://ri.conicet.gov.ar/handle/11336/108984",
  },
  {
    titulo: "Identidades y mundo sensible en los y las intelectuales de las derechas nacionalistas y liberal conservadoras frente a la irrupción de nuevos actores y nuevas prácticas: Argentina, primeras décadas del siglo XX (en coautoría con María Soledad González)",
    anio: 2019,
    url: "https://ri.conicet.gov.ar/handle/11336/109114",
  },
];

const ponencias = [
  {
    titulo: "Historia, violencia y memoria en la construcción de identidades: desaparecidos y sobrevivientes de la última dictadura en espacios locales de la provincia de Buenos Aires",
    anio: 2016,
    url: "https://ri.conicet.gov.ar/handle/11336/159929",
  },
  {
    titulo: "Los estudios sobre las derechas argentinas y rioplatenses del siglo XX: Balances, preguntas y perspectivas de análisis",
    anio: 2016,
    url: "https://ri.conicet.gov.ar/handle/11336/162491",
  },
  {
    titulo: "Pensar las derechas argentinas: Conceptos, enfoques y períodos: el caso de las derechas de la primera mitad del siglo XX",
    anio: 2018,
    url: "https://ri.conicet.gov.ar/handle/11336/132259",
  },
  {
    titulo: "Una identidad derechista racista, ideológica y clasista: nacionalistas, católicos integrales y liberales conservadores en la Argentina del siglo XX",
    anio: 2021,
    url: "https://ri.conicet.gov.ar/handle/11336/152447",
  },
];

const sectionStyle = "mb-10";
const titleStyle =
  "text-2xl font-semibold mb-4 mt-10 first:mt-0 text-[#134e5e] border-l-4 border-[#f9623e] pl-4 uppercase tracking-wider font-serif";
const ulStyle =
  "mb-2 space-y-3";
const linkStyle =
  "text-[#2476b3] hover:text-[#f9623e] underline transition font-medium";

const RepositoriosOlga: React.FC = () => (
  <section className="max-w-4xl mx-auto mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center 
  bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow tracking-tight uppercase">
  Olga Echeverría en el Repositorio Institucional CONICET Digital
</h2>

    {/* Artículos */}
    <div className={sectionStyle}>
      <h3 className={titleStyle}>Artículos:</h3>
      <ul className={ulStyle}>
        {articulos.map((trab, i) => (
          <li key={i}>
            <a
              href={trab.url}
              className={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              {trab.titulo}, {trab.anio}
            </a>
          </li>
        ))}
      </ul>
    </div>
    {/* Libros */}
    <div className={sectionStyle}>
      <h3 className={titleStyle}>Libros:</h3>
      <ul className={ulStyle}>
        {libros.map((trab, i) => (
          <li key={i}>
            <a
              href={trab.url}
              className={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              {trab.titulo}, {trab.anio}
            </a>
          </li>
        ))}
      </ul>
    </div>
    {/* Capítulos de libros */}
    <div className={sectionStyle}>
      <h3 className={titleStyle}>Capítulos de libros:</h3>
      <ul className={ulStyle}>
        {capitulos.map((trab, i) => (
          <li key={i}>
            <a
              href={trab.url}
              className={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              {trab.titulo}, {trab.anio}
            </a>
          </li>
        ))}
      </ul>
    </div>
    {/* Ponencias */}
    <div className={sectionStyle}>
      <h3 className={titleStyle}>Ponencias:</h3>
      <ul className={ulStyle}>
        {ponencias.map((trab, i) => (
          <li key={i}>
            <a
              href={trab.url}
              className={linkStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              {trab.titulo}, {trab.anio}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default RepositoriosOlga;
