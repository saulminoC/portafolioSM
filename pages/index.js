import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

const projects = [
  {
    title: "Portfolio Personal",
    description: "Sitio web personal con Next.js y Tailwind CSS.",
    link: "/projects",
  },
  {
    title: "Sistema de Inventarios",
    description: "Backend en PHP con MySQL para gestión empresarial.",
    link: "/projects",
  },
  {
    title: "Soporte Técnico Remoto",
    description: "Atención a usuarios con soluciones rápidas y efectivas.",
    link: "/projects",
  },
];

const services = [
  {
    title: "Frontend Moderno",
    description:
      "React, Next.js, Tailwind CSS y Bootstrap para interfaces modernas y responsivas.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 20l9-5-9-5-9 5 9 5z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 12l9-5-9-5-9 5 9 5z"
        />
      </svg>
    ),
  },
  {
    title: "Backend Robusto",
    description: "PHP y MySQL para sistemas estables y eficientes.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17v-6h6v6M9 11h6M12 3v2M5 7l1 12h12l1-12"
        />
      </svg>
    ),
  },
  {
    title: "Soporte Técnico",
    description:
      "Resolución rápida y efectiva para mantener tu negocio sin interrupciones.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-yellow-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 8a6 6 0 00-12 0v4a6 6 0 0012 0V8z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 14v2a6 6 0 006 6 6 6 0 006-6v-2"
        />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Cliente A",
    text: "Saúl entregó el proyecto a tiempo con excelente calidad y comunicación.",
  },
  {
    name: "Cliente B",
    text: "Muy profesional, resolvió nuestros problemas técnicos rápido y eficazmente.",
  },
];

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Saúl Mino Cabrera - Desarrollador Fullstack y Soporte Técnico</title>
        <meta
          name="description"
          content="Portafolio profesional de Saúl Mino Cabrera, experto en frontend con React y backend con PHP."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="text-center max-w-4xl mx-auto">
          <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-tight text-gray-900">
            Hola, soy{" "}
            <span className="text-blue-600">Saúl Mino Cabrera</span>
          </h1>
          <p className="text-xl text-gray-700 mb-10">
            Desarrollo frontend moderno con React, Next.js, Tailwind CSS, y backend robusto con PHP y MySQL. Además, brindo soporte técnico confiable.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="/cv.pdf"
              download
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Descargar CV
            </a>
            <a
              href="/projects"
              className="inline-block px-8 py-4 border border-blue-600 text-blue-600 rounded-lg font-semibold shadow-md hover:bg-blue-50 transition"
            >
              Ver Proyectos
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="mt-20 grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <article
              key={i}
              className={`p-8 border rounded-lg shadow-lg hover:shadow-xl transition-opacity duration-700 ${
                fadeIn ? "opacity-100" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </article>
          ))}
        </section>

        {/* Projects */}
        <section className="mt-24 max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            Proyectos Destacados
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <a
                key={i}
                href={project.link}
                className="block border rounded-lg p-6 shadow hover:shadow-xl transition transform hover:-translate-y-1"
                aria-label={`Ver proyecto ${project.title}`}
              >
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700">{project.description}</p>
                <div className="mt-4 flex items-center text-blue-600 font-semibold">
                  Ver más <ChevronRightIcon className="h-5 w-5 ml-1" />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="mt-24 max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Testimonios</h2>
          <div className="space-y-8">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className="border-l-4 border-blue-600 pl-6 italic text-gray-700"
              >
                “{t.text}”
                <footer className="mt-2 font-semibold text-gray-900">
                  — {t.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
