'use client'

import Image from 'next/image'

export default function Season2026() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            2026 Season
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Building Champions Through Fundamentals, Teamwork, and Grit
          </p>
        </div>
      </section>

      {/* New Logos Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Our New Identity
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-xs mb-6 bg-black rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/new_logos/Untitled10.PNG"
                  alt="HBA Logo"
                  fill
                  className="object-contain p-4"
                  unoptimized
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-xs mb-6 bg-black rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/new_logos/Untitled12.PNG"
                  alt="Hillsborough Basketball Academy Logo"
                  fill
                  className="object-contain p-4"
                  unoptimized
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square max-w-xs mb-6 bg-black rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/new_logos/Untitled13.PNG"
                  alt="HBA Team Logo"
                  fill
                  className="object-contain p-4"
                  unoptimized
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section - Villanova Inspired */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
              Our Philosophy
            </h2>
            <div className="space-y-8 text-lg text-gray-800 leading-relaxed">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Playing Off Two Feet</h3>
                <p>
                  At Hillsborough Basketball Academy, we emphasize the fundamental principle of playing off two feet. 
                  This isn't just about balance and control—it's about making smart decisions under pressure. When our 
                  players learn to play off two feet, they develop better court awareness, improved passing accuracy, and 
                  the ability to finish through contact. This fundamental skill separates good players from great ones, 
                  and it's a cornerstone of our training philosophy.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Team First</h3>
                <p>
                  Individual talent wins games, but team chemistry wins championships. Our program is built on the 
                  principle that the team's success always comes before individual accolades. We teach our players that 
                  the assist is just as valuable as the basket, that setting a screen is as important as scoring, and 
                  that celebrating a teammate's success is celebrating your own. This team-first mentality creates a 
                  culture where every player feels valued and every contribution matters.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Tough and Gritty Man-to-Man Basketball</h3>
                <p>
                  We believe in playing tough, physical, man-to-man defense. This isn't about being aggressive—it's about 
                  being disciplined, focused, and committed to making every possession difficult for our opponents. Our 
                  players learn to take pride in their defensive assignments, to communicate on every play, and to never 
                  give up on a possession. This gritty approach to defense builds character, resilience, and the mental 
                  toughness needed to succeed both on and off the court.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Fundamentals Over Flash</h3>
                <p>
                  While highlight-reel plays are exciting, we focus on mastering the fundamentals that win games. Proper 
                  footwork, crisp passing, solid shooting form, and sound defensive positioning are the building blocks 
                  of championship basketball. We teach our players that consistency in fundamentals leads to consistency 
                  in performance, and that's what separates winning teams from the rest.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Mental Toughness and Resilience</h3>
                <p>
                  Basketball is a game of runs, momentum shifts, and pressure situations. We prepare our players to handle 
                  adversity with composure and to respond to challenges with determination. Whether it's overcoming a deficit, 
                  dealing with a tough call, or bouncing back from a mistake, our players learn that mental toughness is 
                  just as important as physical ability. This resilience extends beyond the court, helping them navigate 
                  life's challenges with confidence and poise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section - Large and Prominent */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            2026 Season Schedule
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="relative w-full aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/2026-season/Untitled 9.PNG"
                alt="HBA 2026 Season Schedule"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Game Day Threads Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            2026 Season Game Day Threads
          </h2>
          
          <div className="max-w-6xl mx-auto">
            {/* Video Section */}
            <div className="mb-12">
              <div className="relative w-full aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-full object-contain"
                  controls
                  preload="metadata"
                >
                  <source src="/images/2026-season/Untitled.MP4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Jersey Images */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/2026-season/Untitled 17.PNG"
                  alt="HBA 2026 Season Jerseys - Home and Away"
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <h3 className="text-3xl font-bold text-black mb-4">Premium Game Day Uniforms</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Our 2026 season uniforms represent the evolution of Hillsborough Basketball Academy. 
                    Featuring our signature navy blue and light blue color scheme, these uniforms are designed 
                    for performance, comfort, and style.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    The home navy uniform and away white uniform both feature our updated HBA branding, 
                    ensuring our players look and feel like champions every time they step on the court. 
                    These uniforms are built to move with our players, supporting the fundamental skills 
                    and team-first mentality we emphasize in every practice and game.
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Content */}
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
              <h3 className="text-3xl font-bold text-black mb-6 text-center">
                Representing HBA
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                When our players put on the HBA uniform, they're not just representing themselves—they're 
                representing a program built on fundamentals, teamwork, and grit. Every jersey tells a story 
                of dedication, hard work, and the commitment to playing the game the right way.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our game day threads are more than just uniforms—they're a symbol of the values we instill 
                in every player: playing off two feet, putting the team first, and competing with the toughness 
                and grit that defines Hillsborough Basketball Academy. When you see our players on the court, 
                you're seeing the future of basketball, built on a foundation of fundamentals and character.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-blue-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the HBA Family
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Experience the difference that fundamentals, teamwork, and grit make in developing 
            not just better basketball players, but better people.
          </p>
        </div>
      </section>
    </div>
  )
}

