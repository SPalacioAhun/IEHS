export default function Proyectos() {
  const lineas = [
    {
      titulo:
        "Sociedades de frontera en el Río de la Plata, siglos XVI–XIX",
      director: "Dr. Marcelino Iriani (director)",
    },
    {
      titulo:
        "Culturas políticas, sensibilidades sociales, y política de las costumbres en Argentina (1880–1950)",
      director: "Dr. Ricardo Pasolini (director)",
    },
    {
      titulo:
        "Agencias, agentes, sociedad y territorio en la provincia de Buenos Aires (1852–1910)",
      director: "Dra. Melina Yangilevich (directora)",
    },
    {
      titulo:
        "Memorias en común: archivos personales e institucionales como patrimonio de las comunidades",
      director: "Dra. Yolanda de Paz Trueba (directora)",
    },
  ];

  return (
    <section className="p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
      <header className="mb-6 text-center">
        <span className="inline-block text-xs tracking-wide uppercase font-semibold text-[#134e5e] bg-[#134e5e]/10 px-3 py-1 rounded-full">
          IEHS
        </span>
        <h2 className="text-3xl font-extrabold text-[#134e5e] mt-3">
          Proyectos y Líneas de Investigación
        </h2>
       
      </header>

      <ul className="grid gap-5 sm:grid-cols-2">
        {lineas.map((l, i) => (
          <li
            key={i}
            className="group relative rounded-xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 shadow-[0_1px_0_#eaeaea] hover:shadow-md hover:-translate-y-0.5 transition"
          >
            {/* Accent bar */}
            <span className="absolute inset-x-0 -top-px h-1 rounded-t-xl bg-gradient-to-r from-[#134e5e] via-[#1d7085] to-[#39a3b6] opacity-80" />

            <div className="flex items-start gap-3">
              {/* Icono simple sin dependencias */}
              <svg
                className="mt-1 h-5 w-5 flex-none text-[#134e5e] opacity-90"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 12l4 4L19 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <div>
                <h3 className="text-[1.05rem] font-semibold text-[#15394b] leading-snug">
                  {l.titulo}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{l.director}</p>
              </div>
            </div>

            {/* Hover underline suave */}
            <div className="mt-4 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition" />
          </li>
        ))}
      </ul>
    </section>
  );
}

