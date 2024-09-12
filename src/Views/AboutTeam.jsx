import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Team from "../components/Team"
import ScrollPreservation from "../components/ScrollPreservation"

function AboutTeam() {
  return (
    <ScrollPreservation>
      <Navbar />
      <Sidebar />
      <Team />
      <Footer />
    </ScrollPreservation>
  )
}

export default AboutTeam
