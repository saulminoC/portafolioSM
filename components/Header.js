export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4 w-full">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="text-xl font-bold">Saúl Mino Cabrera</div>
        <ul className="flex flex-wrap gap-4">
          <li>
            <a href="/" className="hover:text-blue-400">
              Inicio
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-blue-400">
              Proyectos
            </a>
          </li>
          <li>
            <a href="/services" className="hover:text-blue-400">
              Servicios
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-blue-400">
              Sobre mí
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-blue-400">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
