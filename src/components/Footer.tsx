// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200">
      <div className="container mx-auto p-6 text-center">
        © {new Date().getFullYear()} IEHS – UNICEN. Todos los derechos reservados.
      </div>
    </footer>
  )
}
