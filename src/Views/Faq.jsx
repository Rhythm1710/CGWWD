import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import Questions from "../components/Questions"
import ScrollPreservation from "../components/ScrollPreservation"


function Faq() {
  return (
    <ScrollPreservation>
      <Navbar />
      <Sidebar />
      <Questions />
      <Footer />
    </ScrollPreservation>
  )
}

export default Faq
