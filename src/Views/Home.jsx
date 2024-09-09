import About from "../components/About"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Collabs from "../components/Collabs"
import Services from "../components/Services"
import Upcoming from "../components/Upcoming"
import Footer from "../components/Footer"
import Hero from "../components/Hero"

function Home() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Collabs />
      <About />
      <Services />
      <Upcoming />
      <Footer />
    </>
  )
}

export default Home
