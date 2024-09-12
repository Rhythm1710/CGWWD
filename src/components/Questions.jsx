import { useEffect } from "react"
import { questions } from "../Js/data"
import "../Css/Questions.css"

const Questions = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".accordion button")
    const savedState = JSON.parse(localStorage.getItem("accordionState")) || {}

    function toggleAccordion() {
      const currentItemId = this.getAttribute("data-id")
      const itemToggle = this.getAttribute("aria-expanded")

      items.forEach((item) => {
        item.setAttribute("aria-expanded", "false")
        const itemId = item.getAttribute("data-id")
        savedState[itemId] = false
      })

      if (itemToggle === "false") {
        this.setAttribute("aria-expanded", "true")
        savedState[currentItemId] = true
      }
      localStorage.setItem("accordionState", JSON.stringify(savedState))
    }

    items.forEach((item) => {
      const itemId = item.getAttribute("data-id")
      item.setAttribute("aria-expanded", savedState[itemId] ? "true" : "false")
      item.addEventListener("click", toggleAccordion)
    })

    return () => {
      items.forEach((item) =>
        item.removeEventListener("click", toggleAccordion)
      )
    }
  }, [])

  return (
    <>
      <section className="questions-hero">
        <div className="section-title">
          <h1>FAQs</h1>
          <div className="underline"></div>
        </div>
      </section>
      <section className="container">
        <div className="accordion">
          {questions.map(({ id, question, answer }) => (
            <div
              className="accordion-item"
              key={id}
            >
              <button
                aria-expanded="false"
                data-id={id}
              >
                <span className="accordion-title">{question}</span>
                <span
                  className="icon"
                  aria-hidden="true"
                ></span>
              </button>
              <div className="accordion-content">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Questions
