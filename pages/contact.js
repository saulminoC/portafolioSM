import Head from "next/head";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function validateEmail(email) {
  // Regex simple para validar email
  return /^\S+@\S+\.\S+$/.test(email);
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const [messageAria, setMessageAria] = useState("");

  useEffect(() => {
    if (status === "success") {
      setMessageAria("Mensaje enviado con éxito.");
    } else if (status === "error") {
      setMessageAria("Error al enviar el mensaje.");
    } else {
      setMessageAria("");
    }
  }, [status]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "El nombre es requerido.";
    if (!form.email.trim()) newErrors.email = "El correo es requerido.";
    else if (!validateEmail(form.email)) newErrors.email = "Correo no válido.";
    if (!form.message.trim()) newErrors.message = "El mensaje no puede estar vacío.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      // Simulación de envío
      await new Promise((r) => setTimeout(r, 1800));

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Head>
        <title>Contacto - Saúl Mino Cabrera</title>
        <meta
          name="description"
          content="Formulario de contacto para enviar mensajes a Saúl Mino Cabrera."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-grow max-w-xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-900">
            Contacto
          </h1>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
            aria-describedby="form-status"
          >
            {/* Nombre */}
            <div className="relative">
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`peer w-full border rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "error-name" : undefined}
              />
              <label
                htmlFor="name"
                className={`absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 ${
                  errors.name ? "text-red-500" : ""
                }`}
              >
                Nombre
              </label>
              {errors.name && (
                <p
                  id="error-name"
                  className="mt-1 text-red-600 text-sm"
                  role="alert"
                >
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`peer w-full border rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "error-email" : undefined}
              />
              <label
                htmlFor="email"
                className={`absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 ${
                  errors.email ? "text-red-500" : ""
                }`}
              >
                Correo electrónico
              </label>
              {errors.email && (
                <p
                  id="error-email"
                  className="mt-1 text-red-600 text-sm"
                  role="alert"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="5"
                value={form.message}
                onChange={handleChange}
                disabled={status === "sending"}
                className={`peer w-full border rounded-md px-4 pt-6 pb-2 focus:outline-none focus:ring-2 focus:ring-blue-600 transition resize-y ${
                  errors.message ? "border-red-500" : "border-gray-300"
                }`}
                placeholder=" "
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "error-message" : undefined}
              />
              <label
                htmlFor="message"
                className={`absolute left-4 top-2 text-gray-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 ${
                  errors.message ? "text-red-500" : ""
                }`}
              >
                Mensaje
              </label>
              {errors.message && (
                <p
                  id="error-message"
                  className="mt-1 text-red-600 text-sm"
                  role="alert"
                >
                  {errors.message}
                </p>
              )}
            </div>

            {/* Botón */}
            <button
              type="submit"
              disabled={status === "sending"}
              className={`relative w-full py-3 rounded-md font-semibold text-white transition ${
                status === "sending"
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              {status === "sending" && (
                <svg
                  className="animate-spin h-5 w-5 absolute left-4 top-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3-3 3h4a8 8 0 01-8 8v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                  ></path>
                </svg>
              )}
              {status === "sending" ? "Enviando..." : "Enviar Mensaje"}
            </button>

            {/* Mensajes aria-live para accesibilidad */}
            <p
              id="form-status"
              role="alert"
              aria-live="polite"
              className={`mt-4 text-center font-semibold ${
                status === "success"
                  ? "text-green-600"
                  : status === "error"
                  ? "text-red-600"
                  : "invisible"
              }`}
            >
              {status === "success"
                ? "¡Mensaje enviado con éxito! Te responderé pronto."
                : status === "error"
                ? "Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo."
                : ""}
            </p>
          </form>
        </main>

        <Footer />
      </div>
    </>
  );
}
