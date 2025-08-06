
import About from './components/About'
import Skills from './components/Skills'
import Projects from '../components/Projects'
import Education from './components/Education'
import Certifications from './components/Certifications'

export default function Home() {
  return (
    <div className="min-h-screen">
      <About />
      <Skills />
      <Projects />
      
      {/* Certifications and Education - Mobile-optimized layout */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="w-full lg:flex-1">
            <Certifications />
          </div>
          <div className="w-full lg:flex-1">
            <Education />
          </div>
        </div>
      </div>
    </div>
  )
}
