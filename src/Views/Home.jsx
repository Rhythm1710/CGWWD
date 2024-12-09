import { Helmet } from "react-helmet"
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
      <Helmet>
        <title>CGWWD - City Girls Who Walk Delhi</title>
        <meta
          name="description"
          content="CGWWD is a walking community for women in Delhi. Explore collaborations, upcoming events, and join us for empowering walks."
        />
        <link
          rel="canonical"
          href="https://citygirlswhowalkdelhi.com/"
        />
      </Helmet>
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
