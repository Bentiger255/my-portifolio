import { useEffect, useState } from 'react';

const projects = [
  {
    number: '01',
    name: 'Samia Mikopo Tanzania',
    type: 'DIGITAL SERVICE',
    description: 'A public-facing loan application experience with an administrative workflow for reviewing submissions and managing application information.',
    role: 'Website, application flow and admin experience',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    live: 'https://samia-mikopo.com',
    repo: 'https://github.com/Bentiger255/samia-mikopo-tanzania',
    image: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://samia-mikopo.com',
    alt: 'Live website preview of Samia Mikopo Tanzania'
  },
  {
    number: '02',
    name: 'Tiger QR Studio',
    type: 'WEB APPLICATION',
    description: 'A QR code workspace for creating and organising codes, with templates and a personal library built around a practical workflow.',
    role: 'Interface design, application workflow and product structure',
    stack: ['React', 'Vite', 'CSS'],
    live: 'https://brilliant-dasik-af7c22.netlify.app',
    repo: 'https://github.com/Bentiger255/tiger-qr-studio',
    image: 'https://image.thum.io/get/width/1400/crop/900/noanimate/https://brilliant-dasik-af7c22.netlify.app',
    alt: 'Live website preview of Tiger QR Studio'
  },
  {
    number: '03',
    name: 'Municipal revenue analysis',
    type: 'FIELD PRACTICAL TRAINING',
    description: 'Extracted municipal revenue records for January to August 2026 with SQL and prepared the data in Excel for further analysis.',
    role: 'SQL extraction and spreadsheet preparation',
    stack: ['SQL', 'Excel', 'Data preparation'],
    live: '',
    repo: '',
    alt: ''
  }
];

const skills = [
  { number: '01', name: 'Data foundations', detail: 'Querying, preparing and validating data before it reaches analysis or a product.', tools: 'SQL / MYSQL / EXCEL' },
  { number: '02', name: 'Programming', detail: 'Building practical software and strengthening the fundamentals behind reliable code.', tools: 'PYTHON / C++ / PHP' },
  { number: '03', name: 'Analysis', detail: 'Exploring patterns with statistics and communicating what the data can actually tell us.', tools: 'PANDAS / NUMPY / MATPLOTLIB' }
];

function PipelineArtwork() {
  return (
    <div className="pipeline-art" aria-label="Data pipeline illustration: collect, shape, deliver">
      <div className="art-topline"><span>FIELD NOTE / 001</span><span>DATA IN MOTION</span></div>
      <div className="pipeline-canvas">
        <svg viewBox="0 0 600 380" className="pipeline-svg" role="img" aria-label="Connected stages of a data workflow">
          <path d="M80 108 H225 V190 H375 V108 H520" />
          <path d="M80 270 H225 V190 H375 V270 H520" />
          <path d="M225 190 H375" />
          <circle cx="225" cy="190" r="7" />
          <circle cx="375" cy="190" r="7" />
          <path className="route-dash" d="M80 108 H225 V190 H375 V108 H520" />
        </svg>
        <div className="pipeline-label label-source"><span>01</span><b>Collect</b><small>Raw records</small><div className="mini-records"><i /><i /><i /><i /></div></div>
        <div className="pipeline-label label-shape"><span>02</span><b>Shape</b><small>Clean + structure</small><div className="mini-bars"><i /><i /><i /><i /><i /></div></div>
        <div className="pipeline-label label-deliver"><span>03</span><b>Deliver</b><small>Useful output</small><div className="mini-chart"><i /><i /><i /><i /></div></div>
        <div className="art-side-note">FROM INFORMATION<br />TO SOMETHING USEFUL</div>
      </div>
      <div className="art-bottomline"><span>OBSERVE</span><span>TRANSFORM</span><span>MAKE IT COUNT</span></div>
      <div className="art-stamp">BM<br /><span>DS / 26</span></div>
    </div>
  );
}

function RevenuePreview() {
  return (
    <div className="revenue-preview" aria-label="Illustration of a SQL to spreadsheet workflow">
      <div className="revenue-heading"><span>FIELD WORK / DATA PREPARATION</span><span>2026</span></div>
      <div className="revenue-panels">
        <div className="revenue-panel">
          <span className="panel-kicker">01 / EXTRACT</span>
          <div className="query-sheet"><i /><i /><i /><i /><i /><i /></div>
          <b>SQL query</b><small>Municipal revenue records</small>
        </div>
        <span className="revenue-arrow">→</span>
        <div className="revenue-panel">
          <span className="panel-kicker">02 / PREPARE</span>
          <div className="spreadsheet">{Array.from({ length: 24 }, (_, i) => <i key={i} />)}</div>
          <b>Excel workbook</b><small>January — August 2026</small>
        </div>
      </div>
      <div className="revenue-foot">KINONDONI MUNICIPAL COUNCIL <span>ICT DEPARTMENT</span></div>
    </div>
  );
}

function ProjectVisual({ project }) {
  const [failed, setFailed] = useState(false);
  if (project.number === '03') return <RevenuePreview />;
  return (
    <div className={'project-image-wrap' + (failed ? ' image-failed' : '')}>
      {!failed && <img src={project.image} alt={project.alt} loading="lazy" onError={() => setFailed(true)} />}
      {failed && <div className="image-fallback"><span>LIVE PROJECT</span><strong>{project.name}</strong><p>Open the project to see the current interface.</p></div>}
      <span className="image-corner">{project.number} / PREVIEW</span>
      {project.live && <a className="image-open" href={project.live} target="_blank" rel="noreferrer" aria-label={'Open ' + project.name}>↗</a>}
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      elements.forEach(element => element.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Benjamin Mbega home"><span>BM</span><i>.</i></a>
        <span className="topbar-descriptor">DATA / SOFTWARE / SYSTEMS</span>
        <button className="mobile-menu" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>{menuOpen ? 'CLOSE −' : 'MENU +'}</button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#practice" onClick={closeMenu}>Practice <span>03</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let’s talk <b>↗</b></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-main">
            <div className="hero-kicker"><span className="live-mark" /> EASTC DATA SCIENCE STUDENT <span className="kicker-year">TANZANIA / 2026</span></div>
            <h1>MAKE DATA<br />DO <span>MORE.</span></h1>
            <div className="hero-bottom">
              <p>I’m Benjamin Mbega. I work at the intersection of data, software and practical problem-solving, with a long-term focus on data engineering.</p>
              <div className="hero-links"><a className="primary-link" href="#work">EXPLORE MY WORK <span>↘</span></a><a className="underlined-link" href="mailto:bentiger255@gmail.com">CONTACT ME ↗</a></div>
            </div>
            <div className="hero-index"><span>01 — INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
          <div className="hero-art-wrap" data-reveal>
            <PipelineArtwork />
            <div className="hero-art-caption"><span>BUILD WITH INTENTION.</span><span>LEARN BY SHIPPING.</span></div>
          </div>
          <div className="hero-side-label">BENJAMIN GEORGE MBEGA / PORTFOLIO</div>
        </section>

        <section className="ticker" aria-label="Areas of focus">
          <div className="ticker-inner"><span>DATA ENGINEERING</span><i>✳</i><span>SOFTWARE DEVELOPMENT</span><i>✳</i><span>ANALYTICS</span><i>✳</i><span>DATA ENGINEERING</span></div>
        </section>

        <section className="work-section section-pad" id="work">
          <div className="section-head" data-reveal>
            <div><p className="section-number">01 / SELECTED WORK</p><h2>Work that<br /><em>does something.</em></h2></div>
            <p className="section-intro">A few real projects and practical assignments. Each one represents a problem, a workflow and something learned along the way.</p>
          </div>
          <div className="projects">
            {projects.map(project => (
              <article className={'project project-' + project.number} key={project.number} data-reveal>
                <div className="project-visual"><ProjectVisual project={project} /><span className="project-index-large">{project.number}</span></div>
                <div className="project-copy">
                  <div className="project-meta"><span>{project.type}</span><span>0{project.number === '03' ? '3' : project.number}</span></div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-role"><span>MY FOCUS</span><b>{project.role}</b></div>
                  <div className="tech-list">{project.stack.map(technology => <span key={technology}>{technology}</span>)}</div>
                  <div className="project-links">
                    {project.live && <a href={project.live} target="_blank" rel="noreferrer">VIEW LIVE <span>↗</span></a>}
                    {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">SOURCE CODE <span>↗</span></a>}
                    {!project.live && <span className="field-note">FIELD EXPERIENCE · KINONDONI MC</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="github-rail"><span>THE CODE, EXPERIMENTS & THE LEARNING</span><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">MORE ON GITHUB <b>↗</b></a></div>
        </section>

        <section className="practice-section" id="practice">
          <div className="practice-layout section-pad">
            <div className="practice-intro" data-reveal><p className="section-number section-number-light">02 / HOW I WORK</p><h2>Good work<br />starts with<br /><em>good questions.</em></h2><p>I’m still developing my craft. My approach is to understand the problem, work carefully with the information, and make the result useful to someone.</p></div>
            <div className="skill-list">
              {skills.map(skill => <article className="skill-row" key={skill.number} data-reveal><span className="skill-number">{skill.number}</span><div><h3>{skill.name}</h3><p>{skill.detail}</p><span className="skill-tools">{skill.tools}</span></div><span className="skill-cross">↗</span></article>)}
            </div>
          </div>
        </section>

        <section className="about-section section-pad" id="about">
          <div className="about-left" data-reveal><p className="section-number">03 / THE PERSON</p><h2>Curious by<br />nature. <em>Practical</em><br />by habit.</h2><div className="about-stamp">DAR ES SALAAM<br /><span>TANZANIA / TZ</span></div></div>
          <div className="about-right" data-reveal>
            <p className="about-lead">I’m pursuing a Bachelor’s degree in Data Science at the Eastern Africa Statistical Training Centre (EASTC).</p>
            <p>My interests sit where data and software meet: how information is collected, how it should be prepared, and how it can support useful products and decisions. I learn by building, documenting my work and improving through practical experience.</p>
            <div className="about-facts"><div><span>EDUCATION</span><b>BSc Data Science / EASTC</b></div><div><span>CAREER DIRECTION</span><b>Data Engineering</b></div><div><span>LOCATION</span><b>Dar es Salaam, Tanzania</b></div></div>
            <a className="underlined-link about-github" href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">FOLLOW THE WORK ON GITHUB ↗</a>
          </div>
        </section>

        <section className="experience-section section-pad">
          <div className="experience-title" data-reveal><p className="section-number section-number-light">04 / EDUCATION & PRACTICE</p><h2>Learning in<br /><em>the real world.</em></h2></div>
          <div className="timeline">
            <article className="timeline-item" data-reveal><span className="timeline-date">2024 — 2027</span><div><span className="timeline-type">EDUCATION</span><h3>Bachelor’s Degree in Data Science</h3><p className="timeline-place">Eastern Africa Statistical Training Centre (EASTC)</p><p>Developing foundations in statistics, programming, data management, data mining and analytical methods.</p></div></article>
            <article className="timeline-item" data-reveal><span className="timeline-date">AUG — SEP 2026</span><div><span className="timeline-type">FIELD PRACTICAL TRAINING</span><h3>Kinondoni Municipal Council</h3><p className="timeline-place">ICT Department · Dar es Salaam</p><p>Updated National Housing Addressing records in the NAPA system, including house numbers, street names, household addresses and GPS coordinates. Also used SQL to extract municipal revenue records for analysis in Excel.</p></div></article>
          </div>
        </section>

        <section className="contact-section section-pad" id="contact">
          <div className="contact-top"><span>HAVE AN OPPORTUNITY OR A GOOD PROBLEM?</span><span>05 / CONTACT</span></div>
          <div className="contact-main"><div><p className="section-number">LET’S CONNECT</p><h2>Let’s build<br /><em>something useful.</em></h2></div><div className="contact-copy"><p>I’m open to internships, collaboration and opportunities to learn from people working with data and technology.</p><a className="contact-button" href="mailto:bentiger255@gmail.com?subject=Portfolio%20enquiry">SEND ME A MESSAGE <span>↗</span></a><div className="social-row"><a href="mailto:bentiger255@gmail.com">EMAIL ↗</a><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">GITHUB ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></div></div></div>
          <div className="contact-bottom"><span>BENJAMIN GEORGE MBEGA</span><span>DAR ES SALAAM, TANZANIA</span><a href="#home">BACK TO TOP ↑</a></div>
        </section>
      </main>

      <footer className="footer"><a className="footer-mark" href="#home">BM<i>.</i></a><span className="footer-motto">DATA / SOFTWARE / PRACTICAL THINKING</span><div className="footer-nav"><a href="./privacy.html">Privacy</a><a href="./terms.html">Terms</a><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">GitHub</a></div><span className="footer-copy">© {new Date().getFullYear()} Benjamin Mbega</span></footer>
    </div>
  );
}
