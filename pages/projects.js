import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projects = [
  {
    title: "Portfolio Personal",
    description:
      "Sitio web personal creado con Next.js y Tailwind CSS para mostrar mis habilidades y proyectos.",
    link: "https://github.com/saulminocabrera/portfolio",
  },
  {
    title: "Sistema de Inventarios",
    description:
      "Backend en PHP y MySQL para administrar inventarios empresariales con alta eficiencia.",
    link: "https://example.com/inventarios",
  },
  {
    title: "Soporte Técnico Remoto",
    description:
      "Servicio remoto para resolución de problemas técnicos y soporte a usuarios.",
    link: "https://example.com/soporte-remoto",
  },
  {
    title: "App de Reservas",
    description:
      "Aplicación web para gestionar reservas en restaurantes con React y Firebase.",
    link: "https://example.com/app-reservas",
  },
  {
    title: "Dashboard Administrativo",
    description:
      "Panel administrativo con Next.js y Chart.js para análisis de datos empresariales.",
    link: "https://example.com/dashboard",
  },
  {
    title: "E-commerce Minimalista",
    description:
      "Tienda online sencilla desarrollada con React y Stripe para pagos seguros.",
    link: "https://example.com/ecommerce",
  },
  {
    title: "Blog Personal",
    description:
      "Plataforma para publicar artículos y tutoriales usando Next.js y Markdown.",
    link: "https://example.com/blog",
  },
  {
    title: "Sistema de Tickets",
    description:
      "Aplicación para gestión de tickets y soporte con PHP y MySQL.",
    link: "https://example.com/sistema-tickets",
  },
  {
    title: "App de Clima",
    description:
      "Aplicación móvil que muestra el clima actual y pronósticos usando API externas.",
    link: "https://example.com/app-clima",
  },
  {
    title: "Chat en Tiempo Real",
    description:
      "Chat en tiempo real desarrollado con React y Socket.io.",
    link: "https://example.com/chat-tiempo-real",
  },
];

export default function Projects() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Proyectos - Saúl Mino Cabrera</title>
        <meta
          name="description"
          content="Lista de proyectos desarrollados por Saúl Mino Cabrera en frontend y backend."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="pt-20 flex-grow max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900">
            Mis Proyectos
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <article
                key={i}
                className={`p-6 border rounded-lg shadow-lg hover:shadow-xl transition-opacity duration-700 ${
                  fadeIn ? "opacity-100" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <h2 className="text-2xl font-semibold mb-3">{project.title}</h2>
                <p className="text-gray-700 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
                  aria-label={`Visitar proyecto ${project.title}`}
                >
                  Ver proyecto
                </a>
              </article>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
