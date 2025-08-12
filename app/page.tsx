import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import Features from './components/Features'
import TeamSection from './components/TeamSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AboutSection />
      <Features />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
