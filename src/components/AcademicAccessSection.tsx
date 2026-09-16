import Image from "next/image"
import Link from "next/link"

const anuarioUrl = "https://ojs2.fch.unicen.edu.ar/ojs-3.1.0/index.php/anuario-ies/index"

export default function AcademicAccessSection() {
  return (
    <section className="academic-access" aria-labelledby="academic-access-title">
      <h2 id="academic-access-title" className="sr-only">
        Publicaciones y formación académica
      </h2>
      <div className="site-shell academic-access__layout">
        <a
          className="academic-access__anuario"
          href={anuarioUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consultar el Anuario IEHS en el sitio de publicaciones"
        >
          <Image
            src="/fotos/Anuario IEHS.jpg"
            alt="Colección de ejemplares del Anuario IEHS"
            width={5740}
            height={3827}
            sizes="(max-width: 700px) 100vw, 62vw"
            className="academic-access__image"
          />
          <h3 className="academic-access__anuario-title">
            Anuario IEHS <span aria-hidden="true">→</span>
          </h3>
        </a>

        <div className="academic-access__secondary">
          <Link href="/proyectos" className="academic-access__item">
            <span className="academic-access__rule" aria-hidden="true" />
            <h3 className="academic-access__item-title">Proyectos</h3>
            <span className="academic-access__item-copy">
              Conocé las líneas de investigación y proyectos vigentes en el IEHS.
            </span>
            <span className="academic-access__arrow" aria-hidden="true">→</span>
          </Link>
          <Link href="/doctorado" className="academic-access__item">
            <span className="academic-access__rule" aria-hidden="true" />
            <h3 className="academic-access__item-title">Doctorado</h3>
            <span className="academic-access__item-copy">
              Información del programa doctoral y requisitos de inscripción.
            </span>
            <span className="academic-access__arrow" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
