import { socialLinks } from "../Js/data"
import { useEffect } from "react"
import "../Css/Footer.css"


const Footer = () => {
  useEffect(() => {
    const dateElement = document.querySelector("#date")
    if (dateElement) {
      dateElement.innerHTML = new Date().getFullYear()
    }
  }, [])
  return (
    <footer className="footer">
      <ul className="social-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link
          return (
            <li key={id}>
              <a
                href={href}
                className="social-icon"
              >
                <i className={icon}></i>
              </a>
            </li>
          )
        })}
      </ul>

      <p>
        &copy; <span id="date"></span> CGWWD. all rights reserved
      </p>
    </footer>
  )
}
export default Footer
