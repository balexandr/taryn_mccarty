import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import GoldDivider from '../components/GoldDivider'
import SectionGrid from '../components/SectionGrid'

function Resume() {
  return (
    <PageTransition>
      <PageHero eyebrow="Career" title="Resume &" titleAccent="Experience" />
      <GoldDivider />

      <SectionGrid label="Experience">
        <div className="resume-entry">
          <h3 className="resume-role">Chief of Staff</h3>
          <p className="resume-meta">United Effects Ventures (UEV) <span>·</span> Mar 2026–Present</p>
          <p className="resume-desc">Full-time · Philadelphia, Pennsylvania · Hybrid</p>
        </div>
        <div className="resume-entry">
          <h3 className="resume-role">Operating Partner</h3>
          <p className="resume-meta">Phoenix Sports Partners <span>·</span> Jul 2025–Present</p>
          <p className="resume-desc">Full-time. Phoenix Sports Partners acquired Ventnor Ventures, expanding the firm's reach in sports technology and new media ventures.</p>
        </div>
        <div className="resume-entry">
          <h3 className="resume-role">COO</h3>
          <p className="resume-meta">LeagueSpot <span>·</span> Aug 2024–Jan 2026</p>
          <p className="resume-desc">Full-time · Remote. Operational leadership for the esports and competitive gaming platform.</p>
        </div>
        <div className="resume-entry">
          <h3 className="resume-role">Advisor</h3>
          <p className="resume-meta">LeagueSpot <span>·</span> Sep 2023–Present</p>
          <p className="resume-desc">Strategic advisory continuing post-COO tenure.</p>
        </div>
        <div className="resume-entry">
          <h3 className="resume-role">Founding Partner</h3>
          <p className="resume-meta">Ventnor Ventures <span>·</span> 2018–2025</p>
          <p className="resume-desc">Consulting and early-stage financing for startups in emerging technology and new media. Acquired by Phoenix Sports Partners in 2025.</p>
        </div>
        <div className="resume-entry">
          <h3 className="resume-role">Advisor</h3>
          <p className="resume-meta">The Sports Masters <span>·</span> Mar 2024–Present</p>
          <p className="resume-desc">Strategic advisory role.</p>
        </div>
        <div className="resume-entry">
          <h3 className="resume-role">Advisor</h3>
          <p className="resume-meta">Advance Sports <span>·</span> Jan 2024–Present</p>
          <p className="resume-desc">Strategic advisory role.</p>
        </div>
      </SectionGrid>

      <GoldDivider />

      <SectionGrid label="Education">
        <div className="resume-entry">
          <h3 className="resume-role">[Degree Placeholder]</h3>
          <p className="resume-meta">[Institution] <span>·</span> [Years]</p>
          <p className="resume-desc">Add your education details here.</p>
        </div>
      </SectionGrid>

      <GoldDivider />

      <SectionGrid label="Recognition">
        <div className="resume-entry">
          <h3 className="resume-role">Women to Watch</h3>
          <p className="resume-meta">Nasdaq <span>·</span> 2024</p>
          <p className="resume-desc">
            Recognized by Nasdaq as one of their "Women to Watch in 2024" for
            strategies for success in venture capital and emerging technology.
          </p>
          <a
            href="https://www.nasdaq.com/articles/women-to-watch-in-2024-share-their-strategies-for-success"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link"
          >
            Read the article →
          </a>
        </div>
      </SectionGrid>
    </PageTransition>
  )
}

export default Resume
