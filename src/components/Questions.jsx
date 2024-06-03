import { useEffect } from "react"
import { questions } from "../Js/data"

const Questions = () => {
  useEffect(() => {
    const faqItems = document.querySelectorAll(".faq-item")
    faqItems.forEach(function (item) {
      const question = item.querySelector(".question")
      const answer = item.querySelector(".answer")
      question.addEventListener("click", function () {
        if (answer.style.display === "block") {
          answer.style.display = "none"
        } else {
          answer.style.display = "block"
        }
      })
    })
  }, [])

  return (
    <>
      <section className="questions-hero">
        <div className="section-title">
          <h1>Our Mentions</h1>
          <div className="underline"></div>
        </div>
      </section>
      <section className="section faq-section">
        {questions.map((questiondata) => {
          const { id, question, answer } = questiondata
          return (
            <div
              className="faq-container section-center"
              key={id}
            >
              <div className="faq-item">
                <div className="question">{ question }</div>
                <div className="answer">{answer}</div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Questions
