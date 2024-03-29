import Head from 'next/head'
import Navbar from './components/Navbar'
import { useRef, useEffect, useState } from 'react'
import Services from './sections/Services'
import About from './sections/About'
import Hero from './sections/Hero'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import AOS from 'aos'
import Loader from './components/Loader'

export default function Home() {

  const heroSection = useRef(null)
  const aboutSection = useRef(null)
  const servicesSection = useRef(null)
  const contactSection = useRef(null)

  const scroll = (section) => {
    if (section === "hero") window.scrollTo({ top: heroSection.current.offsetTop, behavior: "smooth" })
    else if (section === "about") window.scrollTo({ top: aboutSection.current.offsetTop, behavior: "smooth" })
    else if (section === "services") window.scrollTo({ top: servicesSection.current.offsetTop, behavior: "smooth" })
    else if (section === "contact") window.scrollTo({ top: contactSection.current.offsetTop, behavior: "smooth" })
  }

  useEffect(() =>{
    AOS.init()
  }, [])

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      <Head>
        <title>Nova MP Engenharia</title>
        <meta name="description" content="Criamos com excelência!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {loading ? <Loader /> : (
          <>
              <Navbar scroll={scroll} />
              <section ref={heroSection}>
                <Hero />
              </section>
              <section ref={aboutSection}>
                <About />
              </section>
              <section ref={servicesSection}>
                <Services />
              </section>
              <section ref={contactSection}>
                <Contact />
              </section>
              <Footer scroll={scroll} />
          </>
        )}
      </main>

    </div>
  )
}
