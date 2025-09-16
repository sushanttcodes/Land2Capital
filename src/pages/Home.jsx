import React from 'react'
import Hero from '../component/Hero'
import Service from '../component/Service'
import ContactSection from '../component/ContactSection'
import { Toaster } from "react-hot-toast";
import FAQ from '../component/FAQ';
import WhatsAppWidget from '../component/WhatsAppWidget';

function Home() {
  return (
    <>
      <Hero />
      <Service />
      <ContactSection />
       <Toaster position="top-center" reverseOrder={false} />
       <WhatsAppWidget />
       <FAQ />
    </>
  )
}

export default Home
