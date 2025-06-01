import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

const education = [
  {
    institution: "Universidad XYZ",
    degree: "Licenciatura en Ingeniería en Sistemas Computacionales",
    year: "2015 - 2019",
  },
  {
    institution: "Curso de React Avanzado",
    degree: "Certificado Profesional",
    year: "2021",
  },
];

const experience = [
  {
    company: "Empresa ABC",
    role: "Desarrollador Frontend",
    period: "2020 - 2023",
    details:
      "Desarrollo de aplicaciones web con React, Next.js y Tailwind CSS, creando interfaces responsivas y optimizadas.",
  },
  {
    company: "Servicio Técnico DEF",
    role: "Soporte Técnico",
    period: "2018 - 2020",
    details:
      "Atención y resolución de problemas técnicos para usuarios, mantenimiento de hardware y software.",
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre mí - Saúl Mino Cabrera</title>
        <meta
          name="description"
          content="Conoce más sobre Saúl Mino Cabrera, desarrollador frontend y backend con experiencia en React, Next.js, PHP y MySQL."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900">
            Sobre mí
          </h1>

          <section className="flex flex-col md:flex-row items-center md:items-start gap-10 mb-16">
            {/* Imagen */}
            <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0">
              <img
                src="/profile.jpg"
                alt="Foto de Saúl Mino Cabrera"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Texto y habilidades */}
            <div className="max-w-3xl text-gray-700">
              <p className="mb-6 leading-relaxed text-lg">
                Soy un desarrollador frontend especializado en tecnologías modernas como React y Next.js. Además, cuento con experiencia en backend utilizando PHP y bases de datos MySQL. Me apasiona crear aplicaciones web rápidas, accesibles y con buen diseño.
              </p>

              <p className="mb-6 leading-relaxed text-lg">
                También brindo soporte técnico a usuarios, asegurando soluciones rápidas y eficientes para mantener sus sistemas funcionando sin interrupciones.
              </p>

              <h2 className="text-2xl font-semibold mb-4">Habilidades Técnicas</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 list-disc list-inside text-gray-800">
                <li>HTML5, CSS3, JavaScript</li>
                <li>React.js y Next.js</li>
                <li>Tailwind CSS y Bootstrap</li>
                <li>PHP y MySQL</li>
                <li>Diseño UI/UX básico</li>
                <li>Soporte Técnico a Usuarios</li>
              </ul>
            </div>
          </section>

          {/* Educación */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Educación</h2>
            <ul className="space-y-6 text-gray-700">
              {education.map((edu, i) => (
                <li key={i} className="border-l-4 border-blue-600 pl-6">
                  <p className="text-xl font-semibold">{edu.institution}</p>
                  <p className="italic">{edu.degree}</p>
                  <p className="text-sm text-gray-500">{edu.year}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Experiencia Laboral */}
          <section>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">Experiencia Laboral</h2>
            <ul className="space-y-8 text-gray-700">
              {experience.map((job, i) => (
                <li key={i} className="border-l-4 border-green-600 pl-6">
                  <p className="text-xl font-semibold">{job.company}</p>
                  <p className="italic">{job.role}</p>
                  <p className="text-sm text-gray-500 mb-2">{job.period}</p>
                  <p>{job.details}</p>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
