import { NextRequest, NextResponse } from 'next/server'

// In-memory store for IP-based rate limiting (in production, use Redis or a database)
const ipAttempts = new Map<string, { count: number; lastAttempt: number; blocked: boolean }>()

// Clean up old entries every 10 minutes
setInterval(() => {
  const now = Date.now()
  const ipsToDelete: string[] = []
  ipAttempts.forEach((data, ip) => {
    // Remove entries older than 1 hour
    if (now - data.lastAttempt > 3600000) {
      ipsToDelete.push(ip)
    }
  })
  ipsToDelete.forEach(ip => ipAttempts.delete(ip))
}, 600000)

function getClientIP(request: NextRequest): string {
  // Check various headers for the real IP
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')
  const cfConnectingIP = request.headers.get('cf-connecting-ip')
  
  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }
  if (realIP) {
    return realIP
  }
  if (cfConnectingIP) {
    return cfConnectingIP
  }
  
  // Fallback to a default if no IP found
  return 'unknown'
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { answer, userAnswer, pageLoadTime } = body
    
    // Get client IP
    const clientIP = getClientIP(request)
    
    // Check if IP is blocked
    const ipData = ipAttempts.get(clientIP)
    if (ipData?.blocked) {
      // Check if block has expired (1 hour)
      if (Date.now() - ipData.lastAttempt > 3600000) {
        ipAttempts.delete(clientIP)
      } else {
        return NextResponse.json(
          { 
            success: false, 
            error: 'Too many failed attempts. Please try again later.',
            blocked: true 
          },
          { status: 429 }
        )
      }
    }
    
    // Check minimum time on page (5 seconds)
    const timeOnPage = Date.now() - pageLoadTime
    if (timeOnPage < 5000) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Please spend more time reading the page before verifying.',
          timeRequired: true 
        },
        { status: 400 }
      )
    }
    
    // Verify answer
    if (userAnswer.trim() !== answer) {
      // Increment attempt count
      const currentData = ipAttempts.get(clientIP) || { count: 0, lastAttempt: 0, blocked: false }
      const newCount = currentData.count + 1
      
      // Block after 2 failed attempts
      const isBlocked = newCount >= 2
      
      ipAttempts.set(clientIP, {
        count: newCount,
        lastAttempt: Date.now(),
        blocked: isBlocked
      })
      
      return NextResponse.json(
        { 
          success: false, 
          error: isBlocked 
            ? 'Too many failed attempts. Your IP has been temporarily blocked. Please try again later.'
            : `Incorrect answer. ${2 - newCount} attempt${2 - newCount === 1 ? '' : 's'} remaining.`,
          attemptsRemaining: 2 - newCount,
          blocked: isBlocked
        },
        { status: 400 }
      )
    }
    
    // Success - clear attempts for this IP
    ipAttempts.delete(clientIP)
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { success: false, error: 'Verification failed. Please try again.' },
      { status: 500 }
    )
  }
}

