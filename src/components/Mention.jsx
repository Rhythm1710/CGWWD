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
          <article className="single-mention">
            <div className="mention-container">
              <img
                src="https://images.unsplash.com/photo-1712371962905-94fb109193c7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="single mention"
              />
              <a
                href="https://www.johnsmilga.com"
                className="mention-icon"
              >
                <i className="fas fa-home"></i>
              </a>
            </div>
            <div className="mention-details">
              <h4>mention name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                eveniet amet odit aperiam, provident cum possimus sapiente minus
                quos! Ipsum?
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
export default Mention
