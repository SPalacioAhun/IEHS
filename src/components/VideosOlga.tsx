import React from "react";

// Lista fija de videos
const videos = [
  {
    titulo: "Presentación del libro Profeta del genocidio – Parte 1",
    evento: "Presentación del libro de Lucas Bilbao y Ariel Lede",
    fecha: "2016",
    url: "https://www.youtube.com/embed/nk9opCXbUuI",
  },
  {
    titulo: "Presentación del libro Profeta del genocidio – Parte 2",
    evento: "Presentación del libro de Lucas Bilbao y Ariel Lede",
    fecha: "2016",
    url: "https://www.youtube.com/embed/X4DCDjx7nrA",
  },
  {
    titulo: "Charla debate “Independencia: ¿de qué y de quién?”.",
    evento: "Charla debate",
    fecha: "2016",
    url: "https://www.youtube.com/embed/PZSNYPWh9lw",
  },
  {
    titulo: "“Interacciones. Las derechas en Argentina y Uruguay”. Ciclo de la productora de medios audiovisuales de la UNCPBA ABRA TV.",
    evento: "Las derechas en Argentina y Uruguay",
    fecha: "2017",
    url: "https://www.abratv.com.ar/capitulo/441-Interacciones-C01",
    img: "ABRATV.png",
  },
  {
    titulo: "Charla debate: “La reforma universitaria de 1918”",
    evento: "Charla debate",
    fecha: "2018",
    url: "https://www.youtube.com/embed/ze40QHAkmAI",
  },
  {
    titulo: "Presentación del libro de Antonio Bresci “MSTM. Historia de un compromiso”",
    evento: "Presentación del libro de Antonio Bresci",
    fecha: "2018",
    url: "https://www.youtube.com/embed/bIzd-UDYM_0",
  },
  {
    titulo: "“Señales”. Entrevista a AnalíaKalinec. Ciclo de la productora de medios audiovisuales de la UNCPBA ABRA TV",
    evento: "ABRA - Señales",
    fecha: "2019",
    url: "https://www.youtube.com/embed/US8BXMjFPeE",
  },
  {
    titulo: "Presentación del libro “Epidemias, tratamientos y efectos sociales a través del tiempo. Reflexiones para la enseñanza y aprendizaje desde una perspectiva histórica” (en coautoría con Yolanda de Paz Trueba, Lucía Lionetti y Silvana Gómez)",
    evento: "Presentación del libro",
    fecha: "2020",
    url: "https://www.youtube.com/embed/TWBUU_TRldk",
  },
  {
    titulo: "Participación en el Workshop Género, beneficencia y masonería en Homenaje a Marta Bonaudo.  Asociación Argentina para la Investigación en Historia de las Mujeres y Estudios de Género (AAIHMEG); Grupo de Historia Social de la Patagonia Central y Austral (GeHiSo Pa-Ce- Al); Instituto de Estudios Socio Históricos (FCH - UNLPam) e Instituto De Estudios Histórico-Sociales (IEHS)-Instituto de Geografía, Historia y Ciencias Sociales (IGEHCS/CONICET/UNCPBA)",
    evento: "Participación en el Workshop",
    fecha: "2021",
    url: "https://www.youtube.com/embed/BCJ_gH7dSpM",
  },
];

const VideosOlga: React.FC = () => (
  <section className="mb-14">
    <h2 className="text-3xl font-extrabold mb-8 text-center text-[#134e5e] tracking-tight">
      Fragmentos de Videos
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {videos.map((vid, i) => (
        <div
          key={i}
          className="bg-[#f7f7fa] rounded-2xl shadow-lg hover:shadow-2xl transition flex flex-col items-center p-4"
        >
          {/* Renderizar imagen con enlace si existe img, sino, el iframe */}
          {vid.img ? (
            <a
              href={vid.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full block aspect-video rounded-lg overflow-hidden shadow mb-4 group relative"
            >
              <img
                src={`/${vid.img}`}
                alt={vid.titulo}
                className="w-full h-full object-cover group-hover:brightness-90 transition"
              />
              
            </a>
          ) : (
            <div className="w-full aspect-video rounded-lg overflow-hidden shadow mb-4">
              <iframe
                src={vid.url}
                title={vid.titulo}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          )}
          <p className="text-[#134e5e] font-semibold text-lg text-center mb-1">{vid.titulo}</p>
          <span className="text-gray-600 text-sm text-center italic">{vid.evento} – {vid.fecha}</span>
        </div>
      ))}
    </div>
  </section>
);

export default VideosOlga;
