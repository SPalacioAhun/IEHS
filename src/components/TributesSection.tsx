import Link from "next/link";

const tributes = [
  { name: "Olga Echeverría", href: "/homenajeOlga" },
  { name: "Juan Carlos Garavaglia", href: "/homenaje-garavaglia" },
];

export default function TributesSection() {
  return (
    <section className="tributes" aria-label="Homenajes del IEHS">
      {tributes.map((tribute) => (
        <Link key={tribute.href} href={tribute.href} className="tribute-link" prefetch>
          <span className="tribute-label">Homenaje a</span>
          <span className="tribute-name">{tribute.name}</span>
          <span className="tribute-arrow" aria-hidden="true">→</span>
        </Link>
      ))}
    </section>
  );
}
