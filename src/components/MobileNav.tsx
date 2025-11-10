'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden relative z-[80]">
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none focus:ring-2 focus:ring-white rounded relative z-[80] touch-manipulation"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        type="button"
        style={{ WebkitTapHighlightColor: 'transparent' }}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[60]"
            onClick={closeMenu}
          />
          <div className="fixed top-16 left-0 right-0 bg-black z-[70] shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors py-2 text-lg font-semibold border-b border-gray-700"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors py-2 text-lg font-semibold border-b border-gray-700"
                >
                  About Us
                </Link>
                <Link
                  href="/2025-season"
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors py-2 text-lg font-semibold border-b border-gray-700"
                >
                  2025 Season
                </Link>
                <Link
                  href="/2026-season"
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors py-2 text-lg font-semibold border-b border-gray-700"
                >
                  2026 Season
                </Link>
                <Link
                  href="/2027-season"
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors py-2 text-lg font-semibold border-b border-gray-700"
                >
                  2027 Season
                </Link>
                <Link
                  href="/donate"
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors py-2 text-lg font-semibold border-b border-gray-700"
                >
                  Donate
                </Link>
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="text-white hover:text-gray-300 transition-colors py-2 text-lg font-semibold"
                >
                  Contact
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </div>
  )
}

