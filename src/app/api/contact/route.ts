import { NextRequest, NextResponse } from 'next/server'

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

    // Log the contact form submission (for now)
    // In production, you would integrate with an email service like SendGrid, Resend, or Nodemailer
    console.log('Contact Form Submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
    })

    // TODO: Implement actual email sending
    // For now, we'll just log the submission
    // You can integrate with services like:
    // - SendGrid: https://sendgrid.com/
    // - Resend: https://resend.com/
    // - Nodemailer: https://nodemailer.com/
    
    // Example with a hypothetical email service:
    /*
    const emailData = {
      to: 'info@hillsboroughbasketballacademy.com',
      from: 'noreply@hillsboroughbasketballacademy.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    }
    
    // Send email using your preferred service
    await sendEmail(emailData)
    */

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