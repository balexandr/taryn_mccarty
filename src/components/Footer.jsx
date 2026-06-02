function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">&copy; 2026 Taryn McCarty</p>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/tarynmccarty/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
            <rect x="2" y="9" width="4" height="12"/>
            <circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="https://twitter.com/taryn_mc" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768M15.232 10.232L20 4"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}

export default Footer
