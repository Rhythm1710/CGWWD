import About from "../components/About"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Collabs from "../components/Collabs"
import Services from "../components/Services"
import Upcoming from "../components/Upcoming"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import ScrollPreservation from "../components/ScrollPreservation"


function Home() {
  return (
    <ScrollPreservation>
      <Navbar />
      <Sidebar />
      <Hero />
      <Upcoming />
      <Collabs />
      <About />
      <Services />
      <Footer />
    </ScrollPreservation>
  )
}

export default Home