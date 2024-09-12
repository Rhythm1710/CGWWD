import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import Mention from "../components/Mention"
import ScrollPreservation from "../components/ScrollPreservation"


function OurMentions() {
  return (
    <ScrollPreservation>
      <Navbar />
      <Sidebar />
      <Mention />
      <Footer />
    </ScrollPreservation>
  )
}

export default OurMentions
