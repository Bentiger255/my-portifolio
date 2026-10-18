import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
} from 'lucide-react';

const projects = [
  {
    name: 'TWEVE STORE',
    category: 'Software',
    year: '2026',
    mark: 'TS',
    description:
      'An inventory and point-of-sale system concept designed around retail stock, sales and operational visibility.',
    stack: ['React', 'Tailwind CSS', 'MySQL'],
    href: 'https://github.com/Bentiger255/tweve-store',
  },
  {
    name: 'Samia Mikopo Tanzania',
    category: 'Software',
    year: '2026',
    mark: 'SM',
    description:
      'A public-facing digital loan application website with an administrator workflow and application analytics.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Supabase'],
    href: 'https://github.com/Bentiger255/samia-mikopo-tanzania',
  },
  {
    name: 'Tiger QR Studio',
    category: 'Software',
    year: '2026',
    mark: 'QR',
    description:
      'A QR-code utility project focused on creating, organizing and reviewing codes through a dedicated interface.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    href: 'https://github.com/Bentiger255/tiger-qr-studio',
  },
  {
    name: 'Loan Management System',
    category: 'Software',
    year: '2026',
    mark: 'LM',
    description:
      'A web application project exploring structured loan-management workflows and relational data.',
    stack: ['PHP', 'Yii2', 'MySQL'],
    href: 'https://github.com/Bentiger255/loan-system',
  },
];
const skills = [
  [
    '01',
    'Data analysis',
    'Explore, clean and interpret datasets to find useful patterns.',
    'Python · Pandas · NumPy',
  ],
  [
    '02',
    'Statistics & machine learning',
    'Build understanding of statistical methods and supervised modelling workflows.',
    'Statistics · scikit-learn · Evaluation',
  ],
  [
    '03',
    'Data visualisation',
    'Communicate findings through clear charts and evidence-led reporting.',
    'Matplotlib · Excel · Reporting',
  ],
  [
    '04',
    'Data & software systems',
    'Work with structured data and build practical applications around it.',
    'SQL · MySQL · Python · React',
  ],
];
function App() {
  const [filter, setFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const shown =
    filter === 'All' ? projects : projects.filter(p => p.category === filter);
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Benjamin Mbega home">
          <span className="wordmark-symbol">B.</span>
          <span>BENJAMIN MBEGA</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav
          className={menuOpen ? 'main-nav is-open' : 'main-nav'}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#work" onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" onClick={closeMenu}>
            Expertise
          </a>
          <a href="#experience" onClick={closeMenu}>
            Background
          </a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Get in touch <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> DATA SCIENCE · MACHINE LEARNING
            </p>
            <h1>
              Making data
              <br />
              useful in the <em>real world.</em>
            </h1>
            <p className="hero-description">
              I’m Benjamin George Mbega, a Data Science student building
              practical skills across analytics, machine learning and software
              development.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore my work <ArrowDownRight size={17} />
              </a>
              <a className="text-link" href="#contact">
                Let’s connect <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="hero-location">
              <span className="location-line" /> Based in Dar es Salaam,
              Tanzania <span className="location-separator">/</span> Open to
              opportunities
            </div>
          </div>
          <div className="hero-visual" aria-label="Abstract data visualisation">
            <div className="visual-topline">
              <span>FIELD NOTES / 01</span>
              <span>DATA → INSIGHT</span>
            </div>
            <div className="visual-title">
              From raw signals
              <br />
              to better decisions.
            </div>
            <svg
              className="data-art"
              viewBox="0 0 460 255"
              role="img"
              aria-label="Plotted data points and trend line"
            >
              <defs>
                <pattern
                  id="grid"
                  width="28"
                  height="28"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 28 0 L 0 0 0 28"
                    fill="none"
                    stroke="#c6d2cd"
                    strokeWidth=".8"
                  />
                </pattern>
              </defs>
              <rect width="460" height="255" fill="url(#grid)" />
              <path
                d="M18 207 C70 190 76 158 125 168 S193 111 236 132 S301 73 345 88 S403 39 442 29"
                fill="none"
                stroke="#276b5b"
                strokeWidth="2.5"
              />
              <path
                d="M18 207 C70 190 76 158 125 168 S193 111 236 132 S301 73 345 88 S403 39 442 29 L442 255 L18 255Z"
                fill="#b9d8c9"
                opacity=".35"
              />
              {[
                [42, 196],
                [88, 158],
                [125, 168],
                [184, 121],
                [236, 132],
                [291, 82],
                [345, 88],
                [398, 47],
                [442, 29],
              ].map(([x, y]) => (
                <circle
                  key={x}
                  cx={x}
                  cy={y}
                  r="4.5"
                  fill="#276b5b"
                  stroke="#f3f2ec"
                  strokeWidth="2"
                />
              ))}
              <line
                x1="345"
                y1="18"
                x2="345"
                y2="230"
                stroke="#78968a"
                strokeDasharray="3 5"
              />
              <rect
                x="285"
                y="4"
                width="120"
                height="27"
                rx="2"
                fill="#173d34"
              />
              <text
                x="345"
                y="21"
                textAnchor="middle"
                fill="#f7f6f0"
                fontSize="9"
                letterSpacing="1.4"
              >
                SIGNAL FOUND
              </text>
            </svg>
            <div className="visual-footer">
              <span>Observe</span>
              <b>↗</b>
              <span>Understand</span>
              <b>↗</b>
              <span>Act</span>
            </div>
            <div className="visual-index">01 — 03</div>
          </div>
          <a className="hero-scroll" href="#about">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDownRight size={15} />
          </a>
        </section>
        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <p className="eyebrow section-label">01 / A LITTLE ABOUT ME</p>
            <div className="intro-content">
              <h2>
                Curiosity is the starting point.
                <br />
                <span>Impact is the goal.</span>
              </h2>
              <p>
                I’m pursuing a Bachelor’s degree in Data Science at the Eastern
                Africa Statistical Training Centre (EASTC). I enjoy working at
                the intersection of data, technology and problem-solving, from
                understanding a dataset to building software that helps people
                act on information.
              </p>
              <p>
                My approach is practical and continuously evolving: ask better
                questions, validate the evidence, explain the result clearly and
                keep learning.
              </p>
              <a
                className="inline-link"
                href="https://github.com/Bentiger255"
                target="_blank"
                rel="noreferrer"
              >
                Explore my GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </section>
        <section className="work-section section-wrap" id="work">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-label">02 / SELECTED WORK</p>
              <h2>
                Projects with a <em>purpose.</em>
              </h2>
            </div>
            <p className="section-intro">
              A selection of software projects demonstrating how I approach real
              workflows, interfaces and structured data.
            </p>
          </div>
          <div className="project-toolbar">
            <span className="project-count">
              {String(shown.length).padStart(2, '0')} PROJECTS
            </span>
            <div
              className="filter-group"
              role="group"
              aria-label="Filter projects"
            >
              {['All', 'Software', 'Data & analytics'].map(item => (
                <button
                  key={item}
                  type="button"
                  className={
                    filter === item ? 'filter-button active' : 'filter-button'
                  }
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="project-list">
            {shown.map((p, i) => (
              <article className="project-row" key={p.name}>
                <div className="project-mark" aria-hidden="true">
                  <span>{p.mark}</span>
                  <span className="mark-corner">↗</span>
                </div>
                <div className="project-main">
                  <div className="project-meta">
                    <span>{p.category}</span>
                    <span>{p.year}</span>
                  </div>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tag-list">
                    {p.stack.map(tag => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
                <a
                  className="project-link"
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={'View ' + p.name + ' on GitHub'}
                >
                  <ArrowUpRight size={20} />
                </a>
                <span className="project-number">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </article>
            ))}
          </div>
          <div className="work-footer">
            <span>More work is in progress.</span>
            <a
              className="inline-link"
              href="https://github.com/Bentiger255"
              target="_blank"
              rel="noreferrer"
            >
              See all repositories <ArrowRight size={16} />
            </a>
          </div>
        </section>
        <section className="expertise-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading expertise-heading">
              <div>
                <p className="eyebrow section-label">03 / AREAS OF FOCUS</p>
                <h2>
                  What I’m <em>building.</em>
                </h2>
              </div>
              <p className="section-intro">
                A growing toolkit grounded in fundamentals, hands-on practice
                and a focus on useful outcomes.
              </p>
            </div>
            <div className="expertise-grid">
              {skills.map(([n, title, desc, tools]) => (
                <article className="expertise-item" key={n}>
                  <div className="expertise-number">{n}</div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="expertise-tools">{tools}</div>
                </article>
              ))}
            </div>
            <div className="toolkit-line">
              <span>ALSO WORKING WITH</span>
              <div>
                SQL & relational databases <i /> Git & GitHub <i /> Web
                application development <i /> Technical documentation
              </div>
            </div>
          </div>
        </section>
        <section className="background-section section-wrap" id="experience">
          <div className="section-heading">
            <div>
              <p className="eyebrow section-label">04 / BACKGROUND</p>
              <h2>
                Learning by <em>doing.</em>
              </h2>
            </div>
            <p className="section-intro">
              My academic foundation is strengthened by practical exposure to
              real data and public-sector workflows.
            </p>
          </div>
          <div className="timeline">
            <article className="timeline-row">
              <div className="timeline-date">
                2024 — 2027 <span>EXPECTED</span>
              </div>
              <div className="timeline-body">
                <p className="timeline-type">EDUCATION</p>
                <h3>Bachelor’s Degree in Data Science</h3>
                <p className="timeline-place">
                  Eastern Africa Statistical Training Centre (EASTC)
                </p>
                <p>
                  Building a foundation in statistics, programming, data
                  management, data mining and analytical methods.
                </p>
              </div>
            </article>
            <article className="timeline-row">
              <div className="timeline-date">
                AUG — SEP 2026 <span>FIELD PRACTICAL</span>
              </div>
              <div className="timeline-body">
                <p className="timeline-type">PRACTICAL EXPERIENCE</p>
                <h3>Kinondoni Municipal Council</h3>
                <p className="timeline-place">
                  ICT Department · Dar es Salaam, Tanzania
                </p>
                <p>
                  Participated in National Housing Addressing updates using the
                  NAPA system, including address details and GPS coordinates.
                  Also used SQL to extract municipal revenue data for analysis
                  in Excel.
                </p>
              </div>
            </article>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="section-wrap contact-grid">
            <div>
              <p className="eyebrow section-label">05 / CONTACT</p>
              <h2>
                Have a thoughtful
                <br />
                problem to <em>solve?</em>
              </h2>
            </div>
            <div className="contact-copy">
              <p>
                I’m interested in opportunities to learn, contribute to
                data-focused teams and collaborate on useful technology. If my
                work aligns with what you’re building, I’d be glad to hear from
                you.
              </p>
              <a
                className="button button-light"
                href="mailto:bentiger255@gmail.com?subject=Portfolio%20enquiry"
              >
                Start a conversation <ArrowUpRight size={17} />
              </a>
              <div className="contact-details">
                <a href="mailto:bentiger255@gmail.com">
                  <Mail size={16} /> bentiger255@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} /> LinkedIn
                </a>
                <a
                  href="https://github.com/Bentiger255"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={16} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-symbol">B.</span>
            <span>BENJAMIN MBEGA</span>
          </a>
          <p>Data science, with purpose.</p>
          <div className="footer-links">
            <a href="./privacy.html">Privacy</a>
            <a href="./terms.html">Terms</a>
            <a href="#home">Back to top ↑</a>
          </div>
          <span className="copyright">
            © {new Date().getFullYear()} Benjamin George Mbega
          </span>
        </div>
      </footer>
    </div>
  );
}
export default App;
