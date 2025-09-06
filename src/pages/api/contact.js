import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }) {
  try {
    const { name, email, message } = await request.json();

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // use a verified sender
      to: "aravindr597@gmail.com",                  // your inbox
      subject: `New message from ${name}`,
      html: `
        <h2>Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Resend error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), { status: 500 });
  }
}
