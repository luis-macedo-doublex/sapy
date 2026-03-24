import { LanguageProvider } from './contexts/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Sectors } from './components/Sectors'
import { Services } from './components/Services'
import { Cases } from './components/Cases'
import { Clients } from './components/Clients'
import { Credentials } from './components/Credentials'
import { Companies } from './components/Companies'
import { Differentials } from './components/Differentials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Sectors />
        <Services />
        <Cases />
        <Clients />
        <Credentials />
        <Companies />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </LanguageProvider>
  )
}
