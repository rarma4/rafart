import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json()

    await resend.emails.send({
      from: `Raf'Art <${process.env.EMAIL_FROM}>`,
      to: ["rarma4@gmail.com"],
      subject: `Novo contato pelo Site Raf'Art - ${name}`,
      html: `
        <h3>Novo contato pelo Site Raf'Art</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: "Erro ao enviar email" }, { status: 500 })
  }
}
