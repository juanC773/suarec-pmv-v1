import HeroSection from "@/components/Hero"
import ServicesSection from "@/components/Services"
import ExpertsMap from "@/components/Map"
import HowItWorks from "@/components/Step"
import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WppFlotant"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <HowItWorks />
      <ExpertsMap />
      <Footer />
      <WhatsAppButton />
    </>
  )
}