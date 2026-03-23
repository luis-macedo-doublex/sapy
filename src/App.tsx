import { LanguageProvider } from './contexts/LanguageContext'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Companies } from './components/Companies'
import { Services } from './components/Services'
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
        <Companies />
        <Services />
        <Differentials />
        <Contact />
      </main>
      <Footer />
      <FloatingContact />
    </LanguageProvider>
  )
}
