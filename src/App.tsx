import { useEffect, useState } from 'react';

const projects = [
  { n: '01', name: 'Samia Mikopo Tanzania', type: 'Digital services', copy: 'A public loan application experience with an administration workflow for reviewing applications and monitoring activity.', stack: ['HTML / CSS', 'JavaScript', 'Supabase'], repo: 'https://github.com/Bentiger255/samia-mikopo-tanzania', live: 'https://samia-mikopo.com', image: 'https://image.thum.io/get/width/1200/crop/850/noanimate/https://samia-mikopo.com', alt: 'Live Samia Mikopo Tanzania website preview', cls: 'samia' },
  { n: '02', name: 'Tiger QR Studio', type: 'Product / Web app', copy: 'A browser-based QR builder to create, customise, organise and export codes, with a local library and practical templates.', stack: ['React', 'Vite', 'CSS'], repo: 'https://github.com/Bentiger255/tiger-qr-studio', live: 'https://brilliant-dasik-af7c22.netlify.app', image: 'https://image.thum.io/get/width/1200/crop/850/noanimate/https://brilliant-dasik-af7c22.netlify.app', alt: 'Live Tiger QR Studio application preview', cls: 'qr' },
  { n: '03', name: 'TWEVE STORE', type: 'Retail operations', copy: 'A retail management project focused on the everyday workflow behind stock, sales and store operations.', stack: ['React', 'Tailwind CSS', 'MySQL'], repo: 'https://github.com/Bentiger255/tweve-store', live: '', image: 'https://raw.githubusercontent.com/Bentiger255/tweve-store/main/android/app/src/main/res/drawable/splash.png', alt: 'TWEVE STORE asset from its project repository', cls: 'tweve' },
];

const focus = [
  ['01', 'Data analysis', 'Explore data, check assumptions and communicate what the evidence actually says.', 'PYTHON · PANDAS · NUMPY'],
  ['02', 'Machine learning', 'Build a practical foundation in model training, evaluation and statistical thinking.', 'SCIKIT-LEARN · STATISTICS'],
  ['03', 'Data visualisation', 'Make patterns and findings easier to understand through clear, useful visuals.', 'MATPLOTLIB · EXCEL'],
  ['04', 'Data systems', 'Work with databases and software that turn raw information into useful workflows.', 'SQL · MYSQL · PYTHON'],
];

export default function App() {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const nodes = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) { nodes.forEach(n => n.classList.add('revealed')); return; }
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('revealed'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    nodes.forEach(n => observer.observe(n));
    return () => observer.disconnect();
  }, []);
  const close = () => setMenu(false);

  return <div className="site-shell">
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <a className="wordmark" href="#home" aria-label="Benjamin Mbega home"><span className="wordmark-symbol">BM<span>/</span></span><span className="wordmark-name">BENJAMIN<br/>MBEGA</span></a>
      <button className="menu-toggle" type="button" aria-expanded={menu} onClick={() => setMenu(!menu)} aria-label={menu ? 'Close menu' : 'Open menu'}><span>{menu ? 'CLOSE' : 'MENU'}</span><span className="menu-lines"><i/><i/></span></button>
      <nav className={menu ? 'main-nav nav-open' : 'main-nav'} aria-label="Main navigation">
        <a href="#work" onClick={close}>Work <sup>01</sup></a><a href="#about" onClick={close}>About <sup>02</sup></a><a href="#journey" onClick={close}>Journey <sup>03</sup></a><a className="nav-contact" href="#contact" onClick={close}>Let’s talk <span>↗</span></a>
      </nav>
    </header>
    <main id="main">
      <section className="hero" id="home">
        <div className="hero-topline"><span>DATA SCIENCE / SOFTWARE</span><span>DAR ES SALAAM, TZ <i className="status-dot"/></span></div>
        <div className="hero-main">
          <div className="hero-copy">
            <p className="hero-intro" data-reveal>Curious by nature.<br/>Practical by design.</p>
            <h1 data-reveal>Make data<br/><span>make sense<span className="hero-period">.</span></span></h1>
            <div className="hero-bottom" data-reveal><p>I’m Benjamin George Mbega, a Data Science student building useful things with data, code and a healthy respect for evidence.</p><a className="text-link" href="#work"><span>EXPLORE MY WORK</span><b>↓</b></a></div>
          </div>
          <div className="hero-art" aria-label="Abstract editorial graphic about data">
            <div className="art-index">FIELD NOTE / 001</div><div className="art-number">DSM<br/>06°48′S</div>
            <div className="art-large-type">LOOK<br/><em>CLOSER.</em></div><div className="art-axis"/><div className="art-axis art-axis-two"/>
            <div className="art-circle"><span>DATA<br/>→ INSIGHT</span></div><div className="art-caption"><span>OBSERVE</span><span>QUESTION</span><span>BUILD</span></div>
          </div>
        </div>
        <div className="hero-footer"><span>ANALYSIS / LEARNING / BUILDING</span><span>SCROLL TO EXPLORE ↓</span><span>2026 — PRESENT</span></div>
      </section>
      <section className="work-section" id="work">
        <div className="section-heading" data-reveal><div><p className="eyebrow">01 / SELECTED WORK</p><h2>Made to be<br/><em>used.</em></h2></div><p className="heading-note">A selection of software and digital projects. Each one starts with a practical problem and a chance to learn by doing.</p></div>
        <div className="projects-list">{projects.map(p => <article className={'project project-' + p.cls} key={p.n} data-reveal>
          <a className="project-visual" href={p.live || p.repo} target="_blank" rel="noreferrer" aria-label={'Open ' + p.name}><img src={p.image} alt={p.alt} loading="lazy"/><span className="visual-label">{p.live ? 'LIVE PROJECT' : 'PROJECT ASSET'} <b>↗</b></span></a>
          <div className="project-info"><div className="project-meta"><span>{p.n} / {p.type}</span><span>PROJECT</span></div><h3>{p.name}</h3><p>{p.copy}</p><div className="project-bottom"><div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div><a className="project-link" href={p.repo} target="_blank" rel="noreferrer">VIEW REPOSITORY <span>↗</span></a></div></div>
        </article>)}</div>
        <div className="work-end" data-reveal><span>MORE WORK IN PROGRESS</span><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">ALL REPOSITORIES <b>↗</b></a></div>
      </section>
      <section className="about-section" id="about">
        <div className="about-left" data-reveal><p className="eyebrow">02 / A LITTLE ABOUT ME</p><h2>Not just the<br/>numbers.<br/><em>The story<br/>behind them.</em></h2><div className="about-stamp">BASED IN<strong>TANZANIA</strong></div></div>
        <div className="about-right" data-reveal><p className="about-lead">I’m pursuing a Bachelor’s degree in Data Science at the Eastern Africa Statistical Training Centre (EASTC), with a growing interest in machine learning and data engineering.</p><p>I like understanding how things work: where information comes from, what it can tell us, and how to make it useful. Alongside my studies, I build web applications and work with databases, bringing software and data together to solve practical problems.</p><p>I’m early in my career, so I focus on learning the fundamentals well, being honest about what the data supports, and improving through real projects.</p><a className="text-link dark-link" href="https://github.com/Bentiger255" target="_blank" rel="noreferrer"><span>FOLLOW THE WORK ON GITHUB</span><b>↗</b></a><div className="about-facts"><div><span>STUDY</span><strong>Data Science / EASTC</strong></div><div><span>FOCUS</span><strong>Analytics + Applied ML</strong></div><div><span>LOCATION</span><strong>Dar es Salaam, Tanzania</strong></div></div></div>
      </section>
      <section className="capabilities-section"><div className="capabilities-top" data-reveal><p className="eyebrow">03 / CURRENT FOCUS</p><h2>Tools are useful.<br/><em>Thinking comes first.</em></h2></div>
        <div className="capability-list">{focus.map(item => <article className="capability" key={item[0]} data-reveal><span className="cap-number">{item[0]}</span><h3>{item[1]}</h3><p>{item[2]}</p><span className="cap-tools">{item[3]}</span><span className="cap-arrow">↗</span></article>)}</div>
        <div className="tool-strip" data-reveal><span>TOOLS I USE</span><p>Python <i>/</i> SQL <i>/</i> Pandas <i>/</i> NumPy <i>/</i> Matplotlib <i>/</i> Excel <i>/</i> MySQL <i>/</i> Git <i>/</i> React <i>/</i> PHP</p></div>
      </section>
      <section className="journey-section" id="journey"><div className="journey-heading" data-reveal><p className="eyebrow">04 / EDUCATION & EXPERIENCE</p><h2>Learning by<br/><em>getting involved.</em></h2></div>
        <div className="timeline"><article className="timeline-item" data-reveal><span className="timeline-date">2024 — 2027</span><div><p className="eyebrow">EDUCATION</p><h3>Bachelor’s Degree in Data Science</h3><p className="timeline-place">Eastern Africa Statistical Training Centre (EASTC)</p><p>Building foundations in statistics, programming, data management, data mining and analytical methods.</p></div><span className="timeline-number">01</span></article>
        <article className="timeline-item" data-reveal><span className="timeline-date">AUG — SEP 2026</span><div><p className="eyebrow">FIELD PRACTICAL TRAINING</p><h3>Kinondoni Municipal Council</h3><p className="timeline-place">ICT Department / Dar es Salaam</p><p>Updated National Housing Addressing records through the NAPA system, including house numbers, street names, household addresses and GPS coordinates. Used SQL to extract municipal revenue data for analysis in Excel.</p></div><span className="timeline-number">02</span></article></div>
      </section>
      <section className="contact-section" id="contact"><div className="contact-top" data-reveal><span>05 / YOUR TURN</span><span>OPEN TO LEARNING, WORK & COLLABORATION</span></div><div className="contact-main"><h2 data-reveal>Have a good<br/><em>problem to solve?</em></h2><div className="contact-copy" data-reveal><p>I’m interested in opportunities to learn, contribute to data-focused teams and build technology that does something useful. Let’s talk.</p><a className="contact-cta" href="mailto:bentiger255@gmail.com?subject=Portfolio%20enquiry">START A CONVERSATION <span>↗</span></a><div className="social-links"><a href="mailto:bentiger255@gmail.com">EMAIL ↗</a><a href="https://github.com/Bentiger255" target="_blank" rel="noreferrer">GITHUB ↗</a></div></div></div><div className="contact-bottom"><span>BENJAMIN GEORGE MBEGA</span><span>DAR ES SALAAM, TANZANIA</span><a href="#home">BACK TO TOP ↑</a></div></section>
    </main>
    <footer className="site-footer"><a className="footer-mark" href="#home">BM<span>/</span></a><span>DATA, SOFTWARE & THOUGHTFUL PROBLEM-SOLVING.</span><div><a href="./privacy.html">PRIVACY</a><a href="./terms.html">TERMS</a></div><span>© {new Date().getFullYear()} BENJAMIN MBEGA</span></footer>
  </div>;
}
