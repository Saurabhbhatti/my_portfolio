import React, { Suspense, lazy } from 'react'
import './App.css'
import { Navbar, Hero, StarsCanvas } from './components'
import PageLoader from './components/PageLoader'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import QuickStats from './components/QuickStats'

// Lazy load components for better performance
const About = lazy(() => import('./components/About'))
const Education = lazy(() => import('./components/Education'))
const Experience = lazy(() => import('./components/Experience'))
const Extracurricular = lazy(() => import('./components/Extracurricular'))
const Tech = lazy(() => import('./components/Tech'))
const Works = lazy(() => import('./components/Works'))
const Footer = lazy(() => import('./components/Footer'))

function App() {
  return (
    <ErrorBoundary>
      <ScrollProgress />
      <div className='relative z-0 bg-primary'>
        <div className="div bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Suspense fallback={<PageLoader />}>
          <About />
          <QuickStats />
          <Education />
          <Experience />
          <Extracurricular />
          <Tech />
          <Works />
          <div className="div relative z-0">
            <StarsCanvas />
          </div>
          <Footer />
        </Suspense>
      </div>
      <BackToTop />
    </ErrorBoundary>
  )
}

export default App
