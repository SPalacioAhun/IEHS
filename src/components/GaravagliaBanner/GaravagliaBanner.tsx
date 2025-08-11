export default function GaravagliaBanner() {
  return (
    <section className="mx-auto max-w-5xl px-4 my-8"> {/* margen vertical */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white/70">
        <video
          src="/garavaglia/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[240px] md:h-[360px] object-cover"
          aria-label="Banner homenaje a Juan Carlos Garavaglia"
        />
        {/* Oscurecedor para legibilidad */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Texto centrado */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
            Juan Carlos Garavaglia
          </h1>
          <p className="mt-3 text-white/90 text-lg md:text-xl tracking-wide">
            Sitio homenaje
          </p>
        </div>
      </div>
    </section>
  );
}

