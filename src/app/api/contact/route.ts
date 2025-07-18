import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the contact form submission
    console.log('Contact Form Submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
    })

    // Send email using Resend
    const emailData = {
      from: 'Hillsborough Basketball Academy <noreply@hillsboroughbasketballacademy.com>',
      to: ['info@hillsboroughbasketballacademy.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong style="color: #000;">Name:</strong> ${name}</p>
            <p><strong style="color: #000;">Email:</strong> <a href="mailto:${email}" style="color: #0066cc;">${email}</a></p>
            <p><strong style="color: #000;">Phone:</strong> ${phone || 'Not provided'}</p>
          </div>
          
          <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
            <h3 style="color: #000; margin-top: 0;">Message:</h3>
            <p style="color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
            <p>This message was sent from the Hillsborough Basketball Academy contact form.</p>
            <p>Submitted on: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    }

    // Send the email
    const result = await resend.emails.send(emailData)
    
    if (result.error) {
      console.error('Email sending error:', result.error)
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Contact form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 