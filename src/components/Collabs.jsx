import { useState, useEffect } from "react"
import Hammer from "hammerjs"
import { imageList } from "../Js/data"

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
          <h1>Our Collabs</h1>
        </article>
      <div className="carousel">
        <div className="list">
          {images.map((image, index) => (
            <div
              key={index}
              className={
                index === currentIndex
                  ? "act"
                  : index === (currentIndex + 1) % images.length
                  ? "next"
                  : index === (currentIndex - 1 + images.length) % images.length
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
              <img
                src={image}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}

export default Collabs
