import Image from "next/image"
import Link from "next/link"

export default function ArchiveFeatureSection() {
  return (
    <section className="archive-feature" aria-labelledby="archive-feature-title">
      <div className="archive-feature__image-wrap">
        <Image
          src="/fotos/Hemeroteca IEHS.jpg"
          alt="Estanterías de la Hemeroteca del IEHS"
          fill
          sizes="(max-width: 600px) 100vw, 50vw"
          className="archive-feature__image"
        />
      </div>

      <div className="archive-feature__content">
        <h2 id="archive-feature-title">
          Hemeroteca y<br />fondos documentales
        </h2>
        <div className="archive-feature__links">
          <Link href="/hemeroteca" className="archive-feature__primary">
            Consultar <span aria-hidden="true">→</span>
          </Link>
          <Link href="/fondos" className="archive-feature__secondary">
            Fondos documentales <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
