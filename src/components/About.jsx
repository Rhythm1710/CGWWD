import Title from "./Title"
import { aboutData } from "../Js/data"
import "../Css/About.css"


const About = () => {
  return (
    <section className="section about">
      <Title title="about" />
      <div className="about-center section-center">
        {aboutData.map((data) => {
          const { id, title, info } = data
          return (
            <article
              className="about-info"
              key={id}
            >
              <h3 className="about-heading">{title}</h3>
              <p className="about-text">{info}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default About
