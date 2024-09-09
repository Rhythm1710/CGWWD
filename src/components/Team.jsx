import Title from "./Title"
import { aboutTeam } from "../Js/data"
import "../Css/Team.css"



const Team = () => {
  return (
    <section className="section about-team">
      <div className="section-title about-team-heading">
        <h2>About Team</h2>
        <div className="underline"></div>
      </div>

      {aboutTeam.map((member) => {
        const { id, name, info, img } = member
        return (
          <div
            className="section-center about-team-item"
            key={id}
          >
            <article className="about-team-img">
              <img
                src={img}
                className="about-team-image"
                alt="about img"
              />
            </article>
            <article className="about-team-info">
              <div className="section-title about-team-title">
                <h2>{name}</h2>
                <div className="underline"></div>
              </div>
              <p>{info}</p>
            </article>
          </div>
        )
      })}
    </section>
  )
}
export default Team
