import { Route, Routes, useLocation } from "react-router-dom"
import Home from "./Views/Home"
import AboutTeam from "./Views/AboutTeam"
import Faq from "./Views/Faq"
import OurMentions from "./Views/OurMentions"
import { useEffect } from "react"


const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
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
  )
}

export default App
