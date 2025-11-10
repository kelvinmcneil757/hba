import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/22-DSC02546_Original.png"
            alt="Hillsborough Basketball Academy Team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hillsborough Basketball Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Developing the next generation through basketball.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
                Meet the Team
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                Get Involved
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-8">
              Our Mission
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              At Hillsborough Basketball Academy, we're committed to developing young athletes 
              through comprehensive basketball training, mentorship, and academic discipline. 
              Our 501(c)(3) nonprofit organization focuses on building character, leadership, 
              and fundamental skills both on and off the court.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">Skill Development</h3>
                <p className="text-gray-600">Comprehensive training in fundamentals and advanced techniques</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">Mentorship</h3>
                <p className="text-gray-600">Building character and leadership through positive role models</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">Academic Excellence</h3>
                <p className="text-gray-600">Emphasizing education and discipline alongside athletic achievement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Season Pages Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-black text-center mb-12">
              Our Seasons
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/2025-season" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl font-bold">2025</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">2025 Season</h3>
                    <p className="text-gray-600 mb-4">
                      Our inaugural travel basketball season, providing affordable competitive opportunities for 3rd and 4th graders.
                    </p>
                    <span className="text-blue-900 font-semibold group-hover:underline">
                      View Season →
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link href="/2026-season" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl font-bold">2026</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">2026 Season</h3>
                    <p className="text-gray-600 mb-4">
                      Building champions through fundamentals, teamwork, and grit. See our schedule, uniforms, and philosophy.
                    </p>
                    <span className="text-blue-900 font-semibold group-hover:underline">
                      View Season →
                    </span>
                  </div>
                </div>
              </Link>
              
              <Link href="/2027-season" className="group">
                <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-white text-2xl font-bold">2027</span>
                    </div>
                    <h3 className="text-2xl font-bold text-black mb-3">2027 Season</h3>
                    <p className="text-gray-600 mb-4">
                      Our final travel basketball season. Learn about tryouts and our transition to a skill academy.
                    </p>
                    <span className="text-blue-900 font-semibold group-hover:underline">
                      View Season →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transition to Skill Academy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-8">
                A New Chapter: Transitioning to a True Basketball Skill Academy
              </h2>
              <div className="space-y-6 text-lg text-gray-800 leading-relaxed">
                <p>
                  <strong className="text-black text-xl">2027 will mark our final year as a travel basketball team.</strong> 
                  This milestone represents both an ending and an exciting new beginning for Hillsborough Basketball Academy.
                </p>
                <p>
                  Starting in <strong className="text-black">2028, we will transition to a true basketball skill academy</strong>, 
                  maintaining our nonprofit mission and goals of providing affordable training opportunities to children in the area. 
                  This evolution allows us to reach more young athletes and focus on what we do best: developing fundamental skills, 
                  building character, and fostering a love for the game.
                </p>
                <p>
                  Our new model will offer <strong className="text-black">group and individual skills clinics</strong>, making 
                  high-quality basketball training accessible to families throughout Hillsborough, Carrboro, Chapel Hill, Durham, 
                  Burlington, and surrounding communities. <strong className="text-black">Individual skill work will begin in 2028</strong>, 
                  providing personalized attention to help each player reach their full potential.
                </p>
                <p>
                  While we're saying goodbye to travel basketball after the 2027 season, we're saying hello to a more flexible, 
                  accessible approach that aligns perfectly with our core mission: developing the next generation through basketball, 
                  regardless of their competitive goals or financial circumstances.
                </p>
                <div className="mt-8 pt-8 border-t-2 border-blue-900">
                  <p className="text-center text-xl font-semibold text-black">
                    Our commitment to affordable, high-quality basketball training continues. 
                    The game changes, but our mission remains the same.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join the Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us to learn more about our programs and how your child can become part of the HBA family.
          </p>
          <Link href="/contact">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300">
              Contact Us Today
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
} 