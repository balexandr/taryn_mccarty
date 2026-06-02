function SectionGrid({ label, children }) {
  return (
    <section className="section">
      <div className="container">
        <div className="section-grid">
          <div className="section-label">{label}</div>
          <div className="section-content">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default SectionGrid
