import React from "react";

export default function AutoridadesBloqueDoctorado() {
  return (
    <div className="max-w-3xl mx-auto space-y-10">

      {/* Autoridades */}
      <section
        id="autoridades"
        className="relative rounded-xl overflow-hidden shadow-lg border border-[#f9623e]"
        style={{
          background: 'linear-gradient(135deg, #fff7f3 0%, #fce3da 100%)'
        }}
      >
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none"><ellipse cx="80" cy="20" rx="45" ry="25" fill="#f9623e" /></svg>
        </div>
        <div className="px-7 py-6 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-8 h-8 text-[#f9623e]" fill="none" viewBox="0 0 24 24">
  <path d="M12 3l9 4.5v3c0 5-3.8 9.4-9 11-5.2-1.6-9-6-9-11v-3L12 3z" stroke="#f9623e" strokeWidth="2" fill="none"/>
  <path d="M12 3v17" stroke="#f9623e" strokeWidth="2" strokeLinecap="round"/>
</svg>

            <h3 className="text-2xl md:text-3xl font-extrabold text-[#134e5e] tracking-wide drop-shadow">
              Autoridades
            </h3>
          </div>
          <ul className="text-lg text-[#134e5e] font-semibold pl-2 space-y-2">
            <li>
              <span className="font-bold text-[#f9623e]">Director:</span>
              <span className="ml-2">Dr. Ricardo Pasolini</span>
            </li>
            <li>
              <span className="font-bold text-[#f9623e]">Secretaría Académica:</span>
              <span className="ml-2">Dra. Paola Gallo</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Comité Académico */}
      <section
        id="comite"
        className="relative rounded-xl overflow-hidden shadow-lg border border-[#134e5e]"
        style={{
          background: 'linear-gradient(135deg, #e8f7fa 0%, #d0e7ef 100%)'
        }}
      >
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none select-none">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none"><ellipse cx="40" cy="90" rx="45" ry="25" fill="#134e5e" /></svg>
        </div>
        <div className="px-7 py-6 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-8 h-8 text-[#134e5e]" fill="none" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="3" stroke="#134e5e" strokeWidth="2"/>
                <circle cx="6" cy="12" r="2" stroke="#134e5e" strokeWidth="2"/>
                <circle cx="18" cy="12" r="2" stroke="#134e5e" strokeWidth="2"/>
                <path d="M12 11v4m-6-1v2m12-2v2" stroke="#134e5e" strokeWidth="2"/>
            </svg>

            <h3 className="text-2xl md:text-3xl font-extrabold text-[#134e5e] tracking-wide drop-shadow">
              Comité Académico de Posgrado en Historia
            </h3>
          </div>
          <ul className="text-lg text-[#134e5e] pl-5 list-disc font-semibold space-y-1">
            <li>Dra. Yolanda de Paz Trueba</li>
            <li>Dr. Daniel Dicósimo</li>
            <li>Dr. Marcelino Iriani</li>
            <li>Dra. Lucía Lionetti</li>
            <li>Dra. Melina Yangilevich</li>
          </ul>
        </div>
      </section>

      {/* Planta Permanente */}
      <section
        id="planta"
        className="relative rounded-xl overflow-hidden shadow-lg border border-[#0f3f4d]"
        style={{
          background: 'linear-gradient(120deg, #f3fafd 0%, #dde9f3 100%)'
        }}
      >
        <div className="absolute top-0 left-0 opacity-10 pointer-events-none select-none">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none"><ellipse cx="20" cy="20" rx="45" ry="25" fill="#0f3f4d" /></svg>
        </div>
        <div className="px-7 py-6 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-8 h-8 text-[#0f3f4d]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="4" y="4" width="16" height="16" rx="4" stroke="#0f3f4d" strokeWidth="2"/>
              <path d="M8 16V8m4 8V8m4 8V8" stroke="#0f3f4d" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#0f3f4d] tracking-wide drop-shadow">
              Planta Permanente de Docentes del Doctorado
            </h3>
          </div>
          <ul className="columns-1 md:columns-2 gap-8 text-lg text-[#134e5e] pl-5 list-disc [column-fill:_balance] font-semibold space-y-1">
            <li>Marina Adamini</li>
            <li>Lucas Bilbao</li>
            <li>Mónica Blanco</li>
            <li>Gisela Coronado Schwindt</li>
            <li>Daniel Dicósimo <span className="text-sm text-gray-500">(emérito)</span></li>
            <li>Paola Gallo</li>
            <li>Hernán González Bollo</li>
            <li>Pablo de Grande</li>
            <li>Marcelino Irianni</li>
            <li>Lucía Lionetti <span className="text-sm text-gray-500">(emérita)</span></li>
            <li>Julio César Melón <span className="text-sm text-gray-500">(emérito)</span></li>
            <li>Daniel Míguez</li>
            <li>Eduardo Míguez <span className="text-sm text-gray-500">(emérito)</span></li>
            <li>Hernán Otero</li>
            <li>Sara Ortelli</li>
            <li>Yolanda de Paz Trueba</li>
            <li>Ricardo Pasolini</li>
            <li>Andrea Reguera</li>
            <li>Gisela Sedeillán</li>
            <li>Estela Spinelli <span className="text-sm text-gray-500">(emérita)</span></li>
            <li>Juan Ignacio Quintián</li>
            <li>Martín Vicente</li>
            <li>Melina Yangilevich</li>
          </ul>
        </div>
      </section>

      {/* Profesores Invitados */}
      <section
        id="invitados"
        className="relative rounded-xl overflow-hidden shadow-lg border border-[#f9623e]"
        style={{
          background: 'linear-gradient(110deg, #fff9f6 0%, #ffe5d6 100%)'
        }}
      >
        <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none select-none">
          <svg width="120" height="120" viewBox="0 0 100 100" fill="none"><ellipse cx="80" cy="80" rx="45" ry="25" fill="#f9623e" /></svg>
        </div>
        <div className="px-7 py-6 relative z-10">
          <div className="flex items-center gap-3 mb-3">
            <svg className="w-8 h-8 text-[#f9623e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M16 12a4 4 0 01-8 0 4 4 0 018 0z" />
              <path d="M12 16v4" stroke="#f9623e" strokeWidth="2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="10" stroke="#f9623e" strokeWidth="2" fill="none"/>
            </svg>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#f9623e] tracking-wide drop-shadow">
              Profesores Invitados
            </h3>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2 text-lg text-[#134e5e] font-semibold">
              {/* Columna 1 */}
              <ul className="space-y-1 list-disc pl-5">
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
              {/* Columna 2 */}
              <ul className="space-y-1 list-disc pl-5">
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
                <li>Dr. Beñat Sarasola (Universidad del País Vasco)</li>
              </ul>
              {/* Columna 3 */}
              <ul className="space-y-1 list-disc pl-5">
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
                <li>Dra. Laura Cucchi (UBA)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
