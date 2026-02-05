import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    try {
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const { data, error } = await resend.emails.send({
            from: 'AshBots Contact <onboarding@resend.dev>',
            // During testing, Resend only allows sending to your own email unless you verify a domain.
            to: ['info.ashbots.ai@gmail.com'],
            subject: `New Inquiry from ${name}`,
            reply_to: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>What questions do you have?:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            // Return only the message string to prevent React rendering issues on the frontend
            return NextResponse.json({ error: error.message || 'Email service error' }, { status: 400 });
        }

        return NextResponse.json({ success: true, data });
    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
