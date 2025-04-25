import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
   const { name, email, message } = await request.json();

   const transporter = nodemailer.createTransport({
    host: 'mail.taylorwcooper.com',
    port: 465,
    secure: true,
    auth: {
      user: 'taylor@taylorwcooper.com', 
      pass: process.env.SMTP_PASS,
    },
   });

   try {
    await transporter.sendMail ({
      from: `"Portfolio Contact" <taylor@taylorwcooper.com>`,
      to: 'taylor@taylorwcooper.com',
      subject: `New Message from ${name}`,
       html: `
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
