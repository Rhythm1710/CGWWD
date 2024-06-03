import { useEffect } from "react"
import { socialLinks, navLinks } from "../Js/data"

const Sidebar = () => {
  useEffect(() => {
    const navBtn = document.querySelector("#nav-btn")
    const closeBtn = document.querySelector("#close-btn")
    const sidebar = document.querySelector("#sidebar")
    const showSidebar = () => {
      sidebar.classList.add("show-sidebar")
    }
    const hideSidebar = () => {
      sidebar.classList.remove("show-sidebar")
    }
    navBtn.addEventListener("click", showSidebar)
    closeBtn.addEventListener("click", hideSidebar)
    return () => {
      navBtn.removeEventListener("click", showSidebar)
      closeBtn.removeEventListener("click", hideSidebar)
    }
  }, [])
  return (
    <aside
      className="sidebar"
      id="sidebar"
    >
      <div>
        <button
          className="close-btn"
          id="close-btn"
        >
          <i className="fas fa-times"></i>
        </button>
        <ul className="sidebar-links">
          {navLinks.map((link) => {
            const { id, href, name } = link
            return (
              <li key={id}>
                <a href={href}>{name}</a>
              </li>
            )
          })}
        </ul>
        <ul className="social-icons">
          {socialLinks.map((social) => {
            const { id, href, icon } = social
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
      </div>
    </aside>
  )
}
export default Sidebar
