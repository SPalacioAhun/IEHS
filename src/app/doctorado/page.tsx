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




  <div className="max-w-3xl mx-auto space-y-10">
  {/* Autoridades */}
  <section id="autoridades" className="bg-[#f8fafc] border-l-4 border-[#f9623e] rounded-lg shadow px-6 py-6">
    <div className="flex items-center gap-2 mb-2">
      <svg className="w-7 h-7 text-[#f9623e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="#f9623e" strokeWidth="2" fill="none"/>
        <path d="M12 8v4l2 2" stroke="#f9623e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <h3 className="text-2xl md:text-3xl font-bold text-[#134e5e] underline underline-offset-4 decoration-[#f9623e]">
        Autoridades
      </h3>
    </div>
    <ul className="text-lg text-gray-700 font-semibold pl-2 space-y-1">
      <li><span className="font-bold text-[#134e5e]">Director:</span> Dr. Ricardo Pasolini</li>
      <li><span className="font-bold text-[#134e5e]">Secretaría Académica:</span> Dra. Paola Gallo</li>
    </ul>
  </section>

  {/* Comité Académico */}
  <section id="comite" className="bg-[#f8fafc] border-l-4 border-[#134e5e] rounded-lg shadow px-6 py-6">
    <div className="flex items-center gap-2 mb-2">
      <svg className="w-7 h-7 text-[#134e5e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M12 6v6l4 2" stroke="#134e5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="12" r="10" stroke="#134e5e" strokeWidth="2" fill="none"/>
      </svg>
      <h3 className="text-2xl md:text-3xl font-bold text-[#134e5e] underline underline-offset-4 decoration-[#134e5e]">
        Comité Académico de Posgrado en Historia
      </h3>
    </div>
    <ul className="text-lg text-gray-800 pl-5 list-disc">
      <li className="font-semibold">Dra. Yolanda de Paz Trueba</li>
      <li className="font-semibold">Dr. Daniel Dicósimo</li>
      <li className="font-semibold">Dr. Marcelino Iriani</li>
      <li className="font-semibold">Dra. Lucía Lionetti</li>
      <li className="font-semibold">Dra. Melina Yangilevich</li>
    </ul>
  </section>

  {/* Planta Permanente */}
  <section id="planta" className="bg-[#f8fafc] border-l-4 border-[#0f3f4d] rounded-lg shadow px-6 py-6">
    <div className="flex items-center gap-2 mb-2">
      <svg className="w-7 h-7 text-[#0f3f4d]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="4" stroke="#0f3f4d" strokeWidth="2"/>
        <path d="M8 16V8m4 8V8m4 8V8" stroke="#0f3f4d" strokeWidth="2" strokeLinecap="round"/>
      </svg>
      <h3 className="text-2xl md:text-3xl font-bold text-[#0f3f4d] underline underline-offset-4 decoration-[#0f3f4d]">
        Planta Permanente de Docentes del Doctorado
      </h3>
    </div>
    <ul className="columns-1 md:columns-2 gap-8 text-lg text-gray-800 pl-5 list-disc [column-fill:_balance]">
      <li className="font-semibold">Marina Adamini</li>
      <li className="font-semibold">Lucas Bilbao</li>
      <li className="font-semibold">Mónica Blanco</li>
      <li className="font-semibold">Gisela Coronado Schwindt</li>
      <li className="font-semibold">Daniel Dicósimo <span className="text-sm text-gray-500">(emérito)</span></li>
      <li className="font-semibold">Paola Gallo</li>
      <li className="font-semibold">Hernán González Bollo</li>
      <li className="font-semibold">Pablo de Grande</li>
      <li className="font-semibold">Marcelino Irianni</li>
      <li className="font-semibold">Lucía Lionetti <span className="text-sm text-gray-500">(emérita)</span></li>
      <li className="font-semibold">Julio César Melón <span className="text-sm text-gray-500">(emérito)</span></li>
      <li className="font-semibold">Daniel Míguez</li>
      <li className="font-semibold">Eduardo Míguez <span className="text-sm text-gray-500">(emérito)</span></li>
      <li className="font-semibold">Hernán Otero</li>
      <li className="font-semibold">Sara Ortelli</li>
      <li className="font-semibold">Yolanda de Paz Trueba</li>
      <li className="font-semibold">Ricardo Pasolini</li>
      <li className="font-semibold">Andrea Reguera</li>
      <li className="font-semibold">Gisela Sedeillán</li>
      <li className="font-semibold">Estela Spinelli <span className="text-sm text-gray-500">(emérita)</span></li>
      <li className="font-semibold">Juan Ignacio Quintián</li>
      <li className="font-semibold">Martín Vicente</li>
      <li className="font-semibold">Melina Yangilevich</li>
    </ul>
  </section>

  {/* Profesores Invitados */}
  <section id="invitados" className="bg-[#f8fafc] border-l-4 border-[#f9623e] rounded-lg shadow px-6 py-6">
    <div className="flex items-center gap-2 mb-2">
      <svg className="w-7 h-7 text-[#f9623e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" />
        <path d="M12 16v4" stroke="#f9623e" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="10" stroke="#f9623e" strokeWidth="2" fill="none"/>
      </svg>
      <h3 className="text-2xl md:text-3xl font-bold text-[#f9623e] underline underline-offset-4 decoration-[#f9623e]">
        Profesores Invitados
      </h3>
    </div>
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 text-lg text-gray-800">
        <ul className="space-y-1 list-disc pl-5 font-semibold">
          {/* ...columna 1... */}
        <ul className="flex-1 space-y-1 list-disc pl-5">
        <li>Dr. Jeremy Adelman (Princeton University)</li>
        <li>Dra. Valentina Ayrolo (UNMdP)</li>
        <li>Dr. Osvaldo Barreneche (UNLP)</li>
        <li>Dr. Michel Bertrand (EHESS)</li>
        <li>Dra. Marta Bonaudo (UNR)</li>
        <li>Dra. Lila Caimari (UdeSA)</li>
        <li>Prof. José Carlos Chiaramonte (UBA)</li>
        <li>Dr. Gerardo de Jong (UNComahue)</li>
        <li>Dr. Juan Carlos Garavaglia (EHESS)</li>
        <li>Dr. Ricardo González Leandri (CCHS/CSIC)</li>
        <li>Dr. Flavio Heiz (PUCRS)</li>
        <li>Dra. Mirta Lobato (UBA)</li>
        <li>Dr. Elías Palti (UNQui)</li>
        <li>Dr. Juan Manuel Palacio (UNSAM)</li>
        <li>Dra. Adelina Rucquoi (EHESS)</li>
        <li>Dr. Daniel Santilli (UBA)</li>
        <li>Dr. Ricardo Sidicaro (UBA)</li>
        <li>Dra. Alejandra Irigoin (Esc. de Economía y Cs. Políticas de Londres)</li>
        <li>Dr. Aníbal Jáuregui (UBA)</li>
        <li>Dra. Élida Blasco (UBA)</li>
        <li>Dr. Ramírez Llorens (UBA)</li>
        <li>Dr. Fabio Wasserman (UBA)</li>
        <li>Dr. Sergio Serulnikov (UNSAM)</li>
      </ul>
        </ul>
        <ul className="space-y-1 list-disc pl-5 font-semibold">
          {/* ...columna 2... */}
           <ul className="flex-1 space-y-1 list-disc pl-5">
        <li>Dr. Carlos Altamirano (UBA/UNQui)</li>
        <li>Dra. Susana Bandieri (UNComahue)</li>
        <li>Dr. Darío Barriera (UNR)</li>
        <li>Dra. María Bjerg (UNQui)</li>
        <li>Dr. Heraclio Bonilla (Univ. de Santander)</li>
        <li>Dr. Mario Cerutti (Univ. de Nuevo León)</li>
        <li>Dr. Fernando Devoto (UBA)</li>
        <li>Prof. Andrés Di Tella</li>
        <li>Dr. Robert Jackson (Texas Faculty Assoc.)</li>
        <li>Dr. Jospeh Goy (EHESS)</li>
        <li>Dr. Roy Hora (UdeSA)</li>
        <li>Dra. Marluza Marques Harres (UNISINOS)</li>
        <li>Dr. Héctor Pérez Brignoli (Univ. de Costa Rica)</li>
        <li>Dr. David Rock</li>
        <li>Dra. Nuria Sala (Universidad de Girona)</li>
        <li>Dra. Hilda Sabato (UBA)</li>
        <li>Lic. Hugo Vezzetti (UBA)</li>
        <li>Dr. Pablo Buchbinder (UBA)</li>
        <li>Dra. Federica Morelli (University of Turin)</li>
        <li>Dr. Daniel Lvovich (UNGS)</li>
        <li>Dra. Elizabeth Quay Hutchison (University of New Mexico)</li>
        <li>Dra. Laura Cutrera (UBA)</li>
      </ul>
        </ul>
        <ul className="space-y-1 list-disc pl-5 font-semibold">
          {/* ...columna 3... */}
          <ul className="flex-1 space-y-1 list-disc pl-5">
        <li>Dr. Maurice Aymard (EHESSS)</li>
        <li>Dra. María Elena Barral (UNLu)</li>
        <li>Dra. Lilia Ana Bertoni (UBA)</li>
        <li>Dr. Guillaume Boccara (EHESS)</li>
        <li>Dra. Beatriz Bragoni (UNCuyo)</li>
        <li>Dra. Isabella Cosse (UdeSA)</li>
        <li>Dr. Lorenzo Delgado (CCHS/CSIC)</li>
        <li>Prof. Raúl Fradkin (UNLu/UBA)</li>
        <li>Dra. Pilar García Jordán (Univ. de Barcelona)</li>
        <li>Dr. Maurizio Gribaudi (EHESS)</li>
        <li>Dr. Bernard Vincent (EHESS)</li>
        <li>Dr. Zacarías Moutoukias (EHESS)</li>
        <li>Dr. Jacques Poloni-Simard (EHESS)</li>
        <li>Dr. Darío Roldán (UTDT)</li>
        <li>Dr. Daniel Santamaría (UNJu)</li>
        <li>Dr. Jaime Céspedes (Université d’Artois)</li>
        <li>Dr. David Weber (Southern Methodist Univ.)</li>
        <li>Dra. Piroska Csúri (UBA)</li>
        <li>Dr. Samuel Amaral (UNTREF)</li>
        <li>Lic. Beatriz Sarlo</li>
        {/* AGREGADOS */}
        <li>Dra. Laura Cucchi (UBA)</li>
        <li>Dr. Beñat Sarasola (Universidad del País Vasco)</li>
        
        
        
        
      </ul>
        </ul>
      </div>
    </div>
  </section>
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
