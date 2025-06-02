import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    title: "Frontend Moderno",
    description:
      "Diseño y desarrollo de interfaces interactivas y responsivas usando React, Next.js, Tailwind CSS y Bootstrap.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-blue-600"
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
    description:
      "Desarrollo de sistemas backend confiables con PHP y bases de datos MySQL para aplicaciones escalables.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-green-600"
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
      "Asistencia técnica profesional para resolver problemas y optimizar equipos y software.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-yellow-500"
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
  {
    title: "Diseño UI/UX",
    description:
      "Creación de interfaces intuitivas y atractivas que mejoran la experiencia del usuario.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-pink-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6"
        />
      </svg>
    ),
  },
  {
    title: "Optimización SEO",
    description:
      "Mejoras en posicionamiento web para aumentar visibilidad y tráfico orgánico.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 text-indigo-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <circle cx="12" cy="12" r="10" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12l2 2 4-4"
        />
      </svg>
    ),
  },
];

export default function Services() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Servicios - Saúl Mino Cabrera</title>
        <meta
          name="description"
          content="Servicios y habilidades de desarrollo frontend, backend, soporte técnico y diseño UI/UX ofrecidos por Saúl Mino Cabrera."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="pt-20 flex-grow max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
            Servicios y Habilidades
          </h1>

          <section className="grid md:grid-cols-3 gap-10">
            {services.map((service, i) => (
              <article
                key={i}
                className={`p-8 border rounded-lg shadow-lg hover:shadow-xl transition-opacity duration-700 ${
                  fadeIn ? "opacity-100" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="mb-6">{service.icon}</div>
                <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
                <p className="text-gray-700">{service.description}</p>
              </article>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
