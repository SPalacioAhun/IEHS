// components/Header.tsx
"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const navItems = [
  { label: "Autoridades", href: "/autoridades" },
  {
    label: "Integrantes",
    sub: [
      { label: "Investigadores", href: "/integrantes/investigadores" },
      { label: "Becarios",      href: "/integrantes/becarios" },
    ],
  },
  {
    label: "Publicaciones",
    sub: [
      { label: "Libros",    href: "/publicaciones/libros"    },
      { label: "Artículos", href: "/publicaciones/articulos" },
    ],
  },
  {
    label: "Hemeroteca y fondos documentales",
    sub: [
      { label: "Hemeroteca", href: "/hemeroteca" },
      { label: "Fondos",     href: "/fondos"     },
    ],
  },
]

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between p-8">
        {/* Logo + título */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo-iehs.gif"
            alt="Logo IEHS UNICEN"
            width={300}
            height={180}
            priority
          />
        </Link>

        {/* Navegación */}
        <nav className="flex space-x-6 items-center">
          {navItems.map((item) =>
            item.sub ? (
              <Dropdown key={item.label} label={item.label} sub={item.sub} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="hover:text-blue-600 text-black"
              >
                {item.label}
              </Link>
            )
          )}
          {/* Botón Contacto */}
          <Link
            href="/contacto"
            className="ml-4 px-5 py-2 rounded-full font-semibold shadow transition-colors text-white"
            style={{ backgroundColor: "#134e5e" }}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Dropdown({
  label,
  sub,
}: {
  label: string
  sub: { label: string; href: string }[]
}) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center hover:text-blue-600 text-black">
        {label}
        <svg
          className="ml-1 w-4 h-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.27a.75.75 0 01-.02-1.06z" />
        </svg>
      </button>
      {open && (
        <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg z-10">
          {sub.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
