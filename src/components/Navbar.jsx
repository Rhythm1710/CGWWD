import { NavLink } from "react-router-dom"
import { navLinks } from "../Js/data"
import { useEffect } from "react"
import "../Css/Navbar.css"

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector("#nav")

    const handleScroll = () => {
      if (window.scrollY > 0) {
        navbar.classList.add("navbar-fixed")
      } else {
        navbar.classList.remove("navbar-fixed")
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
          <NavLink
            to="/"
            className="nav-logo-link"
          >
            <img
              src="https://res.cloudinary.com/dbfrbezmp/image/upload/v1725813550/CGWWD/main_logo.webp"
              height="50"
              width="50"
              className="nav-logo"
              alt="nav logo"
            />
          </NavLink>
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
                <NavLink
                  to={href}
                  className={`custom-links`}
                >
                  {name}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar
