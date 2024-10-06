import "../Css/Mention.css"
import { ourMentions } from "../Js/data"

const Mention = () => {
  return (
    <>
      <section className="mentions-hero">
        <div className="section-title">
          <h1>Our Mentions</h1>
          <div className="underline"></div>
        </div>
      </section>
      <section className="section">
        <div className="section-center mentions-page-center">
          {ourMentions.map((mention, index) => {
            const { img, link, alt, title } = mention
            return (
              <article
                className="single-mention"
                key={index}
              >
                <div className="mention-img">
                  <a href={link}>
                    <img
                      src={img}
                      alt={alt}
                      loading="lazy"
                    />
                  </a>
                </div>
                <h3>{title}</h3>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
export default Mention
