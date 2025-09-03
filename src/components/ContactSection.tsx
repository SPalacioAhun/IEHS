"use client";
import React, { useState } from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle"
  );
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
      className="relative bg-[#134e5e] py-16"
      aria-labelledby="contacto-title"
    >
      <div className="container mx-auto px-6 lg:px-10">
        <header className="text-center mb-10">
          <span className="inline-block text-xs tracking-wide uppercase font-semibold text-white bg-white/10 px-3 py-1 rounded-full">
            IEHS
          </span>
          <h2
            id="contacto-title"
            style={{
              fontFamily: "'Playfair Display', serif",
              letterSpacing: "0.03em",
            }}
            className="mt-3 text-4xl md:text-5xl font-extrabold text-center tracking-tight leading-[1.18] text-white drop-shadow mb-6"
          >
            Contacto
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 h-1 w-32 bg-[#f9623e] rounded-full"></span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Formulario */}
          <div className="rounded-2xl border border-gray-200/60 bg-white/95 shadow-sm hover:shadow-md transition p-6 md:p-8">
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
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#15394b]"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={onChange("name")}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 outline-none focus:border-[#22677e] focus:ring-2 focus:ring-[#22677e]/30 p-3"
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#15394b]"
                >
                  Email <span className="text-[#f9623e]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={onChange("email")}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 outline-none focus:border-[#22677e] focus:ring-2 focus:ring-[#22677e]/30 p-3"
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#15394b]"
                >
                  Mensaje <span className="text-[#f9623e]">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  value={form.message}
                  onChange={onChange("message")}
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white text-black placeholder-gray-400 outline-none focus:border-[#22677e] focus:ring-2 focus:ring-[#22677e]/30 p-3"
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
            <div className="mt-6 pt-6 border-t border-gray-200/60 grid gap-3 text-sm text-gray-700">
              <p className="flex items-center gap-2">
                <FaEnvelope className="w-4 h-4 text-[#22677e]" />
                <strong className="text-[#15394b]">Email:</strong>{" "}
                <a
                  className="underline decoration-dotted hover:text-[#22677e]"
                  href="mailto:iehs@fch.unicen.edu.ar"
                >
                  iehs@fch.unicen.edu.ar
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="w-4 h-4 text-[#22677e]" />
                <strong className="text-[#15394b]">Teléfono:</strong>{" "}
                <a
                  className="underline decoration-dotted hover:text-[#22677e]"
                  href="tel:+542494445683"
                >
                  +54 (0)2494445683
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="w-4 h-4 text-[#22677e]" />
                <strong className="text-[#15394b]">Dirección:</strong> Pinto
                348, Tandil, Buenos Aires (CP 7000)
              </p>
            </div>
          </div>

          {/* Mapa */}
          <div className="rounded-2xl overflow-hidden border border-gray-200/60 bg-white/95 shadow-sm">
            <div className="aspect-[16/10] sm:aspect-[16/9]">
              <iframe
                title="Ubicación IEHS"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={
                  "https://www.google.com/maps?q=Pinto%20348%20Tandil&z=17&output=embed"
                }
              />
            </div>
            <div className="p-4 bg-white/95 text-gray-700 text-sm">
              <strong className="text-[#15394b]">
                Instituto de Estudios Histórico-Sociales (IEHS)
              </strong>{" "}
              ·{" "}
              <a
                className="underline hover:text-[#22677e]"
                href="https://www.google.com/maps/place/Instituto+de+Estudios+Hist%C3%B3rico+Sociales/@-37.328639,-59.139435,5540m/data=!3m1!1e3!4m6!3m5!1s0x95911f99efe2eb67:0xd31c4cf43f6945cc!8m2!3d-37.3286393!4d-59.139435!16s%2Fg%2F11bc8xgjqv?hl=es-AR&entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
              >
                Pinto 348, Tandil
              </a>
              {/* Redes Sociales */}
              <div className="mt-3 pt-3 border-t border-gray-200/60">
                <p className="text-sm text-gray-600 mb-3 font-medium">
                  Seguinos en nuestras redes:
                </p>
                <div className="flex flex-col gap-4">
                  <a
                    href="https://web.facebook.com/iehsunicen/?_rdc=1&_rdr#"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#22677e] transition-colors"
                  >
                    <FaFacebook className="w-6 h-6" />
                    <span className="text-sm">Facebook</span>
                  </a>
                  <a
                    href="https://x.com/iehs_tandil"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#22677e] transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M17.53 2.47A11.998 11.998 0 0 0 12 0C5.373 0 0 5.373 0 12c0 2.314.656 4.47 1.787 6.294A11.998 11.998 0 0 0 12 24c6.627 0 12-5.373 12-12 0-2.314-.656-4.47-1.787-6.294A11.998 11.998 0 0 0 17.53 2.47ZM6.545 7.56h2.36l3.01 4.14 3.005-4.14h2.366l-4.17 5.74 4.46 6.16h-2.36l-3.305-4.56-3.31 4.56h-2.36l4.46-6.16-4.01-5.74Z" />
                    </svg>
                    <span className="text-sm">X</span>
                  </a>
                  <a
                    href="https://www.instagram.com/iehsunicen?igsh=MTE3enNhMHkxcHVudQ=="
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#22677e] transition-colors"
                  >
                    <FaInstagram className="w-6 h-6" />
                    <span className="text-sm">Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCZe7s2gBuiVT5melN0Pc-bw/feed"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-600 hover:text-[#22677e] transition-colors"
                  >
                    <FaYoutube className="w-6 h-6" />
                    <span className="text-sm">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
