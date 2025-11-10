'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

// Get all image filenames (excluding the main hero image)
const getSeasonImages = () => {
  const mainImage = '404C6A4F-F7F9-4CA2-A116-A5E04EA3691F_1_105_c.jpeg'
  const allImages = [
    '03528111-8BC6-4A8E-9189-A6FC0B1D2747_1_105_c.jpeg',
    '06821CAC-B708-4D4A-96C6-24E4CE7B763D_1_105_c.jpeg',
    '0BA2881B-FD37-4A74-A5D6-99241C9252D3_1_105_c.jpeg',
    '130954A7-E8CF-456C-BC25-FFB2B3290372_1_105_c.jpeg',
    '160A0C4D-86C0-49D9-913A-FBBCB9C88B33_1_105_c.jpeg',
    '1BEB727D-9F2E-46AC-8B34-498E423A84E8_1_105_c.jpeg',
    '2A93AC10-1F5B-4F72-B486-A32008E17E67_1_105_c.jpeg',
    '2CB75D0D-59E6-4234-B5F6-B9CF5B903E18_1_105_c.jpeg',
    '2EC292ED-C305-46DE-939A-DFB61F71F3A3_1_105_c.jpeg',
    '3141AD53-9DD2-4347-AB38-8F8A15B220C6_1_105_c.jpeg',
    '38C2416E-F4C8-4066-8612-503148220EF4_1_105_c.jpeg',
    '3C6C60EA-774B-43CA-8D8E-1A4EF62B7B70_1_105_c.jpeg',
    '444B304C-9DB4-4649-92BC-CE40744BD1F9_1_105_c.jpeg',
    '4A398062-616B-42A1-A9EE-3D4B9BFB3499_1_105_c.jpeg',
    '4B602CC8-57FE-4D1E-90FA-1CE9F9F302CE_1_105_c.jpeg',
    '4B730351-21D1-4291-96F5-B23D6C4EFD6D_1_105_c.jpeg',
    '4F7CC4F3-119C-479F-99F7-7E3AEAC49716_1_105_c.jpeg',
    '5167E84B-1D0D-448A-A949-840246D27BE5_1_105_c.jpeg',
    '52F9191D-67F0-47FF-9C1F-49D05B31F1D0_1_105_c.jpeg',
    '65E1785A-A684-47D4-826D-3E1859025376_1_105_c.jpeg',
    '66EE5ED9-22BF-4763-BF1B-8B349D83A943_1_105_c.jpeg',
    '6811E4EC-9B6C-4B54-809C-4091ADC04B51_1_105_c.jpeg',
    '698E497B-9333-421C-8C7E-18E34D544F36_1_105_c.jpeg',
    '6E25D250-41E2-42E2-93D8-3CB6775DB084_1_105_c.jpeg',
    '728B8681-48A2-42D8-9B24-0BA9929EE01B_1_105_c.jpeg',
    '7A6F62FD-2C8C-4BEF-9EDF-ECB6EAA8D1B4_1_105_c.jpeg',
    '7C585558-2E6C-433B-B4B7-4015A85D4346_1_105_c.jpeg',
    '87180976-850F-4FFF-AB22-E5AE5B6B904D_1_105_c.jpeg',
    '9AB0FBAA-1BA4-4A8E-88BD-8C27112AD691_1_105_c.jpeg',
    '9E5CA75E-D1DE-45AD-8627-16D94DF721B3_1_105_c.jpeg',
    'A47EF2BD-5060-49D7-AACA-6925646D69A1_1_105_c.jpeg',
    'A52FF1E6-3E8B-4D54-B138-E3AEC5FE7360_1_105_c.jpeg',
    'A781A7AD-1C43-4B4E-B067-08B5194BEA85_1_105_c.jpeg',
    'AABD2A88-DF38-4604-B0F5-0EC5CFCA0834_1_105_c.jpeg',
    'AB679BE0-C63E-4A10-9C42-40F8B17F0A00_1_105_c.jpeg',
    'B50EDB60-634A-467A-90F5-4004D2C07302_1_105_c.jpeg',
    'B578ADD0-9FF5-49D6-86D0-2C494B031C15_1_105_c.jpeg',
    'BC5DB8D8-7CAE-46A7-B72E-CF2F1E09E70E_1_105_c.jpeg',
    'C2E88DF4-88A9-4D2F-9AB5-22FE6D3BFF2D_1_105_c.jpeg',
    'D865DDC7-F4CE-4320-928C-998F024B8635_1_105_c.jpeg',
    'DA436361-D028-43D4-803D-8DB66D5AA210_1_105_c.jpeg',
    'DB64DD8F-F527-4ADA-8942-DA41C218D51E_1_105_c.jpeg',
    'DDD22757-472E-4573-92B2-5179DC8BEC7C_1_105_c.jpeg',
    'DE37981D-3B82-423E-AAA8-FE199FE0CCF8_1_105_c.jpeg',
    'E2393C3E-AFF4-46D9-85DC-667E6F9FFE98_1_105_c.jpeg',
    'EDDC7BFD-722B-4411-96EB-2CA078D8B827_1_105_c.jpeg',
    'EEC4276B-113C-46BC-A19B-3272A125A896_1_105_c.jpeg',
    'EF30AA28-39A3-47DC-9F8F-2E4CC0986559_1_105_c.jpeg',
    'F5F5A9E0-41D8-4BB7-8016-477FC31A9E67_1_105_c.jpeg',
    'FD85917D-D362-4919-80BA-92BEF3FEDD43_1_105_c.jpeg',
  ]
  return allImages.filter(img => img !== mainImage)
}

const PhotoWheel = () => {
  const images = getSeasonImages()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [images.length, isAutoPlaying])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
    setIsAutoPlaying(false)
  }

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
    setIsAutoPlaying(false)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Main Image Display */}
      <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl mb-8 bg-black">
        <Image
          src={`/images/2025-season/${images[currentIndex]}`}
          alt={`Season photo ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-500"
          priority={currentIndex === 0}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110 z-10"
          aria-label="Previous image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-black rounded-full p-3 transition-all duration-300 shadow-lg hover:scale-110 z-10"
          aria-label="Next image"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex gap-3 justify-center px-4">
          {images.map((image, index) => (
            <button
              key={image}
              onClick={() => goToImage(index)}
              className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-4 ring-blue-500 scale-110 shadow-lg'
                  : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
              aria-label={`Go to image ${index + 1}`}
            >
              <Image
                src={`/images/2025-season/${image}`}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-gray-600 hover:text-black transition-colors text-sm flex items-center gap-2"
        >
          {isAutoPlaying ? (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
              Pause
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default function Season2025() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Main Image */}
      <section className="relative">
        <div className="relative h-[70vh] min-h-[500px] w-full">
          <Image
            src="/images/2025-season/404C6A4F-F7F9-4CA2-A116-A5E04EA3691F_1_105_c.jpeg"
            alt="HBA 2025 Season Team Photo"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        
        {/* Title Overlay */}
        <div className="absolute inset-0 flex items-end justify-center pb-16">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 drop-shadow-2xl">
              2025 Season
            </h1>
            <p className="text-xl md:text-2xl drop-shadow-lg">
              Hillsborough Basketball Academy
            </p>
          </div>
        </div>
      </section>

      {/* Accomplishments Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">
                Our 2025 Accomplishments
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6 text-center">
                  In 2025, Hillsborough Basketball Academy achieved something truly special: 
                  we provided an <strong className="text-black">affordable travel basketball experience</strong> for 
                  children seeking more competitive opportunities in North Carolina.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  While many families face barriers accessing competitive basketball beyond recreational leagues, 
                  HBA broke down those walls. We created a program specifically designed for <strong>3rd and 4th graders</strong> 
                  who were ready to take their game to the next level, without the financial burden that typically 
                  comes with travel basketball.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                  Our commitment to affordability didn't mean compromising on quality. Throughout the 2025 season, 
                  our young athletes received professional coaching, competed in tournaments across North Carolina, 
                  and developed skills that set them apart from their peers. We proved that competitive basketball 
                  development can be accessible to all families, regardless of their financial situation.
                </p>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  The success of our 2025 season demonstrates that when you remove financial barriers, incredible 
                  talent and passion emerge. Our players grew not just as athletes, but as teammates, leaders, 
                  and confident young individuals ready to excel both on and off the court.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Wheel Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-12">
            Season Highlights
          </h2>
          <PhotoWheel />
        </div>
      </section>
    </div>
  )
}

