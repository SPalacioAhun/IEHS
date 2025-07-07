
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

// export const metadata = {
//   title: "Doctorado en Historia – IEHS – UNICEN",
//   description: "Doctorado en Historia del IEHS – UNICEN",
// };

// export default function Doctorado() {
//   return (
//     <div className="flex flex-col min-h-screen bg-white">
//       <Header />

//       {/* HERO con título */}
//       <section className="relative bg-gradient-to-b from-[#0f3f4d] to-[#1f697a] text-white py-16 shadow">
//         <div className="container mx-auto px-6 flex flex-col items-center justify-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-center drop-shadow">
//             Doctorado en Historia
//           </h1>
//           <p className="text-lg md:text-xl text-center max-w-2xl mb-8 opacity-90">
//             CONEAU &quot;A&quot; – Res. CONEAU N°357/07 y 41/18
//           </p>
//           {/* Nav interno */}
//           <nav className="flex flex-wrap gap-4 justify-center text-[#f9623e] font-semibold">
//             <a href="#cuerpo" className="hover:underline">Cuerpo</a>
//             <a href="#requisitos" className="hover:underline">Requisitos</a>
//             <a href="#matricula" className="hover:underline">Matrícula</a>
//             <a href="#tesis" className="hover:underline">Tesis</a>
//             <a href="#cursos" className="hover:underline">Cursos</a>
//             <a href="#graduados" className="hover:underline">Graduados</a>
//           </nav>
//         </div>
//       </section>

//       {/* CUERPO */}
//       <section id="cuerpo" className="container mx-auto px-6 py-14">
//   <div className="max-w-3xl mx-auto bg-white/95 rounded-xl shadow-lg border border-[#e7f5fa] p-8">
//     <div className="flex items-center gap-3 mb-4">
//       <span className="w-7 h-7 bg-[#f9623e] rounded-full flex items-center justify-center shadow-md">
//         <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
//         </svg>
//       </span>
//       <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e]">
//         Objetivo
//       </h2>
//     </div>

//     <p className="text-lg text-gray-700 mb-6">
//       El Posgrado tiene por objetivo la formación de profesionales capacitados para
//       llevar a cabo investigación en historia, y que cuenten con una sólida formación
//       general en la disciplina. De currícula personalizada, el Doctorado en Historia
//       brinda a los estudiantes una amplia y calificada oferta de seminarios temáticos
//       dictados por profesores de la Planta Permanente y por Profesores Invitados, de
//       reconocida trayectoria académica e investigativa.
//     </p>

//     <div className="bg-[#e7f5fa] border-l-4 border-[#f9623e] px-6 py-4 rounded-lg flex items-center gap-3">
//       <svg className="w-6 h-6 text-[#134e5e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6m-7 7V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
//       </svg>
//       <span className="text-[#134e5e] font-semibold text-base">
//         TÍTULO: Doctor/a en Historia – CONEAU &quot;A&quot; (Res. CONEAU N°357/07 y 41/18)
//       </span>
//     </div>
//   </div>
// </section>


//       {/* Placeholder para futuras secciones */}
//       <section id="requisitos" className="container mx-auto px-6 py-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
//           Requisitos
//         </h2>
//         <p className="text-gray-600">Próximamente...</p>
//       </section>
//       <section id="matricula" className="container mx-auto px-6 py-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
//           Matrícula
//         </h2>
//         <p className="text-gray-600">Próximamente...</p>
//       </section>
//       <section id="tesis" className="container mx-auto px-6 py-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
//           Tesis
//         </h2>
//         <p className="text-gray-600">Próximamente...</p>
//       </section>
//       <section id="cursos" className="container mx-auto px-6 py-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
//           Cursos
//         </h2>
//         <p className="text-gray-600">Próximamente...</p>
//       </section>
//       <section id="graduados" className="container mx-auto px-6 py-12">
//         <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
//           Graduados
//         </h2>
//         <p className="text-gray-600">Próximamente...</p>
//       </section>

//       <Footer />
//     </div>
//   );
// }

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DoctoradoHeaderNav from "@/components/DoctoradoHeaderNav";

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
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-center drop-shadow">
            Doctorado en Historia
          </h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mb-8 opacity-90">
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
</section>


      {/* Placeholder para futuras secciones */}
      <section id="requisitos" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
          Requisitos
        </h2>
        <p className="text-gray-600">Próximamente...</p>
      </section>
      <section id="matricula" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
          Matrícula
        </h2>
        <p className="text-gray-600">Próximamente...</p>
      </section>
      <section id="tesis" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
          Tesis
        </h2>
        <p className="text-gray-600">Próximamente...</p>
      </section>
      <section id="cursos" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
          Cursos
        </h2>
        <p className="text-gray-600">Próximamente...</p>
      </section>
      <section id="graduados" className="container mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#134e5e] mb-6">
          Graduados
        </h2>
        <p className="text-gray-600">Próximamente...</p>
      </section>

      <Footer />
    </div>
  );
}
