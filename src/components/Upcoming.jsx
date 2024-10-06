import Title from "./Title"
import { upcomingList } from "../Js/data"
import { useEffect } from "react"
import "../Css/Upcoming.css"

const Upcoming = () => {
  useEffect(() => {
    const eventElements = document.querySelectorAll(".event")
    const imgElements = document.querySelectorAll(".event-image")
    const registerBtns = document.querySelectorAll(".register-btn")

    eventElements.forEach((eventElement, index) => {
      const eventHeight = eventElement.offsetHeight
      const imgHeight = imgElements[index]?.offsetHeight
      const registerBtn = registerBtns[index]

      if (eventHeight && imgHeight && registerBtn) {
        registerBtn.style.height = `calc(${eventHeight}px - ${imgHeight}px)`
      }
    })
  }, [])

  return (
    <section className="section upcoming">
      <Title title="Upcoming events" />
      <div className="section-center upcoming-center">
        {upcomingList.map((event) => {
          const { id, img, title, cost, month, date, time, location, link } = event
          return (
            <div
              className="event"
              key={id}
            >
              <div className="event-image">
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="event-heading">
                <h3>{title}</h3>
                <h4>{cost}</h4>
              </div>
              <div className="event-details">
                <div className="event-cal">
                  <h4 className="event-month">{month}</h4>
                  <h2 className="event-date">{date}</h2>
                </div>
                <div className="line"></div>
                <div className="event-loc">
                  <h4 className="event-time">{time}</h4>
                  <h4 className="event-location">{location}</h4>
                </div>
                <a
                  href={link}
                  className="register-btn btn"
                >
                  Register
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Upcoming