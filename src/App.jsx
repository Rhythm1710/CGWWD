import { Route, Routes, useLocation } from "react-router-dom"
import { lazy, Suspense, useEffect, useState } from "react"
import "./Css/App.css"

const Home = lazy(() => import("./Views/Home"))
const AboutTeam = lazy(() => import("./Views/AboutTeam"))
const Faq = lazy(() => import("./Views/Faq"))
const OurMentions = lazy(() => import("./Views/OurMentions"))

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
        <Suspense
          fallback={
            <div className="loading-screen">
              <div className="spinner"></div>
            </div>
          }
        >
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
        </Suspense>
      )}
    </>
  )
}

export default App
