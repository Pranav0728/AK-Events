import Footer from '@/components/Footer'
import GalleryBanner from '@/components/Gallery/GalleryBanner'
import GalleryPics from '@/components/Gallery/GalleryPics'
import Header from '@/components/Header'
import React from 'react'

function GalleryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Site Header */}
      <Header />
      

      {/* Portfolio Gallery Section */}
      <section id="gallery" aria-label="Gallery Section">
        
        <GalleryBanner />
      </section>
      <GalleryPics />

      {/* Site Footer */}
      <Footer />
    </div>
  )
}

export default GalleryPage