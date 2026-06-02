import PageTransition from '../components/PageTransition'
import PageHero from '../components/PageHero'
import GoldDivider from '../components/GoldDivider'
import SectionGrid from '../components/SectionGrid'

const pressItems = [
  {
    pub: 'Nasdaq',
    headline: 'Women to Watch in 2024 Share Their Strategies for Success',
    date: '2024',
    link: 'https://www.nasdaq.com/articles/women-to-watch-in-2024-share-their-strategies-for-success',
  },
]

function Press() {
  return (
    <PageTransition>
      <PageHero eyebrow="Media" title="" titleAccent="Press" />
      <GoldDivider />

      <SectionGrid label="Coverage">
        <div className="press-list">
          {pressItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="press-item"
            >
              <span className="press-pub">{item.pub}</span>
              <span className="press-headline">{item.headline}</span>
              <span className="press-date">{item.date}</span>
            </a>
          ))}
        </div>
      </SectionGrid>
    </PageTransition>
  )
}

export default Press
