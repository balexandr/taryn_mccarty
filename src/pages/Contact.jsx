import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import GoldDivider from '../components/GoldDivider'

function Contact() {
  return (
    <PageTransition>
      <PageHero eyebrow="Get in Touch" title="" titleAccent="Contact" />
      <GoldDivider />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Left */}
            <div className="contact-info">
              <p className="contact-intro">
                Let's explore how we can create something meaningful together.
              </p>
              <div className="contact-details">
                <div className="contact-detail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                  <a href="https://www.linkedin.com/in/tarynmccarty/" target="_blank" rel="noopener noreferrer">
                    linkedin.com/in/tarynmccarty
                  </a>
                </div>
                <div className="contact-detail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M15.232 10.232L20 4"/>
                  </svg>
                  <a href="https://twitter.com/taryn_mc" target="_blank" rel="noopener noreferrer">
                    @taryn_mc
                  </a>
                </div>
                <div className="contact-detail">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>New York / New Jersey area</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="contact-form-wrap">
              <form
                className="contact-form"
                action="https://formspree.io/f/REPLACE_THIS"
                method="POST"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit" className="form-submit">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}

export default Contact
