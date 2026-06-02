function PageHero({ eyebrow, title, titleAccent }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="page-title">
          {title} {titleAccent && <em>{titleAccent}</em>}
        </h1>
      </div>
    </section>
  )
}

export default PageHero
