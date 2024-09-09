import { useEffect, useState } from "react"
import "../Css/Hero.css"

const Hero = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <section
      className="section hero"
      style={{
        opacity: 1 - scrollPosition / 1100,
      }}
    >
      <div className="hero-center section-center">
        <h1 className="hero-heading">City Girls Who Walk Delhi</h1>
      </div>
    </section>
  )
}

export default Hero
