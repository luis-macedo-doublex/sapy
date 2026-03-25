import { BrowserRouter, Routes, Route } from 'react-router-dom'
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
import { ProjectsPage } from './pages/ProjectsPage'

function HomePage() {
  return (
    <>
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
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projetos" element={<ProjectsPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
