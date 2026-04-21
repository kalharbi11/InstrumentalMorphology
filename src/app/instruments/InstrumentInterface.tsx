export default function InstrumentInterface() {
  return (
    <div className="w-full">
      <svg
        className="h-auto w-full"
        viewBox="0 0 900 520"
        role="img"
        aria-label="Instrument interface diagram with play center and system modules"
      >
        <rect width="900" height="520" fill="transparent" />
        <g stroke="rgba(255,255,255,0.7)" strokeWidth="2" fill="none">
          <circle cx="460" cy="250" r="130" />
          <line x1="330" y1="210" x2="200" y2="160" />
          <line x1="330" y1="250" x2="210" y2="250" />
          <line x1="330" y1="300" x2="210" y2="360" />
          <line x1="590" y1="230" x2="740" y2="210" />
          <line x1="590" y1="320" x2="720" y2="400" />
          <line x1="560" y1="120" x2="690" y2="70" />
        </g>

        <g fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5">
          <rect x="60" y="120" width="150" height="80" rx="6" />
          <rect x="60" y="215" width="150" height="70" rx="6" />
          <rect x="60" y="330" width="150" height="70" rx="6" />
          <rect x="720" y="175" width="150" height="70" rx="6" />
          <rect x="700" y="370" width="150" height="70" rx="6" />
        </g>

        <g fill="rgba(255,255,255,0.7)" fontSize="16" fontFamily="serif">
          <text x="400" y="255">PLAY ME</text>
        </g>

        <g fill="rgba(255,255,255,0.6)" fontSize="14" fontFamily="serif">
          <text x="86" y="112">SPECIES</text>
          <text x="86" y="206">PROCESS</text>
          <text x="86" y="321">MIDI</text>
          <text x="735" y="166">ELECTRONICS</text>
        </g>

        <g stroke="rgba(255,255,255,0.5)" strokeWidth="2">
          <circle cx="330" cy="210" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="330" cy="250" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="330" cy="300" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="590" cy="230" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="590" cy="320" r="4" fill="rgba(255,255,255,0.6)" />
          <circle cx="560" cy="120" r="4" fill="rgba(255,255,255,0.6)" />
        </g>
      </svg>
    </div>
  );
}
