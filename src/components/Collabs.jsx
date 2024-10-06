import { useState, useEffect } from "react"
import Hammer from "hammerjs"
import { imageList } from "../Js/data"
import "../Css/Collabs.css"

const Collabs = () => {
  const images = imageList

  const [currentIndex, setCurrentIndex] = useState(0)
  let autoSwipeInterval

  useEffect(() => {
    const swipe = new Hammer(document.querySelector(".carousel"))
    swipe.on("swipeleft", () => next())
    swipe.on("swiperight", () => prev())
    autoSwipeInterval = setInterval(next, 2000)

    return () => {
      swipe.off("swipeleft")
      swipe.off("swiperight")
      clearInterval(autoSwipeInterval)
    }
  }, [currentIndex])

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div className="collab">
      <div className="section-center collab-heading">
        <article className="collab-info">
          <h2>Collaborations</h2>
          <div className="underline"></div>
        </article>
        <div className="carousel">
          <div className="list">
            {images.map((item, index) => (
              <div
                key={index}
                className={
                  index === currentIndex
                    ? "act"
                    : index === (currentIndex + 1) % images.length
                    ? "next"
                    : index ===
                      (currentIndex - 1 + images.length) % images.length
                    ? "prev"
                    : index === (currentIndex + 2) % images.length
                    ? "new-next"
                    : "hide"
                }
                onClick={() => {
                  if (index === currentIndex - 1) prev()
                  else if (index === currentIndex + 1) next()
                }}
              >
                <a href={item.link}>
                  <img
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collabs
