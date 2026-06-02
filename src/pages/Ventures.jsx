import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import GoldDivider from '../components/GoldDivider'
import SectionGrid from '../components/SectionGrid'

const ventures = [
  {
    tag: 'Esports & Gaming',
    name: 'LeagueSpot',
    desc: 'Esports and competitive gaming platform. Served as COO (2024–2026) and continuing as Advisor.',
  },
  {
    tag: 'Sports Technology',
    name: 'The Sports Masters',
    desc: 'Strategic advisory supporting growth in the sports technology space.',
  },
  {
    tag: 'Sports Technology',
    name: 'Advance Sports',
    desc: 'Advisory role advancing innovation in sports.',
  },
]

function Ventures() {
  return (
    <PageTransition>
      <PageHero eyebrow="Portfolio" title="" titleAccent="Ventures" />
      <GoldDivider />

      <SectionGrid label="Companies">
        {/* Featured */}
        <div className="ventures-featured">
          <div className="venture-card featured">
            <p className="tag">Operating Partner</p>
            <h3>Phoenix Sports Partners</h3>
            <p>
              Sports technology and new media ventures. Phoenix Sports Partners
              acquired Ventnor Ventures in 2025, expanding the firm's reach in
              emerging technology investing and operational support.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="ventures-grid">
          {ventures.map((v) => (
            <div className="venture-card" key={v.name}>
              <p className="tag">{v.tag}</p>
              <h3>{v.name}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </SectionGrid>
    </PageTransition>
  )
}

export default Ventures
