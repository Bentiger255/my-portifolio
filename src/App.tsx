import { useEffect, useRef, useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  MapPin,
  MoveUpRight,
} from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'TWEVE STORE',
    type: 'Retail operations',
    description: 'A retail management application concept bringing stock, sales and day-to-day business activity into one clear workflow.',
    stack: ['React', 'Tailwind CSS', 'MySQL'],
    href: 'https://github.com/Bentiger255/tweve-store',
    visual: 'store',
  },
  {
    number: '02',
    name: 'Samia Mikopo Tanzania',
    type: 'Digital services',
    description: 'A public-facing loan application experience with an administration workflow and application analytics.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    href: 'https://github.com/Bentiger255/samia-mikopo-tanzania',
    visual: 'loan',
  },
  {
    number: '03',
    name: 'Tiger QR Studio',
    type: 'Web application',
    description: 'A QR-code utility for creating and organising codes through a focused, practical interface.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    href: 'https://github.com/Bentiger255/tiger-qr-studio',
    visual: 'qr',
  },
  {
    number: '04',
    name: 'Loan Management System',
    type: 'Information systems',
    description: 'A PHP application exploring structured loan-management workflows backed by a relational database.',
    stack: ['PHP', 'Yii2', 'MySQL'],
    href: 'https://github.com/Bentiger255/loan-system',
    visual: 'system',
  },
];

const capabilities = [
  { number: '01', title: 'Data analysis', detail: 'Clean, explore and interpret datasets to surface useful patterns.', tools: 'PYTHON / PANDAS / NUMPY' },
  { number: '02', title: 'Machine learning', detail: 'Learn modelling workflows, evaluate results and question assumptions.', tools: 'SCIKIT-LEARN / STATISTICS' },
  { number: '03', title: 'Data storytelling', detail: 'Translate findings into visuals and explanations people can act on.', tools: 'MATPLOTLIB / EXCEL' },
  { number: '04', title: 'Data systems', detail: 'Use structured data and software to solve practical operational needs.', tools: 'SQL / MYSQL / PYTHON' },
];

function useReveal() {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const items = node.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);
  return root;
}

function ProjectArtwork({ kind }: { kind: string }) {
  if (kind === 'store') return (
    <div className="artwork artwork-store" aria-hidden="true">
      <div className="store-window"><span>STOCK OVERVIEW</span><b>1,284</b><i>Items tracked</i><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div></div>
      <div className="store-ticket"><span>SALES / TODAY</span><b>+24.8%</b><small>Weekly movement</small></div>
      <div className="artwork-orbit orbit-one" /><div className="artwork-orbit orbit-two" />
    </div>
  );
  if (kind === 'loan') return (
    <div className="artwork artwork-loan" aria-hidden="true">
      <div className="loan-panel"><span>APPLICATIONS</span><strong>Overview</strong><div className="loan-metric"><b>248</b><i>+18.4%</i></div><div className="loan-chart"><svg viewBox="0 0 300 90"><path d="M4 72 C34 68 37 49 67 55 S105 22 137 37 S177 58 207 28 S257 35 296 8" /><path className="chart-fill" d="M4 72 C34 68 37 49 67 55 S105 22 137 37 S177 58 207 28 S257 35 296 8 L296 90 L4 90Z" /></svg></div><div className="loan-lines"><i /><i /><i /></div></div>
      <div className="loan-stamp">LIVE<br />DATA</div>
    </div>
  );
  if (kind === 'qr') return (
    <div className="artwork artwork-qr" aria-hidden="true">
      <div className="qr-frame"><svg viewBox="0 0 150 150"><rect width="150" height="150" fill="none"/>{Array.from({length: 13}, (_, row) => Array.from({length: 13}, (_, col) => { const finder = (row < 4 && col < 4) || (row < 4 && col > 8) || (row > 8 && col < 4); const on = finder ? row === 0 || row === 3 || col === 0 || col === 3 || (row > 0 && row < 3 && col > 0 && col < 3) : ((row * 7 + col * 11 + row * col) % 5 < 2); return on ? <rect key={row + '-' + col} x={col * 11 + 3} y={row * 11 + 3} width="8" height="8" rx="1" /> : null; }))}</svg></div><div className="qr-caption"><span>QR / GENERATOR</span><b>Ready to share <ArrowUpRight size={15} /></b></div><div className="qr-glow" />
    </div>
  );
  return (
    <div className="artwork artwork-system" aria-hidden="true">
      <div className="system-sidebar"><i /><i /><i /><i /></div><div className="system-screen"><span>LOAN MANAGEMENT / OVERVIEW</span><div className="system-kpis"><i /><i /><i /></div><div className="system-table"><b /><b /><b /><b /></div><div className="system-graph"><svg viewBox="0 0 240 90"><path d="M2 69 L30 58 L54 64 L82 29 L109 45 L138 23 L167 34 L194 12 L238 20" /></svg></div></div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const revealRoot = useReveal();
  const shownProjects = filter === 'All' ? projects : projects.filter(project => project.type === filter);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio" ref={revealRoot}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="header">
        <a className="brand" href="#home" aria-label="Benjamin Mbega home"><span className="brand-mark">B<span>.</span></span><span className="brand-name">BENJAMIN<br />MBEGA</span></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a><a href="#work" onClick={closeMenu}>Selected work</a><a href="#expertise" onClick={closeMenu}>Expertise</a><a href="#journey" onClick={closeMenu}>Journey</a><a className="navigation-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grain" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow hero-eyebrow"><span className="availability-dot" /> DATA SCIENCE · MACHINE LEARNING</p>
            <h1 className="hero-title"><span>Good questions.</span><br /><em>Better decisions.</em></h1>
            <p className="hero-lede">I’m Benjamin George Mbega. I work at the intersection of data, technology and practical problem-solving, turning complex information into something useful.</p>
            <div className="hero-buttons"><a className="button button-accent" href="#work">Explore selected work <ArrowDownRight size={17} /></a><a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={16} /></a></div>
            <div className="hero-meta"><span><MapPin size={14} /> DAR ES SALAAM, TANZANIA</span><span className="meta-divider" /><span>DATA SCIENCE STUDENT · EASTC</span></div>
          </div>
          <div className="hero-graphic" aria-label="Abstract animated data visualisation">
            <div className="graphic-header"><span>FIG. 01 / SIGNAL STUDY</span><span>DSM — TZ</span></div>
            <div className="graphic-heading">Find the pattern.<br /><em>Understand the why.</em></div>
            <div className="graph-wrap">
              <div className="graph-y-labels"><span>100</span><span>075</span><span>050</span><span>025</span><span>000</span></div>
              <svg className="hero-chart" viewBox="0 0 460 230" role="img" aria-label="A rising data trend line">
                <defs><pattern id="chartGrid" width="46" height="46" patternUnits="userSpaceOnUse"><path d="M 46 0 L 0 0 0 46" fill="none" stroke="rgba(225,237,222,.14)" strokeWidth="1" /></pattern><linearGradient id="chartArea" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stopColor="#c8f169" stopOpacity=".26" /><stop offset="100%" stopColor="#c8f169" stopOpacity="0" /></linearGradient></defs>
                <rect width="460" height="230" fill="url(#chartGrid)" />
                <path className="chart-area" d="M0 194 C34 185 43 143 78 158 S126 171 156 127 S213 141 242 96 S295 111 326 73 S382 84 409 41 S442 43 460 14 L460 230 L0 230Z" fill="url(#chartArea)" />
                <path className="chart-line" d="M0 194 C34 185 43 143 78 158 S126 171 156 127 S213 141 242 96 S295 111 326 73 S382 84 409 41 S442 43 460 14" fill="none" stroke="#c8f169" strokeWidth="2.5" strokeLinecap="round" />
                {[[78,158],[156,127],[242,96],[326,73],[409,41],[460,14]].map(([x,y], i) => <circle key={i} className="chart-point" style={{ animationDelay: (1.1 + i * .16) + 's' }} cx={x} cy={y} r="4" fill="#c8f169" stroke="#142b24" strokeWidth="2" />)}
              </svg>
              <div className="graph-note"><span className="graph-note-dot" /> TREND DETECTED <ArrowUpRight size={13} /></div>
            </div>
            <div className="graphic-footer"><span>OBSERVE</span><i /><span>ANALYSE</span><i /><span>ACT</span><span className="graphic-index">01 / 03</span></div>
            <div className="graphic-orbit graphic-orbit-a" /><div className="graphic-orbit graphic-orbit-b" />
          </div>
          <a className="hero-scroll" href="#about"><span>SCROLL TO DISCOVER</span><ArrowDownRight size={14} /></a>
          <div className="hero-side-label">CURIOUS BY DESIGN / BUILT WITH PURPOSE</div>
        </section>

        <div className="ticker" aria-label="Areas of interest"><div className="ticker-track"><span>DATA ANALYSIS</span><i /> <span>MACHINE LEARNING</span><i /> <span>STATISTICAL THINKING</span><i /> <span>DATA STORYTELLING</span><i /> <span>DATA ANALYSIS</span><i /> <span>MACHINE LEARNING</span><i /> <span>STATISTICAL THINKING</span><i /> <span>DATA STORYTELLING</span><i /></div></div>

        <section className="about-section section-pad" id="about">
          <div className="section-kicker" data-reveal><span>01</span><span>THE PERSON BEHIND THE DATA</span></div>
          <div className="about-layout">
            <h2 data-reveal>Technology matters<br />when it <em>means something.</em></h2>
            <div className="about-copy" data-reveal>
              <p className="about-lead">I’m studying for a Bachelor’s degree in Data Science at the Eastern Africa Statistical Training Centre (EASTC).</p>
              <p>I’m interested in how data can help people understand what is happening, make stronger decisions and improve the systems they rely on. Alongside analytics and machine learning, I build software to solve practical problems and make information easier to use.</p>
              <p>I’m still learning, and I take that seriously: test assumptions, be clear about evidence, and keep improving the work.</p>
              <a className="underlined-link" href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="about-footnotes" data-reveal><div><span>BASED IN</span><b>Dar es Salaam, TZ</b></div><div><span>STUDYING</span><b>Data Science · EASTC</b></div><div><span>INTERESTED IN</span><b>Data engineering & applied ML</b></div></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-topline" data-reveal><div className="section-kicker"><span>02</span><span>SELECTED WORK</span></div><p>Practical projects. Real workflows.<br />A growing body of work.</p></div>
          <div className="work-title-row" data-reveal><h2>Things I’ve<br /><em>put into practice.</em></h2><div className="work-title-aside"><span>2025 — 2026</span><span>SOFTWARE / SYSTEMS</span></div></div>
          <div className="project-filters" role="group" aria-label="Filter projects" data-reveal>{['All', 'Retail operations', 'Digital services', 'Web application', 'Information systems'].map(item => <button key={item} type="button" className={filter === item ? 'filter-chip filter-active' : 'filter-chip'} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === 'All' ? '04' : '01'}</span></button>)}</div>
          <div className="project-grid">
            {shownProjects.map((project, index) => <article className="project-card" key={project.name} data-reveal style={{ transitionDelay: (index * 90) + 'ms' }}>
              <a className="project-art-link" href={project.href} target="_blank" rel="noreferrer" aria-label={'View ' + project.name + ' repository'}><ProjectArtwork kind={project.visual} /><span className="art-open"><ArrowUpRight size={19} /></span></a>
              <div className="project-card-meta"><span>{project.number} / {project.type}</span><span>2026</span></div>
              <div className="project-card-title"><h3>{project.name}</h3><a href={project.href} target="_blank" rel="noreferrer" aria-label={'Open ' + project.name + ' on GitHub'}><MoveUpRight size={18} /></a></div>
              <p className="project-description">{project.description}</p>
              <div className="project-stack">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
            </article>)}
          </div>
          <div className="all-projects" data-reveal><span>More experiments are in progress.</span><a className="underlined-link" href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">Browse all repositories <ArrowRight size={16} /></a></div>
        </section>

        <section className="expertise-section section-pad" id="expertise">
          <div className="section-kicker" data-reveal><span>03</span><span>AREAS OF FOCUS</span></div>
          <div className="expertise-intro" data-reveal><h2>A toolkit in<br /><em>active development.</em></h2><p>I’m building a strong foundation, then putting it to work through practice. These are the areas I’m focused on growing.</p></div>
          <div className="capability-list">{capabilities.map(item => <article className="capability-row" key={item.number} data-reveal><span className="capability-number">{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p><span className="capability-tools">{item.tools}</span><ArrowUpRight className="capability-arrow" size={18} /></article>)}</div>
          <div className="toolbox" data-reveal><span>IN THE TOOLBOX</span><div>{['Python', 'SQL', 'Pandas', 'NumPy', 'Matplotlib', 'Excel', 'MySQL', 'Git', 'React', 'PHP'].map(tool => <span key={tool}>{tool}</span>)}</div></div>
        </section>

        <section className="journey-section section-pad" id="journey">
          <div className="section-kicker" data-reveal><span>04</span><span>EDUCATION & EXPERIENCE</span></div>
          <div className="journey-heading" data-reveal><h2>Learning through<br /><em>the real world.</em></h2><p>Classroom foundations meet hands-on work with data and public-sector systems.</p></div>
          <div className="journey-list">
            <article className="journey-item" data-reveal><div className="journey-date"><span>2024 — 2027</span><small>EXPECTED GRADUATION</small></div><div className="journey-detail"><span className="journey-category">EDUCATION</span><h3>Bachelor’s Degree in Data Science</h3><p className="journey-place">Eastern Africa Statistical Training Centre (EASTC)</p><p>Developing foundations in statistics, programming, data management, data mining and analytical methods.</p></div><span className="journey-index">01</span></article>
            <article className="journey-item" data-reveal><div className="journey-date"><span>AUG — SEP 2026</span><small>FIELD PRACTICAL TRAINING</small></div><div className="journey-detail"><span className="journey-category">PUBLIC-SECTOR DATA</span><h3>Kinondoni Municipal Council</h3><p className="journey-place">ICT Department · Dar es Salaam, Tanzania</p><p>Updated National Housing Addressing records using the NAPA system, including house numbers, street names, household addresses and GPS coordinates. Also used SQL to extract municipal revenue data for analysis in Excel.</p></div><span className="journey-index">02</span></article>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner section-pad">
            <div className="contact-top" data-reveal><span>05 / OPEN TO CONVERSATION</span><span>LET’S MAKE SOMETHING USEFUL.</span></div>
            <div className="contact-layout"><h2 data-reveal>Have a good<br /><em>question in mind?</em></h2><div className="contact-copy" data-reveal><p>I’m interested in opportunities to learn, contribute to data-focused teams and collaborate on useful technology. If you think there’s a fit, I’d like to hear from you.</p><a className="contact-button" href="mailto:bentiger255@gmail.com?subject=Portfolio%20enquiry">Start a conversation <ArrowUpRight size={18} /></a><div className="contact-links"><a href="mailto:bentiger255@gmail.com"><Mail size={15} /> Email</a><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer"><Github size={15} /> GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={15} /> LinkedIn</a></div></div></div>
            <div className="contact-bottom"><span>BENJAMIN GEORGE MBEGA</span><span>DAR ES SALAAM, TANZANIA</span></div>
          </div>
        </section>
      </main>

      <footer className="footer"><a className="footer-brand" href="#home"><span className="brand-mark">B<span>.</span></span><span>BENJAMIN MBEGA</span></a><p>Data, technology and thoughtful problem-solving.</p><div className="footer-links"><a href="./privacy.html">Privacy</a><a href="./terms.html">Terms</a><a href="#home">Back to top ↑</a></div><span className="footer-copy">© {new Date().getFullYear()} BENJAMIN GEORGE MBEGA</span></footer>
    </div>
  );
}

export default App;
