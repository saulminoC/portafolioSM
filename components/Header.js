import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/projects", label: "Proyectos" },
    { href: "/services", label: "Servicios" },
    { href: "/about", label: "Sobre mí" },
    { href: "/contact", label: "Contacto" },
  ];

  function isLinkActive(href) {
    return router.pathname === href;
  }

  return (
    <header className="bg-gray-900 text-white p-4 w-full shadow-md fixed top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
        <div className="text-xl font-bold cursor-pointer select-none flex items-center leading-none">
          Saúl Mino Cabrera
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-8 w-8 text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul
          className={`w-full md:w-auto md:flex md:items-center md:gap-6 transition-max-height duration-300 ease-in-out overflow-hidden md:overflow-visible ${
            isOpen ? "max-h-60" : "max-h-0 md:max-h-full"
          }`}
        >
          {links.map(({ href, label }) => {
            const isActive = isLinkActive(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`block py-2 px-4 md:p-0 hover:text-blue-400 ${
                    isActive ? "text-blue-400 font-semibold" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
