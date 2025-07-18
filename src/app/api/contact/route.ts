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

    // Log the contact form submission (this will show in Vercel logs)
    console.log('Contact Form Submission:', {
      name,
      email,
      phone: phone || 'Not provided',
      message,
      timestamp: new Date().toISOString(),
    })

    // For now, we'll just log the submission and return success
    // You can view the submissions in your Vercel dashboard logs
    // Later, you can integrate with a simple email service like:
    // - Formspree (free tier available)
    // - EmailJS (client-side, no server needed)
    // - Netlify Forms (if you switch to Netlify)

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