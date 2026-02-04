'use client'
import { useEffect } from 'react'
import Hero from './Hero/Hero'
import dynamic from 'next/dynamic'
import Spinner from '../Helper/Spinner'

const Skills = dynamic(() => import('./Skills/Skills'), {
  ssr: false,
  loading: () => <Spinner />
})

const Services = dynamic(() => import('./Services/Services'), {
  ssr: false,
  loading: () => <Spinner />
})

const Resume = dynamic(() => import('./Resume/Resume'), {
  ssr: false,
  loading: () => <Spinner />
})

const Projects = dynamic(() => import('./Projects/Projects'), {
  ssr: false,
  loading: () => <Spinner />
})

const Contact = dynamic(() => import('./Contact/Contact'), {
  ssr: false,
  loading: () => <Spinner />
})

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom"
      })
    }
    initAOS()

  }, [])

  return (
    <div className="overflow-hidden">
      <section id="home">
        <Hero />
      </section>

      <section id="skills" className="scroll-mt-[10vh]">
        <Skills />
      </section>

      <section id="services" className="scroll-mt-[10vh]">
        <Services />
      </section>

      <section id="resume" className="scroll-mt-[10vh]">
        <Resume />
      </section>

      <section id="works" className="scroll-mt-[10vh]">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-[10vh]">
        <Contact />
      </section>

    </div>
  )
}

export default Home