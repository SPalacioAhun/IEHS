"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

type NavSubItem = { label: string; href: string }
type NavItem = { label: string; href?: string; sub?: NavSubItem[] }

const navItems: NavItem[] = [
  { label: "Autoridades", href: "/autoridades" },
  { label: "Integrantes", sub: [
    { label: "Investigadores", href: "/integrantes/investigadores" },
    { label: "Becarios", href: "/integrantes/becarios" },
    { label: "Colaboradores", href: "/integrantes/colaboradores" },
    { label: "Estudiantes de Posgrado", href: "/integrantes/estudiantes" },
  ] },
  { label: "Publicaciones", sub: [
    { label: "Ediciones y coediciones del IEHS", href: "/publicaciones/ediciones" },
    { label: "Publicaciones de integrantes de los últimos 5 años", href: "/publicaciones/articulos" },
  ] },
  { label: "Grupos de Estudio", href: "/grupos-de-estudio" },
  { label: "Hemeroteca y fondos documentales", sub: [
    { label: "Hemeroteca del IEHS", href: "/hemeroteca" },
    { label: "Fondos Documentales", href: "/fondos" },
  ] },
  { label: "Contacto", href: "/#contacto" },
]

export default function Header() {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => { setMenuOpen(false); setOpenDropdown(null) }, [pathname])
  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false) }
    document.addEventListener("keydown", closeOnEscape)
    return () => document.removeEventListener("keydown", closeOnEscape)
  }, [menuOpen])

  return <header className="site-header">
    <div className="institutional-bar"><div className="site-shell institutional-bar__inner">
      <span>Facultad de Ciencias Humanas · UNICEN</span>
      <a href="mailto:iehs@fch.unicen.edu.ar">iehs@fch.unicen.edu.ar</a>
    </div></div>
    <div className="main-header"><div className="site-shell main-header__inner">
      <Link href="/" className="brand" aria-label="IEHS, página de inicio">
        <Image src="/Logo IEHS 40 años 2.jpg" alt="Logo del Instituto de Estudios Histórico-Sociales, 40 años" width={132} height={150} priority className="brand__logo" />
        <span className="brand__copy"><strong>IEHS</strong><span>Instituto de Estudios<br />Histórico-Sociales</span><em>Prof. Juan Carlos Grosso</em></span>
      </Link>
      <button type="button" className="menu-toggle" aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}><span /><span /><span /></button>
      <nav className="desktop-navigation" aria-label="Navegación principal">
        {navItems.map((item) => item.sub ? <Dropdown key={item.label} item={item} open={openDropdown === item.label} onToggle={() => setOpenDropdown(openDropdown === item.label ? null : item.label)} pathname={pathname} /> : <Link key={item.label} href={item.href!} className="navigation-link">{item.label}</Link>)}
      </nav>
    </div></div>
    <MobileMenu open={menuOpen} setOpen={setMenuOpen} pathname={pathname} />
  </header>
}

function Dropdown({ item, open, onToggle, pathname }: { item: NavItem; open: boolean; onToggle: () => void; pathname: string }) {
  const active = item.sub?.some((sub) => pathname.startsWith(sub.href))
  return <div className="dropdown-parent"><button type="button" className={`navigation-link navigation-link--button${active ? " is-active" : ""}`} aria-expanded={open} onClick={onToggle}>{item.label}<span aria-hidden="true">⌄</span></button>{open && <ul className="dropdown-menu">{item.sub?.map((sub) => <li key={sub.label}><Link href={sub.href} onClick={onToggle}>{sub.label}</Link></li>)}</ul>}</div>
}

function MobileMenu({ open, setOpen, pathname }: { open: boolean; setOpen: (open: boolean) => void; pathname: string }) {
  const [openSub, setOpenSub] = useState<string | null>(null)
  return <div id="mobile-navigation" className={`mobile-navigation${open ? " is-open" : ""}`} aria-hidden={!open}>
    <div className="mobile-navigation__header"><span className="mobile-navigation__label">Navegación</span><button type="button" className="mobile-navigation__close" aria-label="Cerrar menú" onClick={() => setOpen(false)}>×</button></div>
    <nav aria-label="Navegación móvil">{navItems.map((item) => item.sub ? <div key={item.label} className="mobile-dropdown"><button type="button" aria-expanded={openSub === item.label} onClick={() => setOpenSub(openSub === item.label ? null : item.label)}>{item.label}<span aria-hidden="true">⌄</span></button>{openSub === item.label && <div className="mobile-dropdown__items">{item.sub.map((sub) => <Link key={sub.label} href={sub.href} onClick={() => setOpen(false)}>{sub.label}</Link>)}</div>}</div> : <Link key={item.label} href={item.href!} className={pathname.startsWith(item.href!.replace("/#contacto", "")) ? "is-active" : ""} onClick={() => setOpen(false)}>{item.label}</Link>)}</nav>
  </div>
}
