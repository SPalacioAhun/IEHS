// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    console.log("🔑 API Key presente:", !!process.env.RESEND_API_KEY);
    console.log(
      "🔑 API Key primeros chars:",
      process.env.RESEND_API_KEY?.substring(0, 10)
    );

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Falta RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const { name, email, message, website } = await req.json();
    console.log("📨 Datos recibidos:", {
      name,
      email,
      hasMessage: !!message,
      website,
    });

    // Honeypot anti-bots: si viene con contenido, ignoramos "exitosamente"
    if (website) return NextResponse.json({ ok: true });

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { ok: false, error: "Campos incompletos" },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { ok: false, error: "Email inválido" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO || "iehs@fch.unicen.edu.ar";
    const from = process.env.MAIL_FROM || "IEHS Web <onboarding@resend.dev>";

    console.log("📧 Configuración email:", { to, from });

    const emailData = {
      from,
      to,
      replyTo: email,
      subject: `Contacto IEHS: ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <h3>Nuevo mensaje desde el sitio IEHS</h3>
        <p><b>Nombre:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        <pre style="white-space:pre-wrap;font-family:ui-monospace,Menlo,monospace">${escapeHtml(
          message
        )}</pre>
      `,
      bcc: process.env.MAIL_BCC ? [process.env.MAIL_BCC] : undefined,
    };

    console.log("📤 Enviando email con Resend...");
    const { error } = await resend.emails.send(emailData);

    if (error) {
      console.error("❌ Resend error:", error);
      return NextResponse.json(
        { ok: false, error: error.message || error },
        { status: 500 }
      );
    }

    console.log("✅ Email enviado exitosamente");
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "No se pudo enviar" },
      { status: 500 }
    );
  }
}

function escapeHtml(input: string) {
  return String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
