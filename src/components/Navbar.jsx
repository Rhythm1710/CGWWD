import { Link, NavLink } from "react-router-dom"
import logo from "../assets/images/website-removebg-preview.png"
import { navLinks } from "../Js/data"
import { useEffect } from "react"

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#nav")
      const hero = document.querySelector(".hero")

      if (window.scrollY > 0) {
        navbar.classList.add("navbar-fixed")
        hero.style.height = "100vh"
      } else {
        navbar.classList.remove("navbar-fixed")
        hero.style.height = "100vh"
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <nav
      className="nav"
      id="nav"
    >
      <div className="nav-center">
        <div className="nav-header">
          <img
            src={logo}
            height="50"
            width="50"
            className="nav-logo"
            alt="nav logo"
          />
          <button
            className="nav-btn"
            id="nav-btn"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links">
          {navLinks.map((link) => {
            const { id, href, name } = link
            return (
              <li key={id}>
                <NavLink to={href} className={`custom-links`}>{name}</NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
