import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Autoridades from "@/components/Autoridades";
import Link from "next/link";
import ContactSection from "@/components/ContactSection";
import InstitutionalHistory from "@/components/InstitutionalHistory";
import AcademicAccessSection from "@/components/AcademicAccessSection";
import ArchiveFeatureSection from "@/components/ArchiveFeatureSection";
import TributesSection from "@/components/TributesSection";

export const metadata = {
  title: "IEHS",
  description: "Instituto de Estudios Histórico-Sociales",
};

export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />

        <section className="hero" aria-labelledby="hero-title">
          <Image src="/fotos/frente.iehsReal.png" alt="Fachada histórica del Instituto de Estudios Histórico-Sociales en Tandil" fill priority sizes="100vw" className="hero__image" />
          <div className="hero__content">
            <p className="hero__eyebrow">BIENVENIDOS AL IEHS</p>
            <h1 id="hero-title">Instituto de<br />Estudios<br />Histórico-Sociales</h1>
            <p className="hero__subtitle">Prof. Juan Carlos Grosso</p>
            <p className="hero__institution">Facultad de Ciencias Humanas · UNICEN</p>
            <div className="hero__actions">
              <Link href="/proyectos" className="hero__primary">Proyectos <span aria-hidden="true">↗</span></Link>
              <Link href="/integrantes/investigadores" className="hero__secondary">Integrantes <span aria-hidden="true">→</span></Link>
            </div>
            <p className="hero__address">Pinto 348 · Tandil</p>
          </div>
        </section>

        <InstitutionalHistory />

        <AcademicAccessSection />

        <ArchiveFeatureSection />

        <Autoridades />
        <TributesSection />

        {/* Contacto + Mapa */}
        <ContactSection />

        <Footer />
      </div>
    </>
  );
}
