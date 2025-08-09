import Link from 'next/link';
import styles from './GaravagliaHeader.module.css';

/**
 * Defines a single navigation item.  Navigation items can link to
 * anchors within the page (e.g. '#fotos') or to other pages in the
 * Next.js application.  When linking to anchors within the same page,
 * use a string starting with '#'.
 */
export interface NavItem {
  label: string;
  href: string;
}

interface HeaderProps {
  /**
   * Optional list of items to render in the navigation.  If not
   * provided, a sensible default reflecting the major sections of
   * the homage page will be used.
   */
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { label: 'Inicio', href: '#intro' },
  { label: 'Fotos', href: '#fotos' },
  { label: 'Videos', href: '#videos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Reseñas', href: '#reseñas' }
];

/**
 * Top level header component for the homenaje page.  Renders a
 * sticky navigation bar with links to the sections of the page.  The
 * header is intentionally minimal so the content remains the focus.
 */
export default function GaravagliaHeader({ items = defaultItems }: HeaderProps) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegación principal">
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item.href} className={styles.item}>
              {/* next/link will handle anchor navigation automatically */}
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}