import Image from 'next/image'

export default function Season2027() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-black">
      {/* Hero Section with Coming Soon Card */}
      <section className="relative py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Coming Soon Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="mb-8">
              <div className="inline-block bg-blue-900 text-white text-6xl md:text-8xl font-bold px-8 py-4 rounded-2xl mb-6">
                2027
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Coming Soon
            </h1>
            
            <div className="w-24 h-1 bg-blue-900 mx-auto mb-8"></div>
            
            <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p className="font-semibold text-black text-xl md:text-2xl">
                Our Final Travel Basketball Season
              </p>
              
              <p>
                The 2027 season will mark a significant milestone for Hillsborough Basketball Academy. 
                This will be our <strong className="text-black">last year of the travel basketball program</strong> before 
                we transition to focusing exclusively on <strong className="text-black">clinics and skill development 
                opportunities</strong> for children in the local area.
              </p>
              
              <p>
                We're excited to serve our community through accessible, high-quality basketball training 
                in Hillsborough, Carrboro, Chapel Hill, Durham, Burlington, and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tryout Information Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12 shadow-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-8">
              Tryout Information
            </h2>
            
            <div className="space-y-6 text-lg text-gray-800">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Tryout Dates</h3>
                    <p>
                      <strong className="text-blue-900">Be on the lookout for more information about tryouts 
                      for the 2027 season in October of 2026.</strong>
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Eligibility Requirements</h3>
                    <p>
                      Eligibility will only be for children who are:
                    </p>
                    <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                      <li>In the <strong className="text-black">5th grade</strong> in 2027</li>
                      <li><strong className="text-black">11 years old or under</strong> in 2027</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-900 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-black mb-2">Service Areas</h3>
                    <p>
                      We serve children in the following areas:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {['Hillsborough', 'Carrboro', 'Chapel Hill', 'Durham', 'Burlington'].map((city) => (
                        <span key={city} className="bg-blue-900 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Message */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Looking Ahead
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              After the 2027 season, Hillsborough Basketball Academy will transition to focusing on 
              clinics and skill development programs. This shift allows us to reach more children in 
              our community and provide accessible basketball training opportunities for all skill levels.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Stay tuned for updates on our new programs and how we'll continue to serve the basketball 
              community in North Carolina.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

