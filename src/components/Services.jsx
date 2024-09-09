import Title from "./Title"
import { servicesData } from "../Js/data"
import "../Css/Services.css"


const Services = () => {
  return (
    <section className="section bg-blue">
      <Title title="all that we host" />
      <div className="services-center section-center">
        {servicesData.map((service) => {
          const { id, title, icon, info } = service
          return (
            <article
              className="service"
              key={id}
            >
              <i className={icon}></i>
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{info}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
export default Services
