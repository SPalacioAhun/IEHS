import Link from "next/link";

const consejo = ["Marina Adamini", "Lucas Bilbao", "Magdalena López Pons", "Juan Ignacio Quintián", "Carla Dátola"];
const integrantes = [
  { nombre: "Investigadores", href: "/integrantes/investigadores" },
  { nombre: "Becarios", href: "/integrantes/becarios" },
  { nombre: "Colaboradores", href: "/integrantes/colaboradores" },
  { nombre: "Estudiantes de Posgrado", href: "/integrantes/estudiantes" },
];

export default function Autoridades() {
  return (
    <section className="authorities" aria-labelledby="authorities-title">
      <div className="site-shell authorities__layout">
        <div className="authorities__intro">
          <h1 id="authorities-title">Autoridades</h1>
          <Link href="/integrantes/investigadores" className="editorial-link">Integrantes <span aria-hidden="true">→</span></Link>
        </div>
        <div className="authorities__content">
          <div className="authorities__directives">
            <article><p className="authorities__role">Directora</p><h2>Melina Yangilevich</h2></article>
            <article><p className="authorities__role">Vicedirectora</p><h2>Paola Gallo</h2></article>
          </div>
          <div className="authorities__council">
            <h2>Consejo de Dirección</h2>
            <ul>{consejo.map((nombre) => <li key={nombre}>{nombre}</li>)}</ul>
          </div>
          <nav className="authorities__integrantes" aria-label="Categorías de integrantes">
            {integrantes.map((integrante) => <Link key={integrante.href} href={integrante.href}>{integrante.nombre} <span aria-hidden="true">→</span></Link>)}
          </nav>
        </div>
      </div>
    </section>
  );
}
