"use client";
import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const onChange =
    (k: "name" | "email" | "message" | "website") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [k]: e.target.value });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setErrorMsg("Completá nombre, email y mensaje.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("No se pudo enviar el mensaje.");
      setStatus("ok");
      setForm({ name: "", email: "", message: "", website: "" });
    } catch (err: unknown) {
      setStatus("error");
      if (err instanceof Error) {
        setErrorMsg(err.message ?? "Error inesperado.");
      } else {
        setErrorMsg("Error inesperado.");
      }
    }
  };

  return (
    <section
      id="contacto"
      className="relative bg-[#f9fbfc] py-16"
      aria-labelledby="contacto-title"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <header className="text-center mb-10">
          <span className="inline-block text-xs tracking-wide uppercase font-semibold text-[#134e5e] bg-[#134e5e]/10 px-3 py-1 rounded-full">
            IEHS
          </span>
          <h2
            id="contacto-title"
            className="mt-3 text-4xl md:text-5xl font-extrabold text-center tracking-tight leading-[1.18]
                       bg-gradient-to-r from-[#134e5e] via-[#22677e] to-[#f9623e] bg-clip-text text-transparent drop-shadow mb-6"
          >
            Contacto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Escribinos y ubicá nuestra sede. Prometo que este formulario no muerde.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Formulario */}
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition p-6 md:p-8">
            <form onSubmit={onSubmit} className="space-y-5">
              {/* Honeypot anti-bots */}
              <input
                type="text"
                name="website"
                value={form.website}
                onChange={onChange("website")}
                autoComplete="off"
                className="hidden"
                tabIndex={-1}
                aria-hidden="true"
              />

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#15394b]">
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={onChange("name")}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:border-[#22677e] focus:ring-[#22677e] p-3"
                  placeholder="Tu nombre"
                  autoComplete="name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#15394b]">
                  Email <span className="text-[#f9623e]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:border-[#22677e] focus:ring-[#22677e] p-3"
                  placeholder="tu@email.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#15394b]">
                  Mensaje <span className="text-[#f9623e]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={onChange("message")}
                  className="mt-1 w-full rounded-lg border border-gray-300 focus:border-[#22677e] focus:ring-[#22677e] p-3"
                  placeholder="Contanos en qué podemos ayudarte"
                  required
                />
              </div>

              {errorMsg && (
                <p className="text-sm text-[#b52727] bg-[#b52727]/10 rounded-md px-3 py-2">
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full md:w-auto inline-flex items-center justify-center rounded-xl bg-[#134e5e] text-white font-semibold px-6 py-3
                           hover:bg-[#1b5f74] disabled:opacity-60 disabled:cursor-not-allowed transition"
              >
                {status === "sending" ? "Enviando..." : "Enviar"}
              </button>

              {status === "ok" && (
                <p className="text-sm text-green-700 bg-green-100 rounded-md px-3 py-2">
                  Mensaje enviado. Te responderemos a la brevedad.
                </p>
              )}
              {status === "error" && !errorMsg && (
                <p className="text-sm text-[#b52727] bg-[#b52727]/10 rounded-md px-3 py-2">
                  Hubo un problema al enviar. Probá nuevamente.
                </p>
              )}
            </form>

            {/* Datos rápidos */}
            <div className="mt-6 pt-6 border-t border-gray-200 grid gap-3 text-sm text-gray-600">
              <p>
                <strong className="text-[#15394b]">Email:</strong>{" "}
                <a className="underline decoration-dotted hover:text-[#22677e]" href="mailto:iehs@fch.unicen.edu.ar">
                  iehs@fch.unicen.edu.ar
                </a>
              </p>
              <p>
                <strong className="text-[#15394b]">Teléfono:</strong>{" "}
                <a className="underline decoration-dotted hover:text-[#22677e]" href="tel:+542494445683">
                  (0249) 444-5683
                </a>
              </p>
              <p>
                <strong className="text-[#15394b]">Dirección:</strong> Pinto 348, Tandil, Buenos Aires (CP 7000)
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
            <div className="aspect-[16/10] sm:aspect-[16/9]">
              <iframe
                title="Ubicación IEHS"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.335323320546!2d-59.1439046!3d-37.3219185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911fd14a3f7a6f%3A0x1f0c4e3f4a5b1c12!2sInstituto%20de%20Estudios%20Hist%C3%B3rico-Sociales%20(IEHS)!5e0!3m2!1ses-419!2sar!4v1700000000000"
                }
              />
            </div>
            <div className="p-4 bg-gray-50 text-gray-600 text-sm">
              <strong className="text-[#15394b]">Instituto de Estudios Histórico-Sociales (IEHS)</strong> · Pinto 348, Tandil
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
