"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React, { useState, useEffect } from "react"
import { FaFacebookF, FaInstagram,  } from "react-icons/fa"
import { FiPhone, FiMail } from "react-icons/fi"

// ---- Tipos ----
type NavSubItem = { label: string; href: string }
type NavItem = {
  label: string
  href?: string
  sub?: NavSubItem[]
}

// ---- Items de navegación ----
const navItems: NavItem[] = [
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
      { label: "Hemeroteca del IEHS", href: "/hemeroteca" },
      { label: "Fondos", href: "/fondos" },
    ],
  },
]

// ---- Header principal ----
export default function Header() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<number | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (!(e.target as HTMLElement).closest(".dropdown-parent")) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <header className="shadow relative z-40">
      {/* Top bar */}
      <div className="flex flex-wrap text-xs md:text-sm">
        <div className="bg-[#f9623e] text-white flex items-center justify-start px-6 py-2 gap-4 w-full md:w-auto">
          <span className="font-semibold">Seguinos:</span>
          <a href="https://web.facebook.com/iehsunicen/?_rdc=1&_rdr#" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="https://www.instagram.com/iehsunicen?igsh=MTE3enNhMHkxcHVudQ==" className="hover:text-white" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://x.com/iehs_tandil" className="hover:text-white" aria-label="X (ex Twitter)" target="_blank" rel="noopener noreferrer">
  <svg
    viewBox="0 0 24 24"
    className="w-4 h-4 md:w-5 md:h-5"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.53 2.47A11.998 11.998 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.314.656 4.47 1.787 6.294A11.998 11.998 0 0 0 12 24c6.627 0 12-5.373 12-12 0-2.314-.656-4.47-1.787-6.294A11.998 11.998 0 0 0 17.53 2.47ZM6.545 7.56h2.36l3.01 4.14 3.005-4.14h2.366l-4.17 5.74 4.46 6.16h-2.36l-3.305-4.56-3.31 4.56h-2.36l4.46-6.16-4.01-5.74Z"/>
  </svg>
</a>

        </div>
        <div className="bg-[#134e5e] text-white flex-grow flex items-center justify-end px-6 py-2 gap-6 flex-wrap md:flex-nowrap">
          <div className="flex items-center gap-2">
            <FiPhone className="text-lg" />
            <span>Teléfono: +54 (0)2494445683</span>
          </div>
          <div className="flex items-center gap-2">
            <FiMail className="text-lg" />
            <span>iehs@fch.unicen.edu.ar</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-white relative z-40">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-40">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 min-w-[140px]">
            <Image
              src="/logo-iehs.gif"
              alt="Logo IEHS UNICEN"
              width={260}
              height={120}
              priority
              className="h-18 w-auto max-w-[260px]"
            />
          </Link>

          {/* Botón hamburguesa (mobile) */}
          <button
            className="md:hidden p-2 ml-2 rounded focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            <svg className="w-8 h-8 text-[#134e5e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          </button>

          {/* Nav para desktop */}
          <nav className="hidden md:flex space-x-6 items-center">
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
                  href={item.href!}
                  className={`text-black hover:text-[#134e5e] transition-all px-3 py-1 rounded-full font-semibold ${
                    pathname.startsWith(item.href!)
                      ? "text-white bg-[#f9623e]"
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

      {/* Nav para mobile */}
      <MobileMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        navItems={navItems}
        pathname={pathname}
      />
    </header>
  )
}

// --- Dropdown desktop ---
function Dropdown({
  label,
  sub,
  open,
  onToggle,
  pathname,
}: {
  label: string
  sub: NavSubItem[]
  open: boolean
  onToggle: () => void
  pathname: string
}) {
  const isActive = sub.some((s) => pathname.startsWith(s.href))
  return (
    <div className="relative dropdown-parent z-50">
      <button
        className={`flex items-center text-black hover:text-[#134e5e] transition-all px-3 py-1 rounded-full font-semibold ${
          isActive ? "text-white bg-[#f9623e]" : ""
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

// --- Mobile Menu ---
function MobileMenu({
  open,
  setOpen,
  navItems,
  pathname,
}: {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  navItems: NavItem[]
  pathname: string
}) {
  const [openSub, setOpenSub] = useState<number | null>(null)

  useEffect(() => {
    setOpenSub(null)
  }, [open])

  return (
    <div
      className={`fixed inset-0 bg-white z-50 flex flex-col md:hidden transition-transform duration-200 ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{ boxShadow: open ? "0 0 0 100vw rgba(0,0,0,0.20)" : "none" }}
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b">
        <Link href="/" onClick={() => setOpen(false)}>
          <Image
            src="/logo-iehs.gif"
            alt="Logo IEHS UNICEN"
            width={120}
            height={80}
            priority
          />
        </Link>
        <button
          className="p-2 rounded focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Cerrar menú"
        >
          <svg className="w-8 h-8 text-[#f9623e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-col gap-2 p-6 overflow-y-auto flex-1">
        {navItems.map((item, idx) =>
          item.sub ? (
            <MobileDropdown
              key={item.label}
              label={item.label}
              sub={item.sub}
              pathname={pathname}
              open={openSub === idx}
              onToggle={() => setOpenSub(openSub === idx ? null : idx)}
              setOpen={setOpen}
            />
          ) : (
            <Link
              key={item.label}
              href={item.href!}
              className={`block px-4 py-3 rounded-lg text-lg font-semibold ${
                pathname.startsWith(item.href!)
                  ? "bg-[#f9623e] text-white"
                  : "text-[#134e5e] hover:bg-[#f9623e] hover:text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          )
        )}
      </div>
    </div>
  )
}

// --- Mobile Dropdown ---
function MobileDropdown({
  label,
  sub,
  pathname,
  open,
  onToggle,
  setOpen,
}: {
  label: string
  sub: NavSubItem[]
  pathname: string
  open: boolean
  onToggle: () => void
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}) {
  return (
    <div>
      <button
        className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-lg font-semibold text-[#134e5e] hover:bg-[#f9623e] hover:text-white"
        onClick={onToggle}
        type="button"
        aria-expanded={open}
      >
        {label}
        <svg className={`w-4 h-4 ml-2 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      {open && (
        <div className="pl-4 flex flex-col gap-1">
          {sub.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className={`block px-4 py-2 rounded text-base ${
                pathname.startsWith(s.href)
                  ? "bg-[#f9623e] text-white"
                  : "text-[#134e5e] hover:bg-[#f9623e] hover:text-white"
              }`}
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
