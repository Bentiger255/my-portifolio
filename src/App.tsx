import { useEffect, useState } from 'react';

const projects = [
  {
    number: '01',
    name: 'Samia Mikopo Tanzania',
    category: 'PUBLIC DIGITAL SERVICE',
    description: 'A public-facing loan information and application website, supported by an administrative workflow for handling submissions.',
    contribution: 'Website experience · Application flow · Admin interface',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    live: 'https://samia-mikopo.com',
    repo: 'https://github.com/Bentiger255/samia-mikopo-tanzania',
    image: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://samia-mikopo.com',
    alt: 'Preview of the Samia Mikopo Tanzania public website'
  },
  {
    number: '02',
    name: 'Tiger QR Studio',
    category: 'WEB APPLICATION',
    description: 'A QR code workspace built around a practical flow for creating codes, choosing designs and organising saved work.',
    contribution: 'Product structure · React interface · Workflow design',
    stack: ['React', 'Vite', 'CSS'],
    live: 'https://brilliant-dasik-af7c22.netlify.app',
    repo: 'https://github.com/Bentiger255/tiger-qr-studio',
    image: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://brilliant-dasik-af7c22.netlify.app',
    alt: 'Preview of the Tiger QR Studio web application'
  },
  {
    number: '03',
    name: 'Municipal revenue data',
    category: 'FIELD PRACTICAL TRAINING',
    description: 'Used SQL to extract Kinondoni Municipal Council revenue records for January to August 2026 and prepared the results in Excel for further analysis.',
    contribution: 'SQL extraction · Data preparation · Excel',
    stack: ['SQL', 'Excel', 'Data preparation'],
    live: '',
    repo: '',
    image: '',
    alt: ''
  }
];

const capabilities = [
  { n: '01', title: 'Data preparation', text: 'Collecting, checking and shaping records so they are more reliable and ready to use.', tools: 'SQL · Excel · Data quality' },
  { n: '02', title: 'Programming', text: 'Writing understandable code and building small, useful applications while strengthening the fundamentals.', tools: 'Python · C++ · PHP · React' },
  { n: '03', title: 'Analysis', text: 'Using statistics and visualisation to find patterns, ask better questions and explain what the data says.', tools: 'Pandas · NumPy · Matplotlib' }
];

function DataFlowArt() {
  return (
    <div className="flow-art" aria-label="Animated illustration of data moving from source through processing into a useful output">
      <div className="flow-art-head"><span>DATA FLOW / 001</span><span className="flow-live"><i /> SYSTEM THINKING</span></div>
      <svg viewBox="0 0 640 410" role="img" aria-labelledby="flow-title flow-desc" className="flow-svg">
        <title id="flow-title">From raw data to a useful result</title>
        <desc id="flow-desc">Three connected stages show records entering a process, being cleaned, and becoming a report.</desc>
        <defs>
          <pattern id="flowGrid" width="22" height="22" patternUnits="userSpaceOnUse"><path d="M22 0H0V22" fill="none" stroke="#c9d2c7" strokeWidth=".65" opacity=".5" /></pattern>
          <linearGradient id="flowFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#d9f3df" /><stop offset="1" stopColor="#a8d7bd" /></linearGradient>
        </defs>
        <rect x="0" y="0" width="640" height="410" fill="url(#flowGrid)" />
        <path className="flow-path" d="M130 128H250V220H386V128H515" fill="none" stroke="#4b7662" strokeWidth="2" strokeDasharray="6 8" />
        <path className="flow-path flow-path-second" d="M130 290H250V220H386V290H515" fill="none" stroke="#4b7662" strokeWidth="2" strokeDasharray="6 8" />
        <circle cx="250" cy="220" r="8" fill="#e97951" /><circle cx="386" cy="220" r="8" fill="#e97951" />
        <g className="flow-card flow-card-source">
          <rect x="32" y="83" width="158" height="100" rx="4" fill="#fffdf7" stroke="#cbd1c5" />
          <text x="48" y="105" fill="#66806f" fontSize="10" letterSpacing="1.5">01 / SOURCE</text>
          <text x="48" y="130" fill="#1d2b25" fontSize="18" fontWeight="700">Raw records</text>
          <rect x="48" y="145" width="98" height="5" rx="2" fill="#d6ded4" /><rect x="48" y="157" width="76" height="5" rx="2" fill="#d6ded4" /><rect x="130" y="157" width="29" height="5" rx="2" fill="#e97951" />
        </g>
        <g className="flow-card flow-card-clean">
          <rect x="220" y="177" width="180" height="88" rx="4" fill="url(#flowFill)" stroke="#8cb49a" />
          <text x="238" y="198" fill="#3d7055" fontSize="10" letterSpacing="1.5">02 / PROCESS</text>
          <text x="238" y="223" fill="#1d2b25" fontSize="18" fontWeight="700">Clean &amp; shape</text>
          <path d="M239 239h137" stroke="#8cb49a" strokeWidth="4" strokeLinecap="round" /><path className="flow-progress" d="M239 239h78" stroke="#e97951" strokeWidth="4" strokeLinecap="round" />
        </g>
        <g className="flow-card flow-card-output">
          <rect x="450" y="83" width="158" height="100" rx="4" fill="#1b3028" stroke="#1b3028" />
          <text x="466" y="105" fill="#a7d7b6" fontSize="10" letterSpacing="1.5">03 / OUTPUT</text>
          <text x="466" y="130" fill="#fffdf7" fontSize="18" fontWeight="700">Useful insight</text>
          <path d="M468 162l22 -13 18 5 18 -23 19 9 18 -17 20 7" fill="none" stroke="#e97951" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="flow-data-dot"><circle cx="0" cy="0" r="6" fill="#e97951" stroke="#fffdf7" strokeWidth="2" /></g>
        <text x="34" y="350" fill="#66806f" fontSize="10" letterSpacing="1.5">COLLECT</text><text x="260" y="350" fill="#66806f" fontSize="10" letterSpacing="1.5">TRANSFORM</text><text x="490" y="350" fill="#66806f" fontSize="10" letterSpacing="1.5">DELIVER</text>
        <path d="M32 369H608" stroke="#cbd1c5" strokeWidth="1" /><text x="32" y="389" fill="#66806f" fontSize="9" letterSpacing="1.2">THE WORK BEHIND TRUSTWORTHY DATA</text><text x="608" y="389" fill="#66806f" fontSize="9" textAnchor="end">BM / 2026</text>
      </svg>
      <div className="flow-art-foot"><span>DATA ENGINEERING IN PROGRESS</span><span>LEARN · BUILD · IMPROVE</span></div>
    </div>
  );
}

function RevenueVisual() {
  return (
    <div className="revenue-visual" role="img" aria-label="Illustrated workflow showing municipal revenue data extracted with SQL and prepared in Excel">
      <div className="revenue-top"><span>FIELD PRACTICAL / DATA PREPARATION</span><span>2026</span></div>
      <div className="revenue-content">
        <div className="revenue-stage">
          <span className="revenue-label">01 / QUERY</span>
          <div className="query-window"><div className="query-window-bar"><i /><i /><i /><span>revenue_extract.sql</span></div><div className="query-code"><b>SELECT</b> revenue_date,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; amount<br /><b>FROM</b> revenue_records<br /><b>WHERE</b> year = 2026;</div><div className="query-result"><span>ROWS RETURNED</span><b>JAN — AUG</b></div></div>
          <strong>SQL extraction</strong><small>Retrieve the records needed</small>
        </div>
        <div className="revenue-connector"><span>→</span><small>PREPARE</small></div>
        <div className="revenue-stage">
          <span className="revenue-label">02 / WORKBOOK</span>
          <div className="sheet-window"><div className="sheet-toolbar">A&nbsp;&nbsp; B&nbsp;&nbsp; C&nbsp;&nbsp; D</div><div className="sheet-grid">{Array.from({length:32},(_,i)=><i key={i} className={i<4?'sheet-heading':''} />)}</div><div className="sheet-footer"><span>Rows checked</span><b>Excel</b></div></div>
          <strong>Prepared data</strong><small>Ready for further analysis</small>
        </div>
      </div>
      <div className="revenue-bottom"><span>KINONDONI MUNICIPAL COUNCIL</span><span>ICT DEPARTMENT / TANZANIA</span></div>
    </div>
  );
}

function ProjectPreview({ project }: { project: (typeof projects)[number] }) {
  if (project.number === '03') return <RevenueVisual />;
  return (
    <div className={'site-preview site-preview-' + project.number}>
      <div className="preview-chrome"><span className="preview-dots"><i /><i /><i /></span><span>{project.number === '01' ? 'samia-mikopo.com' : 'tiger-qr-studio'}</span><span>↗</span></div>
      <img src={project.image} alt={project.alt} loading="lazy" />
      <div className="preview-overlay"><span>OPEN LIVE PROJECT</span><b>↗</b></div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(element => element.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Benjamin Mbega, home"><span className="brand-symbol">b<span>.</span></span><span className="brand-name">Benjamin Mbega<small>DATA / SOFTWARE</small></span></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? 'Close' : 'Menu'} <span>{menuOpen ? '−' : '+'}</span></button>
        <nav className={menuOpen ? 'site-nav nav-open' : 'site-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a><a href="#focus" onClick={closeMenu}>What I’m learning</a><a href="#about" onClick={closeMenu}>About</a><a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <span>↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> DATA SCIENCE STUDENT <span className="eyebrow-location">DAR ES SALAAM, TZ</span></div>
            <h1>Turning data<br />into <em>something<br className="mobile-break" /> useful.</em></h1>
            <p className="hero-summary">I’m Benjamin, a Data Science student building toward data engineering. I’m interested in the systems that collect, organise and move data so people can make better decisions.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore selected work <span>↘</span></a><a className="text-link" href="mailto:bentiger255@gmail.com">Contact me <span>↗</span></a></div>
            <div className="hero-status"><span><i /> OPEN TO INTERNSHIPS & COLLABORATION</span><span>STUDENT · BUILDER · LEARNER</span></div>
          </div>
          <div className="hero-visual" data-reveal><DataFlowArt /><p className="visual-caption">A simple idea: reliable data starts with a good process.</p></div>
          <a className="scroll-cue" href="#work" aria-label="Scroll to selected work"><span>SCROLL TO EXPLORE</span><b>↓</b></a>
        </section>

        <section className="focus-strip" aria-label="Areas of interest"><span>Currently exploring</span><b>Data engineering</b><i>✳</i><b>Software development</b><i>✳</i><b>Analytics & visualisation</b></section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading" data-reveal><div><p className="section-kicker">01 / SELECTED WORK</p><h2>Projects with a<br /><em>purpose.</em></h2></div><p>Small products and real practical work. Here’s what I’ve built, what I contributed and what I’m learning from each experience.</p></div>
          <div className="project-list">
            {projects.map(project => (
              <article className={'project-row project-row-' + project.number} key={project.number} data-reveal>
                <div className="project-media"><ProjectPreview project={project} /><span className="project-number">{project.number}</span></div>
                <div className="project-detail">
                  <div className="project-overline"><span>{project.category}</span><span>PROJECT {project.number}</span></div>
                  <h3>{project.name}</h3><p className="project-description">{project.description}</p>
                  <div className="project-contribution"><span>MY CONTRIBUTION</span><b>{project.contribution}</b></div>
                  <div className="project-stack">{project.stack.map(item => <span key={item}>{item}</span>)}</div>
                  <div className="project-actions">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="project-action-main">View live project <span>↗</span></a>}
                    {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="project-action-link">Source code ↗</a>}
                    {!project.live && <span className="project-context">KINONDONI MUNICIPAL COUNCIL · ICT</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="all-work-link"><span>More experiments and code live on GitHub.</span><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">Visit my GitHub <b>↗</b></a></div>
        </section>

        <section className="focus-section" id="focus">
          <div className="focus-inner section-wrap">
            <div className="focus-intro" data-reveal><p className="section-kicker section-kicker-light">02 / MY CURRENT FOCUS</p><h2>Learning to build<br />the <em>whole pipeline.</em></h2><p>I’m building the foundations first: writing queries, understanding the data, programming with care and learning how separate pieces fit into a dependable system.</p><div className="focus-note"><span>MY DIRECTION</span><b>Data Engineer</b><small>Learning in public, one project at a time.</small></div></div>
            <div className="capability-list">{capabilities.map(item=><article className="capability" key={item.n} data-reveal><span className="capability-number">{item.n}</span><div><h3>{item.title}</h3><p>{item.text}</p><span className="capability-tools">{item.tools}</span></div><span className="capability-arrow">↗</span></article>)}</div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-heading" data-reveal><p className="section-kicker">03 / A LITTLE ABOUT ME</p><h2>Curious about<br />how things <em>work.</em></h2><div className="about-mark" aria-hidden="true"><span>BM</span><i>↗</i></div></div>
          <div className="about-content" data-reveal><p className="about-lead">I’m studying for a Bachelor’s degree in Data Science at the Eastern Africa Statistical Training Centre (EASTC).</p><p>I enjoy working between data and software: where raw information becomes structured, where a process becomes easier to use, and where a technical idea becomes something practical. Field training has helped me connect classroom learning to real records and workflows.</p><div className="about-facts"><div><span>EDUCATION</span><b>BSc Data Science · EASTC</b></div><div><span>CAREER DIRECTION</span><b>Data Engineering</b></div><div><span>BASED IN</span><b>Dar es Salaam, Tanzania</b></div></div><a className="text-link" href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">Follow my progress on GitHub <span>↗</span></a></div>
        </section>

        <section className="experience-section">
          <div className="experience-inner section-wrap">
            <div className="experience-heading" data-reveal><p className="section-kicker section-kicker-light">04 / EDUCATION & EXPERIENCE</p><h2>Learning beyond<br />the <em>classroom.</em></h2></div>
            <div className="experience-list">
              <article className="experience-item" data-reveal><div className="experience-date">2024 — 2027</div><div className="experience-body"><span>EDUCATION</span><h3>Bachelor’s Degree in Data Science</h3><p className="experience-place">Eastern Africa Statistical Training Centre (EASTC)</p><p>Building foundations in statistics, programming, databases, data mining and analytical methods.</p></div></article>
              <article className="experience-item" data-reveal><div className="experience-date">AUG — SEP 2026</div><div className="experience-body"><span>FIELD PRACTICAL TRAINING</span><h3>Kinondoni Municipal Council</h3><p className="experience-place">ICT Department · Dar es Salaam</p><p>Updated National Housing Addressing records in the NAPA system, including house numbers, street names, household addresses and GPS coordinates. Also used SQL to extract municipal revenue records for preparation in Excel.</p></div></article>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-topline"><span>HAVE A PROJECT, OPPORTUNITY OR QUESTION?</span><span>05 / CONTACT</span></div>
          <div className="contact-main"><div data-reveal><p className="section-kicker">LET’S CONNECT</p><h2>Good things<br />start with a <em>hello.</em></h2></div><div className="contact-copy" data-reveal><p>I’m open to internships, collaborative projects and opportunities to learn from people working with data and technology.</p><a className="button button-primary contact-button" href="mailto:bentiger255@gmail.com?subject=Portfolio%20enquiry">Email Benjamin <span>↗</span></a><div className="social-links"><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:bentiger255@gmail.com">Email ↗</a></div></div></div>
          <div className="contact-bottom"><span>BENJAMIN GEORGE MBEGA</span><span>DAR ES SALAAM, TANZANIA</span><a href="#home">BACK TO TOP ↑</a></div>
        </section>
      </main>

      <footer className="site-footer"><a className="footer-brand" href="#home">b<span>.</span></a><span className="footer-note">Built with curiosity and care.</span><div className="footer-links"><a href="./privacy.html">Privacy</a><a href="./terms.html">Terms</a><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">GitHub</a></div><span className="footer-copy">© {new Date().getFullYear()} Benjamin Mbega</span></footer>
    </div>
  );
}
