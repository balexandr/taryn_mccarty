import PageTransition from '../components/PageTransition'
import GoldDivider from '../components/GoldDivider'
import SectionGrid from '../components/SectionGrid'

function Home() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <p className="hero-eyebrow">Venture Architect · Emerging Technology</p>
              <h1 className="hero-name">
                Taryn
                <em>McCarty</em>
              </h1>
              <div className="hero-subtitles">
                <p className="hero-subtitle">Innovative Leader</p>
                <p className="hero-subtitle">Strategic Community Builder</p>
                <p className="hero-subtitle">Founding Partner, Ventnor Ventures</p>
              </div>
            </div>
            <div className="hero-right">
              <div className="hero-image">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/56c3857427d4bd05631b6783/07e8ee74-1351-4a0d-b346-9691767aaf33/Head+Shot.jpg?format=1500w"
                  alt="Taryn McCarty"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.classList.add('placeholder')
                  }}
                />
                <div className="hero-image-placeholder">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M20 21a8 8 0 1 0-16 0"/>
                  </svg>
                  <span>Headshot</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* Credential Strip */}
      <section className="credential-strip">
        <div className="container">
          <div className="credential-grid">
            <div className="credential-item">
              <p className="credential-label">Recognition</p>
              <svg className="credential-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="6"/>
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
              <p className="credential-value">2024 Nasdaq Women to Watch</p>
            </div>
            <div className="credential-separator"></div>
            <div className="credential-item">
              <p className="credential-label">Experience</p>
              <svg className="credential-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3"/>
              </svg>
              <p className="credential-value">15+ Years in Startups</p>
            </div>
            <div className="credential-separator"></div>
            <div className="credential-item">
              <p className="credential-label">Focus</p>
              <svg className="credential-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 21h18"/>
                <path d="M5 21V7l8-4v18"/>
                <path d="M19 21V11l-6-4"/>
              </svg>
              <p className="credential-value">Emerging Tech · Esports · New Media</p>
            </div>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* About */}
      <SectionGrid label="About">
        <p>
          Welcome! I'm Taryn, a professional with over <strong>15 years</strong> of
          dynamic experience in startups and a driving force in the realms of sports
          technology, new media, and esports/gaming. My journey has been shaped by a
          passion for innovation, community building, and a relentless pursuit of
          excellence.
        </p>
        <h3>Professional Journey</h3>
        <p>
          With a distinguished career marked by strategic innovation and impactful
          community engagement, I have propelled organizations to the forefront of
          their industries. As the Founding Partner of{' '}
          <strong>Ventnor Ventures</strong>, I dedicate my expertise to consulting
          and providing early-stage financing to startups, shaping the future of
          emerging technology and new media.
        </p>
        <h3>Latest Achievement</h3>
        <p>
          <a href="https://www.nasdaq.com/articles/women-to-watch-in-2024-share-their-strategies-for-success" target="_blank" rel="noopener noreferrer" className="gold-link">
            2024 Nasdaq "Women to Watch"
          </a>{' '}
          — A testament to my unparalleled dedication and commitment to innovation,
          I am humbled to be recognized as one of the inspiring figures leading the
          way in technology and business.
        </p>
        <h3>Driving Innovation &amp; Community Engagement</h3>
        <p>
          With a passion that extends beyond the boardroom, I have spearheaded
          initiatives that foster meaningful connections, elevate brand awareness,
          and cultivate vibrant communities. From orchestrating large-scale events
          that bring together diverse stakeholders to launching strategic business
          initiatives that achieve remarkable growth, my work has consistently broken
          new ground.
        </p>
        <p>
          At <strong>Ventnor Ventures</strong>, my insight into the startup ecosystem
          has empowered emerging companies to achieve their full potential, fostering
          innovation that resonates across the industry.
        </p>
        <p>
          Thank you for visiting. Feel free to explore more about my professional
          journey and the exciting ventures ahead. Let's connect and explore how we
          can create meaningful impact together!
        </p>
      </SectionGrid>
    </PageTransition>
  )
}

export default Home
