"use client";
import Image from "next/image";

const ediciones = [
  {
    titulo: "La ciudad, los hombres, la política",
    detalles:
      'AA.VV., "La ciudad, los hombres, la política. Argentina, Brasil, México, Perú", Siglo XIX. Revista de Historia, México, segunda época, número 11, enero-junio de 1992.',
  },
  {
    titulo: "Actores, ideas y proyectos políticos",
    detalles:
      "Bianchi, Susana y María Estela Spinelli (comps.), Actores, ideas y proyectos políticos en la Argentina contemporánea, Buenos Aires: IEHS, 1997.",
  },
  {
    titulo: "Catolicismo y peronismo",
    detalles:
      "Bianchi, Susana, Catolicismo y peronismo. Religión y política en la Argentina, 1943-1955, Buenos Aires: IEHS-Prometeo Libros, 2001.",
  },
  {
    titulo: "Problemas de historia agraria",
    detalles:
      "Bjerg, María Mónica y Andrea Reguera (comps.), Problemas de historia agraria. Nuevos debates y perspectivas de investigación, Tandil: IEHS, 1995.",
  },
  {
    titulo: "Inmigración y redes sociales",
    detalles:
      "Bjerg, Mónica y Hernán Otero (comps.), Inmigración y redes sociales en la Argentina moderna, Tandil: CEMLA-IEHS, 1995.",
  },
  {
    titulo: "Más allá de la fábrica",
    detalles:
      "Dicósimo, Daniel Oscar, Más allá de la fábrica. Los trabajadores metalúrgicos, Tandil 1955-1962, Buenos Aires: Editorial La Colmena - IEHS, 2000.",
  },
  {
    titulo: "La imprenta y el libro en la Galicia del siglo XVI",
    detalles: "Bjerg, Mónica y Hernán Otero (comps.), Inmigración y redes sociales en la Argentina moderna, Tandil: CEMLA-IEHS, 1995." 
  },
  {
    titulo: "Asociacionismo, trabajo e identidad étnica",
    detalles: "Devoto, Fernando y Eduardo Míguez (comps.), Asociacionismo, trabajo e identidad étnica. Los italianos en América Latina en una perspectiva comparada, Buenos Aires: CEMLA - CSER - IEHS, 1992.",
  },
  {
    titulo: "Puebla desde una perspectiva microhistórica",
    detalles: "Garavaglia, Juan Carlos y Juan Carlos Grosso, Puebla desde una perspectiva microhistórica. Tepeaca y su entorno agrario: población, producción e intercambio, 1740-1870, México: Editorial Claves Latinoamericas - Universidad Autónoma de Puebla - IEHS, 1994."
  },
  {
    titulo: "Pastores y labradores de Buenos Aires",
    detalles: "Garavaglia, Juan Carlos, Pastores y labradores de Buenos Aires. Una historia agraria de la campaña bonaerense, 1700-1830, Buenos Aires: IEHS-De la Flor-Universidad Pablo de Olavide (Sevilla), 1999."
  },
  {
    titulo: "Expansión capitalista y transformaciones regionales",
    detalles: "Gelman, Jorge; Juan Carlos Garavaglia y Blanca Zeberio (comps.), Expansión capitalista y transformaciones regionales. Relaciones sociales y empresas agrarias en la Argentina del siglo XIX, Buenos Aires: Editorial La Colmena - IEHS, 1999."
  },
  {
    titulo: "Documentos para la historia del Partido Socialista",
    detalles: "Iñigo Carrera, Nicolás, Documentos para la historia del Partido Socialista, Buenos Aires: IEHS, 1996."
  },
  {
    titulo: "¿Ruptura de la inequidad?",
    detalles: "León, Magdalena y Eugenia Rodríguez (editoras.), ¿Ruptura de la inequidad? Propiedad y género en la América Latina del siglo XIX, Bogotá: Siglo del Hombre Editores, 2005."
  },
  {
    titulo: "Sociedades en movimiento",
    detalles: "Mandrini, Raúl, Antonio Escobar Ohmstede y Sara Ortelli (eds.), Sociedades en movimiento. Los pueblos indígenas de América Latina en el siglo XIX, (Anuario del IEHS. Suplemento 1), Tandil: IEHS, 2007."
  },
  {
    titulo: "Huellas en la tierra",
    detalles: "Mandrini, Raúl y Andrea Reguera (comps.), Huellas en la tierra. Indios, agricultores y hacendados en la pampa bonaerense, Tandil: IEHS, 1993."
  },
  {
    titulo: "Poblaciones argentinas",
    detalles: "Otero, Hernán y Guillermo Velázquez (comps.), Poblaciones argentinas. Estudios de demografía diferencial, Tandil: CIG-IEHS, 1997."
  },
  {
    titulo: "Migraciones internas hacia ciudades intermedias",
    detalles: 'Pastor, Nancy, "Migraciones internas hacia ciudades intermedias. El caso de Tandil (provincia de Buenos Aires) entre 1945 y 1980", Cuadernos de Investigación, Tandil: IEHS, 1994.'
  },
  {
    titulo: "De los hechos de armas con los indios",
    detalles: 'Sargento Mayor Juan Cornell, "De los hechos de armas con los indios. Informe solicitado por el Ministro de Guerra y Marina General Don Juan Andrés Gelly y Obes" (1864), Fuentes para el estudio de la provincia de Buenos Aires, Buenos Aires: IEHS-Dpto Ciencias Sociales/UNLu, 1995.'
  },
  {
    titulo: "Relaciones inter-étnicas en el Sur bonaerense",
    detalles: "Villar, Daniel (ed.), Relaciones inter-étnicas en el Sur bonaerense, 1810-1830, Santa Rosa: Dpto. de Humanidades/UNS-IEHS, 1998."
  },
  {
    titulo: "Reproducción social y sistemas de herencia",
    detalles: "Zeberio, Blanca, María Bjerg y Hernán Otero (comps.), Reproducción social y sistemas de herencia en una perspectiva comparada. Europa y los países nuevo, siglos XVIII al XX, Buenos Aires: IEHS-EHESS-IREP, 1998."
  },
];

export default function Ediciones() {
  return (
    <div className="min-h-screen bg-white">
      {/* Imagen de portada */}
      <div className="relative h-64 md:h-96 w-full">
        <Image
          src="/libreria.jpg"
          alt="Fondo Ediciones"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold text-center">
            Ediciones y Coediciones del IEHS
          </h1>
        </div>
      </div>

      {/* Tarjetas informativas */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight leading-[1.18] bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow mb-6">
          Publicaciones destacadas
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ediciones.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-[#134e5e] mb-3">
                📘 {item.titulo}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {item.detalles}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}


