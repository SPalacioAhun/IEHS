import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctoradoHeaderNav from "@/components/DoctoradoHeaderNav";
import RequisitosDoctorado from "@/components/RequisitosDoctorado";
import MatriculaDoctorado from "@/components/MatriculaDoctorado";
import TesisDoctorado from "@/components/TesisDoctorado";
import CursosDoctorado from "@/components/CursosDoctorado";
import AutoridadesBloqueDoctorado from "@/components/AutoridadesBloqueDoctorado";
import GraduadosDoctorado from "@/components/GraduadosDoctorado";


export const metadata = {
  title: "Doctorado en Historia – IEHS – UNICEN",
  description: "Doctorado en Historia del IEHS – UNICEN",
};

export default function Doctorado() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />

      {/* HERO con título */}
      <section className="relative bg-gradient-to-b from-[#0f3f4d] to-[#1f697a] text-white py-16 shadow">
  <div className="container mx-auto px-6 flex flex-col items-center justify-center">
    <h1
      className="
        text-4xl md:text-6xl font-extrabold mb-3 text-center tracking-tight
        text-white
        [text-shadow:2px_2px_0_#f9623e,4px_4px_12px_rgba(0,0,0,0.6)]
      "
      >
      Doctorado en Historia
    </h1>


    <p
      className="
        text-lg md:text-2xl text-center max-w-2xl mb-10
        opacity-95 font-medium tracking-wide text-[#ffe9e2] drop-shadow
      "
    >
      CONEAU &quot;A&quot; – Res. CONEAU N°357/07 y 41/18
    </p>
    {/* Nav interno */}
    <DoctoradoHeaderNav />
  </div>
</section>


      {/* CUERPO */}
      <section id="cuerpo" className="container mx-auto px-6 py-14">
  <div className="max-w-3xl mx-auto bg-white/95 rounded-xl shadow-lg border border-[#e7f5fa] p-8">
    <div className="flex items-center gap-3 mb-4">
      <span className="w-7 h-7 bg-[#f9623e] rounded-full flex items-center justify-center shadow-md">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
        </svg>
      </span>
      <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e]">
        Objetivo
      </h2>
    </div>

    <p className="text-lg text-gray-700 mb-6">
      El Posgrado tiene por objetivo la formación de profesionales capacitados para
      llevar a cabo investigación en historia, y que cuenten con una sólida formación
      general en la disciplina. De currícula personalizada, el Doctorado en Historia
      brinda a los estudiantes una amplia y calificada oferta de seminarios temáticos
      dictados por profesores de la Planta Permanente y por Profesores Invitados, de
      reconocida trayectoria académica e investigativa.
    </p>

    <div className="bg-[#e7f5fa] border-l-4 border-[#f9623e] px-6 py-4 rounded-lg flex items-center gap-3">
      <svg className="w-6 h-6 text-[#134e5e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      </svg>
      <span className="text-[#134e5e] font-semibold text-base">
        TÍTULO: Doctor/a en Historia – CONEAU &quot;A&quot; (Res. CONEAU N°357/07 y 41/18)
      </span>
    </div>
  </div>

<div className="relative flex flex-col items-center my-12 select-none">
  <svg
    viewBox="0 0 600 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-10 md:h-16"
    preserveAspectRatio="none"
  >
    <path
      d="M0 40 Q300 80 600 40 L600 60 L0 60 Z"
      fill="url(#gradient1)"
    />
    <defs>
      <linearGradient id="gradient1" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#134e5e" />
        <stop offset="1" stopColor="#f9623e" />
      </linearGradient>
    </defs>
  </svg>
  <span
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full border-4 border-[#e7f5fa] shadow-lg flex items-center justify-center p-3"
    style={{ minWidth: 64, minHeight: 64 }}
  >
    {/* Ícono libro clásico */}
    <svg
      className="w-10 h-10"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#134e5e"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6a4 4 0 0 1 4-4h11a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4z" />
      <path d="M3 6h18" stroke="#f9623e" strokeWidth={2}/>
      <path d="M16 2v20" stroke="#f9623e" strokeWidth={2}/>
    </svg>
  </span>
 </div>
 </section>

     <section id= "autoridades" className="max-w-3xl mx-auto space-y-10">
        <AutoridadesBloqueDoctorado />
     </section>

      <section id="requisitos" >
        <RequisitosDoctorado />
      </section>

      <section id="matricula" className="container mx-auto px-6 py-12">
        <MatriculaDoctorado />
      </section>

      <section id="tesis" className="container mx-auto px-6 py-12">
        <TesisDoctorado />
      </section>

      <section id="cursos" className="container mx-auto px-6 py-12">
        <CursosDoctorado />
      </section>

      <section id="graduados" className="container mx-auto px-6 py-12">
        <GraduadosDoctorado />
      </section>

      <Footer />
    </div>
  );
}
