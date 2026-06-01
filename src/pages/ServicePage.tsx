import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ServiceBanner from '@/components/Service/ServiceBanner'
import Services from '@/components/Service/Services'

import React from 'react'

function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Site Header */}
      <Header />

      {/* Hero Section */}
      <section id="service" aria-label="Service Section">
        <ServiceBanner />
      </section>
      

      {/* Portfolio Gallery Section */}
      <section id="gallery" aria-label="Service Section">
        <Services />
      </section>

      {/* Site Footer */}
      <Footer />
    </div>
  )
}

export default ServicePage;