import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const testimonials = [
  {
    name: "Cliente A",
    role: "CEO, Empresa X",
    text: "Saúl entregó el proyecto a tiempo con excelente calidad y comunicación. Muy recomendable.",
  },
  {
    name: "Cliente B",
    role: "Gerente TI, Empresa Y",
    text: "Profesional y eficiente, resolvió problemas complejos con rapidez y precisión.",
  },
  {
    name: "Cliente C",
    role: "Emprendedor",
    text: "Su soporte técnico fue fundamental para mantener nuestros sistemas operativos sin fallas.",
  },
];

export default function Testimonials() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Testimonios - Saúl Mino Cabrera</title>
        <meta
          name="description"
          content="Comentarios y opiniones de clientes satisfechos con el trabajo de Saúl Mino Cabrera."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
            Testimonios
          </h1>

          <section className="space-y-12">
            {testimonials.map((t, i) => (
              <blockquote
                key={i}
                className={`border-l-8 border-blue-600 bg-gray-50 p-8 rounded shadow-lg italic text-gray-700 transition-opacity duration-700 ${
                  fadeIn ? "opacity-100" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className="mb-6 text-lg">“{t.text}”</p>
                <footer className="text-right font-semibold text-gray-900">
                  — {t.name}, <span className="text-gray-600 font-normal">{t.role}</span>
                </footer>
              </blockquote>
            ))}
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
