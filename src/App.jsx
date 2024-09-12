import { Route, Routes, useLocation } from "react-router-dom"
import "./Css/App.css"
import Home from "./Views/Home"
import AboutTeam from "./Views/AboutTeam"
import Faq from "./Views/Faq"
import OurMentions from "./Views/OurMentions"
import { useEffect, useState } from "react"

const App = () => {
  const { pathname } = useLocation()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [pathname])
  

  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <div className="spinner"></div>
        </div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about-team"
            element={<AboutTeam />}
          />
          <Route
            path="/faqs"
            element={<Faq />}
          />
          <Route
            path="/our-mentions"
            element={<OurMentions />}
          />
        </Routes>
      )}
    </>
  )
}

export default App
