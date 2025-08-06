import React from "react";
import Image from "next/image";

interface Publicacion {
  anio: number;
  tipo: string;
  titulo: string;
  ref: string;
  url?: string;
}

const publicaciones: Publicacion[] = [
  {
    anio: 1994,
    tipo: "Reseña",
    titulo:
      "Ricardo Sidicaro, La política mirada desde arriba. Las ideas del diario La Nación, 1909-1989, Buenos Aires, Sudamericana, 1993.",
    ref: "Anuario IEHS N° 9 (1994)",
    url: "/Anuario-IEHS-Nro-9-Resena-Olga-Echeverria.pdf", // Poné la URL al PDF si la tenés
  },
  {
    anio: 1997,
    tipo: "Artículo",
    titulo:
      "Volver a Rosas: los intelectuales autoritarios y la compleja herencia positivista en la rehabilitación histórica del rosismo.",
    ref: "Anuario IEHS N° 12 (1997)",
    url: "http://anuarioiehs.unicen.edu.ar/Files/1997/027%20-%20Echevarria%20Olga%20-%20Volver%20a%20Rosas%20........pdf",
  },
  {
    anio: 1999,
    tipo: "Reseña",
    titulo:
      "César Vidal, Los incubadores de la serpiente. Orígenes ideológicos del nazismo, la segunda guerra mundial y el Holocausto, Madrid, Anaya & Mario Muchnik, 1997.",
    ref: "Anuario IEHS N° 14 (1999)",
    url: "/Anuario-IEHS-Nro-14-Resena-Olga-Echeverria-1.pdf",
  },
  {
    anio: 1999,
    tipo: "Reseña",
    titulo:
      "Federico Finchelstein (ed.): Los alemanes, el holocausto y la culpa colectiva. El debate Goldhagen, Buenos Aires, EUDEBA, 1999.",
    ref: "Anuario IEHS N° 14 (1999)",
    url: "/Anuario-IEHS-Nro-14-Resena-Olga-Echeverria-2.pdf",
  },
  {
    anio: 2000,
    tipo: "Reseña",
    titulo:
      " Noemí Girbal-Blacha y Diana Quatrocchi-Woisson: Cuando opinar es actuar. Revistas argentinas del siglo XX, Buenos Aires, Academia Nacional de la Historia, 1999, 542 páginas",
    ref: "Anuario IEHS N° 15 (2000)",
    url: "/Anuario-IEHS-Nro-15-Resena-Olga-Echeverria.pdf",
  },
  {
    anio: 2002,
    tipo: "Artículo",
    titulo:
      "Los intelectuales católicos hasta el golpe de estado de 1930: la lenta constitución del catolicismo como actor autónomo en la política argentina.",
    ref: "Anuario IEHS N° 17 (2002)",
    url: "http://anuarioiehs.unicen.edu.ar/Files/2002/005%20-%20Echeverr%C3%ADa,%20Olga%20-%20Los%20intelectuales%20cat%C3%B3licos....pdf",
  },
  {
    anio: 2003,
    tipo: "Reseña",
    titulo:
      "La complejidad de lo político (en coautoría con la Dra. Lucía Lionetti)",
    ref: "Anuario IEHS N° 18 (2003)",
    url: "http://anuarioiehs.unicen.edu.ar/Files/2003/Presentacion%20La%20complejidad%20de%20lo%20pol%C3%ADtico.pdf",
  },
  {
    anio: 2007,
    tipo: "Reseña",
    titulo:
      "Omar Acha, La Nación Futura. Rodolfo Puiggrós en las encrucijadas argentinas del siglo XX, Buenos Aires, EUDEBA, 2006. 329 páginas.",
    ref: "Anuario IEHS N° 22 (2007)",
    url: "/Anuario-IEHS-Nro-22-Resena-Olga-Echeverria.pdf",
  },
  {
    anio: 2009,
    tipo: "Presentación de Dossier",
    titulo:
      "Sandra Gayol, Honor y duelo en la Argentina Moderna, Buenos Aires, Siglo XXI, 2008, 288 páginas.",
    ref: "Anuario IEHS N° 24 (2009)",
    url: "/Anuario-IEHS-Nro-24-Resena-Olga-Echeverria.pdf",
  },
  {
    anio: 2010,
    tipo: "Reseña",
    titulo:
      "Andrés Kozel, La Argentina como desilusión, México, Nostromo ediciones – UNAM Posgrados, 2008, 395 páginas.",
    ref: "Anuario IEHS N° 25 (2010)",
    url: "/Anuario-IEHS-Nro-25-Resena-Olga-Echeverria.pdf",
  },
  {
    anio: 2011,
    tipo: "Reseña",
    titulo:
      "Las derechas en la Argentina contemporánea: un campo de estudios en expansión. Presentación de dossier (en coautoría con María Inés Tato).",
    ref: "Anuario IEHS N° 26 (2011)",
    url: "http://anuarioiehs.unicen.edu.ar/Files/2011/04%20DOSSIER%20ECHEVERRIA-TATO%20FINAL/ARTICULO%20FORMATO%20DOSSIER%20DERECHAS%20PRESENTACI%C3%93N.pdf",
  },
  {
    anio: 2016,
    tipo: "Reseña",
    titulo:
      "Magdalena Broquetas, 2015 (1ª 2014). La trama autoritaria. Derechas y violencia en Uruguay (1958-1966). Montevideo: Ediciones de la Banda Oriental. 280 p.",
    ref: "Anuario IEHS N° 31(2) (2016)",
    url: "https://ojs2.fch.unicen.edu.ar/ojs-3.1.0/index.php/anuario-ies/article/view/166",
  },
];

interface PublicacionesProps {
  sectionRef?:
    | React.RefObject<HTMLDivElement>
    | ((el: HTMLDivElement | null) => void);
}

const Publicaciones: React.FC<PublicacionesProps> = ({ sectionRef }) => (
  <div ref={sectionRef} className="mb-12">
    <h2 className="text-3xl font-extrabold mb-8 text-center text-[#134e5e] tracking-tight">
      Publicaciones de Olga Echeverría en el Anuario IEHS
    </h2>
    <ul className="divide-y divide-[#134e5e]/20">
      {publicaciones.map((pub, i) => (
        <li key={i}>
          <a
            href={pub.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col md:flex-row md:items-center py-6 px-2 hover:bg-[#f9f6ff] transition group"
          >
            <div className="flex-1 min-w-0">
              <span className="text-[#134e5e] font-serif font-medium text-base md:text-lg group-hover:text-[#f9623e] transition">
                {pub.titulo}
              </span>
              {/* Si solo querés título, borrá la línea de tipo/año */}
              {/* <span className="block text-gray-700 text-sm md:text-base italic mt-1">
                {pub.tipo} – {pub.anio}
              </span> */}
            </div>
            <span className="md:ml-6 mt-2 md:mt-0 font-bold text-sm md:text-base text-[#f9623e] bg-[#134e5e]/10 px-2 py-1 rounded whitespace-nowrap">
              {pub.ref}
            </span>
          </a>
        </li>
      ))}
    </ul>

    {/* Galería de tapas */}
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-10">
      <figure className="flex flex-col items-center">
        <Image
          src="/Tapa312.jpg"
          alt="Tapa Anuario IEHS 31(2) 2016"
          width={192}
          height={256}
          className="w-48 rounded-xl shadow-lg shadow-[#134e5e]/40 hover:shadow-2xl hover:scale-105 transition-all duration-300"
        />
        <figcaption className="text-sm text-gray-600 mt-2">
          Anuario IEHS 31(2) · 2016
        </figcaption>
      </figure>
      <figure className="flex flex-col items-center">
        <Image
          src="/tapaanuario14.png"
          alt="Tapa Anuario IEHS"
          width={192}
          height={256}
          className="w-48 rounded-xl shadow-lg shadow-[#134e5e]/40 hover:shadow-2xl hover:scale-105 transition-all duration-300"
        />
        <figcaption className="text-sm text-gray-600 mt-2">
          Anuario IEHS N° 14 · Año 1999
        </figcaption>
      </figure>
    </div>
  </div>
);

export default Publicaciones;
