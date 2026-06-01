import Footer from '@/components/Footer'
import Header from '@/components/Header'
import TestimonialBanner from '@/components/Testimonial/TestimonialBanner'
import Testimonials from '@/components/Testimonial/Testimonials'
import React from 'react'

function Testimonial() {
  return (
    <div className="min-h-screen bg-white">
      {/* Site Header */}
      <Header />
    <TestimonialBanner/>
    <Testimonials />
      {/* Site Footer */}
      <Footer />
    </div>
  )
}

export default Testimonial