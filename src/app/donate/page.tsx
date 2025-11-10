'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useMemo } from 'react'

export default function Donate() {
  const [isVerified, setIsVerified] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')
  const [showError, setShowError] = useState(false)

  // Generate a simple math question
  const { question, answer } = useMemo(() => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    return {
      question: `What is ${num1} + ${num2}?`,
      answer: (num1 + num2).toString()
    }
  }, [])

  const handleVerification = () => {
    if (userAnswer.trim() === answer) {
      setIsVerified(true)
      setShowError(false)
    } else {
      setShowError(true)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerification()
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            Support Our Mission
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your donation makes affordable, high-quality basketball training accessible to all children in our community.
          </p>
        </div>
      </section>

      {/* Donation CTA Section - Moved to Top */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Make a Difference Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Your support helps us continue our mission of developing the next generation through basketball, 
            regardless of financial circumstances. Every donation, no matter the size, makes a meaningful impact.
          </p>
          
          {/* Security Verification */}
          <div className="max-w-md mx-auto mb-8">
            {!isVerified ? (
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border-2 border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-white">Security Verification Required</h3>
                <div className="bg-blue-900/30 rounded-lg p-4 mb-6 border border-blue-400/30">
                  <p className="text-white mb-3 text-sm leading-relaxed">
                    <strong className="font-semibold">For your security and ours:</strong> We require a quick verification step before accessing our donation page. This additional security measure helps us prevent bad actors, automated bots, and malicious attempts that could compromise our donation system.
                  </p>
                  <p className="text-white text-sm leading-relaxed">
                    <strong className="font-semibold">What to expect:</strong> Simply answer the math question below. Once you complete the verification, the secure donation link will appear, and you'll be able to proceed with your donation.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="verification-question" className="block text-left text-white font-semibold mb-2">
                      {question}
                    </label>
                    <input
                      id="verification-question"
                      type="text"
                      value={userAnswer}
                      onChange={(e) => {
                        setUserAnswer(e.target.value)
                        setShowError(false)
                      }}
                      onKeyPress={handleKeyPress}
                      className="w-full px-4 py-3 rounded-lg text-black text-center text-xl font-semibold focus:outline-none focus:ring-4 focus:ring-blue-500"
                      placeholder="Enter answer"
                      aria-label="Answer to verification question"
                      autoComplete="off"
                    />
                    {showError && (
                      <p className="text-red-300 text-sm mt-2" role="alert">
                        Incorrect answer. Please try again.
                      </p>
                    )}
                  </div>
                  
                  <button
                    onClick={handleVerification}
                    className="w-full bg-white text-blue-900 px-6 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500"
                    aria-label="Verify and proceed to donation"
                  >
                    Verify & Continue
                  </button>
                </div>
                
                <p className="text-xs text-gray-300 mt-4">
                  <svg className="w-4 h-4 inline mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  Secure verification required
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-green-500/20 border-2 border-green-400 rounded-xl p-6">
                  <div className="flex items-center justify-center mb-4">
                    <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-lg mb-4">Verification Complete!</p>
                  <a
                    href="https://buy.stripe.com/dRm7sL7pXfUzcrKcypfIs01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-blue-900 px-12 py-6 rounded-lg font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-500"
                    aria-label="Proceed to secure donation page"
                  >
                    Donate Now
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-sm text-gray-300">
              {isVerified 
                ? "You will be redirected to our secure Stripe donation page."
                : "Complete the verification above to access our secure donation page."
              }
            </p>
            {isVerified && (
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-white text-sm leading-relaxed mb-2">
                  <strong className="font-semibold">Donation Options:</strong> On the Stripe donation page, you can add multiple units of $25 to increase your donation amount. Simply adjust the quantity to donate $50, $75, $100, or any multiple of $25.
                </p>
                <p className="text-white text-sm leading-relaxed">
                  <strong className="font-semibold">Tax Receipt:</strong> By providing your email address during checkout, you will receive a tax receipt via email within 48 hours of your donation. This receipt includes our 501(c)(3) organization information for your tax records.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
              How Your Donation Makes a Difference
            </h2>
            
            <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-xl shadow-lg">
                <p className="mb-6">
                  At Hillsborough Basketball Academy, we believe that financial circumstances should never be a barrier 
                  to a child's opportunity to develop their basketball skills, build character, and be part of a team. 
                  Your generous donation directly supports our mission of providing affordable, accessible basketball 
                  training to children throughout our community.
                </p>
                
                <p className="mb-6">
                  Every contribution helps us in several critical ways:
                </p>
                
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-black">Sponsoring a Child:</strong> Your donation can sponsor a child who 
                      may not be financially able to afford the season, ensuring that every child who wants to play has 
                      the opportunity to do so, regardless of their family's financial situation.
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-black">Equipment and Uniforms:</strong> Donations help us provide quality 
                      jerseys and equipment to our players, ensuring they look and feel like champions every time they 
                      step on the court.
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-black">Practice Facilities:</strong> We rent local gyms by the hour to provide 
                      our players with quality practice time. Your donation helps cover these essential facility costs, 
                      ensuring our players have access to proper training environments.
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-900 rounded-full flex items-center justify-center mr-4 mt-1">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <strong className="text-black">Tournament Registration:</strong> Competitive opportunities are essential 
                      for player development. Your donation helps us register for local tournaments, giving our players 
                      valuable game experience and the chance to compete against other teams.
                    </div>
                  </li>
                </ul>
                
                <p className="text-xl font-semibold text-black text-center mt-8 pt-6 border-t-2 border-blue-900">
                  Each donation allows us to take the financial strain off families, making it possible for more children 
                  to experience the life-changing benefits of organized basketball.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 501(c)(3) Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8">
                Tax-Deductible Donations
              </h2>
              
              <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-900">
                  <p className="mb-4">
                    <strong className="text-black text-xl">Hillsborough Basketball Academy is a registered 501(c)(3) nonprofit organization.</strong> 
                    This means that all charitable donations made to our organization are <strong className="text-black">tax-deductible</strong> 
                    to the full extent allowed by law.
                  </p>
                  <p>
                    When you make a donation through our secure donation link, you'll be asked to provide your email address. 
                    Upon completing your donation, we will send you a <strong className="text-black">tax receipt</strong> with our 
                    organization's information that you can provide to your CPA or use when filing your taxes.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-black mb-4">100% Volunteer Organization</h3>
                  <p>
                    It's important to know that <strong className="text-black">none of our coaches, volunteers, or board members 
                    receive financial compensation</strong> for any time donated to this organization. Every dollar you contribute 
                    goes directly toward supporting our players and programs—not toward administrative salaries or overhead.
                  </p>
                  <p className="mt-4">
                    Your donation directly funds:
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-2 ml-4">
                    <li>Player scholarships and financial assistance</li>
                    <li>Equipment and uniforms</li>
                    <li>Practice facility rentals</li>
                    <li>Tournament registration fees</li>
                    <li>Program development and operations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Additional Information */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-gray-600">
            <p className="mb-4">
              Questions about donations or need assistance? 
            </p>
            <Link 
              href="/contact" 
              className="text-blue-900 font-semibold hover:underline"
            >
              Contact us →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

