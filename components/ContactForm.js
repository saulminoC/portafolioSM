import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("Enviando...");

    // Aquí puedes conectar con tu API o servicio de email
    setTimeout(() => {
      setStatus("Gracias por contactarme. Te responderé pronto.");
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Correo electrónico"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Mensaje"
        value={form.message}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <button 
        type="submit" 
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Enviar
      </button>
      {status && <p className="mt-2 text-green-600">{status}</p>}
    </form>
  );
}
