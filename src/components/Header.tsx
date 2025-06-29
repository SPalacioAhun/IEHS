 
// components/Header.tsx
// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import React from "react"
// import { useState } from "react"

// const navItems = [
//   { label: "Autoridades", href: "/autoridades" },
//   {
//     label: "Integrantes",
//     sub: [
//       { label: "Investigadores", href: "/integrantes/investigadores" },
//       { label: "Becarios",      href: "/integrantes/becarios" },
//       { label: "Colaboradores", href: "/integrantes/colaboradores" },
//       { label: "Estudiantes grado y postgrado", href: "/integrantes/estudiantes" },
//     ],
//   },
//   {
//     label: "Publicaciones",
//     sub: [
//       { label: "Libros",    href: "/publicaciones/libros"    },
//       { label: "Artículos", href: "/publicaciones/articulos" },
//     ],
//   },
//   {
//     label: "Hemeroteca y fondos documentales",
//     sub: [
//       { label: "Hemeroteca", href: "/hemeroteca" },
//       { label: "Fondos",     href: "/fondos"     },
//     ],
//   },
// ]

// export default function Header() {
//   return (
//     <header className="bg-white shadow">
//       <div className="container mx-auto flex items-center justify-between p-8">
//         {/* Logo + título */}
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/logo-iehs.gif"
//             alt="Logo IEHS UNICEN"
//             width={300}
//             height={180}
//             priority
//           />
//         </Link>

//         {/* Navegación */}
//         <nav className="flex space-x-6 items-center">
//           {navItems.map((item) =>
//             item.sub ? (
//               <Dropdown key={item.label} label={item.label} sub={item.sub} />
//             ) : (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="hover:text-blue-600 text-black"
//               >
//                 {item.label}
//               </Link>
//             )
//           )}
//           {/* Botón Contacto */}
//           <Link
//             href="/contacto"
//             className="ml-4 px-5 py-2 rounded-full font-semibold shadow transition-colors text-white"
//             style={{ backgroundColor: "#134e5e" }}
//           >
//             Contacto
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }

// function Dropdown({
//   label,
//   sub,
// }: {
//   label: string
//   sub: { label: string; href: string }[]
// }) {
//   const [open, setOpen] = useState(false);

//   // Opcional: cerrar el menú si hacés click fuera
//   React.useEffect(() => {
//     if (!open) return;
//     function handleClick(e: MouseEvent) {
//       // @ts-ignore
//       if (!e.target.closest?.('.dropdown-parent')) setOpen(false);
//     }
//     document.addEventListener('mousedown', handleClick);
//     return () => document.removeEventListener('mousedown', handleClick);
//   }, [open]);

//   return (
//     <div className="relative dropdown-parent">
//       <button
//         className="flex items-center hover:text-blue-600 text-black"
//         onClick={() => setOpen((prev) => !prev)}
//         type="button"
//         aria-expanded={open}
//       >
//         {label}
//         <svg
//           className="ml-1 w-4 h-4"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
//         </svg>
//       </button>
//       {open && (
//         <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-10">
//           {sub.map((s) => (
//             <li key={s.label}>
//               <Link
//                 href={s.href}
//                 className="block px-4 py-2 hover:bg-gray-100 text-black whitespace-nowrap"
//                 onClick={() => setOpen(false)} // Cierra el menú al elegir opción
//               >
//                 {s.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// // components/Header.tsx
// "use client"

// import Image from "next/image"
// import Link from "next/link"
// import React, { useState } from "react"

// const navItems = [
//   { label: "Autoridades", href: "/autoridades" },
//   {
//     label: "Integrantes",
//     sub: [
//       { label: "Investigadores", href: "/integrantes/investigadores" },
//       { label: "Becarios", href: "/integrantes/becarios" },
//       { label: "Colaboradores", href: "/integrantes/colaboradores" },
//       { label: "Estudiantes grado y postgrado", href: "/integrantes/estudiantes" },
//     ],
//   },
//   {
//     label: "Publicaciones",
//     sub: [
//       { label: "Libros", href: "/publicaciones/libros" },
//       { label: "Artículos", href: "/publicaciones/articulos" },
//     ],
//   },
//   {
//     label: "Hemeroteca y fondos documentales",
//     sub: [
//       { label: "Hemeroteca", href: "/hemeroteca" },
//       { label: "Fondos", href: "/fondos" },
//     ],
//   },
// ]

// export default function Header() {
//   // Este estado controla qué solapa está abierta (índice o null)
//   const [openDropdown, setOpenDropdown] = useState<number | null>(null);

//   // Función para cerrar cualquier solapa abierta (al hacer click fuera)
//   React.useEffect(() => {
//     function handleClick(e: MouseEvent) {
//       // @ts-ignore
//       if (!e.target.closest?.(".dropdown-parent")) setOpenDropdown(null);
//     }
//     document.addEventListener("mousedown", handleClick);
//     return () => document.removeEventListener("mousedown", handleClick);
//   }, []);

//   return (
//     <header className="bg-white shadow">
//       <div className="container mx-auto flex items-center justify-between p-8">
//         <Link href="/" className="flex items-center space-x-2">
//           <Image
//             src="/logo-iehs.gif"
//             alt="Logo IEHS UNICEN"
//             width={300}
//             height={180}
//             priority
//           />
//         </Link>
//         <nav className="flex space-x-6 items-center">
//           {navItems.map((item, idx) =>
//             item.sub ? (
//               <Dropdown
//                 key={item.label}
//                 label={item.label}
//                 sub={item.sub}
//                 open={openDropdown === idx}
//                 onToggle={() =>
//                   setOpenDropdown(openDropdown === idx ? null : idx)
//                 }
//               />
//             ) : (
//               <Link
//                 key={item.label}
//                 href={item.href}
//                 className="hover:text-blue-600 text-black"
//               >
//                 {item.label}
//               </Link>
//             )
//           )}
//           <Link
//             href="/contacto"
//             className="ml-4 px-5 py-2 rounded-full font-semibold shadow transition-colors text-white"
//             style={{ backgroundColor: "#134e5e" }}
//           >
//             Contacto
//           </Link>
//         </nav>
//       </div>
//     </header>
//   )
// }

// function Dropdown({
//   label,
//   sub,
//   open,
//   onToggle,
// }: {
//   label: string
//   sub: { label: string; href: string }[]
//   open: boolean
//   onToggle: () => void
// }) {
//   return (
//     <div className="relative dropdown-parent">
//       <button
//         className="flex items-center hover:text-blue-600 text-black"
//         onClick={onToggle}
//         type="button"
//         aria-expanded={open}
//       >
//         {label}
//         <svg
//           className="ml-1 w-4 h-4"
//           fill="currentColor"
//           viewBox="0 0 20 20"
//         >
//           <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
//         </svg>
//       </button>
//       {open && (
//         <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-10 min-w-[220px]">
//           {sub.map((s) => (
//             <li key={s.label}>
//               <Link
//                 href={s.href}
//                 className="block px-4 py-2 hover:bg-gray-100 text-black whitespace-nowrap"
//                 onClick={onToggle} // Cierra el menú al elegir opción
//               >
//                 {s.label}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState, useEffect } from "react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import { FiPhone, FiMail } from "react-icons/fi"

const navItems = [
  { label: "Autoridades", href: "/autoridades" },
  {
    label: "Integrantes",
    sub: [
      { label: "Investigadores", href: "/integrantes/investigadores" },
      { label: "Becarios", href: "/integrantes/becarios" },
      { label: "Colaboradores", href: "/integrantes/colaboradores" },
      { label: "Estudiantes grado y postgrado", href: "/integrantes/estudiantes" },
    ],
  },
  {
    label: "Publicaciones",
    sub: [
      { label: "Ediciones y coediciones del IEHS", href: "/publicaciones/ediciones" },
      { label: "Publicaciones de integrantes de los últimos 5 años", href: "/publicaciones/articulos" },
    ],
  },
  {
    label: "Hemeroteca y fondos documentales",
    sub: [
      { label: "Hemeroteca", href: "/hemeroteca" },
      { label: "Fondos", href: "/fondos" },
    ],
  },
]

export default function Header() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest(".dropdown-parent")) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <header className="shadow relative z-40">
      {/* Top bar */}
      <div className="flex flex-wrap">
        <div className="bg-[#f9623e] text-white flex items-center justify-start px-6 py-2 gap-4">
          <span className="font-semibold text-sm">Seguinos:</span>
          <a href="#" className="hover:text-white text-sm"><FaFacebookF /></a>
          <a href="#" className="hover:text-white text-sm"><FaInstagram /></a>
          <a href="#" className="hover:text-white text-sm"><FaTwitter /></a>
        </div>
        <div className="bg-[#134e5e] text-white flex-grow flex items-center justify-end px-6 py-2 gap-6 text-sm">
          <div className="flex items-center gap-2">
            <FiPhone className="text-lg" />
            <span>Teléfono: (colocar)</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-lg" />
            <span>contacto@iehs.unicen.edu.ar</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white relative z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-40">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-iehs.gif"
              alt="Logo IEHS UNICEN"
              width={260}
              height={180}
              priority
            />
          </Link>
          <nav className="flex space-x-6 items-center">
            {navItems.map((item, idx) =>
              item.sub ? (
                <Dropdown
                  key={item.label}
                  label={item.label}
                  sub={item.sub}
                  open={openDropdown === idx}
                  onToggle={() => setOpenDropdown(openDropdown === idx ? null : idx)}
                  pathname={pathname}
                />
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-black hover:text-[#134e5e] ${
                    pathname.startsWith(item.href)
                      ? "text-white bg-[#f9623e] px-3 py-1 rounded-full font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  )
}

function Dropdown({
  label,
  sub,
  open,
  onToggle,
  pathname,
}: {
  label: string
  sub: { label: string; href: string }[]
  open: boolean
  onToggle: () => void
  pathname: string
}) {
  const isActive = sub.some((s) => pathname.startsWith(s.href))

  return (
    <div className="relative dropdown-parent z-50">
      <button
        className={`flex items-center text-black hover:text-[#134e5e] ${
          isActive ? "text-white bg-[#f9623e] px-3 py-1 rounded-full font-semibold" : ""
        }`}
        onClick={onToggle}
        type="button"
        aria-expanded={open}
      >
        {label}
        <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
        </svg>
      </button>
      {open && (
        <ul className="absolute top-full left-0 mt-2 bg-white border shadow-lg z-50 min-w-[220px]">
          {sub.map((s) => {
            const isSubActive = pathname.startsWith(s.href)
            return (
              <li key={s.label}>
                <Link
                  href={s.href}
                  className={`block px-4 py-2 whitespace-nowrap transition-colors ${
                    isSubActive
                      ? "bg-[#f9623e] text-white font-semibold"
                      : "text-black hover:bg-[#f9623e] hover:text-white"
                  }`}
                  onClick={onToggle}
                >
                  {s.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
