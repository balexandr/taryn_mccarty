import sharp from 'sharp';

// OG image styled like the nav logo: dark luxury editorial
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0a0a09"/>

  <!-- Subtle top/bottom border lines in gold -->
  <line x1="80" y1="56" x2="1120" y2="56" stroke="#c9b97a" stroke-width="0.5" opacity="0.35"/>
  <line x1="80" y1="574" x2="1120" y2="574" stroke="#c9b97a" stroke-width="0.5" opacity="0.35"/>

  <!-- Eyebrow label -->
  <text
    x="600" y="248"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="13"
    font-weight="400"
    fill="#c9b97a"
    letter-spacing="8"
    opacity="0.85"
  >PORTFOLIO</text>

  <!-- Gold thin divider above name -->
  <rect x="540" y="264" width="120" height="0.5" fill="#c9b97a" opacity="0.5"/>

  <!-- Main name — large serif, light weight, uppercase -->
  <text
    x="600" y="348"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="88"
    font-weight="300"
    fill="#e8e4dc"
    letter-spacing="18"
  >TARYN MCCARTY</text>

  <!-- Gold thin divider below name -->
  <rect x="540" y="370" width="120" height="0.5" fill="#c9b97a" opacity="0.5"/>

  <!-- Subtitle -->
  <text
    x="600" y="408"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="14"
    font-weight="300"
    fill="#c9b97a"
    letter-spacing="6"
    opacity="0.85"
  >ENTREPRENEUR  &amp;  INNOVATOR</text>
</svg>`;

sharp(Buffer.from(svg))
  .png()
  .toFile('./public/og-image.png', (err, info) => {
    if (err) {
      console.error('Error generating og-image:', err);
      process.exit(1);
    }
    console.log('✓ og-image.png generated:', info);
  });
