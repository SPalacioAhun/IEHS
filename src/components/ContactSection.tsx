"use client";

import React, { useState } from "react";

type FormState = { name: string; email: string; message: string; website: string };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const onChange = (key: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [key]: event.target.value });
  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); setErrorMsg("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) { setErrorMsg("Completá nombre, email y mensaje."); return; }
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      if (!response.ok) throw new Error("No se pudo enviar el mensaje.");
      setStatus("ok"); setForm({ name: "", email: "", message: "", website: "" });
    } catch (error: unknown) { setStatus("error"); setErrorMsg(error instanceof Error ? error.message : "Error inesperado."); }
  };
  return <section id="contacto" className="contact-section" aria-labelledby="contacto-title">
    <div className="site-shell contact-section__layout">
      <div className="contact-section__details"><h2 id="contacto-title">Contacto</h2><span className="contact-section__rule" aria-hidden="true" />
        <dl className="contact-section__data">
          <div><dt>Email</dt><dd><a href="mailto:iehs@fch.unicen.edu.ar">iehs@fch.unicen.edu.ar</a></dd></div>
          <div><dt>Teléfono</dt><dd><a href="tel:+542494445683">+54 (0)2494445683</a></dd></div>
          <div><dt>Dirección</dt><dd>Pinto 348, Tandil, Buenos Aires (CP 7000)</dd></div>
        </dl>
      </div>
      <form className="contact-form" onSubmit={onSubmit}>
        <input type="text" name="website" value={form.website} onChange={onChange("website")} autoComplete="off" className="contact-form__honeypot" tabIndex={-1} aria-hidden="true" />
        <div className="contact-form__row"><div className="contact-form__field"><label htmlFor="name">Nombre</label><input id="name" name="name" type="text" value={form.name} onChange={onChange("name")} autoComplete="name" /></div><div className="contact-form__field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" value={form.email} onChange={onChange("email")} autoComplete="email" required /></div></div>
        <div className="contact-form__field"><label htmlFor="message">Mensaje <span aria-hidden="true">*</span></label><textarea id="message" name="message" rows={5} value={form.message} onChange={onChange("message")} required /></div>
        <div className="contact-form__feedback" aria-live="polite">{errorMsg && <p className="contact-form__error">{errorMsg}</p>}{status === "ok" && <p className="contact-form__success">Mensaje enviado. Te responderemos a la brevedad.</p>}{status === "error" && !errorMsg && <p className="contact-form__error">Hubo un problema al enviar. Probá nuevamente.</p>}</div>
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Enviando..." : "Enviar"}<span aria-hidden="true">→</span></button>
      </form>
    </div>
  </section>;
}
