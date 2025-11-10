import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/images/logo.PNG"
              alt="Hillsborough Basketball Academy Logo"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our mission, our leadership team, and the impact we're making in the Hillsborough community.
          </p>
        </div>
      </section>

      {/* Coaching Image Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/IMG_0055.png"
                alt="Kelvin McNeil coaching HBA players on the basketball court"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1200px"
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">Meet Our President and Head Coach</h2>
                <h3 className="text-2xl font-semibold text-black mb-4">Kelvin McNeil</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Kelvin McNeil is the President and Head Coach of Hillsborough Basketball Academy. 
                  With years of experience in basketball coaching and youth development, Kelvin 
                  has dedicated his career to helping young athletes reach their full potential 
                  both on and off the court.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  His passion for the game and commitment to mentorship has inspired countless 
                  young players to develop not just their basketball skills, but also their 
                  character, leadership abilities, and academic discipline.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Under Kelvin's leadership, HBA has grown into a respected 501(c)(3) nonprofit 
                  organization that serves the Hillsborough community through comprehensive 
                  basketball training and youth development programs.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="text-center">
                  <div className="w-64 h-64 mx-auto mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/images/IMG_0055.png"
                      alt="Kelvin McNeil coaching basketball"
                      width={256}
                      height={256}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-2">Kelvin McNeil</h4>
                  <p className="text-gray-600">President & Head Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-black text-center mb-12">Our Board of Directors</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hillsborough Basketball Academy is guided by a dedicated board of directors with deep roots in 
                college basketball. Our board consists of <strong className="text-black">Alphonso Dawson</strong> and 
                <strong className="text-black"> DJ Boney</strong>, both of whom played college basketball at the 
                <strong className="text-black"> University of Delaware</strong> alongside Kelvin McNeil.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                This shared collegiate basketball experience creates a unique bond and understanding that directly 
                benefits our program. Alphonso and DJ bring their extensive knowledge of the game, combined with 
                their professional experience, to help shape the direction and success of HBA.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong className="text-black">Alphonso Dawson and DJ Boney play vital roles in planning, coaching, 
                and long-term strategy</strong> for the program. Their contributions extend beyond the boardroom—they 
                are actively involved in coaching sessions, program development, and strategic decision-making 
                that ensures HBA continues to provide exceptional opportunities for young athletes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Together with Kelvin, this leadership team brings decades of combined basketball experience, 
                ensuring that every decision made at HBA is informed by a deep understanding of the game, 
                player development, and what it takes to build a successful youth basketball program.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl font-bold">AD</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Alphonso Dawson</h3>
                <p className="text-gray-600 mb-4">Board Member</p>
                <p className="text-gray-700">
                  University of Delaware Basketball Alumni
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                <div className="w-32 h-32 bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-4xl font-bold">DJ</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">DJ Boney</h3>
                <p className="text-gray-600 mb-4">Board Member</p>
                <p className="text-gray-700">
                  University of Delaware Basketball Alumni
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Service Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-black mb-6">Giving Back to Our Community</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                At Hillsborough Basketball Academy, we believe that developing great basketball players 
                means developing great people. That's why we're committed to giving back to our community 
                and teaching our players the importance of service and compassion.
              </p>
            </div>

            {/* Food Bank Volunteering Section */}
            <div className="mb-16">
              <div className="bg-gray-50 rounded-xl p-8 md:p-12 mb-12">
                <h3 className="text-3xl font-bold text-black mb-6 text-center">
                  Volunteering at Food Bank at Durham - 2025 Season
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                  During the 2025 season, our players and families came together to volunteer at the 
                  Food Bank at Durham, demonstrating our commitment to community service. Our young 
                  athletes learned valuable lessons about empathy, teamwork, and the importance of 
                  helping those in need. This experience reinforced our core values of character 
                  development and community engagement, showing our players that being a great 
                  athlete means being a great citizen.
                </p>
                
                {/* Food Bank Exterior Image */}
                <div className="mb-8">
                  <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src="/images/about_us/IMG_1100.jpg"
                      alt="Food Bank at Durham exterior"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 1200px"
                      priority
                      unoptimized
                    />
                  </div>
                </div>

                {/* Volunteering Activity Images Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/about_us/IMG_1099.jpg"
                      alt="HBA players packing items at Food Bank at Durham"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                      unoptimized
                    />
                  </div>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/about_us/IMG_1098.jpg"
                      alt="HBA team group photo at Food Bank at Durham"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                      unoptimized
                    />
                  </div>
                </div>

                {/* Additional Images */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/about_us/IMG_1096.jpg"
                      alt="HBA players during basketball practice at gym"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                      unoptimized
                    />
                  </div>
                  <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/images/about_us/IMG_1097.jpg"
                      alt="HBA player in thoughtful moment on basketball court"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Community Impact Message */}
            <div className="bg-black text-white rounded-xl p-8 md:p-12 text-center">
              <h3 className="text-3xl font-bold mb-6">Building Character Through Service</h3>
              <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                Our community service initiatives are an integral part of the HBA experience. 
                By participating in volunteer activities like our work with the Food Bank at Durham, 
                our players learn that success isn't just measured by wins and losses, but by the 
                positive impact we make in our community. These experiences shape our players into 
                well-rounded individuals who understand the value of giving back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organization History */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-black text-center mb-12">Our Story</h2>
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-black mb-4">The Beginning</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Hillsborough Basketball Academy was founded with a simple yet powerful vision: 
                  to develop the next generation of basketball players while building character, 
                  leadership, and academic excellence. What started as a small local program 
                  has grown into a comprehensive youth development organization.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-black mb-4">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  As a 501(c)(3) nonprofit organization, we're committed to providing accessible, 
                  high-quality basketball training to young athletes in the Hillsborough area. 
                  Our programs emphasize fundamental skills, teamwork, discipline, and academic 
                  achievement, preparing players for success both on and off the court.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold text-black mb-4">Community Impact</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Through our programs, we've helped hundreds of young athletes develop their 
                  basketball skills while building confidence, leadership abilities, and strong 
                  character. Our commitment to mentorship and positive role modeling has created 
                  lasting relationships and a supportive community for young players and their families.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-black text-center mb-12">Program Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Fundamental Training</h3>
              <p className="text-gray-600">Comprehensive skill development from basic fundamentals to advanced techniques</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Team Building</h3>
              <p className="text-gray-600">Fostering teamwork, communication, and leadership skills</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Academic Support</h3>
              <p className="text-gray-600">Emphasizing education and academic discipline alongside athletic development</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Mentorship</h3>
              <p className="text-gray-600">Building character through positive role models and guidance</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Competition</h3>
              <p className="text-gray-600">Participating in tournaments and competitive play opportunities</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-3">Community</h3>
              <p className="text-gray-600">Creating a supportive network for players and families</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 