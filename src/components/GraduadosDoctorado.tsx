// "use client";
// import React, { useState } from "react";

// const ANIOS = Array.from({ length: 2024 - 2000 + 1 }, (_, i) => 2000 + i);

// const EGRESADOS: { [key: number]: React.ReactNode } = {
//   2000: (
//     <div className="space-y-2">
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2000</span>
//       <p>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> &quot;Nacionalismo, fascismo y tradicionalismo en la Argentina moderna. Una historia&quot;
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Tesista:</b> Fernando J. Devoto.
//         </span>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Fecha de defensa:</b> 8 de septiembre del año 2000.
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Jurado:</b> Dr. Robert Potash, Dr. Juan Carlos Torre, Prof. Enrique Zuleta Álvarez y Dr. Ezequiel Gallo (Director de Tesis).
//         </span>
//       </p>
//     </div>
//   ),
//  2002: (
//   <div className="space-y-6">
//     <div className="space-y-1">
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2002</span>
//       <p>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> &quot;Empresarios y políticas de desarrollo en la Argentina y el Brasil. 1920-1955&quot;.
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Tesista:</b> Aníbal Pablo Jáuregui
//         </span>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Jurado:</b> Prof. María Inés Barbero (UBA), Dr. Eduardo Míguez (Universidad Nacional del Centro), Dr. Fernando Rocchi (Universidad Di Tella) y Prof. José Luis Moreno (Universidad Nacional de Luján-Director de la Tesis).
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Fecha de defensa:</b> 5 de noviembre de 2002
//         </span>
//       </p>
//       <p className="text-[#134e5e] text-justify leading-relaxed mt-2">
//         Esta tesis aborda el estudio comparado de la conformación y evolución del empresariado como actor social y político de Argentina y Brasil y su participación en las políticas de desarrollo de ambos países en el período 1920-1955. El autor busca explicar los diferentes resultados obtenidos en cada caso, sosteniendo que en parte esa diferencia de performance de desarrollo es resultado de cuestiones de naturaleza económica (dotación de recursos mineros, relación con la economía norteamericana, sistema de rutas, etc.), pero también merece una especial atención la diferente relación de la burguesía brasileña con la esfera política que le permitió alcanzar una posición de liderazgo en la economía nacional. En el análisis comparado se estudian los componentes de la acción gremial, las tradiciones institucionales y su influencia en la conformación de las asociaciones gremiales, la vocación desarrollista de cada país, la evolución de las políticas públicas en función de las nuevas necesidades económicas al ingresar en la era del keynesianismo y la conformación de &quot;arenas estatales&quot; en las que confluían funcionarios públicos y empresarios.
//       </p>
//     </div>
//     <div className="space-y-1 pt-4 border-t border-[#e7f5fa]">
//       <p>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> &quot;Una inteligencia disciplinada y disciplinante. Los intelectuales autoritarios de derecha: su concepción estética-ideológica, la política y la representación de la sociedad. Argentina, primeras décadas del siglo XX&quot;, 545 pp., 2 tomos.
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Tesista:</b> Olga Echeverría
//         </span>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Jurado:</b> Dra. Dora Barrancos (CONICET-UBA), Dra. Marta Bonaudo (CONICET-Universidad Nacional de Rosario), Dra. María Estela Spinelli (Universidad Nacional del Centro) y Prof. Susana Bianchi (Universidad Nacional del Centro-Directora de la Tesis)
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Fecha de defensa:</b> 13 de diciembre de 2002.
//         </span>
//       </p>
//       <p className="text-[#134e5e] text-justify leading-relaxed mt-2">
//         La tesis aborda el estudio de un grupo de intelectuales, paradigmáticos en la conformación de un campo de pensamiento autoritario de derechas en la Argentina de principios del siglo XX, recurriendo al uso de instrumentos biográficos de manera contextuada. El análisis hace hincapié en los matices de ese pensamiento y en su evolución histórica, proponiendo una relectura de los vínculos que se establecieron con el liberalismo existente en la Argentina y poniendo en cuestión el supuesto carácter determinante del nacionalismo en la definición programática de esa corriente heterogénea y multiforme.<br/>
//         Buscando aproximarse a la experiencia autoritaria la autora apunta a la incapacidad de estos escritores para aprehender el sentido de las transformaciones que se estaban produciendo y que afectaban a los más diversos niveles de la vida pública, pero también de la vida privada. En esa búsqueda analiza otras dimensiones —escasamente trabajadas en la historiografía— tales como la perspectiva de género, los aspectos estéticos ideológicos, la moral y las costumbres consideradas importantes al momento de definir una identidad autoritaria, elitista y disconforme.
//       </p>
//     </div>
//   </div>
//    ),
//   2004: (
//   <div className="space-y-6">
//     {/* Tesis 1 */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2004</span>
//       <p>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> La utopía de Prometeo. Cultura antifascista e identidad comunista en la Argentina: entre París, Buenos Aires y Tandil, 1935-1976
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Tesista:</b> Ricardo Pasolini
//         </span>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Jurado:</b> Dr. César Tcach (UNC), Dr. Hernán Otero (UNCPBA), Dr. Eduardo Hourcade (UNR) y Dr. Fernando J. Devoto (UBA - Director de Tesis)
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Fecha de defensa:</b> 27 de febrero de 2004
//         </span>
//         <span className="block text-[#555] text-justify leading-relaxed mt-2">
//           La tesis aborda el problema de la constitución de un clima de opinión antifascista en gran parte de la intelectualidad argentina de los años treinta y el peso que este estado de sensibilidad ideológica ocupó en la conformación de la identidad política del comunismo argentino, al menos en sus sectores intelectuales. La hipótesis de partida es que a mediados de la década de 1930, mediante un compuesto de ideas que articuló novedad europea con tradición liberal local y marxismo, la experiencia de la cultura antifascista generó un clima de opinión que se convirtió en una potente y perdurable mirada sobre el proceso histórico y político argentino. Fuertemente impactada por los gobiernos de Uriburu y Justo, esta &quot;sensibilidad antifascista&quot; articuló un corpus de ideas-fuerza que impuso límites a la variabilidad de las interpretaciones de la experiencia política argentina, la más visible sin duda es la percepción dominante del fenómeno peronista como una variante del nazifascismo. Pero también, durante la década de 1930, el tópico de la defensa del sistema republicano, de la política inmigratoria no restrictiva y de la exaltación de la U.R.S.S. como modelo de desarrollo social. Por otro lado, la cultura antifascista fue también una red de relaciones sociales y una red institucional que se organizó a partir de un tejido de centros culturales, ateneos y bibliotecas, una compleja sociabilidad mediante la cual se vehiculizaron los mensajes que contenía su práctica ideológica-cultural. Como una década atrás lo había sido la adhesión de los escritores de Boedo a la Revolución Rusa como tipo ideal de emancipación social del artista, el antifascismo de los años treinta fue el tópico a través del cual no pocos aspirantes a intelectuales, muchos de ellos del interior del país, hicieron su ingreso al mundo de la vida cultural, constituyendo así una densa red de relaciones que pervivió al menos hasta el quiebre, en 1957, de uno de los polos de la alianza antifascista original: la Unión Cívica Radical. En términos metodológicos, la tesis intenta desarrollar una perspectiva comparativa en la que se observan los importantes vínculos establecidos entre la cultura antifascista parisina, y una reducción paulatina de escala que va de sus pares porteños de la Asociación de Intelectuales, Artistas, Periodistas y Escritores (AIAPE, 1935-1943) al itinerario de centros culturales provincianos y recorridos biográficos que ilustran el tránsito de la adhesión del antifascismo al comunismo.
//         </span>
//       </p>
//     </div>
//     {/* Tesis 2 */}
//     <div>
//       <p>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> Comercio y crédito en La Pampa a inicios del siglo XX. Un estudio sobre el papel económico de los almacenes de ramos generales.
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Tesista:</b> Andrea Lluch
//         </span>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Jurado:</b> Dr. Jorge Gelman (UBA), Dra. Noemí Girbal-Blacha (UNLP - UNQ), Dr. Osvaldo Barsky y Dr. Eduardo Miguez (UNCPBA - Director de Tesis)
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Fecha de defensa:</b> 8 de julio de 2004
//         </span>
//         <span className="block text-[#555] text-justify leading-relaxed mt-2">
//           La tesis analizó el funcionamiento de las redes de comercialización y financiación agraria, localizando la atención en el rol económico de los almacenes de ramos generales. El área de estudio se corresponde con la franja centro-este del Territorio Nacional de La Pampa. El período abarcado cubre desde finales del siglo XIX hasta los años treinta del siglo XX. En términos generales, la propuesta fue repensar problemas clásicos de la historia rural y económica argentina a partir de los aportes de distintas teorías, así como integrar algunas de las discusiones de dos campos de escasa trayectoria dentro de los estudios locales, como son los de: family firms y retailing history. Asimismo la investigación se apoya en el renovado interés sobre los intermediarios y las funciones de intermediación en la economía. La tesis fue organizada en dos partes. La primera -cuatro capítulos- estuvo dedicada al mundo de la intermediación comercial y de los comerciantes rurales, en particular. La segunda parte -cinco capítulos- se concentró en el rol de los comerciantes como intermediarios financieros y agentes acopiadores y, en última instancia, sobre las características del mercado de crédito en la región.
//         </span>
//       </p>
//     </div>
//     {/* Tesis 3 */}
//     <div>
//       <p>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> La experiencia inmigratoria italiana de la posguerra en la ciudad de Mar del Plata, 1947-1960
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Tesista:</b> Bettina Favero
//         </span>
//         <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Jurado:</b> Dr. José Luis Moreno (UNLu), Dr. Alejandro Fernández (UNLu), Dr. Marcelino Irían (UNCPBA) y Dr. Hernán Otero (UNCPBA - Director de Tesis)
//         </span>
//         <span className="block text-[#134e5e]">
//           <b className="text-[#f9623e]">Fecha de defensa:</b> 29 de noviembre de 2004
//         </span>
//         <span className="block text-[#555] text-justify leading-relaxed mt-2">
//           La tesis se concentra en el estudio del proceso de inserción de los inmigrantes italianos en la sociedad marplatense de la posguerra a través del análisis de los mecanismos migratorios y de asentamiento, la inserción laboral y los patrones matrimoniales y residenciales. Se realiza un estudio microanalítico de las redes migratorias establecidas entre Mar del Plata y tres zonas delimitadas de Italia: Acireale (Sicilia), Vedelago (Veneto) y Duronia (Molise). Si bien este proceso inmigratorio siguió los parámetros establecidos a nivel nacional, la inserción de los inmigrantes en la ciudad tuvo vida propia. Por un lado, se comprueba la conformación de dos realidades espaciales que poseen las características lógicas de un enclave étnico. Por otro lado, el peso de las redes de relación favoreció la inserción de estos inmigrantes en una serie de mecanismos informales que colaboraron en la obtención del primer trabajo e influyó en la conformación de uniones matrimoniales endogámicas e intergeneracionales. Asimismo, se profundiza en el surgimiento y en la consolidación de las asociaciones regionales italianas nacidas después de 1950, en las que los protagonistas eran los inmigrantes llegados en la segunda posguerra. Se trata de un nuevo asociacionismo basado en el campanilismo y el regionalismo, hecho que se manifiesta a través de la celebración de las fiestas patronales y regionales, el redescubrimiento de los dialectos y de las costumbres y la manifestación de bailes y de cantos propios.
//         </span>
//       </p>
//     </div>
//   </div>
// ),

// 2005: (
//   <div className="space-y-8">
//     {/* Tesis 1 */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2005</span>
//       <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> Distinción y Legitimidad. Esplendor y ocaso de la elite social en la Buenos Aires de la Belle Époque.
//         </span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Leandro Losada</span>
//       <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Dr. Fernando Devoto (UBA), Dr. Ezequiel Gallo (UTDT), Dr. Eduardo Zimmermann (U. San Andres) y Dr. Eduardo Miguez (UNCPBA- Director de Tesis)</span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 24 de febrero de 2005.</span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         El problema central que estructura la tesis es cómo la elite social de la ciudad de Buenos Aires construyó su distinción entre 1880 y 1930, y qué grado de éxito tuvo en ese cometido. La relevancia del problema radica en las características de la sociedad porteña —igualitaria, republicana, móvil—, de la propia elite —sin blasones nobiliarios ni un origen social que le aseguraran efectivos capitales simbólicos para resguardar su lugar de preeminencia—, y en la estructural transformación de la sociedad que se produce en este periodo al compás de la modernización, que aparejó una fenomenal recomposición social y una sensible redefinición de las jerarquías bajo el impacto de la movilidad social y de la inmigración masiva. En este sentido, el trabajo pretende contribuir al desarrollo de una historia social de las elites porteñas del periodo, un curioso vacío historiográfico a pesar de lo mucho que se ha avanzado en campos como la historia económica, política o de las ideas.
//       </span>
//     </div>
//     {/* Tesis 2 */} 
//     <div>
//       <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> Valentín Saygüeque y la &quot;Gobernación Indígena de las Manzanas&quot;. Poder y etnicidad en la Patagonia noroccidental (1860-1881)
//       </span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Julio Esteban Vezub</span>
//       <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Dra. Susana Bandieri (UNCo/Conicet), Dr. Guillaume Boccara (EHESS), Prof. Daniel Villar (UNS) y Prof. Raúl Mandrini (UNCPBA - Director de Tesis)</span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 29 de marzo de 2005.</span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         A partir de la experiencia de Valentín Saygüeque narramos una historia política del País de las Manzanas —situado en el sur de la actual provincia de Neuquén— durante las décadas previas a la ocupación del territorio por parte de la Nación Argentina. Se analiza la emergencia de la jefatura de Saygüeque, y qué clase de configuración social y política representó la &quot;Gobernación Indígena de las Manzanas&quot;, a los fines de dilucidar el papel del parentesco y la etnicidad en los procesos de cristalización de poder acontecidos en la Patagonia noroccidental durante la segunda mitad del siglo XIX. La tesis da cuenta de las relaciones entre los jefes de distintos agrupamientos, diferentes linajes, y las autoridades argentinas y chilenas en el norte de la Patagonia, con el objeto de discernir las condiciones históricas de producción de la identidad y la territorialidad manzanera. Se practica un enfoque morfológico, con énfasis en el microanálisis, para la interpretación de fuentes documentales de matriz indígena o mestiza, como la &quot;Secretaría de Valentín Saygüeque&quot;, un corpus que reúne la correspondencia emitida y recibida por los lenguaraces que asistieron al Cacique entre 1860 y 1881. Su cruzamiento con las crónicas de viajeros, partes oficiales, ensayos y producciones textuales etnográficas permite ampliar la base empírica y reconstruir las redes sociales económicas, políticas y culturales entre comunidades e individuos situados a ambos lados de la cordillera de los Andes. Desde la historia indígena intervenimos en los debates sobre la etnicidad, e intentamos contribuir a la síntesis crítica de los planteamientos de la etnografía del siglo XX en torno al problema de la identidad étnica en Pampa y Patagonia. La pregunta por la condición manzanera —si constituyó un grupo étnico o fue el producto de un forzamiento político de la identidad— motoriza este caso específico, interesado en terciar en una discusión no resuelta de los estudios del área.
//       </span>
//     </div>
//     {/* Tesis 3 */} El Peronismo después del peronismo. Entre la política de la resistencia y la resistencia de la política, 1955-1960
//     <div>
//       <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> El Peronismo después del peronismo. Entre la política de la resistencia y la resistencia de la política, 1955-1960
//       </span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Julio Cesar Melon Pirro</span>
//       <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Prof. Susana Bianchi (UNCPBA), Dr. Tulio Halperin Donghi (Universidad de Berkeley), Dr. Juan Carlos Torre (UTDT) y Dr. Eduardo Miguez (UNCPBA-Director de Tesis)</span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 26 de septiembre de 2005.</span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis aborda el problema de la reconstitución del peronismo durante los años que siguieron a su derrocamiento. La &quot;Revolución libertadora&quot; confrontó al conjunto de los peronistas con una realidad que era la antítesis de la víspera, circunstancia que, a su vez, se modificó parcialmente durante el primer tiempo de Frondizi. Los primeros años de la proscripción implicaron el enfrentamiento con un Estado hostil, empeñado en erosionar la identidad política peronista y decidido a reprimir cualquier alternativa que connotara una vuelta al &quot;pasado&quot;. En la experiencia de muchos trabajadores y de los peronistas en general, esto permaneció como la época de la &quot;revancha&quot;, a la que con el tiempo se superpuso el recuerdo idealizado de la &quot;resistencia&quot;. Pero en esta época emergieron cuestiones concretas que se constituirán en una herencia no menos indeleble. Una nueva dirigencia sindical, las actividades de la resistencia y el surgimiento del neoperonismo temprano, son algunos de los renglones de consideración privilegiada en este ensayo de reconstrucción histórica. El desplazamiento hacia &quot;la política&quot; (en un sentido, con un alcance y con unas consecuencias que se explican, en primera instancia, como política electoral) torna imprescindible asimismo considerar el rol de Perón y el de otros actores que presuponían, a partir de la geografía, el definitivo ocaso de su estrella. La investigación sobre las distintas esferas de la actividad de los peronistas —el sindicalismo, la violencia, la política propiamente dicha entre ellas— culminan en lo que en definitiva podría verse, sino como una verdadera estructuración, al menos como la primera posibilidad de reconocimiento de un perfil del peronismo fuera del poder, resultado a la vez de sus propias peculiaridades históricas y de los primeros fracasos de la &quot;desperonización&quot;. A lo largo de dos grandes secciones y de 12 capítulos de tesis nos va acercando ese horizonte móvil a partir de la elaboración de un relato que se postula como la fórmula más eficaz para contener y dar cuenta del funcionamiento y dinámica de los intereses y los factores de poder operantes en el movimiento entonces proscripto.
//       </span>
//     </div>
//     {/* Tesis 4 */} 
//     <div>
//       <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> Persistencia y transformaciones de una sociedad rural. Córdoba entre fines de la colonia y principios de la república.
//       </span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Sonia Tell</span>
//       <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Dra. Sara Mata (UNS/Conicet), Prof. Raúl Fradkin (UBA/UNLu), Dr. Jorge Gelman (UBA/Conicet) y Dra. Silvia Palomeque (UNC - Directora de Tesis)</span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 9 de diciembre de 2005.</span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         En esta investigación se abordan las transformaciones en las condiciones de vida de la población rural y, más específicamente, del sector conformado por los pequeños productores asentados en la campaña, en la centuria que va de 1750 a 1850. Esa pregunta central se despliega en varias líneas de análisis, la primera de ellas se orienta a reconstruir las características de las pequeñas unidades de producción rurales —que pueden calificarse como campesinas—, las prácticas que les permitían reproducirse económica y socialmente y construirse en unidades domésticas económicamente viables, así como la importancia de esas unidades dentro de la estructura agraria de la jurisdicción. La segunda consiste en analizar los constreñimientos y oportunidades que presentaron el sector mercantil y el estado de este sector mayoritario de la población rural a lo largo de un siglo de intensos cambios económicos y políticos. La tercera, explora las adaptaciones, resistencias y conflictos a los que dio lugar ese complejo proceso. A través de estas líneas se busca analizar las condiciones en que sobrevivieron las economías campesinas en ese largo periodo y desde esa perspectiva reflexionar sobre la relación de los campesinos con el estado y el mercado.
//       </span>
//     </div>
//     {/* Tesis 5 */} 
//     <div>
//       <span className="block text-[#15394b]">
//           <b className="text-[#f9623e]">Título:</b> Actividades económicas y organización social en espacios de frontera. Bariloche 1880-1935: de pueblo de frontera a centro turístico internacional
//       </span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Laura Marcela Méndez</span>
//       <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Dr. Andrés Regalsky (UNTF/Conicet), Dra. Marta Bonaudo (UNR/Conicet), Dra. Andrea Reguera (UNCPBA/Conicet) y Dra. Susana Bandieri (UNCo/Conicet - Directora de Tesis)</span>
//       <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 2 de diciembre de 2005.</span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         Esta tesis doctoral tiene como propósito central analizar las relaciones económicas y las prácticas sociales en la zona andina rionegrina y su núcleo urbano más importante, San Carlos de Bariloche, entre 1880 y 1935, señalando particularidades y complementariedades del oeste rionegrino con otros espacios sociales, como los del territorio neuquino y el sur chileno, concibiéndolos como partes de un complejo sistema de acumulación, producción e intercambio. A partir de un extenso trabajo en archivos nacionales y chilenos, se intenta el dar cuenta de los procesos sociales, políticos y económicos que confluyeron para transformar a un pequeño grupo de población blanca, que se nucleó a partir del Fuerte Chacabuco hacia 1883 en las márgenes del río Limay, en el principal centro urbano de la zona andina rionegrina, que adoptó al turismo como actividad económica fundamental. Especial atención se da a la dinámica de los circuitos mercantiles y al proceso de formación y liquidación de la Compañía Comercial y Ganadera Chile Argentina, de capitales germano-chilenos, y sus sucesoras en la región —las empresas de Primo Capraro y Carlos Roth— en cuanto a empresas vitales para comprender la transformación de la región del Gran Lago, de espacio de frontera a centro turístico internacional.
//       </span>
//     </div>
//   </div>
// ),

// 2006: (
//   <div>
//     <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2006</span>
//     <span className="block text-[#15394b]">
//       <b className="text-[#f9623e]">Título:</b> &quot;Misioneros Jesuitas y Sociedades Indígenas en las Pampas a mediados del siglo XVIII. La presencia misionera jesuita al sur de la gobernación de Buenos Aires, entre 1740-1753. Un análisis de las relaciones entre las sociedades indígenas y la sociedad colonial de una región del extremo sur del Imperio Borbónico.&quot;
//     </span>
//     <span className="block text-[#134e5e]">
//       <b className="text-[#f9623e]">Tesista:</b> Daniel Marcelo Fabián Arias.
//     </span>
//     <span className="block text-[#15394b]">
//       <b className="text-[#f9623e]">Jurado:</b> Dr. Guillaume Boccara (EHESS - CERMA), Dra. Silvia Mabel Ratto (UNQ - CONICET), Dr. Daniel Santamaría (CEIC - CONICET) y Prof. Rodolfo Casamiquela (Director de Tesis).
//     </span>
//     <span className="block text-[#134e5e]">
//       <b className="text-[#f9623e]">Fecha de la defensa:</b> 10 de noviembre de 2006.
//     </span>
//     <span className="block text-[#555] text-justify leading-relaxed mt-2">
//       El problema central de la tesis es el abordaje de las relaciones establecidas entre los Misioneros de la Compañía de Jesús y las sociedades indígenas que aceptaron reducirse, en la primera mitad del siglo XVIII, en el espacio al sur del Río Salado cercano a la actual Mar del Plata. El análisis de la interacción entre sacerdotes, indígenas, &quot;agregados&quot; y autoridades militares en las Misiones muestra sociedades que se encontraban lejos de ser receptores pasivos de las Doctrinas Misionales. La organización de la sociedad indígena, y sus relaciones con el &quot;mundo hispano-colonial&quot;, es analizada mediante una exégesis de la estructura económico-política nativa. Dicho análisis es posible mediante la consulta exhaustiva de fuentes documentales editas e inéditas a los efectos de poder contar con un amplio marco comparativo de las acciones misionales y de las respuestas indígenas. Esta compulsa documental, y su tratamiento, junto a un profundo estado de la cuestión sobre esta problemática muestra los altos grados de integración de las sociedades nativas con otras semejantes así como con el &quot;mundo hispano-criollo&quot;. Dentro de esa misma integración es dónde debería de rastrearse la inviabilidad de las acciones misionales y los proyectos políticos indígenas.
//     </span>
//   </div>
// ),

// 2007: (
//   <div className="space-y-8">
//     {/* Primer Tesis */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2007</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Disciplina y conflicto en la industria durante el Proceso de Reorganización Nacional (1976-1983).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Daniel Oscar Dicosimo.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Juan Suriano (PEHESA-CONICET), Dra. Mónica Gordillo (UNC-CONICET), Dr. Arturo Fernández (UNGS-CONICET), Lic. Héctor Palomino (UBA - Director de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de la defensa:</b> 20 de julio de 2007.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         El problema que aborda esta tesis es el carácter y las formas de la resistencia obrera y sindical al disciplinamiento productivo, que impuso el llamado &quot;Proceso de Reorganización Nacional&quot; en la industria argentina. Aquí se revisa la polémica tesis sobre la &quot;pasividad obrera&quot;, vigente en la década de 1980, aunque ahora desde la perspectiva del lugar de trabajo que constituye un enfoque relevante en el campo de la historia de los trabajadores. Los obreros industriales tendieron a defender sus intereses económicos condicionando la aplicación de las directivas patronales a través de diferentes formas de acción, que resultan de adaptaciones a las características específicas de los distintos sistemas disciplinarios industriales; y los dirigentes gremiales seccionales intervinieron en la resistencia como &quot;interlocutores válidos&quot; de los empresarios, en una situación de vulnerabilidad ante éstos y el Estado y, aunque recuperaron parte de su representación legal e histórica, debilitaron y quebraron la oposición. Se utiliza un análisis comparativo de dos grandes empresas de las ramas metalúrgicas y del cemento situadas en el sudeste de la provincia de Buenos Aires, y fuentes escritas y orales de archivos sindicales, empresarios, judiciales, etc.
//       </span>
//     </div>
//     {/* Segunda Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Crimen y justicia en la frontera (Buenos Aires, 1852-1880).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Melina Yangilevich.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Darío Barriera (UNR/Conicet), Prof. Raúl Fradkin (UBA/UNLu), Dr. Marcelino Iriani (UNCPBA/Conicet) y Dr. Eduardo Míguez (UNCPBA - Director de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de la defensa:</b> 31 de agosto de 2007.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis aborda el problema de la administración de justicia criminal -sus normas así como sus usos- y un conjunto de prácticas criminales en el espacio al sur del río Salado. El propósito de esta indagación fue constituir un aporte a la comprensión del proceso de consolidación estatal y en particular, la capacidad de penetración en el espacio de la campaña bonaerense así como los mecanismos utilizados. Tal dinámica estuvo estrechamente asociada a la implantación de un determinado orden social en dicho espacio. Esta temática se desplegó en diferentes líneas de análisis. Una de ellas consistió en la indagación de la estructura de la administración de justicia penal, de las personas que desempeñaron diferentes funciones y los conflictos que se presentaron entre éstas. Otra se orientó al análisis de las normativas empleadas en los procesos penales para sostener diversos argumentos por parte de los fiscales, defensores y fundamentalmente, los jueces letrados. Dichas normas remitían en numerosos casos a la aplicada en la etapa colonial y elaborada en el reino de Castilla durante el periodo medieval. Una tercera se abocó al análisis cuantitativo de los expedientes penales y de quienes fueron acusados de diversos delitos. Por último, se centró el análisis en los casos de homicidios y de apropiaciones ilegales de animales y sus derivados. Ello se debió a que constituyeron ataques contra dos de los bienes más preciados en el contexto económico del periodo: la mano de obra y el ganado. A través de las preguntas que estructuraron el trabajo se buscó analizar el proceso de conformación de un determinado orden social en la provincia de Buenos Aires. Dicho proceso se reveló particularmente conflictivo debido a la persistencia de diversas prácticas en la población que no se mostró dócil frente a las demandas del estado y de un contexto económico en creciente cambio.
//       </span>
//     </div>
//     {/* Tercera Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;El desarrollo, la erradicación y la emergencia del paludismo y su vinculación con la consolidación de las políticas públicas de sanidad rural en la Argentina, entre fines del siglo XIX y mediados del XX.&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Adriana Álvarez.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Diego Armus (Swarthmore Collage, EEUU), Dra. Silvia Di Lisia (UNLPam); Dr. Hernán Otero (IEHS/CONICET), y Dra. Susana Belmartino (UNR - Directora de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de la defensa:</b> 5 de setiembre de 2007.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis analiza el desarrollo histórico del paludismo en Argentina, tratando de visualizar los problemas que se han planteado en la lucha contra esa enfermedad, vinculándola con los procesos de innovación científico-social y con la consolidación de un sistema sanitario público orientado al mundo rural. A tal efecto, se aborda el estudio de las políticas sanitarias describiendo el desarrollo institucional de los organismos estatales, la organización de campañas de control y erradicación desarrolladas por instituciones nacionales e internacionales, el uso de vacunas, sueros y técnicas de desinfección; como también la práctica médica y las respuestas sociales, lo que implica analizar las actitudes de las autoridades regionales. En términos argumentales la tesis transita dos niveles: el de la enfermedad y el de la historia de la salud pública, ambos fuertemente imbrincados. Este enfoque permite incursionar en dimensiones escasamente exploradas por la historiografía local, tales como las interacciones entre los procesos sanitarios y los contextos sociales, culturales, económicos y políticos; la continuidad y el cambio en las condiciones de vida de las poblaciones urbanas y rurales; las relaciones entre el Estado y los diferentes grupos sociales y étnicos; las percepciones populares respecto de la ciencia y la naturaleza; y; la construcción social de la enfermedad y el conocimiento biomédico.
//       </span>
//     </div>
//   </div>
// ),

// 2008: (
//   <div className="space-y-8">
//     {/* Primera Tesis */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2008</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Estado y propiedad de la tierra. Instituciones, derechos, leyes y actores sociales. El caso de los partidos de Arenales y Ayacucho (Provincia de Buenos Aires, Argentina), 1824-1904.&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Valeria Araceli D&apos;Agostino.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. María Elena Infesta (CONICET/UNLP), Dra. Marta Valencia (CONICET/UNLP), Dra. Blanca Zeberio (CONICET/UNCPBA), Dra. Andrea Reguera (CONICET/UNCPBA, Directora de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 28 de marzo de 2008.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         En esta tesis se aborda el contexto de expansión de la frontera bonaerense a lo largo del siglo XIX, poniendo la atención en el proceso de ocupación del denominado &quot;Nuevo Sur&quot;. Para ello se enfoca la problemática desde un estudio de caso: el del poblamiento y ocupación de las tierras de los partidos de Arenales y Ayacucho, entre 1824 y 1904. El trabajo se estructura en función de dos grandes ejes. Por un lado, se interna en la historia de la apropiación legal de estos territorios, a partir del análisis de la aplicación de la legislación sobre tierras en ese espacio de frontera. El foco se pone, tanto en el accionar del Estado (haciendo especial hincapié en las tareas de medición y ordenamiento de la tenencia, emprendidas en el siglo XIX), como en las estrategias de los particulares. Por otro lado, se aborda la historia de la ocupación efectiva y puesta en producción de estos territorios, y en este sentido se avanza en la caracterización de las formas de acceso y uso de la tierra.
//       </span>
//     </div>
//     {/* Segunda Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Estado y trabajo. Las políticas públicas y los trabajadores rurales pampeanos en los inicios del Estado &apos;interventor&apos;, 1925-1950.&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Luciano O. Barandiarán.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Mara Bonaudo (CONICET/UNR), Dra. Mónica Blanco (CONICET/UNCPBA), Dr. Enrique Mases (UNCOMA), Prof. Nicolás Iñigo Carrera (CONICET/UNCPBA, Co-director de la tesis, Directora: Blanca Zeberio CONICET/UNCPBA).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 23 de mayo de 2008.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         El objetivo de la tesis fue explicar la intervención estatal sobre el mercado de trabajo rural bonaerense entre 1925 y 1950. Para comprender la implementación de las políticas estatales en el campo, se analizaron los discursos, concepciones y actitudes del Estado hacia los trabajadores rurales, las características de sus intervenciones y sus antecedentes, tomando en consideración el caso de la provincia de Buenos Aires. En la primera parte de la tesis se describen las características generales del mercado de trabajo rural, y se abordaron algunas formas de intervención estatal que impactaban sobre la oferta de trabajo. En la segunda parte se tratan las ideas del Partido Socialista destinadas a mejorar la calidad de vida y de trabajo de los obreros rurales asalariados. Asimismo, se intenta dar respuestas al escaso impacto del socialismo en la sociedad rural, a pesar del importante papel que esa sociedad tenía en el discurso partidario. En la tercera parte, se analizan las políticas públicas para los trabajadores rurales asalariados en la provincia de Buenos Aires en la década de 1930, abordándose las políticas implementadas desde esa provincia. Algunas de estas iniciativas volvieron a ser utilizadas por el Estado nacional en la década de 1940, como se analiza en la última parte de la tesis, que estudia la intervención del Estado nacional en el mismo ámbito. Allí se analizan las continuidades y las rupturas entre las concreciones peronistas y los proyectos y las realizaciones anteriores, tanto partidarias como estatales y corporativas. En síntesis, puede decirse que esos trabajadores adquirieron notoriedad en la Argentina peronista, al obtener identidad política un sector que siempre había estado presente en el plano económico y ausente en lo social.
//       </span>
//     </div>
//     {/* Tercera Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;De cómo se construye la autoridad. Representaciones, prácticas y discursos en escuelas primarias de Tandil (1946-1983).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Paola Gallo.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Prof. Susana Bianchi (UNQ), Dra. Sandra Carli (CONICET/UBA), Dra. Silvina Gvirtz (CONICET/USA), Dr. Daniel Míguez (CONICET/UNCPBA/UNSAM, Director de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de la defensa:</b> 23 de mayo de 2008.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis aborda el problema de la autoridad en la escuela primaria, tanto en el plano de las políticas educativas como en el del análisis de las dinámicas propias de dos comunidades escolares de la ciudad de Tandil. El trabajo revisa algunas nociones instaladas en el ámbito de la Historia de la Educación respecto de las políticas educativas y sus efectos sobre las prácticas escolares. Mediante un trabajo de reconstrucción de las relaciones de autoridad (entre adultos y niños en el seno escolar, entre padres y maestros, etc.), y de sus cambios a lo largo del período, la tesis busca responder a una serie de preguntas tales como la manera en que se construyen las relaciones de autoridad en la escuela; cuales fueron sus fundamentos; cuales fueron sus modalidades de ejercicio; cómo y porque cambiaron (y cambian) las relaciones de autoridad en la escuela; en que momento puede señalarse una ruptura en el sistema de relaciones de autoridad que ordenaba tradicionalmente la escuela y la emergencia de nuevos vínculos de autoridad en su seno.
//       </span>
//     </div>
//   </div>
// ),

// 2009: (
//   <div className="space-y-8">
//     {/* Primera Tesis */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2009</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Un vecindario federal. La construcción del orden rosista en la frontera sur de Buenos Aires. Un estudio de caso (Azul y Tapalqué).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> María Sol Lanteri.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Ana Frega (Universidad de la República, Uruguay), Dr. Eduardo Míguez (UNCPBA/UNMdP), Dr. Gustavo Paz (CONICET/UNTREF/UBA), Dr. Jorge Gelman (CONICET/UBA, Director de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 19 de marzo de 2009.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis aborda las políticas y estrategias implementadas por el gobierno de Juan Manuel de Rosas para construir su dominio en la frontera sur de Buenos Aires -especialmente en la región de Azul y Tapalqué- en interacción con la sociedad rural. De esta forma, en la primera parte del trabajo se estudian las características del proceso de poblamiento, producción y relaciones interétnicas, con especial atención a los patrones de acceso y tenencia de la tierra, marcando la singularidad de la colonización oficial regional frente al resto de la campaña bonaerense. En la segunda parte del estudio se analizan las medidas y recursos de corte institucional, ritual y simbólico implicados en la conformación del &quot;vecindario federal&quot;, así como la respuesta concreta de los diferentes sectores socio-étnicos, que legitimaron a la federación rosista a través de su participación en el sistema de representación electoral, el servicio armado, fiestas y rituales, contribuciones materiales a la causa, etc. La tesis se aleja de aquellas tradicionales concepciones historiográficas que planteaban al poder del caudillo erigido en un sistema clientelar basado en el uso exclusivo de la coerción, el monopolio de los recursos o la preeminencia de los grandes propietarios rurales en su sustento, focalizando en la relevancia y el accionar de sectores &quot;subalternos&quot; como indígenas y pequeños-medianos productores, y en los intercambios y contraprestaciones entablados con el régimen.
//       </span>
//     </div>
//     {/* Segunda Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Nacionalismo, militancia y violencia política. Los tacuaras en la Argentina, 1955-1969.&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Juan Manuel Padrón.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Samuel Amaral (UNTREF), Dr. Daniel Lvovich (CONICET-UNGS), Dr. Julio Melón Pirro (UNCPBA/UNMdP), Dra. María Matilde Ollier (UNSAM, Directora de tesis; Dra. Mónica Blanco, CONICET/UNCPBA, Co-Directora).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 29 de mayo de 2009.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         En esta tesis se ha abordado el análisis de la conformación de la identidad política entre los jóvenes militantes del Movimiento Nacionalista Tacuara durante la larga década de los sesentas (1955-1969). Se ha mostrado cómo, dentro de esta agrupación, se articuló una identidad política, que tenía en la militancia política y en la apelación a la violencia dos elementos centrales de su construcción. En su conjunto, esta investigación demostró el proceso de construcción de la identidad política Tacuara como un cruce de tradiciones ideológicas y políticas disímiles, que se articularon y confrontaron en el plano político, privado y público de los militantes, y que configuraron esa identidad analizada dentro del heterogéneo universo del nacionalismo de derechas.
//       </span>
//     </div>
//     {/* Tercera Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;La construcción de la &apos;familia ideal&apos;. Nociones y representaciones en la Argentina del siglo XIX. La construction de la &apos;famille idéale&apos;. Notions et représentations dans l&apos;Argentine du XIXe siècle&quot; (Tesis en co-tutelle École des Hautes Études en Sciences Sociales, París; Doctorado en Historia UNCPBA, Tandil).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> María Selva Senor.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Michel Bertrand (Université de Toulouse II Le Mirail), Dra. Irène Théry (EHESS/CNRS), Dr. André Burguière (EHESS, Director de Tesis), Dr. Eduardo Míguez (UNCPBA, Director de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 9 de septiembre de 2009.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxe mt-2">
//         En la década de 1880 aparecen en Argentina obras literarias que tratan acerca de viejos temas pero de una forma renovada. El matrimonio y la educación se ubican en el centro de la escena, pero a partir de entonces, son los escritores pertenecientes a las clases acomodadas, y que participan generalmente en la vida política del país, quienes narran la historia. Esta literatura aparece en momentos en los que termina el proceso de modernización en el país y cuando el capitalismo triunfa en toda América Latina. Los antiguos temas se transforman en objeto de nuevas taxonomías así como de nuevas fábulas destinadas a re-inventar la identidad nacional. La primera obra testimonio de ese cambio es Pot Pourri (1881). Cambaceres, diputado durante la década de 1870, elabora a partir de una historia de matrimonio y adulterio una teoría de la representación para sus contemporáneos de la &quot;high society&quot; así como un estilo aristocrático que permite diferenciarse del resto de la sociedad. En ese contexto surge entonces una nueva idea de respetabilidad en relación a un nuevo modelo de familia, la familia &quot;bien constituida&quot;, burguesa a la manera europea del siglo XIX, que se articula alrededor de ciertos valores como el culto al trabajo, la honestidad y el honor. En esta tesis se analiza el proceso de construcción de ese modelo, el cuál no estuvo exento de contradicciones si se considera que el mismo fue atravesado por las diferentes revoluciones intelectuales y políticas que llegan al Río de la Plata, como las ideas de la ilustración, el liberalismo, el romanticismo y el derecho positivo, las cuales coexisten, compiten y se complementan con las concepciones tradicionales de origen cristiano como, por ejemplo, la escolástica y el derecho natural. Sin embargo, para fines de siglo la región cuenta con un modelo de familia burguesa a la europea. La ironía es que precisamente en el momento en el que cristaliza el modelo soñado, el mismo proceso de modernización provocó una redefinición de la estructura social que se tradujo en cambios en ese mismo modelo.
//       </span>
//     </div>
//     {/* Cuarta Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;La Nación de los Abipones ¿Un experimento político exitoso?&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Carlos D. Paz.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Ignacio Telesca (CONICET), Dr. Daniel Villar (UNS), Dr. Pablo Wright (UBA-CONICET), Prof. Raúl Mandrini (IEHS-UNCPBA, Director de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 16 de octubre de 2009.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La investigación da cuenta de las formas de construcción, e implementación, de una narrativa histórica del sí-mismos por parte de un grupo familiar abipón. Narrativa que se extendió para el resto de los abipones que componían el entramado social que pudimos conocer a partir, y más allá, de la acción misional jesuítica llevada a cabo en las márgenes del río Paraná durante la segunda mitad del siglo XVIII. Ya luego de la Expulsión se aborda esta forma de relato histórico hasta los primeros años de la República. La reconstrucción de esta narrativa se realizó en base al análisis de documentación inédita de distintos archivos nacionales y provinciales, así como de algunos del exterior. Conocer la dinámica de los hechos, su interpretación y manipulación por parte de los indígenas, posibilitó dar cuenta de la política nativa y cómo la misma detentaba un lugar central en el marco de las relaciones que se establecían con los distintos dispositivos de poder coloniales.
//       </span>
//     </div>
//     {/* Quinta Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Itinerarios migratorios. Integración en el Neuquén aluvional (1960-1991)&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Joaquín Perren.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Roberto Benencia, Susana Torres, Guillermo Velázquez, Hernán Otero (Director de tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 30 de marzo de 2009.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         Los episodios migratorios han tenido una influencia muy importante en la historia patagónica en general y en la neuquina en particular. Para sostener este último punto, sólo deberíamos decir que cuatro de cada diez habitantes de la provincia, hacia 1991, habían nacido fuera de sus límites. Estas cifras son aun más elocuentes en el caso de su capital: según datos oficiales, para esa misma fecha, dos terceras partes de la población estaba registrada como migrante. La investigación que desarrollamos pretendió, por medio de la utilización de un amplio abanico de fuentes, reconstruir los comportamientos ocupacionales, residenciales, matrimoniales, demográficos y relacionales de esta subpoblación. Este objetivo nos obligó a considerar dos problemas que por largo tiempo estuvieron divorciados. Existen trabajos académicos que se concentraron en los aspectos demográficos a gran escala que determinaron los movimientos de población. Otros han enfocado su atención en la inserción de los recién llegados en el mercado laboral, en su disposición en el tejido urbano, en sus comportamientos matrimoniales o bien en el universo relacional desplegado por los migrantes. El supuesto que atravesó nuestra investigación es que no se puede entender una sin la otra: una prolija reconstrucción del proceso de poblamiento a partir de grandes agregados serviría de poco sino es acompañada por un estudio que tenga a la familia como unidad económica e interaccional de base. De allí que el marco analítico seleccionado pueda denominarse macro-micro, por cuanto intentó visualizar cómo las tendencias generales modelaron una variada gama de comportamientos que, aunque diferentes, tuvieron como horizonte la integración a un escenario de complejidad creciente.
//       </span>
//     </div>
//     {/* Sexta Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Indígenas y paisanos en La Pampa: Subalternización, ciclos migratorios, integración urbana (1870-1976).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Claudia Salomon Tarquini.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Prof. Raúl Fradkin, Prof. Raúl Mandrini, Dr. Juan Carlos Radovich, Dr. Daniel Villar (Director de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 3 de abril de 2009.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         El objetivo de la tesis consistió en explicar qué características tuvo, en el caso del Territorio de la Pampa Central, la incorporación de los grupos nativos a la economía política capitalista con posterioridad a las campañas militares de 1878-1879 y de qué maneras continuaron sus vidas los indígenas invisibilizados. El enfoque no está centrado exclusivamente en las políticas ensayadas por actores tales como las instituciones estatales y eclesiásticas, sino que se analiza la propia agencia subalterna. A través del cruce de fuentes nominativas para la reconstrucción de redes familiares, registros de viajeros y sacerdotes, documentos oficiales, e informes de inspección de tierras, entre otros, se estudian los procesos de su desarticulación, reinstalación en el Territorio y se siguen sus distintos itinerarios migratorios y los ciclos de integración urbana en la zona hasta 1976.
//       </span>
//     </div>
//     {/* Séptima Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Vivir en los márgenes. La construcción social de un espacio de relaciones complejas y actores ocultos. La meseta Chubut (1880-1930).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Liliana Pérez.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. María Elba Argeri, Dra. Dora Barrancos, Dra. Graciela Blanco, Dra. Mónica Blanco (Directora de tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> ……
//       </span>
//     </div>
//   </div>
// ),

// 2010: (
//   <div className="space-y-8">
//     {/* Primera Tesis */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2010</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Políticas de población en Argentina. Ideas, legislación y prácticas administrativas (1914-1955).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Carolina Alejandra Biernat.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Dora Barrancos, Dr. Eduardo Míguez, Dr. Andrés Reggiani, Dr. Hernán Otero (Director de tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 7 de mayo de 2010.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         El objetivo de la tesis es analizar el proceso de construcción de las políticas de población en la Argentina durante la primera mitad del siglo XX. Para ello parte de un concepto polisémico de lo político a fin de comprender el proceso desde los debates que le dieron origen, la formulación y reglamentación de sus enunciados legales y la puesta en práctica de sus disposiciones a través de la creación de estructuras administrativas. El primer eje considerado es el que se desarrolla en el campo de las ideas poblacionistas que asocian, en diálogo con reflexiones internacionales, el incremento demográfico con la modernización. El crecimiento de la población es pensado en términos cuantitativos, gracias al aporte inmigratorio y la multiplicación del capital humano endógeno, y cualitativos, configuraciones a las cuales debe atenerse con el fin de construir una comunidad nacional moderna, homogénea, sana y exenta de conflictos. El segundo eje es el diseño e implementación de las políticas ligadas a la reproducción del factor demográfico. Se analiza el proceso de construcción de tres tipos de políticas: la inmigratoria que, a partir de los años de entreguerras, abandona su perfil de &quot;puertas abiertas&quot; tornándose cada vez más restrictiva y selectiva; la de estímulo del crecimiento endógeno, centrada en medidas de protección a las madres, a sus hijos y, con la llegada del peronismo, a la familia; y la política de profilaxis y tratamiento centralizado de las dolencias venéreas, consideradas como una amenaza al acervo &quot;racial&quot;. El último eje es el de la organización de los aparatos administrativos encargados de llevar a la práctica la política poblacional. Mientras que en el caso de la política inmigratoria las instituciones son &quot;vaciadas&quot; durante los años treinta en virtud de los criterios restrictivos del flujo y reorganizadas durante el período peronista, una vez reabiertas las puertas a la inmigración; en el caso de las políticas de fomento del crecimiento endógeno de la población se crean nuevas instituciones asociadas al lugar protagónico que adquieren las reparticiones sanitarias. En síntesis, la tesis se propone avanzar en la comprensión de la construcción de la política de población en la Argentina intentando dar cuenta de aspectos más generales como los procesos de consolidación del estado intervencionista argentino y de las políticas sociales, los proyectos de modernización a través de la profundización del modelo de industrialización por sustitución de importaciones, las transformaciones demográficas y sociales y la fluctuación entre la adopción de criterios de inclusión y exclusión política y social, y sus justificaciones ideológicas.
//       </span>
//     </div>
//     {/* Segunda Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Vida pública y asuntos privados. La presencia de las mujeres en las comunidades del centro y sudeste bonaerense. Fines del siglo XIX y principios del XX.&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Yolanda de Paz Trueba.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. María Bjerg, Dra. Lila Caimari, Dr. Gustavo Paz, Dra. Lucía Lionetti (Directora de Tesis).
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 28 de mayo de 2010.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis estudia el lugar de las mujeres en el espacio público en pueblos de campaña de la región centro-sudeste de la provincia de Buenos Aires a fines del siglo XIX y principios del XX. Para ello, indaga la manera en que las mujeres consiguieron tener una presencia pública en apariencia contradictoria con los roles que los discursos dominantes consideraban que eran indicados para ellas, tanto en el ámbito privado como público, tratando de avanzar sobre la cuestión de la conformación de la ciudadanía y de las relaciones entre la sociedad civil y el Estado, e involucrando a quienes han sido consideradas como subalternas en esa sociedad de carácter patriarcal. El trabajo se propone también mostrar la visibilidad que adquirieron las mujeres y su capacidad de agencia en el espacio y período de estudio reparando, en tal sentido, en acciones que no ha sido suficientemente estudiadas por la historiografía. Las mujeres desarrollaron en sus comunidades papeles de central importancia para la instalación de un orden social, necesidad reactualizada en el marco conflictivo que se abría con el nuevo siglo. Partiendo del presupuesto que tanto las mujeres notables como las de los sectores populares contribuyeron a la construcción de un orden y a la luz de los renovados aportes de la historiografía, el trabajo se propuso, en síntesis, repensar a esas mujeres en la esfera pública, teniendo una idea amplia de participación pública, que deja de lado la interpretación restrictiva que remite a lo meramente electoral.
//       </span>
//     </div>
//   </div>
// ),

// 2011: (
//   <div className="space-y-8">
//     {/* Primera Tesis */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2011</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;De lo ideal a lo posible. Dirigencia e instituciones nacionales en la &apos;Confederación&apos; (1852-1862).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Ana Laura Lanteri.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Leandro Losada, Dr. Roberto Schmit, Dr. Eduardo Zimmermann. 
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Valentina Ayrolo. 
//         <b className="text-[#f9623e] ml-2">Codirector:</b> Dr. Eduardo José Míguez.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 18 de marzo de 2011.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         En la Tesis se analizó el proceso de construcción del sistema político de la &quot;Confederación&quot; (1852 -1862). Se propuso realizar un aporte al conocimiento histórico, desde esta década que, pese a articular la primera y la segunda mitad del siglo XIX en el proceso de conformación estatal nacional, ha sido poco transitada por la historiografía argentina. El enfoque propuesto -tributario de la relectura del período 1852-1880 de las últimas décadas- fue soslayado por los estudios específicos sobre el período. Tanto aquellos autores que enfatizaron la imposibilidad de sentar bases institucionales y políticas como los que, por el contrario, señalaron el éxito alcanzado en la organización nacional; prestaron poca atención a la convergencia de las dinámicas provincial y nacional para explicar la conformación del orden político del período. A diferencia, la Tesis recuperó la participación de las provincias y sus representantes en el proceso. Se asumió una postura intermedia entre ambas visiones. Se sostuvo que, en el hiato entre lo proyectado y lo realizado, un proceso de aprendizaje y de conformación político-institucional nacional se inició en la &quot;Confederación&quot; y se consolidó en las décadas siguientes. El mismo fue mucho menos eficaz de lo que sus autoridades esperaban, aunque más significativo -tanto para el propio desarrollo estatal como para el posterior- de lo que las interpretaciones históricas describieron. Las provincias comenzaron a entenderse y a asumirse en una forma federal y republicana y las autoridades a construirse como una dirigencia política con proyección nacional. Dichas conclusiones se sustentaron en el estudio de tres problemáticas en forma conjunta. La integración de las elites políticas provinciales en una dirigencia nacional. La articulación por parte de dicha dirigencia de sus recursos y accionar hacia la formación de una estructura estatal (en este punto estudiamos tanto el diseño dado al Congreso nacional como el allí ideado para la &quot;Confederación&quot;). Y, finalmente, la manera en que dicho diseño fue retroalimentado por las provincias. Para ello se tomó como punto de referencia la organización y la dinámica político-institucional de dos instituciones estatales: el Congreso nacional y, subsidiariamente, la justicia federal. La perspectiva elegida privilegió entonces al Congreso como la institución desde la que se observó el proceso político general, pero la indagación lo trascendió. Se atendieron a las redes de relaciones que sostuvieron la política y a la respuesta de las elites políticas provinciales a las disposiciones tomadas en dicho recinto legislativo. Se sumó además como clave explicativa, el estudio de trayectorias públicas y privadas individuales y familiares del personal político federal. Además, se consideró el accionar y la interacción de los legisladores, el poder ejecutivo nacional y las elites políticas provinciales. Finalmente, se profundizaron las problemáticas desde un estudio de caso: la justicia federal.
//       </span>
//     </div>
//     {/* Segunda Tesis */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;La administración de la justicia penal en la provincia de Buenos Aires: (1877-1906)&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Gisela Sedeillan.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Osvaldo Barreneche, Dr. Roy Hora, Dr. Eduardo Miguez.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Sandra Gayol.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 23 de marzo de 2011.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         Deteniéndose en las últimas décadas del siglo XIX y la primera del XX esta tesis analiza el funcionamiento y las transformaciones experimentadas por la justicia criminal en la provincia de Buenos Aires; periodo en cual las formas estatales de regulación del comportamiento humano se fueron multiplicando, y, entre ellas, lo jurídico adquirió relevancia para la afirmación de la autoridad estatal. Este trabajo explora las normas jurídicas, las prácticas judiciales y las políticas penales a partir del análisis de documentos judiciales del Departamento judicial del sur de la provincia y los debates de la legislatura provincial. Con el fin de ofrecer un estudio comprehensivo e integral del sistema penal atiende las diferentes instituciones e instancias que intervienen en la administración judicial (policía, justicia de paz, justicia de primera instancia y Cámara de Apelaciones). La tesis se propone mostrar los mecanismos puestos en práctica para consolidar el estado de derecho, caracterizados por una combinación dinámica de factores de continuidad como de cambio en lo que respecta a sus instituciones. Al tiempo que se codificaba la legislación para brindar un derecho más racional y predecible continuaba perviviendo el carácter lego de la justicia de paz, cuya naturaleza posibilitaba la vigencia de un conjunto de valores más amplios que aquellos asentados en la legislación penal. La instancia letrada, en cambio, evidenciaría fuerte apego a los textos codificados y mayor uniformidad en sus prácticas. Acerca de esta complejidad procura dar cuenta esta investigación, identificando los criterios con los que los jueces administraban justicia desde una postura alejada de posiciones dicotómicas centradas en el apego o distanciamiento de los jueces a la ley. Focaliza su mirada especialmente en la instancia letrada con el propósito de mostrar cómo la amplia potestad concedida al juez durante el proceso no necesariamente se tradujo en arbitrariedad. En este sentido, sugiere la consolidación de una cultura jurídica cuyos componentes lejos están de reflejar una visión de la justicia asimilada a un mero órgano de disciplinamiento social.
//       </span>
//     </div>
//   </div>
// ),

// 2012: (
//   <div className="space-y-8">
//     {/* Tesis 1 */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2012</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;El peronismo en La Pampa: conformación partidaria y construcción estatal, 1945-1955.&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Fabio Alonso.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dres. Julio Melon, Samuel Amaral y María L. Da Orden.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. María Estela Spinelli.
//         </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 14 de diciembre de 2012.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         En la historiografía reciente predominan las regionalizaciones sobre el peronismo. Una de las aristas novedosas en los estudios sobre este fenómeno de la Argentina contemporánea consiste en indagar las realidades provinciales o para los territorios nacionales, su transformación en provincias en la primera mitad de la década de 1950. Asimismo analizar dicho fenómeno desde lugares donde la industrialización no tuvo lugar y contribuir a explicar su compleja naturaleza. El tema central de esta tesis es abordar una de esas manifestaciones: la cuestión del origen y su desarrollo en La Pampa entre 1945 y 1955, con dos etapas: la territoriana, con un fuerte proceso de extensión en procura de la homogeneidad ideológica y partidaria; y la provincial, cuando se creó una organización estatal afín con sus pretensiones de hegemonía nacional. La hipótesis principal sostiene que en un espacio con ciertas particularidades sociales, económicas y sin tradiciones políticas fuertes, el peronismo desarrolló un doble proceso de constitución partidaria y construcción estatal, con marcadas interdependencias. Las pretensiones inclusivas inauguraron formas de hacer política con una dirigencia procedente de distintas fuentes y otra en formación, con un grado de permeabilidad al poder central tal que, el rango de provincia fue consistente con una clara subordinación política. El eje peronismo y provincialización estructura la historia del período. Por tratarse de una coalición populista con una agenda transformadora, uno de los pilares fue el partido. Así, se indagaron los modos en que se consolidó como institución y se articuló con la sociedad. La dinámica política marcó varios momentos de tensiones y conflictos con la oposición e internamente. Nos ocupamos de los actores intervinientes, los que estaban en la acción política y adoptaron el rumbo peronista y los nuevos que ingresaron al escenario político. Al mismo tiempo, el gobierno nacional resolvió la provincialización aunque con una gran debilidad al ser impuesta unilateralmente y contener elementos inadmisibles para los sectores no peronistas. La antinomia se profundizará y marcará el proceso que contribuirá al golpe de estado de 1955.
//       </span>
//     </div>
//     {/* Tesis 2 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;El contacto entre galeses, pampas y tehuelches: la conformación de un modelo de convivencia pacífica en la Patagonia central (1865-1885).&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Marcelo Gavirati.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dres. Eduardo Míguez, Susana Bandieri y Daniel Villar.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Prof. Raúl Mandrini.
//         </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 18 de mayo de 2012.
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La relación entre &quot;galeses y tehuelches&quot; aparece en la tradición oral y la historiografía regionales como una convivencia absolutamente armoniosa, surgida de la generosa ayuda brindada por los pacíficos tehuelches y del trato humanitario de los colonos. Más allá del relato clásico, dicha relación presenta elementos y características que la ubican como un caso atípico con respecto al modo relacional que imperara en la frontera pampeano patagónica: 1) un establecimiento promovido por un grupo colonizador extranjero con objetivos propios que trascendían los del Estado nacional, 2) su ubicación en pleno territorio indígena sin protección militar estatal, 3) la ausencia de enfrentamientos violentos durante las dos décadas de convivencia en relativo aislamiento. El objetivo central es explicar las bases constitutivas (políticas, económicas y socioculturales) de esta singular experiencia; en particular: a) identificar los actores sociales subyacentes bajo los indefinidos rótulos de &quot;galeses y tehuelches&quot;, b) determinar la composición cualitativa y cuantitativa de los intercambios comerciales y culturales producidos, c) detectar las transformaciones operadas en sus respectivos espacios y los posibles cambios en la visión del &quot;otro&quot; como consecuencia de la interacción. Descartados los extremos relacionales compuestos por una utópica ausencia absoluta de conflicto y la inexorabilidad de su ocurrencia propuesta por el modelo de la &quot;fricción interétnica&quot;, la detección de una importante complementariedad económica y de balance o -incluso- predomino de las sociedades indígenas en el poderío bélico-económico, brindan las herramientas necesarias para diseñar un modelo explicativo alternativo, denominado &quot;modelo de convivencia interétnica pacífica&quot;. Según éste, galeses, pampas y tehuelches, fueron capaces de articular sus respectivos intereses mediante la negociación y el intercambio pacífico de bienes como modos relacionales predominantes, lo que les permitió superar de forma duradera la potencial conflictividad inherente a toda interrelación social y configurar un espacio social, económico y cultural, con características propias e irrepetibles que lo distinguen de otras experiencias fronterizas.
//       </span>
//     </div>
//     {/* Tesis 3 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Estrategias y tramas empresariales del sector frutícola en el Alto Valle del Río Negro (1930-2005)&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Glenda Miralles.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Graciela Gutman, Dra. Andrea Lluch, Dra. Graciela Blanco y Lic. María Inés Barbero.
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Lic. María Inés Barbero.
//         </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 14/12/2012
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La Tesis se centró en la reconstrucción y el análisis de las estrategias empresariales desarrolladas por tres firmas frutícolas -que operan en el Alto Valle del río Negro- de diverso origen, con distintas formas de propiedad y de gestión organizacional, con el fin de establecer en qué medida los cambios en el entorno fueron condicionando (positiva o negativamente) la formulación de dichas estrategias. Las empresas son: Cervi e hijos S.A (empresa familiar constituida en la década de 1930), Expofrut S.A. (empresa transnacional nacida en la década de 1970) y Patagonian Fruits Trade S.A. (firma comercializadora que inició sus actividades a fines de la década de 1990). Se estudió la inserción, el posicionamiento y el desempeño de las mismas como parte de tramas frutícolas, con el fin de explicar su mayor o menor competitividad, analizando las relaciones de las firmas entre sí y con el resto de la cadena agroindustrial; desde las estrategias empresariales desplegadas y considerando los contratos y acuerdos realizados entre los distintos sujetos implicados. Se trabajó en función de la evolución de cada una de ellas, en lo que respecta a la producción, la industrialización, la comercialización, la estructura organizacional, las características pasadas y presentes de expansión, las característica de las tramas en las que operan y las relaciones entre empresas, productores primarios, clientes mercados, proveedores y organizaciones empresariales. Es relevante mencionar, que si bien las empresas poseen características diferenciadas, comparten algo en común: haber transitado exitosamente un período de profundas transformaciones, en el que un número significativo de firmas no logró adaptarse a las nuevas reglas de juego. Desde esta perspectiva, los estudios de caso ofrecieron evidencia empírica para la comprensión del proceso de nacimiento, desarrollo y reestructuración de la actividad agroindustrial regional.
//       </span>
//     </div>
//   </div>
// ),

// 2013: (
//   <div className="space-y-8">
//     {/* Tesis 1 */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2013</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> La mies madura. Colonización agrícola y crecimiento económico en Santa Fe durante la segunda mitad del siglo XIX
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Juan Luis Martirén
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Julio Djenderedjian
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Eduardo Míguez, Dra. Hilda Sabato, Dr. Roy Hora y Dr. Julio Djenderedjian
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 15/04/2013
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La investigación tiene como propósito general analizar profundamente el proceso de colonización agrícola que tuvo lugar en Santa Fe durante la segunda mitad del siglo XIX. Se plantea una reinterpretación de las causas, el desarrollo y las consecuencias de múltiples procesos generados en torno este fenómeno de expansión agrícola que transformaría profundamente la economía provincial, teniendo siempre presente el mundo criollo en el que se insertó y al cual transformó, y la nueva economía nacional que contribuyó a formar. Para ello, se pone el foco en cuatro cuestiones principales: la formación y evolución de un mercado inmobiliario rural, el accionar de los empresarios de colonización, el proceso de acumulación y distribución de la riqueza inmobiliaria en las colonias y las bases estructurales de esa nueva economía farmer que este modelo impulsó.
//       </span>
//     </div>
//     {/* Tesis 2 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Relaciones laborales paternalistas, identidad y clase obrera en la industria del cemento, Olavarría, 1940-1970.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Griselda Lemiez
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Daniel Dicósimo
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurado:</b> Dres. Juan Suriano, Silva Simonassi, Julio Melón Pirro y Daniel Dicósimo
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 12/11/2013
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         El principal objetivo y desafío propuesto en esta tesis doctoral fue intentar saldar parte del vacío que aparece en el análisis que estudia por un lado la historia de las empresas y la historia de los trabajadores, como campos separados cuando en realidad se encuentran estrechamente vinculados entre sí. Partimos de la industria del cemento como caso de análisis seleccionando tres empresas ubicadas en la zona serrana de la ciudad de Olavarría, centro de la provincia de Buenos Aires. Rescatando al trabajador como elemento central de la investigación hemos puesto énfasis en la relación laboral paternalista, intentando abordar aquellas variables que todavía quedan sin resolver, tratando de hallar ese vínculo fundamental y articulador que mencionábamos y que encontramos mediante el estudio del paternalismo industrial como forma de gestión empresarial. Es ahí precisamente donde nos encontramos con un patrón que diseña estrategias, plasmadas en un modelo empresarial conocido como sistema de fábrica con villa obrera, y en un grupo de trabajadores industriales que más allá de constituir una parte importante de la relación laboral, pasan a ser quienes dan vida y forma a este particular modelo empresarial.
//       </span>
//     </div>
//     {/* Tesis 3 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Las políticas y las prácticas educativas del magisterio pampeano (1958-1966)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Silvia Castillo
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Lucía Lionetti
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurado:</b> Dres. Alejandro Cattaruzza, Adrián Ascolani, Paola Gallo y Lucía Lionetti
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 3/12/2013
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         Esta tesis doctoral desde una mirada histórica, busca abordar y reconstruir las políticas y las prácticas del magisterio pampeano entre 1958 y 1966, con la mira puesta en este actor colectivo. Problematiza el objeto de estudio a partir de la búsqueda de articulación y entrecruces de prácticas educativas, de normativas y de discursos políticos, explorándose las distancias y/o aproximaciones que existieron entre lo macro - las políticas educativas- y lo micro -la dinámica de las instituciones escolares. De tal modo que este trabajo exige una pluralización de repertorios de fuentes de consulta y una revisión de los criterios de periodización para atender al juego de continuidades, transformaciones, permanencias y cambios Más allá de lo prescripto, del discurso hegemónico impuesto por las disposiciones de las políticas de turno en la región pampeana, el magisterio como agentes sociales, resguardaría sus propias dinámicas de acción, con autonomía. Fueron, desde su lugar, activos participantes de la generación de una cultura escolar. Sin lugar a dudas, en esa experiencia histórica estudiada hubo permanencias y transformaciones o bien una suerte de hibridación en las prácticas educativas, construyéndose así regulaciones específicas en la intersección de las dinámicas del Estado, escuela y magisterio.
//       </span>
//     </div>
//     {/* Tesis 4 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> De Militares a políticos. Los oficiales del Ejército Auxiliar del Perú y la carrera de la revolución, 1816-1831
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Alejandro Hernán Morea
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Valentina Ayrolo
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurado:</b> Dres. Alejandro Rabinovich, Gabriel Di Meglio, Eduardo Míguez y Valentina Ayrolo
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 29/11/2013
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         &quot;De militares a políticos&quot; da cuenta del proceso por el cual los oficiales del Ejército Auxiliar del Perú, lograron construir carreras políticas en los distintos estados surgidos de las Provincias Unidas del Río de la Plata, luego de su paso por esta fuerza militar. A partir de la reconstrucción del accionar de este ejército durante las llamadas &quot;guerras de independencia&quot;, y de identificar quienes efectivamente conformaron su cuerpo de oficiales entre 1810 y 1820, nos propusimos analizar de qué manera, algunos de los hombres que integraron esta fuerza, lograron abrirse paso en la actividad política y construir su &quot;carrera de la revolución&quot;. Al dar cuenta del accionar bélico y político del Ejército Auxiliar del Perú durante las guerras de independencia, tuvimos la posibilidad de repensar los objetivos de esta fuerza militar pero también de observar el importante rol desempeñado por algunos de sus integrantes durante las distintas coyunturas que experimentó el proceso revolucionario. Por otro lado, la reconstrucción del cuerpo de oficiales de este ejército nos permitió ver que muchos de estos hombres tuvieron una actuación destacada a partir de 1820. Esta cuestión es la que nos impulsó a tratar de entender de qué forma algunos de los hombres que habían pasado por el Ejército Auxiliar del Perú habían logrado constituirse en figuras importantes en el período de las autonomías provinciales y si su paso por esta fuerza militar había sido importante en esto. A lo largo de los primeros 4 capítulos es que tratamos de dar cuenta de las características de los hombres que conformaron la oficialidad del Ejército Auxiliar del Perú, de analizar su actuación durante la revolución y su comportamiento dentro del mismo ejército, así como también los vínculos y las relaciones construidas entre sí y con los integrantes de las elites de los distintos espacios por los que se desplazó el Ejército Auxiliar. Esto lo hicimos de la mano de revisitar y repensar el accionar bélico y político de esta fuerza durante el proceso revolucionario. Finalmente, en el último capítulo, fue que tratamos de demostrar a partir de la reconstrucción de algunas trayectorias específicas, como los oficiales del Ejército Auxiliar del Perú se valieron de los distintos capitales culturales y relacionales incorporados gracias a su paso por esta fuerza militar, para abrirse paso en los nuevos estados provinciales y lograr construir sus &quot;carreras de la revolución&quot;. Para la realización de esta tesis doctoral consultamos numerosos reservorios documentales. Entre ellos, los que más han aportado al corpus de fuentes principales con las que llevamos adelante esta investigación, se encuentran el Archivo General de la Nación (AGN) y en el Archivo Histórico de Tucumán (AHT). Asimismo ha sido muy valiosa la consulta de los fondos del Archivo Histórico del Museo Mitre así como también del Servicio Histórico del Ejército del Museo Histórico del Ejército.
//       </span>
//     </div>
//     {/* Tesis 5 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Mandato divino y poder terrenal. La administración diocesana en el Obispado de Córdoba, 1778-1836
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> María Laura Mazzoni
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Valentina Ayrolo
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurado:</b> Dres. Roberto Di Stéfano, Jaime Peire, Melina Yangilevich y Valentina Ayrolo
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 13/12/2013
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         &quot;Mandato Divino y poder terrenal&quot; analiza las administraciones diocesanas del Obispado de Córdoba entre 1778 y 1836. Particularmente, el estudio se centra en la experiencia episcopal de Joseph Antonio de San Alberto, Ángel Mariano Moscoso, Rodrigo Antonio de Orellana y Benito Lascano. El análisis de las trayectorias de estos prelados es un mirador desde donde ingresar a otras cuestiones en función de comprender un período de transformaciones importantes en el espacio analizado. A través del estudio de las trayectorias personales de los prelados podemos confirmar el lugar medular que poseían, no sólo en la estructura administrativa eclesiástica, sino también en la vida política de esta comunidad. La experiencia de los obispos analizados aporta una nueva mirada sobre la intermediación social que estos funcionarios ejercían en la comunidad, entre fieles y sacerdotes, y entre los clérigos y las autoridades civiles y eclesiásticas. A lo largo de la Introducción y los cinco capítulos que estructuran la tesis, se analiza el derrotero de los prelados -formación, origen e influencias- y la trama de sus redes sociales dentro de la diócesis, así como las medidas de gobierno por las que bregaban. El estudio de las trayectorias personales nos permitió obtener información sobre el modo en que se seleccionaban candidatos para las mitras americanas, sobre cuáles eran los factores de peso a la hora de designar un prelado, y las diferencias que se establecían entre el gobierno de los obispos provenientes del clero regular y aquellos de origen secular. Los obispos se comportaron como eclesiásticos y como hombres políticos. Dos categorías que no eran excluyentes, y que no lo serían hasta finales del siglo XIX, cuando la profesionalización de la política desplazara a los sacerdotes de posiciones de gobierno. Para la realización de esta investigación se han consultado numerosos repositorios documentales. Entre ellos, los que han aportado el corpus principal de fuentes archivísticas se encuentran en Córdoba y se basan en los fondos documentales del Archivo del Arzobispado de Córdoba. Por otra parte, también se han consultado numerosos fondos del Archivo General de la Nación (AGN), y del Archivo General de Indias (AGI).
//       </span>
//     </div>
//     {/* Tesis 6 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> El proceso histórico de la lepra en la Argentina. Estado y sociedad. Médicos y enfermos, 1900-1970
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Irene Delfina Molinari
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Dora Barrancos
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurado:</b> Dres. María Silvia Di Liscia, Mirta Lobato, Hernán Otero y Dora Barrancos
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 5/7/2013
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis analiza el proceso histórico de la lepra en el territorio argentino, entre 1900 y 1970. Para ello la tesis consta de ocho capítulos en donde se analiza las continuidades y cambios de las políticas públicas en torno a la profilaxis de la enfermedad, las prácticas médicas y de investigación de los dermatólogos, con la particularidad de la llegada en los años cuarenta de un nuevo medicamento, las sulfonas, que significó un punto de inflexión, en la forma de percibir la enfermedad. En la era presulfónica se priorizaron las medidas draconianas y cuyo máximo símbolo lo constituyeron los sanatorios-colonias. Al mismo tiempo, analizamos la acción de las damas del Patronato de Leprosos, que se convirtieron en sujetos de acción política a través de la experiencia en la asistencia y administración de los dispensarios y preventorios a su cargo. Los enfermos no fueron ajenos a nuestro análisis, planteando que fueron sujetos activos en un proceso de ampliación de la ciudadanía social.
//       </span>
//     </div>
//   </div>
// ),

// 2014: (
//   <div className="space-y-4">
//     {/* Tesis 1 */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2014</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Un golpe muy particular. Problemas políticos en la crisis del gobierno de Arturo Frondizi y la presidencia de José María Guido&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Carlos Hudson
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dres, Daniel Mazzei, César Tcach, Hernán González Bollo y Estela Spinelli.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Directora:</b> Estela Spinelli
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 4/2/2014
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis revisa desde la perspectiva de la historia política el período que comprende desde el final del gobierno de Arturo Frondizi hasta el final del gobierno de José María Guido. Enmarcado en el ciclo político de la Revolución Libertadora, el proceso político que se estudia permite ver cómo se va produciendo un desplazamiento en la importancia de los elementos que aportan a la inestabilidad institucional. Desde la perspectiva histórica se reconstruyen detenidamente algunos episodios significativos, en particular los que tienen que ver con las jornadas que desembocaron en el derrocamiento de Frondizi y la asunción de la Presidencia por parte de Guido; también se analizan varios ejemplos que muestran las lógicas superpuestas que se oponían en el seno de las Fuerzas Armadas. Desde el punto de vista metodológico, la tesis trabaja con fuentes provenientes del Fondo Centro de Estudios Nacionales, sito en la Biblioteca Nacional, del Servicio Histórico del Ejército y de la prensa, tanto nacional como local.
//       </span>
//     </div>

//     {/* Tesis 2 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Diferenciación socioeconómica y estrategias políticas de pecheros. El caso castellano en perspectiva política y social en los siglos XIV y XV&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Silvina Mondragón
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Carlos Astarita, Carlos Calderón, Octavio Colombo y Laura Da Graca.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Director:</b> Laura Da Graca
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 23-9-2014
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         A partir del estudio de los concejos de realengo de Zamora, Segovia, Cuenca, Ávila, Madrid y Ciudad Rodrigo, se analizó el grado de autonomía de la cultura política de los pecheros castellanos en el feudalismo tardío, sopesando la incidencia que en su vertebración tuvieron los mecanismos de diferenciación social que atravesaron el sector desde el siglo xiv. Asimismo, se consideró la interrelación que existía entre este proceso y la dimensión topográfica, ya que se sostiene que la acción política de los pecheros estuvo también condicionada por el espacio físico en el que se concretaba: el de los concejos rurales o el de los urbanos, ya que esto determinaba el desarrollo de sublógicas diferenciadas de poder político –no necesariamente formalizado en instituciones monárquicas– que eran, a su vez, producto de los mecanismos de reproducción socioeconómica de los no privilegiados.
//       </span>
//     </div>

//     {/* Tesis 3 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> &quot;Representaciones sociales en torno a las sociedades indígenas en la historia escolar: el caso de la provincia de Catamarca (1957-2010)&quot;
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> José Vera
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Alejandro Isla, María Paula González, Sara Ortelli y Diana Mazzanti.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Director:</b> Diana Mazzanti
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 16-12-2014
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La investigación analizó la historia escolar sobre las sociedades indígenas que habitaron –y habitan– la provincia de Catamarca. Se buscó evidenciar cómo fue elaborada e institucionalizada una narrativa del pasado catamarqueño centrada en “los diaguitas”. Para ello, se expuso un análisis retrospectivo de aquellos contenidos afines al pasado provincial y a las sociedades indígenas que fueran diagnosticadas mediante el estudio del proceso de enseñanza observado en el año 2010 en las escuelas ubicadas en los departamentos Andalgalá y Pomán. Las características del objeto abordado demandaron un marco de análisis interdisciplinario entre historia, arqueología, antropología social, pedagogía y folklore que ayudó a dar cuenta de la complejidad inherente a contenidos disciplinares insertos en tecnologías de educación de la memoria social.
//       </span>
//     </div>
//   </div>
// ),

// 2016: (
//   <div className="space-y-4">
//     {/* Tesis 1 */}
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2016</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> “La posición de la Argentina en la Guerra del Chaco (1932-1935). Variables internas y externas como condicionantes de la política exterior”
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Maximiliano Zuccarino
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Beatriz Solveira, Dra. Beatriz Figallo, Dr. Daniel Dicósimo y Mg. José María Araya.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Directora:</b> Mg. José María Araya
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 18-3-2016
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         El tema central de la Tesis Doctoral refiere al estudio de la multiplicidad de variables, tanto internas (propias del modelo de desarrollo político-económico adoptado) como externas (derivadas del contexto internacional, hemisférico y regional imperantes) que incidieron en el posicionamiento internacional del Gobierno argentino presidido por el General Agustín P. Justo -secundado por quien fuera su Canciller, Carlos Saavedra Lamas- ante el conflicto internacional conocido como Guerra del Chaco (1932-1935) y las posteriores negociaciones de paz, llevadas a cabo íntegramente en Buenos Aires, las cuales concluirían formalmente en enero de 1939. De esta manera, desde una perspectiva histórica, se aborda el análisis de la política exterior argentina a partir de un estudio de caso en que la misma fue modelada por las particularidades propias de la política y economía nacionales -caracterizadas por la restauración conservadora tras el golpe de Estado de 1930 y el reforzamiento del modelo agroexportador a partir de la firma del Pacto Roca-Runciman en 1933- así como por el contexto de crisis a nivel internacional y la histórica rivalidad político-diplomática y económica mantenida con los Estados Unidos y Brasil por el predominio a nivel hemisférico y regional respectivamente.
//       </span>
//     </div>
//     {/* Tesis 2 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> “Los inmigrantes italianos en el Territorio Nacional de La Pampa: Sociedades de Socorros Mutuos, política local y religión (1892-1942)”
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Mariana Annecchini
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Mónica Bjerg, Dr. Alejandro Fernández, Dr. Marcelino Iriani y Dr. Hernán Otero.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Hernán Otero
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de Defensa:</b> 6-4-2016
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La línea de indagación que orienta la tesis es el impacto del proceso migratorio en el Territorio Nacional de la Pampa. Dentro de este proceso, focalizamos nuestro interés en los lugares que las sociedades de socorros mutuos, la política local y la religión ocuparon en los procesos de construcción identitaria de la primera y segunda generación de inmigrantes italianos que se instalaron en el Territorio. Nuestro eje de atención esta puesto en las experiencias de los inmigrantes, en sus múltiples identidades, en las relaciones sociales que establecieron con los connacionales y con otros grupos en la sociedad de recepción, como así también en las prácticas que prevalecieron o perdieron. Si bien estos aspectos nos permiten pensar el proceso migratorio desde una perspectiva pluralista, no dejamos de lado las estrategias de adaptación que los inmigrantes formularon. El texto recorre un arco temporal que comprende la última década del siglo XIX y las primeras décadas del siglo XX, momento en el que el espacio pampeano comenzó a adquirir una dinámica demográfica inmigratoria y a definir su fisonomía política, económica, social y religiosa. Partimos puntualmente de 1892, año de la fundación de Santa Rosa y década en la que el Territorio recibió los primeros aportes de inmigrantes ultramarinos. A partir de la década de 1930 la incidencia de los migrantes en el Territorio descendió debido, fundamentalmente, a la interrupción de los flujos poblacionales del exterior. En este marco el cierre de nuestra indagación se produce en 1942, momento en el que se llevó a cabo el tercer censo territoriano que registró un claro descenso de la población extranjera en todo el Territorio. En cuanto al recorte espacial nos centramos de manera puntual en tres localidades de la franja Este territoriana: Santa Rosa, Trenel y Eduardo Castex, donde la inmigración transoceánica, fundamentalmente la española e italiana, desempeñó un rol significativo en el proceso de conformación de la sociedad local, aunque con un peso demográfico diferente.
//       </span>
//     </div>
//     {/* Tesis 3 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> “Conservadores y Radicales en el “Interior” Bonaerense (Ayacucho, Azul, Lobería y Tandil, 1910-1943)”
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Leonardo Fuentes
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Marcela Ferrari, Dr. Fernando Barba, Julio Melón y Dr. Estela Spinelli.
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Director:</b> Dra. Estela Spinelli
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 24-6-2016
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         Esta investigación aborda la historia política de la provincia de Buenos Aires durante el periodo 1910-1943, a través del accionar de las dos principales agrupaciones partidarias entonces en pugna, la Unión Cívica Radical y el Partido Conservador, centrando su estudio en la dimensión local. Analizando distintos municipios -escenarios fundamentales de la lucha por los sufragios-, nos propusimos relevar mejor la complejidad de ámbitos, actores y prácticas que caracterizaban la vida política bonaerense en el periodo mencionado y dejar de lado estereotipos y generalizaciones. Varios trabajos recientes han analizado a las mencionadas fuerzas políticas, proporcionando mucha información sobre ellas, aunque principalmente desde un punto de vista nacional o provincial. Por lo cual, en nuestro estudio privilegiamos el nivel local: tomamos cuatro partidos (distritos) del centro-sur de la Provincia de Buenos Aires –Ayacucho, Azul, Lobería y Tandil-, tratando de indagar fundamentalmente porque una u otra agrupación concitó un apoyo mayoritario en determinados lugares durante todo este periodo, mientras que en otros se produjeron importantes cambios en las preferencias del electorado. Ello nos posibilitó una observación nítida de ciertos aspectos, como las tensiones permanentes que sufrían la U.C.R. y el Partido Conservador, los reposicionamientos de los distintos actores, las estrategias personales y colectivas, las vinculaciones extrapartidarias, etc.
//       </span>
//     </div>
//     {/* Tesis 4 */}
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> “Debates en la transición democrática. ‘UNIDOS’ y el proyecto de refundar el peronismo: pensamiento, proyecto político y práctica militante”
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> María Teresa Brachetta
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Vicente Palermo, Dr. Gerardo Aboy Carlés, Dra. Estela Spinelli, Dra. Beatriz Bragoni
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Beatriz Bragoni
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 15-07-2016
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La Tesis aborda la conformación del núcleo que publicó Unidos, revista emblemática de la transición democrática argentina, los contenidos de la publicación, sus debates, la particular relación que estableció entre acción militante y labor intelectual, su compleja vinculación con la Renovación peronista y su interacción con otras revistas de distinto signo ideológico que contribuyeron a dar densidad al debate público de los años 80. La investigación intenta así desarrollar una aproximación particular entre la historia de los intelectuales y el análisis específico de la publicación, al comprender tanto el análisis de la publicación como la reconstrucción e interpretación del proceso de constitución y funcionamiento de un grupo político intelectual.
//       </span>
//     </div>
//   </div>
// ),

// 2017: (
//   <div className="space-y-4">
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2017</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> “La dinastía norteña de Omrí y la ruptura con el pasado hebreo (ca. 883-841 a. C.)”
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Magdalena Magneres
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dr. Ianir Milevski, Dra. Andrea Seri, Dra. Mercedes L García Bachmann, Dr. Marcelo Campagno
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Marcelo Campagno
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 11-12-2017
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis aborda la dinámica sociopolítica de la dinastía omrita en el siglo IX a. C. en el sur de Levante. Indaga sobre los mecanismos de interacción con la sociedad hebrea tradicional a partir de tres tipos de evidencias tangibles analizadas en la Edad del Hierro II: texto y contexto arqueológico y epigráfico. Las relaciones con el discurso histórico revelan un abordaje multidisciplinar complejo para el mundo antiguo cercano-oriental. Para ello se enfoca en la problemática relación entre estudios bíblicos y registro arqueológicos de las ciudades fundadas por estos reyes. Las tramas que perfilan un enfrentamiento a partir de la concepción de la propiedad de la tierra y la lógica de poder que impone esta dinastía con sus habitantes.
//       </span>
//     </div>
//   </div>
// ),

// 2018: (
//   <div className="space-y-8">
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2018</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> “Agentes de cambio. El clero secular, las comunidades y las instancias de poder en la construcción de la estructura eclesiástica de Buenos Aires en la segunda mitad del siglo XIX”
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Lucas Matías Bilbao
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. María Elena Barral, Dres. Jaime Peire y Eduardo Míguez, Dra. Melina Yangilevich
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Melina Yangilevich
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 23-03-2018
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis aborda, desde una perspectiva de la historia social, el lugar de la Iglesia católica en la sociedad rural de Buenos Aires, en la segunda mitad del siglo XIX. Centrada en las parroquias rurales y en sus párrocos, busca dimensionar el papel de los agentes y estructuras eclesiásticas en el período de conformación y/o consolidación. Se reconstruyeron los modos de intervención social de los curas rurales, sus vínculos con las autoridades políticas locales y con las feligresías, así como el papel de estas últimas en la reformulación del catolicismo y la religiosidad. Se analizó el entramado institucional y material de la Iglesia católica en esta región, evidenciando el significativo avance de la “territorialización eclesiástica” en el período. Al mismo tiempo se realizó un abordaje del clero (en su mayor parte, inmigrantes) de manera cuantitativa y cualitativa, profundizando en sus trayectorias, distribución en la geografía eclesiástica, períodos de permanencia y características del ejercicio de su jurisdicción.
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> “Las empresas estatales extractivas y la configuración de identidades sociales ligadas al mundo del trabajo en la Patagonia Austral a lo largo del siglo XX: origen, desarrollo y desarticulación”
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Daniel Antonio Cabral Marques
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Inés Barbero, Dra. Andrea Lluch, Dr. Daniel Dicósimo, Dra. Susana Bandieri
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Susana Bandieri
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 28-03-2018
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La investigación aborda el impacto social que en el ámbito de la Patagonia Austral significó el establecimiento de grandes empresas estatales que, bajo la modalidad de enclaves productivos, se orientaron a la explotación de los recursos mineros e hidrocarburíferos de la región. Analiza para ello los procesos de organización y expansión de las iniciativas de intervención social llevadas a cabo en toda el área por las empresas estatales vinculadas a la explotación petrolera desde su establecimiento en la región durante el período territoriano, examinando el rol preponderante que tuvieron las políticas sociolaborales y otras modalidades de acción empresaria, como elementos constitutivos de un conjunto de mecanismos de regulación que contribuyeron a definir la emergencia de fuertes identidades colectivas sobre la población trabajadora.
//       </span>
//     </div>
//   </div>
// ),

// 2019: (
//   <div className="space-y-8">
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2019</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Cartografía árabes. Trayectorias, territorialidad y redes sociales de inmigrantes sirio-libaneses en la Patagonia septentrional (1900-1955)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Matías Chávez
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Mónica Bjerg, Dr. Alejandro Fernández, Dr. Hernán Otero, Dr. Julio Vezub
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Julio Vezub
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 25-11-2019
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         En esta tesis se abordan las experiencias de los inmigrantes árabes en el sur de Río Negro y en el norte de Chubut, durante la primera mitad del siglo XX. La investigación se ubica en la intersección de los estudios migratorios, la ocupación del espacio, las acciones de los agentes estatales y las relaciones entre inmigrantes, indígenas y criollos. Se parte de la metáfora “Cartografías árabes” para pensar los modos específicos en que los sirio-libaneses intentaron proyectar nuevas configuraciones territoriales, desplegando redes colectivas que articularon intereses individuales. Se reconstruyen trayectorias de comerciantes árabes superando las lecturas moralizantes que han predominado, al mismo tiempo que se indagan criterios que ayuden a explicar la eficacia de su ascenso económico-social. En este sentido, se analizan las estrategias sociopolíticas de los comerciantes sirio-libaneses en relación con el capital privado de mayor escala, los funcionarios estatales y los grupos subalternos de la región, prestando especial atención a sus disputas territoriales.
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Portadores de cristianismo y civilización. Historia y representaciones de las misiones católicas en Argentina (Segunda mitad del siglo XIX)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Rocío Guadalupe Sánchez
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Valentina Ayrolo, Dr. Ignacio Martínez, Dr. Diego Mauro, Dra. Miranda Lida
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Directora:</b> Miranda Lida
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 18-12-2019
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         En la tesis se analiza la relación Iglesia-Estado-sociedad, a partir del estudio de las misiones católicas desarrolladas en la Argentina de la segunda mitad del siglo XIX. Para ello, se enfoca en tres ejes de análisis, a saber, los promotores o solicitantes, las fuentes de financiamiento y las implicancias sociales de un conjunto de misiones tales como las franciscanas de los Colegios de Propaganda Fide en la región del “Gran Chaco” y en la frontera Sur cordobesa, las episcopales y lazaristas en la campaña bonaerense y, en menor medida, las salesianas en Pampa y Patagonia. La tesis se divide en dos partes precedidas con un capítulo general introductorio en el que se presentan los orígenes de las misiones, el legado del período colonial en relación con los patronatos ibéricos y los programas misionales desarrollados en Hispanoamérica y, especialmente, en el territorio argentino. La primera parte se ocupa de las realizaciones concretas de las misiones y en la segunda se indaga un conjunto de debates y discusiones en diferentes escenarios sobre las misiones estudiadas.
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> El Rosismo y el antirrosismo en el interior. Tucumán en tiempos de la Federación (1832-1840): guerra, actores, prácticas y lenguajes
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Emmanuel Parrado
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Jurado:</b> Dra. Valentina Ayrolo, Dr. Gustavo Paz, Dr. Eduardo Míguez, Dra. Beatríz Bragoni
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Beatriz Bragoni
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 21-06-2019
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         La tesis analiza el comportamiento político de los rosistas y antirrosistas en el norte argentino entre 1832-1838, momento en el cual se plantearon proyectos de organización nacional en el Río de la Plata. El trabajo intenta retomar una vieja hipótesis historiográfica y actualizarla a los nuevos debates, poniendo en evidencia el comportamiento soberano de Tucumán y las provincias del norte y su vinculación con Buenos Aires, a la luz del estudio de los caudillos y la movilización política, la representación, la construcción y legitimidad del poder y el lenguaje político mediante el análisis de la retórica de los gobernadores.
//       </span>
//     </div>
//   </div>
// ),

// 2020: (
//   <div className="space-y-8">
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2020</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Trabajadores por cuenta propia en la industria metalúrgica y metalmecánica en el Partido de Tandil desde mediados de la década de 1970 hasta 2003
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Stella Cavalleri
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Prof. Nicolás Iñigo Carrera (UBA)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Héctor Palomino (UBA), Dra. Silvia Simonassi (UNR), Dr. Daniel Dicósimo (IEHS-UNICEN)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 16 de noviembre de 2020
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Pugna política y movilización pluriétnica en el contexto revolucionario. La guerrilla pincheirina en las fronteras surandinas (1818-1832)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Carla Manara
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Susana Bandieri (UNComa)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Claudia Salomón Tarquini (UNLPam/CONICET), Dra. Silvia Ratto (UNQ/CONICET) y Dra. María Laura Cutrera (Instituto Ravignani/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 18 de noviembre de 2020
//       </span>
//       <span className="block text-[#555] text-justify leading-relaxed mt-2">
//         Los movimientos de independencia en el espacio chileno y rioplatense profundizaron paulatinamente la pugna entre “realistas” y “patriotas, generando un período de extrema violencia y anarquía, conocido como “Guerra a Muerte”, entre 1818 y 1832. La lucha por el poder sobrepasó los centros capitalinos, como Santiago de Chile, Buenos Aires y Lima, y se expandió por las áreas rurales hasta internarse fronteras adentro, trastocando el orden y los vínculos tradicionales. Durante estos años, los espacios fronterizos del sur se convirtieron en el centro operativo de una guerrilla pro-realista contrarrevolucionaria, organizada en montoneras pluriétnicas con capacidad de movilización a ambos lados de la cordillera en forma simultánea, cuestión central que demostramos en esta Tesis Doctoral. <br />
//         Esta guerrilla estuvo dentro de los planes de Fernando VII para frenar los avances de los liberales separatistas y contó con una amplia red de colaboradores que potenciaron su logística, entre los que destacamos la participación de diversas poblaciones indígenas de la Araucanía, norpatagonia y pampas como factor estratégico. Esta organización de fuerzas realistas estuvo inicialmente liderada por Vicente Benavides, y a partir de 1824, por José Antonio Pincheira, coincidiendo con el traslado de las montoneras al este andino. El estudio de estos “otros&quot; liderazgos emergentes en el proceso estudiado redefine el rótulo de “bandidos” impuesto por la historiografía argentina y chilena. Así, la Guerra a Muerte se prolongó hasta 1832 e incidió directamente en el proceso de formación y consolidación de los nuevos estados de Argentina y Chile, poniendo en evidencia la complejidad de la transición del orden colonial al orden republicano. Finalmente, la lucha revolucionaria tiene otra lectura a la luz de la contrarrevolución.
//       </span>
//     </div>
//   </div>
// ),

// 2021: (
//   <div className="space-y-8">
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2021</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> ¿De quién es el pasado ranquel? La construcción de campos de interlocución en la reemergencia indígena. La Pampa y San Luis, 1970-2014
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Anabela Abbona
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Claudia Salomón Tarquini (UNLPam/CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dr. Walter Delrío (UNComa/CONICET), Dra. Nidia Nacuzzi (UBA/CONICET), Dr. Marcelino Iriani (IEHS-UNICEN/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 18 de marzo de 2021
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Iglesia y Poder político a comienzos del siglo XXI: Argentina 1999-2009, un acercamiento desde la prensa periódica nacional
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Fernando Urquiza
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Juan Cruz Esquivel (CEIL/CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dr. José Zanca (UNR/CONICET), Dr. Mariano Fabris (UNMdP/CONICET), Dra. Olga Echeverría (IEHS-UNICEN/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 19 de marzo de 2021
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Los primeros policías de la ciudad de Buenos Aires. Funciones, materialidades y territorios (1772-1825)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Agustina Vaccaroni
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Valeria Ciliberto (UNMdP/CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dr. Alejandro Agüero (UNC/CONICET), Dr. Diego Galeano (PUCRío), Dra. Melina Yangilevich (IEHS-UNICEN/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 26 de mayo de 2021
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Bajo la égida del museo científico: de la diplomacia a la profesionalización entre Mar del Plata y la Lobería Grande (1925-1980)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Irene Brichetti
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Ricardo Pasolini (IEHS-UNICEN/CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Élida Blasco (Instituto Ravignani/CONICET), Dr. Máximo Farro (UNLP/CONICET), Dra. Lucía Lionetti (IEHS-UNICEN)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 7 de junio de 2021
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Sirio-libaneses en el temprano poblamiento del noroeste del Chubut. Redes parentales y comerciales en un complejo proceso de asociacionismo y conflictividad, 1900-1950
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Gabriela Macchi
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Marcelino Iriani
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dr. Xosé Manoel Núñez Seixas (Universidad de Santiago de Compostela), Dr. Alejandro Fernández (UNLP), Dr. Joaquín Perren (UNComa/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 27 de agosto de 2021
//       </span>
//     </div>
//   </div>
// ),

// 2022: (
//   <div className="space-y-8">
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2022</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Configuraciones del nacionalismo a mediados del siglo XX. Itinerarios Intelectuales e instituciones culturales: la experiencia mendocina en la encrucijada nacional e internacional
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Celina Fares
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Fernando Devoto
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dr. Daniel Lvovich (UNGS/CONICET), Dr. Martín Vicente (UNMdP/CONICET), Dr. Julio Melón Pirro (IEHS-UNICEN)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 16 de diciembre de 2022
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Los trabajos de limpieza e higiene sanitaria frente a la crisis de la sociedad salarial: género y precarización laboral en el sector de servicios de salud municipal. Tandil, 1990-2020
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Florencia Minardo
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Daniel Dicósimo (IEHS-UNICEN)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Andrea Andújar (UBA-CONICET), Dra. Inés Pérez (UNMdP/CONICET), Dra. Marina Adamini (IEHS-UNICEN/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 15 de marzo de 2022
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Dinámicas institucionales y políticas del Poder Judicial en la formación de la Provincia de La Pampa, 1953-1973
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Hernán Bacha
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Marisa Moroni (UNLPam/CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dr. Ernesto Bohoslavsky (UNGS/CONICET), Dr. Germán Soprano (UBA/CONICET), Dra. Gisela Sedeillan (IEHS-UNMdP/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 8 de julio de 2022
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Configuraciones y trayectorias culturales e intelectuales: género, clase y grupos etarios (Azul, 1920-1960)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> María Soledad González
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Olga Echeverría (IEHS-UNICEN/CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Ana Clarisa Agüero (UNC/CONICET), Dra. Paula Caldo (UNR/CONICET), Dr. Ricardo Pasolini (IEHS-UNICEN/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 4 de agosto de 2022
//       </span>
//     </div>
//   </div>
// ),

// 2023: (
//   <div className="space-y-8">
//     <div>
//       <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2023</span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Emanciparse para preservar la costumbre: El orden natural católico en el Paraguay (1779-1840)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> José Ignacio WasingerEspro
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Gustavo Paz (Instituto Ravignani/CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dr. Jorge Troisi-Meleán (UNLP), Emir Reitano (UNLP), Dr. Juan Ignacio Quintián (UNICEN)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 13 de diciembre de 2023
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Estado y política. Sobre las formas estatales de tramitar la conflictividad social, 1997-2002
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Guillermina Laitano
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Daniel Dicósimo (IEHS-UNICEN)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Andrea Andújar (UBA/CONICET), Dr. Gonzalo Pérez Álvarez (UNP/CONICET), Luciano Barandiarán (UNICEN-CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 17 de febrero de 2023
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Herederas. Prácticas hereditarias de pequeños y medianos propietarios de Luján desde una perspectiva de género (mediados del siglo XVIII - principios del XIX)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Romina Soledad Coronello
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Directora:</b> Dra. Valeria Ciliberto (UNMdP/CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Marcela Aguirrezabala (UNS), Dra. Jaqueline Vasallo (UNC/CONICET), Dra. Lucía Lionetti (IEHS-UNICEN)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 3 de octubre de 2023
//       </span>
//     </div>
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> El catolicismo social en la Argentina y México: orígenes, instituciones, figuras
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Mariana Elisabet Funkner
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Roberto Di Stéfano
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Cecilia Bautista García (UMSNH), Dr. Diego Mauro (UNR/CONICET), Dr. José Zanca (UNR/CONICET)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 30 de octubre de 2023
//       </span>
//     </div>
//   </div>
// ),

// 2024: (
//   <div className="space-y-8">
//     <div>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Título:</b> Sociedad rural, sociedad urbana y fiestas populares. La Construcción de representaciones e identidades en el campo bonaerense (1969-1999)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Tesista:</b> Silvana Villanueva
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Director:</b> Dr. Luciano Barandiarán (UNICEN-CONICET)
//       </span>
//       <span className="block text-[#134e5e]">
//         <b className="text-[#f9623e]">Jurados:</b> Dra. Sandra Fernández (UNR/CONICET), Dr. Matías Casas (UNTREF/CONICET), Dra. Paola Gallo (IEHS-UNICEN)
//       </span>
//       <span className="block text-[#15394b]">
//         <b className="text-[#f9623e]">Fecha de defensa:</b> 23 de febrero de 2024
//       </span>
//     </div>
//   </div>
// ),
// };

// export default function GraduadosDoctorado() {
//   const [tab, setTab] = useState("premiadas");
//   const [acordeonAbierto, setAcordeonAbierto] = useState<number | null>(null);
  

//   return (
//   <section className="relative w-full max-w-5xl mx-auto my-12 px-0 py-0 select-none">
//     <div className="flex justify-center mb-8">
//       <button
//         className={`px-8 py-3 text-lg font-bold rounded-t-2xl shadow transition-all duration-200 ${
//           tab === "premiadas"
//             ? "bg-[#f9623e] text-white shadow-lg scale-105"
//             : "bg-[#e7f5fa] text-[#134e5e] hover:bg-[#ffe5d6] opacity-90"
//         }`}
//         onClick={() => setTab("premiadas")}
//       >
//         Tesis Premiada
//       </button>
//       <button
//         className={`px-8 py-3 text-lg font-bold rounded-t-2xl shadow transition-all duration-200 ml-2 ${
//           tab === "egresados"
//             ? "bg-[#134e5e] text-white shadow-lg scale-105"
//             : "bg-[#e7f5fa] text-[#134e5e] hover:bg-[#c6e6ff] opacity-90"
//         }`}
//         onClick={() => setTab("egresados")}
//       >
//         Egresados del Doctorado
//       </button>
//     </div>
//     <div className="relative bg-white/95 rounded-b-3xl rounded-t-xl shadow-xl border border-[#e7f5fa] p-8 min-h-[330px]">
//       {/* Tesis Premiada */}
//       {tab === "premiadas" && (
//         <section
//           id="tesis-premiadas"
//           className="bg-white rounded-xl shadow-lg border border-[#f9623e] p-8 mb-10"
//         >
//           <h3 className="text-2xl md:text-3xl font-extrabold text-[#f9623e] mb-4 tracking-wide">
//             Tesis Doctorales Premiadas
//           </h3>
//           <ul className="space-y-5">
            // <li>
            //   <span className="text-[#15394b] font-semibold">Sonia Tell</span>, 
            //   <span className="text-[#134e5e]">&quot;Persistencia y transformaciones de una sociedad rural. Córdoba entre fines de la colonia y principios de la república&quot;</span>,
            //   <span className="font-bold text-[#f9623e]"> obtuvo el Premio a la Mejor Tesis Doctoral en el marco del I Concurso organizado por la Asociación Argentina de Historia Económica, 2006.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Laura Méndez</span>, 
            //   <span className="text-[#134e5e]">&quot;Actividades económicas y organización social en espacios de frontera. Bariloche 1880-1935: de pueblo de frontera a centro turístico internacional&quot;</span>, 
            //   <span className="font-bold text-[#f9623e]"> obtuvo la primera mención en el I Concurso a la mejor tesis doctoral organizado por la Asociación Argentina de Historia Económica, 2006.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">María Sol Lanteri</span>, 
            //   <span className="text-[#134e5e]">&quot;Un vecindario federal. La construcción del orden rosista en la frontera sur de Buenos Aires. Un estudio de caso (Azul y Tapalqué)&quot;</span>, 
            //   <span className="font-bold text-[#f9623e]"> premio a la Mejor Tesis Doctoral, Centro de Estudios Históricos &quot;Prof. Carlos S. A. Segreti&quot;, 2010.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Joaquín Perren</span>, 
            //   <span className="text-[#134e5e]">&quot;Itinerarios migratorios. Integración en el Neuquén aluvional (1960-1991)&quot;</span>, 
            //   <span className="font-bold text-[#f9623e]"> mención especial en el concurso a la Mejor Tesis Doctoral, Centro de Estudios Históricos &quot;Prof. Carlos S. A. Segreti&quot;, 2010.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Valeria D´Agostino</span>, 
            //   <span className="text-[#134e5e]">&quot;Estado y propiedad de la tierra. Instituciones, derechos, leyes y actores sociales. El caso de los partidos de Arenales y Ayacucho (Provincia de Buenos Aires, Argentina), 1824-1904&quot;</span>, 
            //   <span className="font-bold text-[#f9623e]"> obtuvo el Premio a la Mejor Tesis Doctoral en el marco del III Concurso organizado por la Asociación Argentina de Historia Argentina, 2010.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Juan Luis Martirén</span>, 
            //   <span className="text-[#134e5e]">&quot;La mies madura. Colonización agrícola y crecimiento económico en Santa Fe durante la segunda mitad del siglo XIX&quot;</span>, 
            //   <span className="font-bold text-[#f9623e]"> obtuvo el Premio a la Mejor Tesis Doctoral en el marco del IV Concurso organizado por la Asociación Argentina de Historia Argentina, 2014.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Irene Molinari</span>, 
            //   <span className="text-[#134e5e]">&quot;El proceso histórico de la lepra en la Argentina. Estado y sociedad. Médicos y enfermos, 1900-1970&quot;</span>, 
            //   <span className="font-bold text-[#f9623e]"> obtuvo el Premio Anual a Tesis doctorales de la Red de Viejas y Nuevas Enfermedades en el marco del VI Congreso de la Asociación Latinoamericana de Población (ALAP), Lima, Perú, 2014.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Ana María Troncoso</span>, 
            //   <span className="text-[#134e5e]">&quot;Todavía No. El proyecto civilizador entre las prácticas sociales y las estrategias de resistencia, de negociación y de apropiación en la meseta norte chubutense (1900-1970)&quot;</span>, 
            //   <span className="font-bold text-[#f9623e]"> obtuvo el Premio a la Tesis de Doctorado del Fondo Editorial de la Honorable Legislatura del Chubut, 2015.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Daniel Antonio Cabral Marques</span>, 
            //   <span className="text-[#134e5e]">&quot;Las empresas estatales extractivas y la configuración de identidades sociales ligadas al mundo del trabajo en la Patagonia Austral a lo largo del siglo XX: Origen, desarrollo y desarticulación&quot;</span>, 
            //   <span className="font-bold text-[#f9623e]"> obtuvo el premio a la Mejor Tesis Doctoral en el marco del VII concurso organizado por la Asociación Argentina de Historia Económica, 2020.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Lucas Bilbao</span>, 
            //   <span className="text-[#134e5e]">“La construcción del entramado eclesiástico a través del clero secular. Iglesia, Estado y sociedad en la campaña bonaerense, segunda mitad del siglo XIX”</span>, 
            //   <span className="font-bold text-[#f9623e]"> recibió la Segunda Mención de Honor en el marco del I Premio Jorge Gelman a la Mejor Tesis Doctoral en Historia Rural, conferido por la Sociedad de Estudios de Historia Agraria (SEHA), España, 2020.</span>
            // </li>
            // <li>
            //   <span className="text-[#15394b] font-semibold">Agustina Vaccaroni</span>, 
            //   <span className="text-[#134e5e]">“Los primeros policías de la ciudad de Buenos Aires. Funciones, materialidades y territorios (1772-1825)”</span>
            //   <span className="font-bold text-[#f9623e]"> recibió el primer premio en el marco del Cuarto Premio de Investigación Doctoral en Historia del Derecho en América Latina, organizado por la editorial Tirant Lo Blanch, México, 2022.</span>
            // </li>
//           </ul>
//         </section>
//       )}
//       {/* Egresados del Doctorado */}
//       {tab === "egresados" && (
//         <div>
//           <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-[#134e5e]">
//             Egresados del Doctorado <span className="text-base text-[#888]">(2000-2024)</span>
//           </h3>
//           <div className="divide-y divide-[#e7f5fa] rounded-lg">
//             {ANIOS.filter(anio => EGRESADOS[anio]).map(anio => (
//               <div key={anio} className="py-2">
//                 <button
//                   className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-[#f7fafc] transition font-bold text-lg text-[#134e5e] focus:outline-none"
//                   onClick={() => setAcordeonAbierto(acordeonAbierto === anio ? null : anio)}
//                 >
//                   <span>{anio}</span>
//                   <svg
//                     className={`w-6 h-6 transform transition-transform ${
//                       acordeonAbierto === anio ? "rotate-90 text-[#f9623e]" : "rotate-0 text-[#bbb]"
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth={3}
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M9 6l6 6-6 6" />
//                   </svg>
//                 </button>
//                 {acordeonAbierto === anio && (
//                   <div className="pl-7 py-3 bg-[#f9f9fd] rounded-xl shadow-inner mt-1 animate-fade-in space-y-2">
//                     {EGRESADOS[anio] ? (
//                       EGRESADOS[anio]
//                     ) : (
//                       <span className="text-[#aaa]">No hay datos de egresados para este año.</span>
//                     )}
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//           {/* Keyframes para fade-in suave */}
//           <style jsx>{`
//             @keyframes fade-in {
//               from { opacity: 0; transform: translateY(-10px);}
//               to   { opacity: 1; transform: translateY(0);}
//             }
//             .animate-fade-in { animation: fade-in 0.2s ease; }
//           `}</style>
//         </div>
//       )}
//     </div>
//   </section>
// );
// }



"use client";
import React, { useState } from "react";

const ANIOS = Array.from({ length: 2024 - 2000 + 1 }, (_, i) => 2000 + i);

const EGRESADOS: { [key: number]: React.ReactNode } = {
  2000: (
    <div className="space-y-2">
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2000</span>
      <p>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> &quot;Nacionalismo, fascismo y tradicionalismo en la Argentina moderna. Una historia&quot;
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Tesista:</b> Fernando J. Devoto.
        </span>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Fecha de defensa:</b> 8 de septiembre del año 2000.
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Jurado:</b> Dr. Robert Potash, Dr. Juan Carlos Torre, Prof. Enrique Zuleta Álvarez y Dr. Ezequiel Gallo (Director de Tesis).
        </span>
      </p>
    </div>
  ),
 2002: (
  <div className="space-y-6">
    <div className="space-y-1">
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2002</span>
      <p>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> &quot;Empresarios y políticas de desarrollo en la Argentina y el Brasil. 1920-1955&quot;.
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Tesista:</b> Aníbal Pablo Jáuregui
        </span>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Jurado:</b> Prof. María Inés Barbero (UBA), Dr. Eduardo Míguez (Universidad Nacional del Centro), Dr. Fernando Rocchi (Universidad Di Tella) y Prof. José Luis Moreno (Universidad Nacional de Luján-Director de la Tesis).
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Fecha de defensa:</b> 5 de noviembre de 2002
        </span>
      </p>
      <p className="text-[#134e5e] text-justify leading-relaxed mt-2">
        Esta tesis aborda el estudio comparado de la conformación y evolución del empresariado como actor social y político de Argentina y Brasil y su participación en las políticas de desarrollo de ambos países en el período 1920-1955. El autor busca explicar los diferentes resultados obtenidos en cada caso, sosteniendo que en parte esa diferencia de performance de desarrollo es resultado de cuestiones de naturaleza económica (dotación de recursos mineros, relación con la economía norteamericana, sistema de rutas, etc.), pero también merece una especial atención la diferente relación de la burguesía brasileña con la esfera política que le permitió alcanzar una posición de liderazgo en la economía nacional. En el análisis comparado se estudian los componentes de la acción gremial, las tradiciones institucionales y su influencia en la conformación de las asociaciones gremiales, la vocación desarrollista de cada país, la evolución de las políticas públicas en función de las nuevas necesidades económicas al ingresar en la era del keynesianismo y la conformación de &quot;arenas estatales&quot; en las que confluían funcionarios públicos y empresarios.
      </p>
    </div>
    <div className="space-y-1 pt-4 border-t border-[#e7f5fa]">
      <p>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> &quot;Una inteligencia disciplinada y disciplinante. Los intelectuales autoritarios de derecha: su concepción estética-ideológica, la política y la representación de la sociedad. Argentina, primeras décadas del siglo XX&quot;, 545 pp., 2 tomos.
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Tesista:</b> Olga Echeverría
        </span>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Jurado:</b> Dra. Dora Barrancos (CONICET-UBA), Dra. Marta Bonaudo (CONICET-Universidad Nacional de Rosario), Dra. María Estela Spinelli (Universidad Nacional del Centro) y Prof. Susana Bianchi (Universidad Nacional del Centro-Directora de la Tesis)
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Fecha de defensa:</b> 13 de diciembre de 2002.
        </span>
      </p>
      <p className="text-[#134e5e] text-justify leading-relaxed mt-2">
        La tesis aborda el estudio de un grupo de intelectuales, paradigmáticos en la conformación de un campo de pensamiento autoritario de derechas en la Argentina de principios del siglo XX, recurriendo al uso de instrumentos biográficos de manera contextuada. El análisis hace hincapié en los matices de ese pensamiento y en su evolución histórica, proponiendo una relectura de los vínculos que se establecieron con el liberalismo existente en la Argentina y poniendo en cuestión el supuesto carácter determinante del nacionalismo en la definición programática de esa corriente heterogénea y multiforme.<br/>
        Buscando aproximarse a la experiencia autoritaria la autora apunta a la incapacidad de estos escritores para aprehender el sentido de las transformaciones que se estaban produciendo y que afectaban a los más diversos niveles de la vida pública, pero también de la vida privada. En esa búsqueda analiza otras dimensiones —escasamente trabajadas en la historiografía— tales como la perspectiva de género, los aspectos estéticos ideológicos, la moral y las costumbres consideradas importantes al momento de definir una identidad autoritaria, elitista y disconforme.
      </p>
    </div>
  </div>
   ),
  2004: (
  <div className="space-y-6">
    {/* Tesis 1 */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2004</span>
      <p>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> La utopía de Prometeo. Cultura antifascista e identidad comunista en la Argentina: entre París, Buenos Aires y Tandil, 1935-1976
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Tesista:</b> Ricardo Pasolini
        </span>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Jurado:</b> Dr. César Tcach (UNC), Dr. Hernán Otero (UNCPBA), Dr. Eduardo Hourcade (UNR) y Dr. Fernando J. Devoto (UBA - Director de Tesis)
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Fecha de defensa:</b> 27 de febrero de 2004
        </span>
        <span className="block text-[#555] text-justify leading-relaxed mt-2">
          La tesis aborda el problema de la constitución de un clima de opinión antifascista en gran parte de la intelectualidad argentina de los años treinta y el peso que este estado de sensibilidad ideológica ocupó en la conformación de la identidad política del comunismo argentino, al menos en sus sectores intelectuales. La hipótesis de partida es que a mediados de la década de 1930, mediante un compuesto de ideas que articuló novedad europea con tradición liberal local y marxismo, la experiencia de la cultura antifascista generó un clima de opinión que se convirtió en una potente y perdurable mirada sobre el proceso histórico y político argentino. Fuertemente impactada por los gobiernos de Uriburu y Justo, esta &quot;sensibilidad antifascista&quot; articuló un corpus de ideas-fuerza que impuso límites a la variabilidad de las interpretaciones de la experiencia política argentina, la más visible sin duda es la percepción dominante del fenómeno peronista como una variante del nazifascismo. Pero también, durante la década de 1930, el tópico de la defensa del sistema republicano, de la política inmigratoria no restrictiva y de la exaltación de la U.R.S.S. como modelo de desarrollo social. Por otro lado, la cultura antifascista fue también una red de relaciones sociales y una red institucional que se organizó a partir de un tejido de centros culturales, ateneos y bibliotecas, una compleja sociabilidad mediante la cual se vehiculizaron los mensajes que contenía su práctica ideológica-cultural. Como una década atrás lo había sido la adhesión de los escritores de Boedo a la Revolución Rusa como tipo ideal de emancipación social del artista, el antifascismo de los años treinta fue el tópico a través del cual no pocos aspirantes a intelectuales, muchos de ellos del interior del país, hicieron su ingreso al mundo de la vida cultural, constituyendo así una densa red de relaciones que pervivió al menos hasta el quiebre, en 1957, de uno de los polos de la alianza antifascista original: la Unión Cívica Radical. En términos metodológicos, la tesis intenta desarrollar una perspectiva comparativa en la que se observan los importantes vínculos establecidos entre la cultura antifascista parisina, y una reducción paulatina de escala que va de sus pares porteños de la Asociación de Intelectuales, Artistas, Periodistas y Escritores (AIAPE, 1935-1943) al itinerario de centros culturales provincianos y recorridos biográficos que ilustran el tránsito de la adhesión del antifascismo al comunismo.
        </span>
      </p>
    </div>
    {/* Tesis 2 */}
    <div>
      <p>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> Comercio y crédito en La Pampa a inicios del siglo XX. Un estudio sobre el papel económico de los almacenes de ramos generales.
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Tesista:</b> Andrea Lluch
        </span>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Jurado:</b> Dr. Jorge Gelman (UBA), Dra. Noemí Girbal-Blacha (UNLP - UNQ), Dr. Osvaldo Barsky y Dr. Eduardo Miguez (UNCPBA - Director de Tesis)
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Fecha de defensa:</b> 8 de julio de 2004
        </span>
        <span className="block text-[#555] text-justify leading-relaxed mt-2">
          La tesis analizó el funcionamiento de las redes de comercialización y financiación agraria, localizando la atención en el rol económico de los almacenes de ramos generales. El área de estudio se corresponde con la franja centro-este del Territorio Nacional de La Pampa. El período abarcado cubre desde finales del siglo XIX hasta los años treinta del siglo XX. En términos generales, la propuesta fue repensar problemas clásicos de la historia rural y económica argentina a partir de los aportes de distintas teorías, así como integrar algunas de las discusiones de dos campos de escasa trayectoria dentro de los estudios locales, como son los de: family firms y retailing history. Asimismo la investigación se apoya en el renovado interés sobre los intermediarios y las funciones de intermediación en la economía. La tesis fue organizada en dos partes. La primera -cuatro capítulos- estuvo dedicada al mundo de la intermediación comercial y de los comerciantes rurales, en particular. La segunda parte -cinco capítulos- se concentró en el rol de los comerciantes como intermediarios financieros y agentes acopiadores y, en última instancia, sobre las características del mercado de crédito en la región.
        </span>
      </p>
    </div>
    {/* Tesis 3 */}
    <div>
      <p>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> La experiencia inmigratoria italiana de la posguerra en la ciudad de Mar del Plata, 1947-1960
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Tesista:</b> Bettina Favero
        </span>
        <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Jurado:</b> Dr. José Luis Moreno (UNLu), Dr. Alejandro Fernández (UNLu), Dr. Marcelino Irían (UNCPBA) y Dr. Hernán Otero (UNCPBA - Director de Tesis)
        </span>
        <span className="block text-[#134e5e]">
          <b className="text-[#f9623e]">Fecha de defensa:</b> 29 de noviembre de 2004
        </span>
        <span className="block text-[#555] text-justify leading-relaxed mt-2">
          La tesis se concentra en el estudio del proceso de inserción de los inmigrantes italianos en la sociedad marplatense de la posguerra a través del análisis de los mecanismos migratorios y de asentamiento, la inserción laboral y los patrones matrimoniales y residenciales. Se realiza un estudio microanalítico de las redes migratorias establecidas entre Mar del Plata y tres zonas delimitadas de Italia: Acireale (Sicilia), Vedelago (Veneto) y Duronia (Molise). Si bien este proceso inmigratorio siguió los parámetros establecidos a nivel nacional, la inserción de los inmigrantes en la ciudad tuvo vida propia. Por un lado, se comprueba la conformación de dos realidades espaciales que poseen las características lógicas de un enclave étnico. Por otro lado, el peso de las redes de relación favoreció la inserción de estos inmigrantes en una serie de mecanismos informales que colaboraron en la obtención del primer trabajo e influyó en la conformación de uniones matrimoniales endogámicas e intergeneracionales. Asimismo, se profundiza en el surgimiento y en la consolidación de las asociaciones regionales italianas nacidas después de 1950, en las que los protagonistas eran los inmigrantes llegados en la segunda posguerra. Se trata de un nuevo asociacionismo basado en el campanilismo y el regionalismo, hecho que se manifiesta a través de la celebración de las fiestas patronales y regionales, el redescubrimiento de los dialectos y de las costumbres y la manifestación de bailes y de cantos propios.
        </span>
      </p>
    </div>
  </div>
),

2005: (
  <div className="space-y-8">
    {/* Tesis 1 */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2005</span>
      <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> Distinción y Legitimidad. Esplendor y ocaso de la elite social en la Buenos Aires de la Belle Époque.
        </span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Leandro Losada</span>
      <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Dr. Fernando Devoto (UBA), Dr. Ezequiel Gallo (UTDT), Dr. Eduardo Zimmermann (U. San Andres) y Dr. Eduardo Miguez (UNCPBA- Director de Tesis)</span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 24 de febrero de 2005.</span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        El problema central que estructura la tesis es cómo la elite social de la ciudad de Buenos Aires construyó su distinción entre 1880 y 1930, y qué grado de éxito tuvo en ese cometido. La relevancia del problema radica en las características de la sociedad porteña —igualitaria, republicana, móvil—, de la propia elite —sin blasones nobiliarios ni un origen social que le aseguraran efectivos capitales simbólicos para resguardar su lugar de preeminencia—, y en la estructural transformación de la sociedad que se produce en este periodo al compás de la modernización, que aparejó una fenomenal recomposición social y una sensible redefinición de las jerarquías bajo el impacto de la movilidad social y de la inmigración masiva. En este sentido, el trabajo pretende contribuir al desarrollo de una historia social de las elites porteñas del periodo, un curioso vacío historiográfico a pesar de lo mucho que se ha avanzado en campos como la historia económica, política o de las ideas.
      </span>
    </div>
    {/* Tesis 2 */} 
    <div>
      <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> Valentín Saygüeque y la &quot;Gobernación Indígena de las Manzanas&quot;. Poder y etnicidad en la Patagonia noroccidental (1860-1881)
      </span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Julio Esteban Vezub</span>
      <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Dra. Susana Bandieri (UNCo/Conicet), Dr. Guillaume Boccara (EHESS), Prof. Daniel Villar (UNS) y Prof. Raúl Mandrini (UNCPBA - Director de Tesis)</span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 29 de marzo de 2005.</span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        A partir de la experiencia de Valentín Saygüeque narramos una historia política del País de las Manzanas —situado en el sur de la actual provincia de Neuquén— durante las décadas previas a la ocupación del territorio por parte de la Nación Argentina. Se analiza la emergencia de la jefatura de Saygüeque, y qué clase de configuración social y política representó la &quot;Gobernación Indígena de las Manzanas&quot;, a los fines de dilucidar el papel del parentesco y la etnicidad en los procesos de cristalización de poder acontecidos en la Patagonia noroccidental durante la segunda mitad del siglo XIX. La tesis da cuenta de las relaciones entre los jefes de distintos agrupamientos, diferentes linajes, y las autoridades argentinas y chilenas en el norte de la Patagonia, con el objeto de discernir las condiciones históricas de producción de la identidad y la territorialidad manzanera. Se practica un enfoque morfológico, con énfasis en el microanálisis, para la interpretación de fuentes documentales de matriz indígena o mestiza, como la &quot;Secretaría de Valentín Saygüeque&quot;, un corpus que reúne la correspondencia emitida y recibida por los lenguaraces que asistieron al Cacique entre 1860 y 1881. Su cruzamiento con las crónicas de viajeros, partes oficiales, ensayos y producciones textuales etnográficas permite ampliar la base empírica y reconstruir las redes sociales económicas, políticas y culturales entre comunidades e individuos situados a ambos lados de la cordillera de los Andes. Desde la historia indígena intervenimos en los debates sobre la etnicidad, e intentamos contribuir a la síntesis crítica de los planteamientos de la etnografía del siglo XX en torno al problema de la identidad étnica en Pampa y Patagonia. La pregunta por la condición manzanera —si constituyó un grupo étnico o fue el producto de un forzamiento político de la identidad— motoriza este caso específico, interesado en terciar en una discusión no resuelta de los estudios del área.
      </span>
    </div>
    {/* Tesis 3 */} El Peronismo después del peronismo. Entre la política de la resistencia y la resistencia de la política, 1955-1960
    <div>
      <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> El Peronismo después del peronismo. Entre la política de la resistencia y la resistencia de la política, 1955-1960
      </span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Julio Cesar Melon Pirro</span>
      <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Prof. Susana Bianchi (UNCPBA), Dr. Tulio Halperin Donghi (Universidad de Berkeley), Dr. Juan Carlos Torre (UTDT) y Dr. Eduardo Miguez (UNCPBA-Director de Tesis)</span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 26 de septiembre de 2005.</span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis aborda el problema de la reconstitución del peronismo durante los años que siguieron a su derrocamiento. La &quot;Revolución libertadora&quot; confrontó al conjunto de los peronistas con una realidad que era la antítesis de la víspera, circunstancia que, a su vez, se modificó parcialmente durante el primer tiempo de Frondizi. Los primeros años de la proscripción implicaron el enfrentamiento con un Estado hostil, empeñado en erosionar la identidad política peronista y decidido a reprimir cualquier alternativa que connotara una vuelta al &quot;pasado&quot;. En la experiencia de muchos trabajadores y de los peronistas en general, esto permaneció como la época de la &quot;revancha&quot;, a la que con el tiempo se superpuso el recuerdo idealizado de la &quot;resistencia&quot;. Pero en esta época emergieron cuestiones concretas que se constituirán en una herencia no menos indeleble. Una nueva dirigencia sindical, las actividades de la resistencia y el surgimiento del neoperonismo temprano, son algunos de los renglones de consideración privilegiada en este ensayo de reconstrucción histórica. El desplazamiento hacia &quot;la política&quot; (en un sentido, con un alcance y con unas consecuencias que se explican, en primera instancia, como política electoral) torna imprescindible asimismo considerar el rol de Perón y el de otros actores que presuponían, a partir de la geografía, el definitivo ocaso de su estrella. La investigación sobre las distintas esferas de la actividad de los peronistas —el sindicalismo, la violencia, la política propiamente dicha entre ellas— culminan en lo que en definitiva podría verse, sino como una verdadera estructuración, al menos como la primera posibilidad de reconocimiento de un perfil del peronismo fuera del poder, resultado a la vez de sus propias peculiaridades históricas y de los primeros fracasos de la &quot;desperonización&quot;. A lo largo de dos grandes secciones y de 12 capítulos de tesis nos va acercando ese horizonte móvil a partir de la elaboración de un relato que se postula como la fórmula más eficaz para contener y dar cuenta del funcionamiento y dinámica de los intereses y los factores de poder operantes en el movimiento entonces proscripto.
      </span>
    </div>
    {/* Tesis 4 */} 
    <div>
      <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> Persistencia y transformaciones de una sociedad rural. Córdoba entre fines de la colonia y principios de la república.
      </span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Sonia Tell</span>
      <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Dra. Sara Mata (UNS/Conicet), Prof. Raúl Fradkin (UBA/UNLu), Dr. Jorge Gelman (UBA/Conicet) y Dra. Silvia Palomeque (UNC - Directora de Tesis)</span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 9 de diciembre de 2005.</span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        En esta investigación se abordan las transformaciones en las condiciones de vida de la población rural y, más específicamente, del sector conformado por los pequeños productores asentados en la campaña, en la centuria que va de 1750 a 1850. Esa pregunta central se despliega en varias líneas de análisis, la primera de ellas se orienta a reconstruir las características de las pequeñas unidades de producción rurales —que pueden calificarse como campesinas—, las prácticas que les permitían reproducirse económica y socialmente y construirse en unidades domésticas económicamente viables, así como la importancia de esas unidades dentro de la estructura agraria de la jurisdicción. La segunda consiste en analizar los constreñimientos y oportunidades que presentaron el sector mercantil y el estado de este sector mayoritario de la población rural a lo largo de un siglo de intensos cambios económicos y políticos. La tercera, explora las adaptaciones, resistencias y conflictos a los que dio lugar ese complejo proceso. A través de estas líneas se busca analizar las condiciones en que sobrevivieron las economías campesinas en ese largo periodo y desde esa perspectiva reflexionar sobre la relación de los campesinos con el estado y el mercado.
      </span>
    </div>
    {/* Tesis 5 */} 
    <div>
      <span className="block text-[#15394b]">
          <b className="text-[#f9623e]">Título:</b> Actividades económicas y organización social en espacios de frontera. Bariloche 1880-1935: de pueblo de frontera a centro turístico internacional
      </span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Tesista:</b> Laura Marcela Méndez</span>
      <span className="block text-[#15394b]"><b className="text-[#f9623e]">Jurado:</b> Dr. Andrés Regalsky (UNTF/Conicet), Dra. Marta Bonaudo (UNR/Conicet), Dra. Andrea Reguera (UNCPBA/Conicet) y Dra. Susana Bandieri (UNCo/Conicet - Directora de Tesis)</span>
      <span className="block text-[#134e5e]"><b className="text-[#f9623e]">Fecha de la defensa:</b> 2 de diciembre de 2005.</span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        Esta tesis doctoral tiene como propósito central analizar las relaciones económicas y las prácticas sociales en la zona andina rionegrina y su núcleo urbano más importante, San Carlos de Bariloche, entre 1880 y 1935, señalando particularidades y complementariedades del oeste rionegrino con otros espacios sociales, como los del territorio neuquino y el sur chileno, concibiéndolos como partes de un complejo sistema de acumulación, producción e intercambio. A partir de un extenso trabajo en archivos nacionales y chilenos, se intenta el dar cuenta de los procesos sociales, políticos y económicos que confluyeron para transformar a un pequeño grupo de población blanca, que se nucleó a partir del Fuerte Chacabuco hacia 1883 en las márgenes del río Limay, en el principal centro urbano de la zona andina rionegrina, que adoptó al turismo como actividad económica fundamental. Especial atención se da a la dinámica de los circuitos mercantiles y al proceso de formación y liquidación de la Compañía Comercial y Ganadera Chile Argentina, de capitales germano-chilenos, y sus sucesoras en la región —las empresas de Primo Capraro y Carlos Roth— en cuanto a empresas vitales para comprender la transformación de la región del Gran Lago, de espacio de frontera a centro turístico internacional.
      </span>
    </div>
  </div>
),

2006: (
  <div>
    <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2006</span>
    <span className="block text-[#15394b]">
      <b className="text-[#f9623e]">Título:</b> &quot;Misioneros Jesuitas y Sociedades Indígenas en las Pampas a mediados del siglo XVIII. La presencia misionera jesuita al sur de la gobernación de Buenos Aires, entre 1740-1753. Un análisis de las relaciones entre las sociedades indígenas y la sociedad colonial de una región del extremo sur del Imperio Borbónico.&quot;
    </span>
    <span className="block text-[#134e5e]">
      <b className="text-[#f9623e]">Tesista:</b> Daniel Marcelo Fabián Arias.
    </span>
    <span className="block text-[#15394b]">
      <b className="text-[#f9623e]">Jurado:</b> Dr. Guillaume Boccara (EHESS - CERMA), Dra. Silvia Mabel Ratto (UNQ - CONICET), Dr. Daniel Santamaría (CEIC - CONICET) y Prof. Rodolfo Casamiquela (Director de Tesis).
    </span>
    <span className="block text-[#134e5e]">
      <b className="text-[#f9623e]">Fecha de la defensa:</b> 10 de noviembre de 2006.
    </span>
    <span className="block text-[#555] text-justify leading-relaxed mt-2">
      El problema central de la tesis es el abordaje de las relaciones establecidas entre los Misioneros de la Compañía de Jesús y las sociedades indígenas que aceptaron reducirse, en la primera mitad del siglo XVIII, en el espacio al sur del Río Salado cercano a la actual Mar del Plata. El análisis de la interacción entre sacerdotes, indígenas, &quot;agregados&quot; y autoridades militares en las Misiones muestra sociedades que se encontraban lejos de ser receptores pasivos de las Doctrinas Misionales. La organización de la sociedad indígena, y sus relaciones con el &quot;mundo hispano-colonial&quot;, es analizada mediante una exégesis de la estructura económico-política nativa. Dicho análisis es posible mediante la consulta exhaustiva de fuentes documentales editas e inéditas a los efectos de poder contar con un amplio marco comparativo de las acciones misionales y de las respuestas indígenas. Esta compulsa documental, y su tratamiento, junto a un profundo estado de la cuestión sobre esta problemática muestra los altos grados de integración de las sociedades nativas con otras semejantes así como con el &quot;mundo hispano-criollo&quot;. Dentro de esa misma integración es dónde debería de rastrearse la inviabilidad de las acciones misionales y los proyectos políticos indígenas.
    </span>
  </div>
),

2007: (
  <div className="space-y-8">
    {/* Primer Tesis */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2007</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Disciplina y conflicto en la industria durante el Proceso de Reorganización Nacional (1976-1983).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Daniel Oscar Dicosimo.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Juan Suriano (PEHESA-CONICET), Dra. Mónica Gordillo (UNC-CONICET), Dr. Arturo Fernández (UNGS-CONICET), Lic. Héctor Palomino (UBA - Director de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de la defensa:</b> 20 de julio de 2007.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        El problema que aborda esta tesis es el carácter y las formas de la resistencia obrera y sindical al disciplinamiento productivo, que impuso el llamado &quot;Proceso de Reorganización Nacional&quot; en la industria argentina. Aquí se revisa la polémica tesis sobre la &quot;pasividad obrera&quot;, vigente en la década de 1980, aunque ahora desde la perspectiva del lugar de trabajo que constituye un enfoque relevante en el campo de la historia de los trabajadores. Los obreros industriales tendieron a defender sus intereses económicos condicionando la aplicación de las directivas patronales a través de diferentes formas de acción, que resultan de adaptaciones a las características específicas de los distintos sistemas disciplinarios industriales; y los dirigentes gremiales seccionales intervinieron en la resistencia como &quot;interlocutores válidos&quot; de los empresarios, en una situación de vulnerabilidad ante éstos y el Estado y, aunque recuperaron parte de su representación legal e histórica, debilitaron y quebraron la oposición. Se utiliza un análisis comparativo de dos grandes empresas de las ramas metalúrgicas y del cemento situadas en el sudeste de la provincia de Buenos Aires, y fuentes escritas y orales de archivos sindicales, empresarios, judiciales, etc.
      </span>
    </div>
    {/* Segunda Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Crimen y justicia en la frontera (Buenos Aires, 1852-1880).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Melina Yangilevich.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Darío Barriera (UNR/Conicet), Prof. Raúl Fradkin (UBA/UNLu), Dr. Marcelino Iriani (UNCPBA/Conicet) y Dr. Eduardo Míguez (UNCPBA - Director de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de la defensa:</b> 31 de agosto de 2007.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis aborda el problema de la administración de justicia criminal -sus normas así como sus usos- y un conjunto de prácticas criminales en el espacio al sur del río Salado. El propósito de esta indagación fue constituir un aporte a la comprensión del proceso de consolidación estatal y en particular, la capacidad de penetración en el espacio de la campaña bonaerense así como los mecanismos utilizados. Tal dinámica estuvo estrechamente asociada a la implantación de un determinado orden social en dicho espacio. Esta temática se desplegó en diferentes líneas de análisis. Una de ellas consistió en la indagación de la estructura de la administración de justicia penal, de las personas que desempeñaron diferentes funciones y los conflictos que se presentaron entre éstas. Otra se orientó al análisis de las normativas empleadas en los procesos penales para sostener diversos argumentos por parte de los fiscales, defensores y fundamentalmente, los jueces letrados. Dichas normas remitían en numerosos casos a la aplicada en la etapa colonial y elaborada en el reino de Castilla durante el periodo medieval. Una tercera se abocó al análisis cuantitativo de los expedientes penales y de quienes fueron acusados de diversos delitos. Por último, se centró el análisis en los casos de homicidios y de apropiaciones ilegales de animales y sus derivados. Ello se debió a que constituyeron ataques contra dos de los bienes más preciados en el contexto económico del periodo: la mano de obra y el ganado. A través de las preguntas que estructuraron el trabajo se buscó analizar el proceso de conformación de un determinado orden social en la provincia de Buenos Aires. Dicho proceso se reveló particularmente conflictivo debido a la persistencia de diversas prácticas en la población que no se mostró dócil frente a las demandas del estado y de un contexto económico en creciente cambio.
      </span>
    </div>
    {/* Tercera Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;El desarrollo, la erradicación y la emergencia del paludismo y su vinculación con la consolidación de las políticas públicas de sanidad rural en la Argentina, entre fines del siglo XIX y mediados del XX.&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Adriana Álvarez.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Diego Armus (Swarthmore Collage, EEUU), Dra. Silvia Di Lisia (UNLPam); Dr. Hernán Otero (IEHS/CONICET), y Dra. Susana Belmartino (UNR - Directora de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de la defensa:</b> 5 de setiembre de 2007.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis analiza el desarrollo histórico del paludismo en Argentina, tratando de visualizar los problemas que se han planteado en la lucha contra esa enfermedad, vinculándola con los procesos de innovación científico-social y con la consolidación de un sistema sanitario público orientado al mundo rural. A tal efecto, se aborda el estudio de las políticas sanitarias describiendo el desarrollo institucional de los organismos estatales, la organización de campañas de control y erradicación desarrolladas por instituciones nacionales e internacionales, el uso de vacunas, sueros y técnicas de desinfección; como también la práctica médica y las respuestas sociales, lo que implica analizar las actitudes de las autoridades regionales. En términos argumentales la tesis transita dos niveles: el de la enfermedad y el de la historia de la salud pública, ambos fuertemente imbrincados. Este enfoque permite incursionar en dimensiones escasamente exploradas por la historiografía local, tales como las interacciones entre los procesos sanitarios y los contextos sociales, culturales, económicos y políticos; la continuidad y el cambio en las condiciones de vida de las poblaciones urbanas y rurales; las relaciones entre el Estado y los diferentes grupos sociales y étnicos; las percepciones populares respecto de la ciencia y la naturaleza; y; la construcción social de la enfermedad y el conocimiento biomédico.
      </span>
    </div>
  </div>
),

2008: (
  <div className="space-y-8">
    {/* Primera Tesis */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2008</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Estado y propiedad de la tierra. Instituciones, derechos, leyes y actores sociales. El caso de los partidos de Arenales y Ayacucho (Provincia de Buenos Aires, Argentina), 1824-1904.&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Valeria Araceli D&apos;Agostino.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. María Elena Infesta (CONICET/UNLP), Dra. Marta Valencia (CONICET/UNLP), Dra. Blanca Zeberio (CONICET/UNCPBA), Dra. Andrea Reguera (CONICET/UNCPBA, Directora de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 28 de marzo de 2008.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        En esta tesis se aborda el contexto de expansión de la frontera bonaerense a lo largo del siglo XIX, poniendo la atención en el proceso de ocupación del denominado &quot;Nuevo Sur&quot;. Para ello se enfoca la problemática desde un estudio de caso: el del poblamiento y ocupación de las tierras de los partidos de Arenales y Ayacucho, entre 1824 y 1904. El trabajo se estructura en función de dos grandes ejes. Por un lado, se interna en la historia de la apropiación legal de estos territorios, a partir del análisis de la aplicación de la legislación sobre tierras en ese espacio de frontera. El foco se pone, tanto en el accionar del Estado (haciendo especial hincapié en las tareas de medición y ordenamiento de la tenencia, emprendidas en el siglo XIX), como en las estrategias de los particulares. Por otro lado, se aborda la historia de la ocupación efectiva y puesta en producción de estos territorios, y en este sentido se avanza en la caracterización de las formas de acceso y uso de la tierra.
      </span>
    </div>
    {/* Segunda Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Estado y trabajo. Las políticas públicas y los trabajadores rurales pampeanos en los inicios del Estado &apos;interventor&apos;, 1925-1950.&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Luciano O. Barandiarán.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Mara Bonaudo (CONICET/UNR), Dra. Mónica Blanco (CONICET/UNCPBA), Dr. Enrique Mases (UNCOMA), Prof. Nicolás Iñigo Carrera (CONICET/UNCPBA, Co-director de la tesis, Directora: Blanca Zeberio CONICET/UNCPBA).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 23 de mayo de 2008.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        El objetivo de la tesis fue explicar la intervención estatal sobre el mercado de trabajo rural bonaerense entre 1925 y 1950. Para comprender la implementación de las políticas estatales en el campo, se analizaron los discursos, concepciones y actitudes del Estado hacia los trabajadores rurales, las características de sus intervenciones y sus antecedentes, tomando en consideración el caso de la provincia de Buenos Aires. En la primera parte de la tesis se describen las características generales del mercado de trabajo rural, y se abordaron algunas formas de intervención estatal que impactaban sobre la oferta de trabajo. En la segunda parte se tratan las ideas del Partido Socialista destinadas a mejorar la calidad de vida y de trabajo de los obreros rurales asalariados. Asimismo, se intenta dar respuestas al escaso impacto del socialismo en la sociedad rural, a pesar del importante papel que esa sociedad tenía en el discurso partidario. En la tercera parte, se analizan las políticas públicas para los trabajadores rurales asalariados en la provincia de Buenos Aires en la década de 1930, abordándose las políticas implementadas desde esa provincia. Algunas de estas iniciativas volvieron a ser utilizadas por el Estado nacional en la década de 1940, como se analiza en la última parte de la tesis, que estudia la intervención del Estado nacional en el mismo ámbito. Allí se analizan las continuidades y las rupturas entre las concreciones peronistas y los proyectos y las realizaciones anteriores, tanto partidarias como estatales y corporativas. En síntesis, puede decirse que esos trabajadores adquirieron notoriedad en la Argentina peronista, al obtener identidad política un sector que siempre había estado presente en el plano económico y ausente en lo social.
      </span>
    </div>
    {/* Tercera Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;De cómo se construye la autoridad. Representaciones, prácticas y discursos en escuelas primarias de Tandil (1946-1983).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Paola Gallo.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Prof. Susana Bianchi (UNQ), Dra. Sandra Carli (CONICET/UBA), Dra. Silvina Gvirtz (CONICET/USA), Dr. Daniel Míguez (CONICET/UNCPBA/UNSAM, Director de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de la defensa:</b> 23 de mayo de 2008.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis aborda el problema de la autoridad en la escuela primaria, tanto en el plano de las políticas educativas como en el del análisis de las dinámicas propias de dos comunidades escolares de la ciudad de Tandil. El trabajo revisa algunas nociones instaladas en el ámbito de la Historia de la Educación respecto de las políticas educativas y sus efectos sobre las prácticas escolares. Mediante un trabajo de reconstrucción de las relaciones de autoridad (entre adultos y niños en el seno escolar, entre padres y maestros, etc.), y de sus cambios a lo largo del período, la tesis busca responder a una serie de preguntas tales como la manera en que se construyen las relaciones de autoridad en la escuela; cuales fueron sus fundamentos; cuales fueron sus modalidades de ejercicio; cómo y porque cambiaron (y cambian) las relaciones de autoridad en la escuela; en que momento puede señalarse una ruptura en el sistema de relaciones de autoridad que ordenaba tradicionalmente la escuela y la emergencia de nuevos vínculos de autoridad en su seno.
      </span>
    </div>
  </div>
),

2009: (
  <div className="space-y-8">
    {/* Primera Tesis */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2009</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Un vecindario federal. La construcción del orden rosista en la frontera sur de Buenos Aires. Un estudio de caso (Azul y Tapalqué).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> María Sol Lanteri.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Ana Frega (Universidad de la República, Uruguay), Dr. Eduardo Míguez (UNCPBA/UNMdP), Dr. Gustavo Paz (CONICET/UNTREF/UBA), Dr. Jorge Gelman (CONICET/UBA, Director de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 19 de marzo de 2009.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis aborda las políticas y estrategias implementadas por el gobierno de Juan Manuel de Rosas para construir su dominio en la frontera sur de Buenos Aires -especialmente en la región de Azul y Tapalqué- en interacción con la sociedad rural. De esta forma, en la primera parte del trabajo se estudian las características del proceso de poblamiento, producción y relaciones interétnicas, con especial atención a los patrones de acceso y tenencia de la tierra, marcando la singularidad de la colonización oficial regional frente al resto de la campaña bonaerense. En la segunda parte del estudio se analizan las medidas y recursos de corte institucional, ritual y simbólico implicados en la conformación del &quot;vecindario federal&quot;, así como la respuesta concreta de los diferentes sectores socio-étnicos, que legitimaron a la federación rosista a través de su participación en el sistema de representación electoral, el servicio armado, fiestas y rituales, contribuciones materiales a la causa, etc. La tesis se aleja de aquellas tradicionales concepciones historiográficas que planteaban al poder del caudillo erigido en un sistema clientelar basado en el uso exclusivo de la coerción, el monopolio de los recursos o la preeminencia de los grandes propietarios rurales en su sustento, focalizando en la relevancia y el accionar de sectores &quot;subalternos&quot; como indígenas y pequeños-medianos productores, y en los intercambios y contraprestaciones entablados con el régimen.
      </span>
    </div>
    {/* Segunda Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Nacionalismo, militancia y violencia política. Los tacuaras en la Argentina, 1955-1969.&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Juan Manuel Padrón.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Samuel Amaral (UNTREF), Dr. Daniel Lvovich (CONICET-UNGS), Dr. Julio Melón Pirro (UNCPBA/UNMdP), Dra. María Matilde Ollier (UNSAM, Directora de tesis; Dra. Mónica Blanco, CONICET/UNCPBA, Co-Directora).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 29 de mayo de 2009.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        En esta tesis se ha abordado el análisis de la conformación de la identidad política entre los jóvenes militantes del Movimiento Nacionalista Tacuara durante la larga década de los sesentas (1955-1969). Se ha mostrado cómo, dentro de esta agrupación, se articuló una identidad política, que tenía en la militancia política y en la apelación a la violencia dos elementos centrales de su construcción. En su conjunto, esta investigación demostró el proceso de construcción de la identidad política Tacuara como un cruce de tradiciones ideológicas y políticas disímiles, que se articularon y confrontaron en el plano político, privado y público de los militantes, y que configuraron esa identidad analizada dentro del heterogéneo universo del nacionalismo de derechas.
      </span>
    </div>
    {/* Tercera Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;La construcción de la &apos;familia ideal&apos;. Nociones y representaciones en la Argentina del siglo XIX. La construction de la &apos;famille idéale&apos;. Notions et représentations dans l&apos;Argentine du XIXe siècle&quot; (Tesis en co-tutelle École des Hautes Études en Sciences Sociales, París; Doctorado en Historia UNCPBA, Tandil).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> María Selva Senor.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Michel Bertrand (Université de Toulouse II Le Mirail), Dra. Irène Théry (EHESS/CNRS), Dr. André Burguière (EHESS, Director de Tesis), Dr. Eduardo Míguez (UNCPBA, Director de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 9 de septiembre de 2009.
      </span>
      <span className="block text-[#555] text-justify leading-relaxe mt-2">
        En la década de 1880 aparecen en Argentina obras literarias que tratan acerca de viejos temas pero de una forma renovada. El matrimonio y la educación se ubican en el centro de la escena, pero a partir de entonces, son los escritores pertenecientes a las clases acomodadas, y que participan generalmente en la vida política del país, quienes narran la historia. Esta literatura aparece en momentos en los que termina el proceso de modernización en el país y cuando el capitalismo triunfa en toda América Latina. Los antiguos temas se transforman en objeto de nuevas taxonomías así como de nuevas fábulas destinadas a re-inventar la identidad nacional. La primera obra testimonio de ese cambio es Pot Pourri (1881). Cambaceres, diputado durante la década de 1870, elabora a partir de una historia de matrimonio y adulterio una teoría de la representación para sus contemporáneos de la &quot;high society&quot; así como un estilo aristocrático que permite diferenciarse del resto de la sociedad. En ese contexto surge entonces una nueva idea de respetabilidad en relación a un nuevo modelo de familia, la familia &quot;bien constituida&quot;, burguesa a la manera europea del siglo XIX, que se articula alrededor de ciertos valores como el culto al trabajo, la honestidad y el honor. En esta tesis se analiza el proceso de construcción de ese modelo, el cuál no estuvo exento de contradicciones si se considera que el mismo fue atravesado por las diferentes revoluciones intelectuales y políticas que llegan al Río de la Plata, como las ideas de la ilustración, el liberalismo, el romanticismo y el derecho positivo, las cuales coexisten, compiten y se complementan con las concepciones tradicionales de origen cristiano como, por ejemplo, la escolástica y el derecho natural. Sin embargo, para fines de siglo la región cuenta con un modelo de familia burguesa a la europea. La ironía es que precisamente en el momento en el que cristaliza el modelo soñado, el mismo proceso de modernización provocó una redefinición de la estructura social que se tradujo en cambios en ese mismo modelo.
      </span>
    </div>
    {/* Cuarta Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;La Nación de los Abipones ¿Un experimento político exitoso?&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Carlos D. Paz.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Ignacio Telesca (CONICET), Dr. Daniel Villar (UNS), Dr. Pablo Wright (UBA-CONICET), Prof. Raúl Mandrini (IEHS-UNCPBA, Director de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 16 de octubre de 2009.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La investigación da cuenta de las formas de construcción, e implementación, de una narrativa histórica del sí-mismos por parte de un grupo familiar abipón. Narrativa que se extendió para el resto de los abipones que componían el entramado social que pudimos conocer a partir, y más allá, de la acción misional jesuítica llevada a cabo en las márgenes del río Paraná durante la segunda mitad del siglo XVIII. Ya luego de la Expulsión se aborda esta forma de relato histórico hasta los primeros años de la República. La reconstrucción de esta narrativa se realizó en base al análisis de documentación inédita de distintos archivos nacionales y provinciales, así como de algunos del exterior. Conocer la dinámica de los hechos, su interpretación y manipulación por parte de los indígenas, posibilitó dar cuenta de la política nativa y cómo la misma detentaba un lugar central en el marco de las relaciones que se establecían con los distintos dispositivos de poder coloniales.
      </span>
    </div>
    {/* Quinta Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Itinerarios migratorios. Integración en el Neuquén aluvional (1960-1991)&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Joaquín Perren.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Roberto Benencia, Susana Torres, Guillermo Velázquez, Hernán Otero (Director de tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 30 de marzo de 2009.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        Los episodios migratorios han tenido una influencia muy importante en la historia patagónica en general y en la neuquina en particular. Para sostener este último punto, sólo deberíamos decir que cuatro de cada diez habitantes de la provincia, hacia 1991, habían nacido fuera de sus límites. Estas cifras son aun más elocuentes en el caso de su capital: según datos oficiales, para esa misma fecha, dos terceras partes de la población estaba registrada como migrante. La investigación que desarrollamos pretendió, por medio de la utilización de un amplio abanico de fuentes, reconstruir los comportamientos ocupacionales, residenciales, matrimoniales, demográficos y relacionales de esta subpoblación. Este objetivo nos obligó a considerar dos problemas que por largo tiempo estuvieron divorciados. Existen trabajos académicos que se concentraron en los aspectos demográficos a gran escala que determinaron los movimientos de población. Otros han enfocado su atención en la inserción de los recién llegados en el mercado laboral, en su disposición en el tejido urbano, en sus comportamientos matrimoniales o bien en el universo relacional desplegado por los migrantes. El supuesto que atravesó nuestra investigación es que no se puede entender una sin la otra: una prolija reconstrucción del proceso de poblamiento a partir de grandes agregados serviría de poco sino es acompañada por un estudio que tenga a la familia como unidad económica e interaccional de base. De allí que el marco analítico seleccionado pueda denominarse macro-micro, por cuanto intentó visualizar cómo las tendencias generales modelaron una variada gama de comportamientos que, aunque diferentes, tuvieron como horizonte la integración a un escenario de complejidad creciente.
      </span>
    </div>
    {/* Sexta Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Indígenas y paisanos en La Pampa: Subalternización, ciclos migratorios, integración urbana (1870-1976).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Claudia Salomon Tarquini.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Prof. Raúl Fradkin, Prof. Raúl Mandrini, Dr. Juan Carlos Radovich, Dr. Daniel Villar (Director de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 3 de abril de 2009.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        El objetivo de la tesis consistió en explicar qué características tuvo, en el caso del Territorio de la Pampa Central, la incorporación de los grupos nativos a la economía política capitalista con posterioridad a las campañas militares de 1878-1879 y de qué maneras continuaron sus vidas los indígenas invisibilizados. El enfoque no está centrado exclusivamente en las políticas ensayadas por actores tales como las instituciones estatales y eclesiásticas, sino que se analiza la propia agencia subalterna. A través del cruce de fuentes nominativas para la reconstrucción de redes familiares, registros de viajeros y sacerdotes, documentos oficiales, e informes de inspección de tierras, entre otros, se estudian los procesos de su desarticulación, reinstalación en el Territorio y se siguen sus distintos itinerarios migratorios y los ciclos de integración urbana en la zona hasta 1976.
      </span>
    </div>
    {/* Séptima Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Vivir en los márgenes. La construcción social de un espacio de relaciones complejas y actores ocultos. La meseta Chubut (1880-1930).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Liliana Pérez.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. María Elba Argeri, Dra. Dora Barrancos, Dra. Graciela Blanco, Dra. Mónica Blanco (Directora de tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> ……
      </span>
    </div>
  </div>
),

2010: (
  <div className="space-y-8">
    {/* Primera Tesis */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2010</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Políticas de población en Argentina. Ideas, legislación y prácticas administrativas (1914-1955).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Carolina Alejandra Biernat.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Dora Barrancos, Dr. Eduardo Míguez, Dr. Andrés Reggiani, Dr. Hernán Otero (Director de tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 7 de mayo de 2010.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        El objetivo de la tesis es analizar el proceso de construcción de las políticas de población en la Argentina durante la primera mitad del siglo XX. Para ello parte de un concepto polisémico de lo político a fin de comprender el proceso desde los debates que le dieron origen, la formulación y reglamentación de sus enunciados legales y la puesta en práctica de sus disposiciones a través de la creación de estructuras administrativas. El primer eje considerado es el que se desarrolla en el campo de las ideas poblacionistas que asocian, en diálogo con reflexiones internacionales, el incremento demográfico con la modernización. El crecimiento de la población es pensado en términos cuantitativos, gracias al aporte inmigratorio y la multiplicación del capital humano endógeno, y cualitativos, configuraciones a las cuales debe atenerse con el fin de construir una comunidad nacional moderna, homogénea, sana y exenta de conflictos. El segundo eje es el diseño e implementación de las políticas ligadas a la reproducción del factor demográfico. Se analiza el proceso de construcción de tres tipos de políticas: la inmigratoria que, a partir de los años de entreguerras, abandona su perfil de &quot;puertas abiertas&quot; tornándose cada vez más restrictiva y selectiva; la de estímulo del crecimiento endógeno, centrada en medidas de protección a las madres, a sus hijos y, con la llegada del peronismo, a la familia; y la política de profilaxis y tratamiento centralizado de las dolencias venéreas, consideradas como una amenaza al acervo &quot;racial&quot;. El último eje es el de la organización de los aparatos administrativos encargados de llevar a la práctica la política poblacional. Mientras que en el caso de la política inmigratoria las instituciones son &quot;vaciadas&quot; durante los años treinta en virtud de los criterios restrictivos del flujo y reorganizadas durante el período peronista, una vez reabiertas las puertas a la inmigración; en el caso de las políticas de fomento del crecimiento endógeno de la población se crean nuevas instituciones asociadas al lugar protagónico que adquieren las reparticiones sanitarias. En síntesis, la tesis se propone avanzar en la comprensión de la construcción de la política de población en la Argentina intentando dar cuenta de aspectos más generales como los procesos de consolidación del estado intervencionista argentino y de las políticas sociales, los proyectos de modernización a través de la profundización del modelo de industrialización por sustitución de importaciones, las transformaciones demográficas y sociales y la fluctuación entre la adopción de criterios de inclusión y exclusión política y social, y sus justificaciones ideológicas.
      </span>
    </div>
    {/* Segunda Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Vida pública y asuntos privados. La presencia de las mujeres en las comunidades del centro y sudeste bonaerense. Fines del siglo XIX y principios del XX.&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Yolanda de Paz Trueba.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. María Bjerg, Dra. Lila Caimari, Dr. Gustavo Paz, Dra. Lucía Lionetti (Directora de Tesis).
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 28 de mayo de 2010.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis estudia el lugar de las mujeres en el espacio público en pueblos de campaña de la región centro-sudeste de la provincia de Buenos Aires a fines del siglo XIX y principios del XX. Para ello, indaga la manera en que las mujeres consiguieron tener una presencia pública en apariencia contradictoria con los roles que los discursos dominantes consideraban que eran indicados para ellas, tanto en el ámbito privado como público, tratando de avanzar sobre la cuestión de la conformación de la ciudadanía y de las relaciones entre la sociedad civil y el Estado, e involucrando a quienes han sido consideradas como subalternas en esa sociedad de carácter patriarcal. El trabajo se propone también mostrar la visibilidad que adquirieron las mujeres y su capacidad de agencia en el espacio y período de estudio reparando, en tal sentido, en acciones que no ha sido suficientemente estudiadas por la historiografía. Las mujeres desarrollaron en sus comunidades papeles de central importancia para la instalación de un orden social, necesidad reactualizada en el marco conflictivo que se abría con el nuevo siglo. Partiendo del presupuesto que tanto las mujeres notables como las de los sectores populares contribuyeron a la construcción de un orden y a la luz de los renovados aportes de la historiografía, el trabajo se propuso, en síntesis, repensar a esas mujeres en la esfera pública, teniendo una idea amplia de participación pública, que deja de lado la interpretación restrictiva que remite a lo meramente electoral.
      </span>
    </div>
  </div>
),

2011: (
  <div className="space-y-8">
    {/* Primera Tesis */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2011</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;De lo ideal a lo posible. Dirigencia e instituciones nacionales en la &apos;Confederación&apos; (1852-1862).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Ana Laura Lanteri.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Leandro Losada, Dr. Roberto Schmit, Dr. Eduardo Zimmermann. 
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Valentina Ayrolo. 
        <b className="text-[#f9623e] ml-2">Codirector:</b> Dr. Eduardo José Míguez.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 18 de marzo de 2011.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        En la Tesis se analizó el proceso de construcción del sistema político de la &quot;Confederación&quot; (1852 -1862). Se propuso realizar un aporte al conocimiento histórico, desde esta década que, pese a articular la primera y la segunda mitad del siglo XIX en el proceso de conformación estatal nacional, ha sido poco transitada por la historiografía argentina. El enfoque propuesto -tributario de la relectura del período 1852-1880 de las últimas décadas- fue soslayado por los estudios específicos sobre el período. Tanto aquellos autores que enfatizaron la imposibilidad de sentar bases institucionales y políticas como los que, por el contrario, señalaron el éxito alcanzado en la organización nacional; prestaron poca atención a la convergencia de las dinámicas provincial y nacional para explicar la conformación del orden político del período. A diferencia, la Tesis recuperó la participación de las provincias y sus representantes en el proceso. Se asumió una postura intermedia entre ambas visiones. Se sostuvo que, en el hiato entre lo proyectado y lo realizado, un proceso de aprendizaje y de conformación político-institucional nacional se inició en la &quot;Confederación&quot; y se consolidó en las décadas siguientes. El mismo fue mucho menos eficaz de lo que sus autoridades esperaban, aunque más significativo -tanto para el propio desarrollo estatal como para el posterior- de lo que las interpretaciones históricas describieron. Las provincias comenzaron a entenderse y a asumirse en una forma federal y republicana y las autoridades a construirse como una dirigencia política con proyección nacional. Dichas conclusiones se sustentaron en el estudio de tres problemáticas en forma conjunta. La integración de las elites políticas provinciales en una dirigencia nacional. La articulación por parte de dicha dirigencia de sus recursos y accionar hacia la formación de una estructura estatal (en este punto estudiamos tanto el diseño dado al Congreso nacional como el allí ideado para la &quot;Confederación&quot;). Y, finalmente, la manera en que dicho diseño fue retroalimentado por las provincias. Para ello se tomó como punto de referencia la organización y la dinámica político-institucional de dos instituciones estatales: el Congreso nacional y, subsidiariamente, la justicia federal. La perspectiva elegida privilegió entonces al Congreso como la institución desde la que se observó el proceso político general, pero la indagación lo trascendió. Se atendieron a las redes de relaciones que sostuvieron la política y a la respuesta de las elites políticas provinciales a las disposiciones tomadas en dicho recinto legislativo. Se sumó además como clave explicativa, el estudio de trayectorias públicas y privadas individuales y familiares del personal político federal. Además, se consideró el accionar y la interacción de los legisladores, el poder ejecutivo nacional y las elites políticas provinciales. Finalmente, se profundizaron las problemáticas desde un estudio de caso: la justicia federal.
      </span>
    </div>
    {/* Segunda Tesis */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;La administración de la justicia penal en la provincia de Buenos Aires: (1877-1906)&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Gisela Sedeillan.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Osvaldo Barreneche, Dr. Roy Hora, Dr. Eduardo Miguez.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Sandra Gayol.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 23 de marzo de 2011.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        Deteniéndose en las últimas décadas del siglo XIX y la primera del XX esta tesis analiza el funcionamiento y las transformaciones experimentadas por la justicia criminal en la provincia de Buenos Aires; periodo en cual las formas estatales de regulación del comportamiento humano se fueron multiplicando, y, entre ellas, lo jurídico adquirió relevancia para la afirmación de la autoridad estatal. Este trabajo explora las normas jurídicas, las prácticas judiciales y las políticas penales a partir del análisis de documentos judiciales del Departamento judicial del sur de la provincia y los debates de la legislatura provincial. Con el fin de ofrecer un estudio comprehensivo e integral del sistema penal atiende las diferentes instituciones e instancias que intervienen en la administración judicial (policía, justicia de paz, justicia de primera instancia y Cámara de Apelaciones). La tesis se propone mostrar los mecanismos puestos en práctica para consolidar el estado de derecho, caracterizados por una combinación dinámica de factores de continuidad como de cambio en lo que respecta a sus instituciones. Al tiempo que se codificaba la legislación para brindar un derecho más racional y predecible continuaba perviviendo el carácter lego de la justicia de paz, cuya naturaleza posibilitaba la vigencia de un conjunto de valores más amplios que aquellos asentados en la legislación penal. La instancia letrada, en cambio, evidenciaría fuerte apego a los textos codificados y mayor uniformidad en sus prácticas. Acerca de esta complejidad procura dar cuenta esta investigación, identificando los criterios con los que los jueces administraban justicia desde una postura alejada de posiciones dicotómicas centradas en el apego o distanciamiento de los jueces a la ley. Focaliza su mirada especialmente en la instancia letrada con el propósito de mostrar cómo la amplia potestad concedida al juez durante el proceso no necesariamente se tradujo en arbitrariedad. En este sentido, sugiere la consolidación de una cultura jurídica cuyos componentes lejos están de reflejar una visión de la justicia asimilada a un mero órgano de disciplinamiento social.
      </span>
    </div>
  </div>
),

2012: (
  <div className="space-y-8">
    {/* Tesis 1 */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2012</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;El peronismo en La Pampa: conformación partidaria y construcción estatal, 1945-1955.&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Fabio Alonso.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dres. Julio Melon, Samuel Amaral y María L. Da Orden.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Dra. María Estela Spinelli.
        </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 14 de diciembre de 2012.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        En la historiografía reciente predominan las regionalizaciones sobre el peronismo. Una de las aristas novedosas en los estudios sobre este fenómeno de la Argentina contemporánea consiste en indagar las realidades provinciales o para los territorios nacionales, su transformación en provincias en la primera mitad de la década de 1950. Asimismo analizar dicho fenómeno desde lugares donde la industrialización no tuvo lugar y contribuir a explicar su compleja naturaleza. El tema central de esta tesis es abordar una de esas manifestaciones: la cuestión del origen y su desarrollo en La Pampa entre 1945 y 1955, con dos etapas: la territoriana, con un fuerte proceso de extensión en procura de la homogeneidad ideológica y partidaria; y la provincial, cuando se creó una organización estatal afín con sus pretensiones de hegemonía nacional. La hipótesis principal sostiene que en un espacio con ciertas particularidades sociales, económicas y sin tradiciones políticas fuertes, el peronismo desarrolló un doble proceso de constitución partidaria y construcción estatal, con marcadas interdependencias. Las pretensiones inclusivas inauguraron formas de hacer política con una dirigencia procedente de distintas fuentes y otra en formación, con un grado de permeabilidad al poder central tal que, el rango de provincia fue consistente con una clara subordinación política. El eje peronismo y provincialización estructura la historia del período. Por tratarse de una coalición populista con una agenda transformadora, uno de los pilares fue el partido. Así, se indagaron los modos en que se consolidó como institución y se articuló con la sociedad. La dinámica política marcó varios momentos de tensiones y conflictos con la oposición e internamente. Nos ocupamos de los actores intervinientes, los que estaban en la acción política y adoptaron el rumbo peronista y los nuevos que ingresaron al escenario político. Al mismo tiempo, el gobierno nacional resolvió la provincialización aunque con una gran debilidad al ser impuesta unilateralmente y contener elementos inadmisibles para los sectores no peronistas. La antinomia se profundizará y marcará el proceso que contribuirá al golpe de estado de 1955.
      </span>
    </div>
    {/* Tesis 2 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;El contacto entre galeses, pampas y tehuelches: la conformación de un modelo de convivencia pacífica en la Patagonia central (1865-1885).&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Marcelo Gavirati.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dres. Eduardo Míguez, Susana Bandieri y Daniel Villar.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Prof. Raúl Mandrini.
        </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 18 de mayo de 2012.
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La relación entre &quot;galeses y tehuelches&quot; aparece en la tradición oral y la historiografía regionales como una convivencia absolutamente armoniosa, surgida de la generosa ayuda brindada por los pacíficos tehuelches y del trato humanitario de los colonos. Más allá del relato clásico, dicha relación presenta elementos y características que la ubican como un caso atípico con respecto al modo relacional que imperara en la frontera pampeano patagónica: 1) un establecimiento promovido por un grupo colonizador extranjero con objetivos propios que trascendían los del Estado nacional, 2) su ubicación en pleno territorio indígena sin protección militar estatal, 3) la ausencia de enfrentamientos violentos durante las dos décadas de convivencia en relativo aislamiento. El objetivo central es explicar las bases constitutivas (políticas, económicas y socioculturales) de esta singular experiencia; en particular: a) identificar los actores sociales subyacentes bajo los indefinidos rótulos de &quot;galeses y tehuelches&quot;, b) determinar la composición cualitativa y cuantitativa de los intercambios comerciales y culturales producidos, c) detectar las transformaciones operadas en sus respectivos espacios y los posibles cambios en la visión del &quot;otro&quot; como consecuencia de la interacción. Descartados los extremos relacionales compuestos por una utópica ausencia absoluta de conflicto y la inexorabilidad de su ocurrencia propuesta por el modelo de la &quot;fricción interétnica&quot;, la detección de una importante complementariedad económica y de balance o -incluso- predomino de las sociedades indígenas en el poderío bélico-económico, brindan las herramientas necesarias para diseñar un modelo explicativo alternativo, denominado &quot;modelo de convivencia interétnica pacífica&quot;. Según éste, galeses, pampas y tehuelches, fueron capaces de articular sus respectivos intereses mediante la negociación y el intercambio pacífico de bienes como modos relacionales predominantes, lo que les permitió superar de forma duradera la potencial conflictividad inherente a toda interrelación social y configurar un espacio social, económico y cultural, con características propias e irrepetibles que lo distinguen de otras experiencias fronterizas.
      </span>
    </div>
    {/* Tesis 3 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Estrategias y tramas empresariales del sector frutícola en el Alto Valle del Río Negro (1930-2005)&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Glenda Miralles.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Graciela Gutman, Dra. Andrea Lluch, Dra. Graciela Blanco y Lic. María Inés Barbero.
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Lic. María Inés Barbero.
        </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 14/12/2012
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La Tesis se centró en la reconstrucción y el análisis de las estrategias empresariales desarrolladas por tres firmas frutícolas -que operan en el Alto Valle del río Negro- de diverso origen, con distintas formas de propiedad y de gestión organizacional, con el fin de establecer en qué medida los cambios en el entorno fueron condicionando (positiva o negativamente) la formulación de dichas estrategias. Las empresas son: Cervi e hijos S.A (empresa familiar constituida en la década de 1930), Expofrut S.A. (empresa transnacional nacida en la década de 1970) y Patagonian Fruits Trade S.A. (firma comercializadora que inició sus actividades a fines de la década de 1990). Se estudió la inserción, el posicionamiento y el desempeño de las mismas como parte de tramas frutícolas, con el fin de explicar su mayor o menor competitividad, analizando las relaciones de las firmas entre sí y con el resto de la cadena agroindustrial; desde las estrategias empresariales desplegadas y considerando los contratos y acuerdos realizados entre los distintos sujetos implicados. Se trabajó en función de la evolución de cada una de ellas, en lo que respecta a la producción, la industrialización, la comercialización, la estructura organizacional, las características pasadas y presentes de expansión, las característica de las tramas en las que operan y las relaciones entre empresas, productores primarios, clientes mercados, proveedores y organizaciones empresariales. Es relevante mencionar, que si bien las empresas poseen características diferenciadas, comparten algo en común: haber transitado exitosamente un período de profundas transformaciones, en el que un número significativo de firmas no logró adaptarse a las nuevas reglas de juego. Desde esta perspectiva, los estudios de caso ofrecieron evidencia empírica para la comprensión del proceso de nacimiento, desarrollo y reestructuración de la actividad agroindustrial regional.
      </span>
    </div>
  </div>
),

2013: (
  <div className="space-y-8">
    {/* Tesis 1 */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2013</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> La mies madura. Colonización agrícola y crecimiento económico en Santa Fe durante la segunda mitad del siglo XIX
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Juan Luis Martirén
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Julio Djenderedjian
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Eduardo Míguez, Dra. Hilda Sabato, Dr. Roy Hora y Dr. Julio Djenderedjian
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 15/04/2013
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La investigación tiene como propósito general analizar profundamente el proceso de colonización agrícola que tuvo lugar en Santa Fe durante la segunda mitad del siglo XIX. Se plantea una reinterpretación de las causas, el desarrollo y las consecuencias de múltiples procesos generados en torno este fenómeno de expansión agrícola que transformaría profundamente la economía provincial, teniendo siempre presente el mundo criollo en el que se insertó y al cual transformó, y la nueva economía nacional que contribuyó a formar. Para ello, se pone el foco en cuatro cuestiones principales: la formación y evolución de un mercado inmobiliario rural, el accionar de los empresarios de colonización, el proceso de acumulación y distribución de la riqueza inmobiliaria en las colonias y las bases estructurales de esa nueva economía farmer que este modelo impulsó.
      </span>
    </div>
    {/* Tesis 2 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Relaciones laborales paternalistas, identidad y clase obrera en la industria del cemento, Olavarría, 1940-1970.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Griselda Lemiez
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Daniel Dicósimo
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurado:</b> Dres. Juan Suriano, Silva Simonassi, Julio Melón Pirro y Daniel Dicósimo
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 12/11/2013
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        El principal objetivo y desafío propuesto en esta tesis doctoral fue intentar saldar parte del vacío que aparece en el análisis que estudia por un lado la historia de las empresas y la historia de los trabajadores, como campos separados cuando en realidad se encuentran estrechamente vinculados entre sí. Partimos de la industria del cemento como caso de análisis seleccionando tres empresas ubicadas en la zona serrana de la ciudad de Olavarría, centro de la provincia de Buenos Aires. Rescatando al trabajador como elemento central de la investigación hemos puesto énfasis en la relación laboral paternalista, intentando abordar aquellas variables que todavía quedan sin resolver, tratando de hallar ese vínculo fundamental y articulador que mencionábamos y que encontramos mediante el estudio del paternalismo industrial como forma de gestión empresarial. Es ahí precisamente donde nos encontramos con un patrón que diseña estrategias, plasmadas en un modelo empresarial conocido como sistema de fábrica con villa obrera, y en un grupo de trabajadores industriales que más allá de constituir una parte importante de la relación laboral, pasan a ser quienes dan vida y forma a este particular modelo empresarial.
      </span>
    </div>
    {/* Tesis 3 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Las políticas y las prácticas educativas del magisterio pampeano (1958-1966)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Silvia Castillo
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Lucía Lionetti
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurado:</b> Dres. Alejandro Cattaruzza, Adrián Ascolani, Paola Gallo y Lucía Lionetti
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 3/12/2013
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        Esta tesis doctoral desde una mirada histórica, busca abordar y reconstruir las políticas y las prácticas del magisterio pampeano entre 1958 y 1966, con la mira puesta en este actor colectivo. Problematiza el objeto de estudio a partir de la búsqueda de articulación y entrecruces de prácticas educativas, de normativas y de discursos políticos, explorándose las distancias y/o aproximaciones que existieron entre lo macro - las políticas educativas- y lo micro -la dinámica de las instituciones escolares. De tal modo que este trabajo exige una pluralización de repertorios de fuentes de consulta y una revisión de los criterios de periodización para atender al juego de continuidades, transformaciones, permanencias y cambios Más allá de lo prescripto, del discurso hegemónico impuesto por las disposiciones de las políticas de turno en la región pampeana, el magisterio como agentes sociales, resguardaría sus propias dinámicas de acción, con autonomía. Fueron, desde su lugar, activos participantes de la generación de una cultura escolar. Sin lugar a dudas, en esa experiencia histórica estudiada hubo permanencias y transformaciones o bien una suerte de hibridación en las prácticas educativas, construyéndose así regulaciones específicas en la intersección de las dinámicas del Estado, escuela y magisterio.
      </span>
    </div>
    {/* Tesis 4 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> De Militares a políticos. Los oficiales del Ejército Auxiliar del Perú y la carrera de la revolución, 1816-1831
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Alejandro Hernán Morea
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Valentina Ayrolo
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurado:</b> Dres. Alejandro Rabinovich, Gabriel Di Meglio, Eduardo Míguez y Valentina Ayrolo
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 29/11/2013
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        &quot;De militares a políticos&quot; da cuenta del proceso por el cual los oficiales del Ejército Auxiliar del Perú, lograron construir carreras políticas en los distintos estados surgidos de las Provincias Unidas del Río de la Plata, luego de su paso por esta fuerza militar. A partir de la reconstrucción del accionar de este ejército durante las llamadas &quot;guerras de independencia&quot;, y de identificar quienes efectivamente conformaron su cuerpo de oficiales entre 1810 y 1820, nos propusimos analizar de qué manera, algunos de los hombres que integraron esta fuerza, lograron abrirse paso en la actividad política y construir su &quot;carrera de la revolución&quot;. Al dar cuenta del accionar bélico y político del Ejército Auxiliar del Perú durante las guerras de independencia, tuvimos la posibilidad de repensar los objetivos de esta fuerza militar pero también de observar el importante rol desempeñado por algunos de sus integrantes durante las distintas coyunturas que experimentó el proceso revolucionario. Por otro lado, la reconstrucción del cuerpo de oficiales de este ejército nos permitió ver que muchos de estos hombres tuvieron una actuación destacada a partir de 1820. Esta cuestión es la que nos impulsó a tratar de entender de qué forma algunos de los hombres que habían pasado por el Ejército Auxiliar del Perú habían logrado constituirse en figuras importantes en el período de las autonomías provinciales y si su paso por esta fuerza militar había sido importante en esto. A lo largo de los primeros 4 capítulos es que tratamos de dar cuenta de las características de los hombres que conformaron la oficialidad del Ejército Auxiliar del Perú, de analizar su actuación durante la revolución y su comportamiento dentro del mismo ejército, así como también los vínculos y las relaciones construidas entre sí y con los integrantes de las elites de los distintos espacios por los que se desplazó el Ejército Auxiliar. Esto lo hicimos de la mano de revisitar y repensar el accionar bélico y político de esta fuerza durante el proceso revolucionario. Finalmente, en el último capítulo, fue que tratamos de demostrar a partir de la reconstrucción de algunas trayectorias específicas, como los oficiales del Ejército Auxiliar del Perú se valieron de los distintos capitales culturales y relacionales incorporados gracias a su paso por esta fuerza militar, para abrirse paso en los nuevos estados provinciales y lograr construir sus &quot;carreras de la revolución&quot;. Para la realización de esta tesis doctoral consultamos numerosos reservorios documentales. Entre ellos, los que más han aportado al corpus de fuentes principales con las que llevamos adelante esta investigación, se encuentran el Archivo General de la Nación (AGN) y en el Archivo Histórico de Tucumán (AHT). Asimismo ha sido muy valiosa la consulta de los fondos del Archivo Histórico del Museo Mitre así como también del Servicio Histórico del Ejército del Museo Histórico del Ejército.
      </span>
    </div>
    {/* Tesis 5 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Mandato divino y poder terrenal. La administración diocesana en el Obispado de Córdoba, 1778-1836
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> María Laura Mazzoni
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Valentina Ayrolo
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurado:</b> Dres. Roberto Di Stéfano, Jaime Peire, Melina Yangilevich y Valentina Ayrolo
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 13/12/2013
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        &quot;Mandato Divino y poder terrenal&quot; analiza las administraciones diocesanas del Obispado de Córdoba entre 1778 y 1836. Particularmente, el estudio se centra en la experiencia episcopal de Joseph Antonio de San Alberto, Ángel Mariano Moscoso, Rodrigo Antonio de Orellana y Benito Lascano. El análisis de las trayectorias de estos prelados es un mirador desde donde ingresar a otras cuestiones en función de comprender un período de transformaciones importantes en el espacio analizado. A través del estudio de las trayectorias personales de los prelados podemos confirmar el lugar medular que poseían, no sólo en la estructura administrativa eclesiástica, sino también en la vida política de esta comunidad. La experiencia de los obispos analizados aporta una nueva mirada sobre la intermediación social que estos funcionarios ejercían en la comunidad, entre fieles y sacerdotes, y entre los clérigos y las autoridades civiles y eclesiásticas. A lo largo de la Introducción y los cinco capítulos que estructuran la tesis, se analiza el derrotero de los prelados -formación, origen e influencias- y la trama de sus redes sociales dentro de la diócesis, así como las medidas de gobierno por las que bregaban. El estudio de las trayectorias personales nos permitió obtener información sobre el modo en que se seleccionaban candidatos para las mitras americanas, sobre cuáles eran los factores de peso a la hora de designar un prelado, y las diferencias que se establecían entre el gobierno de los obispos provenientes del clero regular y aquellos de origen secular. Los obispos se comportaron como eclesiásticos y como hombres políticos. Dos categorías que no eran excluyentes, y que no lo serían hasta finales del siglo XIX, cuando la profesionalización de la política desplazara a los sacerdotes de posiciones de gobierno. Para la realización de esta investigación se han consultado numerosos repositorios documentales. Entre ellos, los que han aportado el corpus principal de fuentes archivísticas se encuentran en Córdoba y se basan en los fondos documentales del Archivo del Arzobispado de Córdoba. Por otra parte, también se han consultado numerosos fondos del Archivo General de la Nación (AGN), y del Archivo General de Indias (AGI).
      </span>
    </div>
    {/* Tesis 6 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> El proceso histórico de la lepra en la Argentina. Estado y sociedad. Médicos y enfermos, 1900-1970
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Irene Delfina Molinari
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Dora Barrancos
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurado:</b> Dres. María Silvia Di Liscia, Mirta Lobato, Hernán Otero y Dora Barrancos
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 5/7/2013
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis analiza el proceso histórico de la lepra en el territorio argentino, entre 1900 y 1970. Para ello la tesis consta de ocho capítulos en donde se analiza las continuidades y cambios de las políticas públicas en torno a la profilaxis de la enfermedad, las prácticas médicas y de investigación de los dermatólogos, con la particularidad de la llegada en los años cuarenta de un nuevo medicamento, las sulfonas, que significó un punto de inflexión, en la forma de percibir la enfermedad. En la era presulfónica se priorizaron las medidas draconianas y cuyo máximo símbolo lo constituyeron los sanatorios-colonias. Al mismo tiempo, analizamos la acción de las damas del Patronato de Leprosos, que se convirtieron en sujetos de acción política a través de la experiencia en la asistencia y administración de los dispensarios y preventorios a su cargo. Los enfermos no fueron ajenos a nuestro análisis, planteando que fueron sujetos activos en un proceso de ampliación de la ciudadanía social.
      </span>
    </div>
  </div>
),

2014: (
  <div className="space-y-4">
    {/* Tesis 1 */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2014</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Un golpe muy particular. Problemas políticos en la crisis del gobierno de Arturo Frondizi y la presidencia de José María Guido&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Carlos Hudson
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dres, Daniel Mazzei, César Tcach, Hernán González Bollo y Estela Spinelli.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Directora:</b> Estela Spinelli
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 4/2/2014
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis revisa desde la perspectiva de la historia política el período que comprende desde el final del gobierno de Arturo Frondizi hasta el final del gobierno de José María Guido. Enmarcado en el ciclo político de la Revolución Libertadora, el proceso político que se estudia permite ver cómo se va produciendo un desplazamiento en la importancia de los elementos que aportan a la inestabilidad institucional. Desde la perspectiva histórica se reconstruyen detenidamente algunos episodios significativos, en particular los que tienen que ver con las jornadas que desembocaron en el derrocamiento de Frondizi y la asunción de la Presidencia por parte de Guido; también se analizan varios ejemplos que muestran las lógicas superpuestas que se oponían en el seno de las Fuerzas Armadas. Desde el punto de vista metodológico, la tesis trabaja con fuentes provenientes del Fondo Centro de Estudios Nacionales, sito en la Biblioteca Nacional, del Servicio Histórico del Ejército y de la prensa, tanto nacional como local.
      </span>
    </div>

    {/* Tesis 2 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Diferenciación socioeconómica y estrategias políticas de pecheros. El caso castellano en perspectiva política y social en los siglos XIV y XV&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Silvina Mondragón
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Carlos Astarita, Carlos Calderón, Octavio Colombo y Laura Da Graca.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Director:</b> Laura Da Graca
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 23-9-2014
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        A partir del estudio de los concejos de realengo de Zamora, Segovia, Cuenca, Ávila, Madrid y Ciudad Rodrigo, se analizó el grado de autonomía de la cultura política de los pecheros castellanos en el feudalismo tardío, sopesando la incidencia que en su vertebración tuvieron los mecanismos de diferenciación social que atravesaron el sector desde el siglo xiv. Asimismo, se consideró la interrelación que existía entre este proceso y la dimensión topográfica, ya que se sostiene que la acción política de los pecheros estuvo también condicionada por el espacio físico en el que se concretaba: el de los concejos rurales o el de los urbanos, ya que esto determinaba el desarrollo de sublógicas diferenciadas de poder político –no necesariamente formalizado en instituciones monárquicas– que eran, a su vez, producto de los mecanismos de reproducción socioeconómica de los no privilegiados.
      </span>
    </div>

    {/* Tesis 3 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> &quot;Representaciones sociales en torno a las sociedades indígenas en la historia escolar: el caso de la provincia de Catamarca (1957-2010)&quot;
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> José Vera
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Alejandro Isla, María Paula González, Sara Ortelli y Diana Mazzanti.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Director:</b> Diana Mazzanti
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 16-12-2014
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La investigación analizó la historia escolar sobre las sociedades indígenas que habitaron –y habitan– la provincia de Catamarca. Se buscó evidenciar cómo fue elaborada e institucionalizada una narrativa del pasado catamarqueño centrada en “los diaguitas”. Para ello, se expuso un análisis retrospectivo de aquellos contenidos afines al pasado provincial y a las sociedades indígenas que fueran diagnosticadas mediante el estudio del proceso de enseñanza observado en el año 2010 en las escuelas ubicadas en los departamentos Andalgalá y Pomán. Las características del objeto abordado demandaron un marco de análisis interdisciplinario entre historia, arqueología, antropología social, pedagogía y folklore que ayudó a dar cuenta de la complejidad inherente a contenidos disciplinares insertos en tecnologías de educación de la memoria social.
      </span>
    </div>
  </div>
),

2016: (
  <div className="space-y-4">
    {/* Tesis 1 */}
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2016</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> “La posición de la Argentina en la Guerra del Chaco (1932-1935). Variables internas y externas como condicionantes de la política exterior”
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Maximiliano Zuccarino
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Beatriz Solveira, Dra. Beatriz Figallo, Dr. Daniel Dicósimo y Mg. José María Araya.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Directora:</b> Mg. José María Araya
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 18-3-2016
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        El tema central de la Tesis Doctoral refiere al estudio de la multiplicidad de variables, tanto internas (propias del modelo de desarrollo político-económico adoptado) como externas (derivadas del contexto internacional, hemisférico y regional imperantes) que incidieron en el posicionamiento internacional del Gobierno argentino presidido por el General Agustín P. Justo -secundado por quien fuera su Canciller, Carlos Saavedra Lamas- ante el conflicto internacional conocido como Guerra del Chaco (1932-1935) y las posteriores negociaciones de paz, llevadas a cabo íntegramente en Buenos Aires, las cuales concluirían formalmente en enero de 1939. De esta manera, desde una perspectiva histórica, se aborda el análisis de la política exterior argentina a partir de un estudio de caso en que la misma fue modelada por las particularidades propias de la política y economía nacionales -caracterizadas por la restauración conservadora tras el golpe de Estado de 1930 y el reforzamiento del modelo agroexportador a partir de la firma del Pacto Roca-Runciman en 1933- así como por el contexto de crisis a nivel internacional y la histórica rivalidad político-diplomática y económica mantenida con los Estados Unidos y Brasil por el predominio a nivel hemisférico y regional respectivamente.
      </span>
    </div>
    {/* Tesis 2 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> “Los inmigrantes italianos en el Territorio Nacional de La Pampa: Sociedades de Socorros Mutuos, política local y religión (1892-1942)”
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Mariana Annecchini
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Mónica Bjerg, Dr. Alejandro Fernández, Dr. Marcelino Iriani y Dr. Hernán Otero.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Director:</b> Dr. Hernán Otero
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de Defensa:</b> 6-4-2016
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La línea de indagación que orienta la tesis es el impacto del proceso migratorio en el Territorio Nacional de la Pampa. Dentro de este proceso, focalizamos nuestro interés en los lugares que las sociedades de socorros mutuos, la política local y la religión ocuparon en los procesos de construcción identitaria de la primera y segunda generación de inmigrantes italianos que se instalaron en el Territorio. Nuestro eje de atención esta puesto en las experiencias de los inmigrantes, en sus múltiples identidades, en las relaciones sociales que establecieron con los connacionales y con otros grupos en la sociedad de recepción, como así también en las prácticas que prevalecieron o perdieron. Si bien estos aspectos nos permiten pensar el proceso migratorio desde una perspectiva pluralista, no dejamos de lado las estrategias de adaptación que los inmigrantes formularon. El texto recorre un arco temporal que comprende la última década del siglo XIX y las primeras décadas del siglo XX, momento en el que el espacio pampeano comenzó a adquirir una dinámica demográfica inmigratoria y a definir su fisonomía política, económica, social y religiosa. Partimos puntualmente de 1892, año de la fundación de Santa Rosa y década en la que el Territorio recibió los primeros aportes de inmigrantes ultramarinos. A partir de la década de 1930 la incidencia de los migrantes en el Territorio descendió debido, fundamentalmente, a la interrupción de los flujos poblacionales del exterior. En este marco el cierre de nuestra indagación se produce en 1942, momento en el que se llevó a cabo el tercer censo territoriano que registró un claro descenso de la población extranjera en todo el Territorio. En cuanto al recorte espacial nos centramos de manera puntual en tres localidades de la franja Este territoriana: Santa Rosa, Trenel y Eduardo Castex, donde la inmigración transoceánica, fundamentalmente la española e italiana, desempeñó un rol significativo en el proceso de conformación de la sociedad local, aunque con un peso demográfico diferente.
      </span>
    </div>
    {/* Tesis 3 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> “Conservadores y Radicales en el “Interior” Bonaerense (Ayacucho, Azul, Lobería y Tandil, 1910-1943)”
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Leonardo Fuentes
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Marcela Ferrari, Dr. Fernando Barba, Julio Melón y Dr. Estela Spinelli.
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Director:</b> Dra. Estela Spinelli
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 24-6-2016
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        Esta investigación aborda la historia política de la provincia de Buenos Aires durante el periodo 1910-1943, a través del accionar de las dos principales agrupaciones partidarias entonces en pugna, la Unión Cívica Radical y el Partido Conservador, centrando su estudio en la dimensión local. Analizando distintos municipios -escenarios fundamentales de la lucha por los sufragios-, nos propusimos relevar mejor la complejidad de ámbitos, actores y prácticas que caracterizaban la vida política bonaerense en el periodo mencionado y dejar de lado estereotipos y generalizaciones. Varios trabajos recientes han analizado a las mencionadas fuerzas políticas, proporcionando mucha información sobre ellas, aunque principalmente desde un punto de vista nacional o provincial. Por lo cual, en nuestro estudio privilegiamos el nivel local: tomamos cuatro partidos (distritos) del centro-sur de la Provincia de Buenos Aires –Ayacucho, Azul, Lobería y Tandil-, tratando de indagar fundamentalmente porque una u otra agrupación concitó un apoyo mayoritario en determinados lugares durante todo este periodo, mientras que en otros se produjeron importantes cambios en las preferencias del electorado. Ello nos posibilitó una observación nítida de ciertos aspectos, como las tensiones permanentes que sufrían la U.C.R. y el Partido Conservador, los reposicionamientos de los distintos actores, las estrategias personales y colectivas, las vinculaciones extrapartidarias, etc.
      </span>
    </div>
    {/* Tesis 4 */}
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> “Debates en la transición democrática. ‘UNIDOS’ y el proyecto de refundar el peronismo: pensamiento, proyecto político y práctica militante”
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> María Teresa Brachetta
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Vicente Palermo, Dr. Gerardo Aboy Carlés, Dra. Estela Spinelli, Dra. Beatriz Bragoni
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Beatriz Bragoni
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 15-07-2016
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La Tesis aborda la conformación del núcleo que publicó Unidos, revista emblemática de la transición democrática argentina, los contenidos de la publicación, sus debates, la particular relación que estableció entre acción militante y labor intelectual, su compleja vinculación con la Renovación peronista y su interacción con otras revistas de distinto signo ideológico que contribuyeron a dar densidad al debate público de los años 80. La investigación intenta así desarrollar una aproximación particular entre la historia de los intelectuales y el análisis específico de la publicación, al comprender tanto el análisis de la publicación como la reconstrucción e interpretación del proceso de constitución y funcionamiento de un grupo político intelectual.
      </span>
    </div>
  </div>
),

2017: (
  <div className="space-y-4">
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2017</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> “La dinastía norteña de Omrí y la ruptura con el pasado hebreo (ca. 883-841 a. C.)”
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Magdalena Magneres
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dr. Ianir Milevski, Dra. Andrea Seri, Dra. Mercedes L García Bachmann, Dr. Marcelo Campagno
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Director:</b> Dr. Marcelo Campagno
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 11-12-2017
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis aborda la dinámica sociopolítica de la dinastía omrita en el siglo IX a. C. en el sur de Levante. Indaga sobre los mecanismos de interacción con la sociedad hebrea tradicional a partir de tres tipos de evidencias tangibles analizadas en la Edad del Hierro II: texto y contexto arqueológico y epigráfico. Las relaciones con el discurso histórico revelan un abordaje multidisciplinar complejo para el mundo antiguo cercano-oriental. Para ello se enfoca en la problemática relación entre estudios bíblicos y registro arqueológicos de las ciudades fundadas por estos reyes. Las tramas que perfilan un enfrentamiento a partir de la concepción de la propiedad de la tierra y la lógica de poder que impone esta dinastía con sus habitantes.
      </span>
    </div>
  </div>
),

2018: (
  <div className="space-y-8">
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2018</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> “Agentes de cambio. El clero secular, las comunidades y las instancias de poder en la construcción de la estructura eclesiástica de Buenos Aires en la segunda mitad del siglo XIX”
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Lucas Matías Bilbao
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. María Elena Barral, Dres. Jaime Peire y Eduardo Míguez, Dra. Melina Yangilevich
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Melina Yangilevich
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 23-03-2018
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis aborda, desde una perspectiva de la historia social, el lugar de la Iglesia católica en la sociedad rural de Buenos Aires, en la segunda mitad del siglo XIX. Centrada en las parroquias rurales y en sus párrocos, busca dimensionar el papel de los agentes y estructuras eclesiásticas en el período de conformación y/o consolidación. Se reconstruyeron los modos de intervención social de los curas rurales, sus vínculos con las autoridades políticas locales y con las feligresías, así como el papel de estas últimas en la reformulación del catolicismo y la religiosidad. Se analizó el entramado institucional y material de la Iglesia católica en esta región, evidenciando el significativo avance de la “territorialización eclesiástica” en el período. Al mismo tiempo se realizó un abordaje del clero (en su mayor parte, inmigrantes) de manera cuantitativa y cualitativa, profundizando en sus trayectorias, distribución en la geografía eclesiástica, períodos de permanencia y características del ejercicio de su jurisdicción.
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> “Las empresas estatales extractivas y la configuración de identidades sociales ligadas al mundo del trabajo en la Patagonia Austral a lo largo del siglo XX: origen, desarrollo y desarticulación”
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Daniel Antonio Cabral Marques
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Inés Barbero, Dra. Andrea Lluch, Dr. Daniel Dicósimo, Dra. Susana Bandieri
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Susana Bandieri
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 28-03-2018
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La investigación aborda el impacto social que en el ámbito de la Patagonia Austral significó el establecimiento de grandes empresas estatales que, bajo la modalidad de enclaves productivos, se orientaron a la explotación de los recursos mineros e hidrocarburíferos de la región. Analiza para ello los procesos de organización y expansión de las iniciativas de intervención social llevadas a cabo en toda el área por las empresas estatales vinculadas a la explotación petrolera desde su establecimiento en la región durante el período territoriano, examinando el rol preponderante que tuvieron las políticas sociolaborales y otras modalidades de acción empresaria, como elementos constitutivos de un conjunto de mecanismos de regulación que contribuyeron a definir la emergencia de fuertes identidades colectivas sobre la población trabajadora.
      </span>
    </div>
  </div>
),

2019: (
  <div className="space-y-8">
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2019</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Cartografía árabes. Trayectorias, territorialidad y redes sociales de inmigrantes sirio-libaneses en la Patagonia septentrional (1900-1955)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Matías Chávez
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Mónica Bjerg, Dr. Alejandro Fernández, Dr. Hernán Otero, Dr. Julio Vezub
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Director:</b> Dr. Julio Vezub
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 25-11-2019
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        En esta tesis se abordan las experiencias de los inmigrantes árabes en el sur de Río Negro y en el norte de Chubut, durante la primera mitad del siglo XX. La investigación se ubica en la intersección de los estudios migratorios, la ocupación del espacio, las acciones de los agentes estatales y las relaciones entre inmigrantes, indígenas y criollos. Se parte de la metáfora “Cartografías árabes” para pensar los modos específicos en que los sirio-libaneses intentaron proyectar nuevas configuraciones territoriales, desplegando redes colectivas que articularon intereses individuales. Se reconstruyen trayectorias de comerciantes árabes superando las lecturas moralizantes que han predominado, al mismo tiempo que se indagan criterios que ayuden a explicar la eficacia de su ascenso económico-social. En este sentido, se analizan las estrategias sociopolíticas de los comerciantes sirio-libaneses en relación con el capital privado de mayor escala, los funcionarios estatales y los grupos subalternos de la región, prestando especial atención a sus disputas territoriales.
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Portadores de cristianismo y civilización. Historia y representaciones de las misiones católicas en Argentina (Segunda mitad del siglo XIX)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Rocío Guadalupe Sánchez
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Valentina Ayrolo, Dr. Ignacio Martínez, Dr. Diego Mauro, Dra. Miranda Lida
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Directora:</b> Miranda Lida
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 18-12-2019
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        En la tesis se analiza la relación Iglesia-Estado-sociedad, a partir del estudio de las misiones católicas desarrolladas en la Argentina de la segunda mitad del siglo XIX. Para ello, se enfoca en tres ejes de análisis, a saber, los promotores o solicitantes, las fuentes de financiamiento y las implicancias sociales de un conjunto de misiones tales como las franciscanas de los Colegios de Propaganda Fide en la región del “Gran Chaco” y en la frontera Sur cordobesa, las episcopales y lazaristas en la campaña bonaerense y, en menor medida, las salesianas en Pampa y Patagonia. La tesis se divide en dos partes precedidas con un capítulo general introductorio en el que se presentan los orígenes de las misiones, el legado del período colonial en relación con los patronatos ibéricos y los programas misionales desarrollados en Hispanoamérica y, especialmente, en el territorio argentino. La primera parte se ocupa de las realizaciones concretas de las misiones y en la segunda se indaga un conjunto de debates y discusiones en diferentes escenarios sobre las misiones estudiadas.
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> El Rosismo y el antirrosismo en el interior. Tucumán en tiempos de la Federación (1832-1840): guerra, actores, prácticas y lenguajes
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Emmanuel Parrado
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Jurado:</b> Dra. Valentina Ayrolo, Dr. Gustavo Paz, Dr. Eduardo Míguez, Dra. Beatríz Bragoni
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Beatriz Bragoni
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 21-06-2019
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        La tesis analiza el comportamiento político de los rosistas y antirrosistas en el norte argentino entre 1832-1838, momento en el cual se plantearon proyectos de organización nacional en el Río de la Plata. El trabajo intenta retomar una vieja hipótesis historiográfica y actualizarla a los nuevos debates, poniendo en evidencia el comportamiento soberano de Tucumán y las provincias del norte y su vinculación con Buenos Aires, a la luz del estudio de los caudillos y la movilización política, la representación, la construcción y legitimidad del poder y el lenguaje político mediante el análisis de la retórica de los gobernadores.
      </span>
    </div>
  </div>
),

2020: (
  <div className="space-y-8">
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2020</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Trabajadores por cuenta propia en la industria metalúrgica y metalmecánica en el Partido de Tandil desde mediados de la década de 1970 hasta 2003
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Stella Cavalleri
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Prof. Nicolás Iñigo Carrera (UBA)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Héctor Palomino (UBA), Dra. Silvia Simonassi (UNR), Dr. Daniel Dicósimo (IEHS-UNICEN)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 16 de noviembre de 2020
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Pugna política y movilización pluriétnica en el contexto revolucionario. La guerrilla pincheirina en las fronteras surandinas (1818-1832)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Carla Manara
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Susana Bandieri (UNComa)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Claudia Salomón Tarquini (UNLPam/CONICET), Dra. Silvia Ratto (UNQ/CONICET) y Dra. María Laura Cutrera (Instituto Ravignani/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 18 de noviembre de 2020
      </span>
      <span className="block text-[#555] text-justify leading-relaxed mt-2">
        Los movimientos de independencia en el espacio chileno y rioplatense profundizaron paulatinamente la pugna entre “realistas” y “patriotas, generando un período de extrema violencia y anarquía, conocido como “Guerra a Muerte”, entre 1818 y 1832. La lucha por el poder sobrepasó los centros capitalinos, como Santiago de Chile, Buenos Aires y Lima, y se expandió por las áreas rurales hasta internarse fronteras adentro, trastocando el orden y los vínculos tradicionales. Durante estos años, los espacios fronterizos del sur se convirtieron en el centro operativo de una guerrilla pro-realista contrarrevolucionaria, organizada en montoneras pluriétnicas con capacidad de movilización a ambos lados de la cordillera en forma simultánea, cuestión central que demostramos en esta Tesis Doctoral. <br />
        Esta guerrilla estuvo dentro de los planes de Fernando VII para frenar los avances de los liberales separatistas y contó con una amplia red de colaboradores que potenciaron su logística, entre los que destacamos la participación de diversas poblaciones indígenas de la Araucanía, norpatagonia y pampas como factor estratégico. Esta organización de fuerzas realistas estuvo inicialmente liderada por Vicente Benavides, y a partir de 1824, por José Antonio Pincheira, coincidiendo con el traslado de las montoneras al este andino. El estudio de estos “otros&quot; liderazgos emergentes en el proceso estudiado redefine el rótulo de “bandidos” impuesto por la historiografía argentina y chilena. Así, la Guerra a Muerte se prolongó hasta 1832 e incidió directamente en el proceso de formación y consolidación de los nuevos estados de Argentina y Chile, poniendo en evidencia la complejidad de la transición del orden colonial al orden republicano. Finalmente, la lucha revolucionaria tiene otra lectura a la luz de la contrarrevolución.
      </span>
    </div>
  </div>
),

2021: (
  <div className="space-y-8">
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2021</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> ¿De quién es el pasado ranquel? La construcción de campos de interlocución en la reemergencia indígena. La Pampa y San Luis, 1970-2014
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Anabela Abbona
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Claudia Salomón Tarquini (UNLPam/CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dr. Walter Delrío (UNComa/CONICET), Dra. Nidia Nacuzzi (UBA/CONICET), Dr. Marcelino Iriani (IEHS-UNICEN/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 18 de marzo de 2021
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Iglesia y Poder político a comienzos del siglo XXI: Argentina 1999-2009, un acercamiento desde la prensa periódica nacional
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Fernando Urquiza
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Juan Cruz Esquivel (CEIL/CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dr. José Zanca (UNR/CONICET), Dr. Mariano Fabris (UNMdP/CONICET), Dra. Olga Echeverría (IEHS-UNICEN/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 19 de marzo de 2021
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Los primeros policías de la ciudad de Buenos Aires. Funciones, materialidades y territorios (1772-1825)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Agustina Vaccaroni
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Valeria Ciliberto (UNMdP/CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dr. Alejandro Agüero (UNC/CONICET), Dr. Diego Galeano (PUCRío), Dra. Melina Yangilevich (IEHS-UNICEN/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 26 de mayo de 2021
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Bajo la égida del museo científico: de la diplomacia a la profesionalización entre Mar del Plata y la Lobería Grande (1925-1980)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Irene Brichetti
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Ricardo Pasolini (IEHS-UNICEN/CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Élida Blasco (Instituto Ravignani/CONICET), Dr. Máximo Farro (UNLP/CONICET), Dra. Lucía Lionetti (IEHS-UNICEN)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 7 de junio de 2021
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Sirio-libaneses en el temprano poblamiento del noroeste del Chubut. Redes parentales y comerciales en un complejo proceso de asociacionismo y conflictividad, 1900-1950
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Gabriela Macchi
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Marcelino Iriani
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dr. Xosé Manoel Núñez Seixas (Universidad de Santiago de Compostela), Dr. Alejandro Fernández (UNLP), Dr. Joaquín Perren (UNComa/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 27 de agosto de 2021
      </span>
    </div>
  </div>
),

2022: (
  <div className="space-y-8">
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2022</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Configuraciones del nacionalismo a mediados del siglo XX. Itinerarios Intelectuales e instituciones culturales: la experiencia mendocina en la encrucijada nacional e internacional
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Celina Fares
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Fernando Devoto
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dr. Daniel Lvovich (UNGS/CONICET), Dr. Martín Vicente (UNMdP/CONICET), Dr. Julio Melón Pirro (IEHS-UNICEN)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 16 de diciembre de 2022
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Los trabajos de limpieza e higiene sanitaria frente a la crisis de la sociedad salarial: género y precarización laboral en el sector de servicios de salud municipal. Tandil, 1990-2020
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Florencia Minardo
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Daniel Dicósimo (IEHS-UNICEN)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Andrea Andújar (UBA-CONICET), Dra. Inés Pérez (UNMdP/CONICET), Dra. Marina Adamini (IEHS-UNICEN/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 15 de marzo de 2022
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Dinámicas institucionales y políticas del Poder Judicial en la formación de la Provincia de La Pampa, 1953-1973
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Hernán Bacha
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Marisa Moroni (UNLPam/CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dr. Ernesto Bohoslavsky (UNGS/CONICET), Dr. Germán Soprano (UBA/CONICET), Dra. Gisela Sedeillan (IEHS-UNMdP/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 8 de julio de 2022
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Configuraciones y trayectorias culturales e intelectuales: género, clase y grupos etarios (Azul, 1920-1960)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> María Soledad González
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Olga Echeverría (IEHS-UNICEN/CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Ana Clarisa Agüero (UNC/CONICET), Dra. Paula Caldo (UNR/CONICET), Dr. Ricardo Pasolini (IEHS-UNICEN/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 4 de agosto de 2022
      </span>
    </div>
  </div>
),

2023: (
  <div className="space-y-8">
    <div>
      <span className="inline-block text-lg font-bold text-[#134e5e] mb-2">2023</span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Emanciparse para preservar la costumbre: El orden natural católico en el Paraguay (1779-1840)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> José Ignacio WasingerEspro
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Gustavo Paz (Instituto Ravignani/CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dr. Jorge Troisi-Meleán (UNLP), Emir Reitano (UNLP), Dr. Juan Ignacio Quintián (UNICEN)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 13 de diciembre de 2023
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Estado y política. Sobre las formas estatales de tramitar la conflictividad social, 1997-2002
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Guillermina Laitano
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Daniel Dicósimo (IEHS-UNICEN)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Andrea Andújar (UBA/CONICET), Dr. Gonzalo Pérez Álvarez (UNP/CONICET), Luciano Barandiarán (UNICEN-CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 17 de febrero de 2023
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Herederas. Prácticas hereditarias de pequeños y medianos propietarios de Luján desde una perspectiva de género (mediados del siglo XVIII - principios del XIX)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Romina Soledad Coronello
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Directora:</b> Dra. Valeria Ciliberto (UNMdP/CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Marcela Aguirrezabala (UNS), Dra. Jaqueline Vasallo (UNC/CONICET), Dra. Lucía Lionetti (IEHS-UNICEN)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 3 de octubre de 2023
      </span>
    </div>
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> El catolicismo social en la Argentina y México: orígenes, instituciones, figuras
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Mariana Elisabet Funkner
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Roberto Di Stéfano
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Cecilia Bautista García (UMSNH), Dr. Diego Mauro (UNR/CONICET), Dr. José Zanca (UNR/CONICET)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 30 de octubre de 2023
      </span>
    </div>
  </div>
),

2024: (
  <div className="space-y-8">
    <div>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Título:</b> Sociedad rural, sociedad urbana y fiestas populares. La Construcción de representaciones e identidades en el campo bonaerense (1969-1999)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Tesista:</b> Silvana Villanueva
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Director:</b> Dr. Luciano Barandiarán (UNICEN-CONICET)
      </span>
      <span className="block text-[#134e5e]">
        <b className="text-[#f9623e]">Jurados:</b> Dra. Sandra Fernández (UNR/CONICET), Dr. Matías Casas (UNTREF/CONICET), Dra. Paola Gallo (IEHS-UNICEN)
      </span>
      <span className="block text-[#15394b]">
        <b className="text-[#f9623e]">Fecha de defensa:</b> 23 de febrero de 2024
      </span>
    </div>
  </div>
),
};

export default function GraduadosDoctorado() {
  const [tab, setTab] = useState("premiadas");
  const [acordeonAbierto, setAcordeonAbierto] = useState<number | null>(null);

  return (
    <section className="relative flex flex-col items-center justify-center py-16 px-1 md:px-0 bg-gradient-to-br from-[#e7f5fa] via-white to-[#e8f2f9] rounded-3xl shadow-xl">
      {/* Título grande y subtítulo */}
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center mb-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center tracking-tight leading-[1.18] bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow">
               Egresados del Doctorado
        </h2>


        <span className="mt-1 text-lg md:text-xl text-[#22677e] font-semibold text-center opacity-80">
          Tesis defendidas y premiadas | 2000-2024
        </span>
      </div>

      {/* Tabs + tabla contenidas */}
      <div className="relative w-full max-w-5xl mx-auto px-0 py-0 select-none">
        <div className="flex justify-center mb-8">
          <button
            className={`px-8 py-3 text-lg font-bold rounded-t-2xl shadow transition-all duration-200 ${
              tab === "premiadas"
                ? "bg-[#f9623e] text-white shadow-lg scale-105"
                : "bg-[#e7f5fa] text-[#134e5e] hover:bg-[#ffe5d6] opacity-90"
            }`}
            onClick={() => setTab("premiadas")}
          >
            Tesis Premiadas
          </button>
          <button
            className={`px-8 py-3 text-lg font-bold rounded-t-2xl shadow transition-all duration-200 ml-2 ${
              tab === "egresados"
                ? "bg-[#134e5e] text-white shadow-lg scale-105"
                : "bg-[#e7f5fa] text-[#134e5e] hover:bg-[#c6e6ff] opacity-90"
            }`}
            onClick={() => setTab("egresados")}
          >
            Egresados del Doctorado
          </button>
        </div>
        <div className="relative bg-white/95 rounded-b-3xl rounded-t-xl shadow-xl border border-[#e7f5fa] p-8 min-h-[330px]">
          {/* Tesis Premiada */}
          {tab === "premiadas" && (
            <section
              id="tesis-premiadas"
              className="bg-white rounded-xl shadow-lg border border-[#f9623e] p-8 mb-10"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#f9623e] mb-4 tracking-wide">
                Tesis Doctorales Premiadas
              </h3>
              <ul className="space-y-5">
               <li>
              <span className="text-[#15394b] font-semibold">Sonia Tell</span>, 
              <span className="text-[#134e5e]">&quot;Persistencia y transformaciones de una sociedad rural. Córdoba entre fines de la colonia y principios de la república&quot;</span>,
              <span className="font-bold text-[#f9623e]"> obtuvo el Premio a la Mejor Tesis Doctoral en el marco del I Concurso organizado por la Asociación Argentina de Historia Económica, 2006.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Laura Méndez</span>, 
              <span className="text-[#134e5e]">&quot;Actividades económicas y organización social en espacios de frontera. Bariloche 1880-1935: de pueblo de frontera a centro turístico internacional&quot;</span>, 
              <span className="font-bold text-[#f9623e]"> obtuvo la primera mención en el I Concurso a la mejor tesis doctoral organizado por la Asociación Argentina de Historia Económica, 2006.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">María Sol Lanteri</span>, 
              <span className="text-[#134e5e]">&quot;Un vecindario federal. La construcción del orden rosista en la frontera sur de Buenos Aires. Un estudio de caso (Azul y Tapalqué)&quot;</span>, 
              <span className="font-bold text-[#f9623e]"> premio a la Mejor Tesis Doctoral, Centro de Estudios Históricos &quot;Prof. Carlos S. A. Segreti&quot;, 2010.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Joaquín Perren</span>, 
              <span className="text-[#134e5e]">&quot;Itinerarios migratorios. Integración en el Neuquén aluvional (1960-1991)&quot;</span>, 
              <span className="font-bold text-[#f9623e]"> mención especial en el concurso a la Mejor Tesis Doctoral, Centro de Estudios Históricos &quot;Prof. Carlos S. A. Segreti&quot;, 2010.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Valeria D´Agostino</span>, 
              <span className="text-[#134e5e]">&quot;Estado y propiedad de la tierra. Instituciones, derechos, leyes y actores sociales. El caso de los partidos de Arenales y Ayacucho (Provincia de Buenos Aires, Argentina), 1824-1904&quot;</span>, 
              <span className="font-bold text-[#f9623e]"> obtuvo el Premio a la Mejor Tesis Doctoral en el marco del III Concurso organizado por la Asociación Argentina de Historia Argentina, 2010.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Juan Luis Martirén</span>, 
              <span className="text-[#134e5e]">&quot;La mies madura. Colonización agrícola y crecimiento económico en Santa Fe durante la segunda mitad del siglo XIX&quot;</span>, 
              <span className="font-bold text-[#f9623e]"> obtuvo el Premio a la Mejor Tesis Doctoral en el marco del IV Concurso organizado por la Asociación Argentina de Historia Argentina, 2014.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Irene Molinari</span>, 
              <span className="text-[#134e5e]">&quot;El proceso histórico de la lepra en la Argentina. Estado y sociedad. Médicos y enfermos, 1900-1970&quot;</span>, 
              <span className="font-bold text-[#f9623e]"> obtuvo el Premio Anual a Tesis doctorales de la Red de Viejas y Nuevas Enfermedades en el marco del VI Congreso de la Asociación Latinoamericana de Población (ALAP), Lima, Perú, 2014.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Ana María Troncoso</span>, 
              <span className="text-[#134e5e]">&quot;Todavía No. El proyecto civilizador entre las prácticas sociales y las estrategias de resistencia, de negociación y de apropiación en la meseta norte chubutense (1900-1970)&quot;</span>, 
              <span className="font-bold text-[#f9623e]"> obtuvo el Premio a la Tesis de Doctorado del Fondo Editorial de la Honorable Legislatura del Chubut, 2015.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Daniel Antonio Cabral Marques</span>, 
              <span className="text-[#134e5e]">&quot;Las empresas estatales extractivas y la configuración de identidades sociales ligadas al mundo del trabajo en la Patagonia Austral a lo largo del siglo XX: Origen, desarrollo y desarticulación&quot;</span>, 
              <span className="font-bold text-[#f9623e]"> obtuvo el premio a la Mejor Tesis Doctoral en el marco del VII concurso organizado por la Asociación Argentina de Historia Económica, 2020.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Lucas Bilbao</span>, 
              <span className="text-[#134e5e]">“La construcción del entramado eclesiástico a través del clero secular. Iglesia, Estado y sociedad en la campaña bonaerense, segunda mitad del siglo XIX”</span>, 
              <span className="font-bold text-[#f9623e]"> recibió la Segunda Mención de Honor en el marco del I Premio Jorge Gelman a la Mejor Tesis Doctoral en Historia Rural, conferido por la Sociedad de Estudios de Historia Agraria (SEHA), España, 2020.</span>
            </li>
            <li>
              <span className="text-[#15394b] font-semibold">Agustina Vaccaroni</span>, 
              <span className="text-[#134e5e]">“Los primeros policías de la ciudad de Buenos Aires. Funciones, materialidades y territorios (1772-1825)”</span>
              <span className="font-bold text-[#f9623e]"> recibió el primer premio en el marco del Cuarto Premio de Investigación Doctoral en Historia del Derecho en América Latina, organizado por la editorial Tirant Lo Blanch, México, 2022.</span>
            </li>
              </ul>
            </section>
          )}
          {/* Egresados del Doctorado */}
          {tab === "egresados" && (
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold mb-4 text-[#134e5e]">
                Egresados del Doctorado <span className="text-base text-[#888]">(2000-2024)</span>
              </h3>
              <div className="divide-y divide-[#e7f5fa] rounded-lg">
                {ANIOS.filter(anio => EGRESADOS[anio]).map(anio => (
                  <div key={anio} className="py-2">
                    <button
                      className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-[#f7fafc] transition font-bold text-lg text-[#134e5e] focus:outline-none"
                      onClick={() => setAcordeonAbierto(acordeonAbierto === anio ? null : anio)}
                    >
                      <span>{anio}</span>
                      <svg
                        className={`w-6 h-6 transform transition-transform ${
                          acordeonAbierto === anio ? "rotate-90 text-[#f9623e]" : "rotate-0 text-[#bbb]"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 6l6 6-6 6" />
                      </svg>
                    </button>
                    {acordeonAbierto === anio && (
                      <div className="pl-7 py-3 bg-[#f9f9fd] rounded-xl shadow-inner mt-1 animate-fade-in space-y-2">
                        {EGRESADOS[anio] ? (
                          EGRESADOS[anio]
                        ) : (
                          <span className="text-[#aaa]">No hay datos de egresados para este año.</span>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Keyframes para fade-in suave */}
              <style jsx>{`
                @keyframes fade-in {
                  from { opacity: 0; transform: translateY(-10px);}
                  to   { opacity: 1; transform: translateY(0);}
                }
                .animate-fade-in { animation: fade-in 0.2s ease; }
              `}</style>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}