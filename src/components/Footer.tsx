// // components/Footer.tsx
// export default function Footer() {
//   return (
//     <footer className="bg-gray-800 text-gray-200">
//       <div className="container mx-auto p-6 text-center">
//         © {new Date().getFullYear()} IEHS – UNICEN. Todos los derechos reservados.
//       </div>
//     </footer>
//   )
// }


// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Izquierda: Logo IEHS + descripción */}
        <div className="flex flex-col items-start gap-2 max-w-md ml-[74px]">
  {/* Logo */}
  <Image
    src="/logo_footer.png"
    alt="IEHS Logo"
    width={230}
    height={60}
    className="mb-2"
    priority
  />
  {/* Textos */}
  <span className="italic text-xs opacity-80">
    Instituto de Estudios Histórico-Sociales, Prof. Juan Carlos Grosso.
  </span>
  <span className="text-xs opacity-70 mt-1">
    Pinto 348-C.P 7000, Tandil, Buenos Aires, Argentina.
  </span>
</div>


        {/* Derecha: Logos institucionales */}
        <div className="flex flex-row gap-6 items-center mt-[48px] pl-8 pr-16">
  <Link
    href="https://www.fch.unicen.edu.ar/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-150 opacity-80 hover:opacity-100 hover:shadow-2xl hover:scale-115 hover:ring-4 hover:ring-white/50 cursor-pointer rounded-full"
    title="Facultad de Ciencias Humanas"
  >
    <Image
      src="/facufooter.png"
      alt="Facultad de Ciencias Humanas"
      width={60}
      height={60}
      className="rounded-full"
    />
  </Link>
  <Link
    href="https://www.unicen.edu.ar/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-150 opacity-80 hover:opacity-100 hover:shadow-2xl hover:scale-115 hover:ring-4 hover:ring-white/50 cursor-pointer rounded-full"
    title="UNICEN"
  >
    <Image
      src="/unifooter.png"
      alt="UNICEN"
      width={60}
      height={60}
      className="rounded-full"
    />
  </Link>
  <Link
    href="https://igehcs.conicet.gov.ar/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform duration-150 opacity-80 hover:opacity-100 hover:shadow-2xl hover:scale-115 hover:ring-4 hover:ring-white/50 cursor-pointer rounded-full"
    title="CONICET IGHES"
  >
    <Image
      src="/igesfooter.png"
      alt="CONICET IGHES"
      width={60}
      height={60}
      className="rounded-full"
    />
  </Link>
</div>


      </div>

      {/* Abajo: derechos y (futuras) redes */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-between mt-8 border-t border-gray-700 pt-4 text-xs">
  {/* El texto siempre centrado en mobile, y centrado en desktop porque el div es w-full */}
  <div className="w-full text-center">
    <span>
      © {new Date().getFullYear()} IEHS – UNICEN. Todos los derechos reservados.
    </span>
  </div>
  <div className="flex gap-3 mt-2 md:mt-0">
    {/* Links a redes sociales (placeholder) */}
  </div>
</div>

    </footer>
  );
}
