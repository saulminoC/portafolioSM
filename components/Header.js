import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Saúl Mino Cabrera
        </Link>
        <ul className="flex space-x-6">
          <li><Link href="/about">Sobre mí</Link></li>
          <li><Link href="/projects">Proyectos</Link></li>
          <li><Link href="/services">Servicios</Link></li>
          <li><Link href="/testimonials">Testimonios</Link></li>
          <li><Link href="/contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
