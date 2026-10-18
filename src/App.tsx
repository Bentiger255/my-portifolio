import { useEffect, useState } from 'react';

const projects = [
  {
    number: '01',
    name: 'Samia Mikopo Tanzania',
    category: 'Public-facing digital service',
    description: 'A loan application website with a connected administrative workflow for reviewing submissions and managing application information.',
    contribution: 'Website, application flow and admin experience',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    repository: 'https://github.com/Bentiger255/samia-mikopo-tanzania',
    live: 'https://samia-mikopo.com',
    image: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://samia-mikopo.com',
    imageAlt: 'Screenshot preview of the Samia Mikopo Tanzania website',
    visual: 'website'
  },
  {
    number: '02',
    name: 'Tiger QR Studio',
    category: 'Web application',
    description: 'A QR code tool for creating, customising and organising codes, with reusable templates and a personal library.',
    contribution: 'Interface, application workflow and product structure',
    stack: ['React', 'Vite', 'CSS'],
    repository: 'https://github.com/Bentiger255/tiger-qr-studio',
    live: 'https://brilliant-dasik-af7c22.netlify.app',
    image: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://brilliant-dasik-af7c22.netlify.app',
    imageAlt: 'Screenshot preview of the Tiger QR Studio application',
    visual: 'website'
  },
  {
    number: '03',
    name: 'Municipal Revenue Analysis',
    category: 'Field practical training',
    description: 'Worked with municipal revenue records, using SQL to extract January to August 2026 data and Excel to prepare it for analysis.',
    contribution: 'SQL data extraction and Excel workflow',
    stack: ['SQL', 'Excel', 'Data preparation'],
    repository: '',
    live: '',
    imageAlt: '',
    visual: 'data'
  }
];

const capabilities = [
  { number: '01', title: 'Data foundations', text: 'Querying, preparing and validating data so it is ready to be understood and used.', tools: 'SQL · MYSQL · EXCEL' },
  { number: '02', title: 'Programming', text: 'Building practical software and learning to structure code that is clear and maintainable.', tools: 'PYTHON · C++ · PHP' },
  { number: '03', title: 'Analysis & communication', text: 'Using statistics and visualisation to explore patterns and explain findings clearly.', tools: 'PANDAS · NUMPY · MATPLOTLIB' }
];

function DataWorkflow() {
  return (
    <div className="workflow-art" aria-label="Illustration of a data workflow from source to useful insight">
      <div className="workflow-head">
        <span>DATA WORKFLOW</span>
        <span className="workflow-live"><i /> SYSTEMS THINKING</span>
      </div>
      <div className="workflow-graphic">
        <svg className="workflow-lines" viewBox="0 0 520 310" role="img" aria-label="Data flows through collection, transformation and insight">
          <path d="M92 91 H207 V155 H307 V91 H420" />
          <path d="M92 220 H207 V155 H307 V220 H420" />
          <path d="M207 155 H307" />
          <circle cx="207" cy="155" r="4" />
          <circle cx="307" cy="155" r="4" />
        </svg>
        <div className="flow-node flow-source">
          <span className="node-index">01</span>
          <div className="source-glyph"><i /><i /><i /></div>
          <strong>Source</strong>
          <small>Raw information</small>
        </div>
        <div className="flow-node flow-transform">
          <span className="node-index">02</span>
          <div className="transform-glyph"><i /><i /><i /><i /></div>
          <strong>Transform</strong>
          <small>Clean · structure</small>
        </div>
        <div className="flow-node flow-insight">
          <span className="node-index">03</span>
          <div className="insight-glyph"><i /><i /><i /><i /></div>
          <strong>Insight</strong>
          <small>Useful decisions</small>
        </div>
      </div>
      <div className="workflow-foot">
        <span>COLLECT WITH CARE</span>
        <span>MAKE IT USEFUL</span>
      </div>
    </div>
  );
}

function RevenueVisual() {
  return (
    <div className="revenue-visual" aria-label="Illustration of a SQL to spreadsheet analysis workflow">
      <div className="revenue-window-bar"><span>FIELD WORK / DATA PREPARATION</span><span>03</span></div>
      <div className="revenue-content">
        <div className="revenue-stage">
          <span className="revenue-label">01 / EXTRACT</span>
          <div className="query-lines"><i /><i /><i /><i /><i /></div>
          <strong>SQL query</strong>
          <small>Municipal revenue records</small>
        </div>
        <div className="revenue-connector">→</div>
        <div className="revenue-stage">
          <span className="revenue-label">02 / PREPARE</span>
          <div className="sheet-grid">
            {Array.from({ length: 20 }, (_, index) => <i key={index} />)}
          </div>
          <strong>Excel workbook</strong>
          <small>January to August 2026</small>
        </div>
      </div>
      <p className="revenue-note">A practical workflow completed during field training at Kinondoni Municipal Council.</p>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach(item => item.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Benjamin Mbega, home">
          <span className="brand-mark">BM<span>.</span></span>
          <span className="brand-name">BENJAMIN GEORGE MBEGA</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          <span>{menuOpen ? 'CLOSE' : 'MENU'}</span><span className="menu-toggle-lines"><i /><i /></span>
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Get in touch <span>↗</span></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> DATA SCIENCE · SOFTWARE · SYSTEMS</p>
            <h1>Turning data<br />into <em>useful</em><br />things.</h1>
            <p className="hero-summary">I’m Benjamin, a Data Science student in Tanzania interested in building reliable data workflows and practical software that helps people make better decisions.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore selected work <span>↘</span></a>
              <a className="text-action" href="mailto:bentiger255@gmail.com">Contact me <span>↗</span></a>
            </div>
            <div className="hero-meta">
              <span><i className="availability-dot" /> OPEN TO INTERNSHIPS & COLLABORATION</span>
              <span>DAR ES SALAAM, TANZANIA</span>
            </div>
          </div>
          <div className="hero-visual" data-reveal>
            <DataWorkflow />
            <div className="visual-caption"><span>01 / HOW I THINK</span><span>FROM RAW DATA TO REAL USE</span></div>
          </div>
        </section>

        <section className="intro-band" aria-label="Professional focus">
          <div className="intro-band-inner">
            <span className="intro-label">CURRENT DIRECTION</span>
            <p>Data engineering <i>·</i> analytics <i>·</i> thoughtful software</p>
            <span className="intro-location">EASTC / 2024–2027</span>
          </div>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading" data-reveal>
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> SELECTED WORK / 01</p>
              <h2>Built around<br /><em>real problems.</em></h2>
            </div>
            <p className="section-intro">A small selection of projects and practical experience. I focus on understanding the workflow, building with care, and being clear about what each piece of work does.</p>
          </div>

          <div className="project-list">
            {projects.map(project => (
              <article className={'project project-' + project.visual} key={project.number} data-reveal>
                <div className="project-preview">
                  {project.visual === 'data' ? <RevenueVisual /> : (
                    <>
                      <img src={project.image} alt={project.imageAlt} loading="lazy" onError={event => { event.currentTarget.style.display = 'none'; event.currentTarget.parentElement.classList.add('preview-unavailable'); }} />
                      <div className="preview-fallback"><span>PROJECT PREVIEW</span><strong>{project.name}</strong><small>Open the live project to explore</small></div>
                    </>
                  )}
                  <span className="preview-index">{project.number} / {project.visual === 'data' ? 'FIELD NOTES' : 'PROJECT PREVIEW'}</span>
                </div>
                <div className="project-detail">
                  <div className="project-overline"><span>{project.category}</span><span>{project.number}</span></div>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <p className="project-contribution"><span>FOCUS</span>{project.contribution}</p>
                  <div className="project-stack">{project.stack.map(technology => <span key={technology}>{technology}</span>)}</div>
                  <div className="project-actions">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">View live site <span>↗</span></a>}
                    {project.repository && <a href={project.repository} target="_blank" rel="noreferrer">Source code <span>↗</span></a>}
                    {!project.live && !project.repository && <span className="work-note">Completed during practical field training</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="all-work-link"><span>MORE EXPERIMENTS & CODE</span><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">Explore my GitHub <span>↗</span></a></div>
        </section>

        <section className="approach-section" id="approach">
          <div className="approach-inner section-wrap">
            <div className="approach-heading" data-reveal>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> WHAT I BRING / 02</p>
              <h2>Curiosity first.<br /><em>Clarity always.</em></h2>
              <p>I’m building strong fundamentals in data and software. I value understandable code, careful data handling, and results that can be explained.</p>
            </div>
            <div className="capability-list">
              {capabilities.map(item => (
                <article className="capability" key={item.number} data-reveal>
                  <span className="capability-number">{item.number}</span>
                  <div className="capability-copy"><h3>{item.title}</h3><p>{item.text}</p></div>
                  <span className="capability-tools">{item.tools}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-heading" data-reveal>
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME / 03</p>
            <h2>Learning to build<br />the <em>whole picture.</em></h2>
          </div>
          <div className="about-content" data-reveal>
            <p className="about-lead">I’m studying for a Bachelor’s degree in Data Science at the Eastern Africa Statistical Training Centre (EASTC), with a long-term goal of becoming a data engineer.</p>
            <p>My interests sit where data and software meet: understanding how information is collected, how it should be prepared, and how it can support useful products and decisions. I learn by building, documenting what I do, and improving through practical work.</p>
            <div className="about-details">
              <div><span>EDUCATION</span><strong>BSc Data Science, EASTC</strong></div>
              <div><span>BASED IN</span><strong>Dar es Salaam, Tanzania</strong></div>
              <div><span>CAREER INTEREST</span><strong>Data Engineering & Analytics</strong></div>
            </div>
            <a className="text-action" href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">More of my work on GitHub <span>↗</span></a>
          </div>
        </section>

        <section className="experience-section">
          <div className="experience-inner section-wrap">
            <div className="experience-heading" data-reveal>
              <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> EDUCATION & PRACTICE / 04</p>
              <h2>Learning by<br /><em>doing the work.</em></h2>
            </div>
            <div className="experience-list">
              <article className="experience-item" data-reveal>
                <span className="experience-date">2024 — 2027</span>
                <div><p className="experience-type">EDUCATION</p><h3>Bachelor’s Degree in Data Science</h3><p className="experience-place">Eastern Africa Statistical Training Centre (EASTC)</p><p>Developing foundations in statistics, programming, data management, data mining and analytical methods.</p></div>
              </article>
              <article className="experience-item" data-reveal>
                <span className="experience-date">AUG — SEP 2026</span>
                <div><p className="experience-type">FIELD PRACTICAL TRAINING</p><h3>Kinondoni Municipal Council</h3><p className="experience-place">ICT Department · Dar es Salaam</p><p>Updated National Housing Addressing records in the NAPA system, including house numbers, street names, household addresses and GPS coordinates. Also used SQL to extract municipal revenue records for analysis in Excel.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-topline"><span>HAVE A PROJECT OR OPPORTUNITY?</span><span>05 / CONTACT</span></div>
          <div className="contact-main">
            <h2>Let’s make<br /><em>something useful.</em></h2>
            <div className="contact-copy">
              <p>I’m open to internships, collaboration and opportunities to learn from people working with data and technology.</p>
              <a className="button button-light" href="mailto:bentiger255@gmail.com?subject=Portfolio%20enquiry">Start a conversation <span>↗</span></a>
              <div className="social-links"><a href="mailto:bentiger255@gmail.com">EMAIL ↗</a><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">GITHUB ↗</a></div>
            </div>
          </div>
          <div className="contact-footer"><span>BENJAMIN GEORGE MBEGA</span><span>DAR ES SALAAM, TANZANIA</span><a href="#home">BACK TO TOP ↑</a></div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home">BM<span>.</span></a>
        <span className="footer-note">DATA · SOFTWARE · PRACTICAL THINKING</span>
        <div className="footer-links"><a href="./privacy.html">Privacy</a><a href="./terms.html">Terms</a><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">GitHub</a></div>
        <span className="copyright">© {new Date().getFullYear()} Benjamin Mbega</span>
      </footer>
    </div>
  );
}
