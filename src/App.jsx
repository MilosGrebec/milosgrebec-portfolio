import portrait from './assets/milos-grebec.webp'
import angelus from './assets/angelus.webp'

const email = 'grebecmilos0@gmail.com'
const github = 'https://github.com/MilosGrebec'
const linkedIn = 'https://www.linkedin.com/in/milo%C5%A1-grebec-0117862a6/'
const cv = '/Milos_Grebec_CV.pdf'

const earlierProjects = [
  { name: 'Bible Quotes', description: 'Mobile app with a different Bible verse each day.', stack: 'React Native', repo: 'Bible-Quotes' },
]

function Arrow({ direction = 'external' }) {
  const paths = {
    external: 'M5 13 13 5M6 5h7v7',
    down: 'M9 3v11m-4-4 4 4 4-4',
    right: 'M3 9h11m-4-4 4 4-4 4',
  }

  return (
    <svg className="arrow" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d={paths[direction]} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Stack({ technologies }) {
  return (
    <ul className="stack mono" aria-label="Technologies">
      {technologies.map((technology) => <li key={technology}>{technology}</li>)}
    </ul>
  )
}

function PlatformDiagram() {
  return (
    <figure className="project-art platform-art">
      <figcaption className="art-caption mono"><span>FIG. 01</span><span>Application architecture</span></figcaption>
      <div className="architecture" role="img" aria-label="A React interface connects to a Laravel API backed by MySQL. A JavaScript bridge connects the application to EVM contracts.">
        <div className="flow">
          <div className="node"><span>React</span><small>Interface</small></div>
          <span className="connector" />
          <div className="node node-core"><span>Laravel</span><small>REST API</small></div>
          <span className="connector" />
          <div className="node"><span>MySQL</span><small>Data</small></div>
        </div>
        <div className="bridge">
          <div className="node"><span>JavaScript</span><small>Bridge</small></div>
          <span className="connector vertical" />
          <div className="node"><span>EVM</span><small>Contracts</small></div>
        </div>
      </div>
    </figure>
  )
}

function AngelusDiagram() {
  return (
    <figure className="project-art angelus-art">
      <figcaption className="art-caption mono"><span>FIG. 02</span><span>Object detection workflow</span></figcaption>
      <div className="angelus-visual">
        <img src={angelus} alt="Original Angelus logo" width="440" height="351" loading="lazy" />
      </div>
      <ol className="workflow mono">
        <li><span>01</span> Label</li>
        <li><span>02</span> Train</li>
        <li><span>03</span> Test</li>
      </ol>
    </figure>
  )
}

function Work() {
  return (
    <section id="work" className="section shell" aria-labelledby="work-title">
      <div className="section-heading">
        <p className="section-index mono"><span>01</span> / Work</p>
        <h2 id="work-title">Selected work</h2>
      </div>

      <article className="project">
        <div className="project-copy">
          <p className="project-label mono">Client work <span>·</span> 2025–2026</p>
          <h3>B2B software platform</h3>
          <p className="project-intro">I worked on a European B2B platform, from React admin tools and Laravel APIs to account security and releases.</p>
          <Stack technologies={['React', 'TypeScript', 'Laravel', 'MySQL', 'Docker']} />
          <details className="project-details">
            <summary>What I worked on <Arrow direction="down" /></summary>
            <ul>
              <li>Admin workflows and REST endpoints with role-based permissions.</li>
              <li>Authenticator app support and authorization checks for sensitive actions.</li>
              <li>Full-text search for published PDFs, with text extraction running in the background.</li>
              <li>EVM smart contract integration through a JavaScript bridge with short-lived authentication tokens.</li>
              <li>Testing, release preparation and Docker deployments on Linux with Nginx.</li>
            </ul>
            <p className="client-note">The client and source code are confidential.</p>
          </details>
        </div>
        <PlatformDiagram />
      </article>

      <article className="project">
        <div className="project-copy">
          <p className="project-label mono">Independent project</p>
          <h3>Angelus 2.0</h3>
          <p className="project-intro">A Python desktop app for training and testing custom object detectors. I built a KivyMD interface for preparing datasets, choosing models and testing trained detectors on a live camera feed.</p>
          <Stack technologies={['Python', 'TensorFlow', 'KivyMD', 'LabelImg']} />
          <a className="text-link" href={github + '/Angelus2.0'}>View Angelus on GitHub <Arrow /></a>
        </div>
        <AngelusDiagram />
      </article>

      <div className="earlier">
        <h3>Earlier projects</h3>
        <ul>
          {earlierProjects.map(({ name, description, stack, repo }) => (
            <li key={repo}>
              <a href={github + '/' + repo}>
                <strong>{name}</strong>
                <span className="earlier-description">{description}</span>
                <span className="earlier-stack mono">{stack}</span>
                <Arrow />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section shell about" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-index mono"><span>02</span> / About</p>
        <h2 id="about-title">A bit about me</h2>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p>I’m a freelance developer from Serbia. I work on web applications that have real business rules behind them, from the forms people use to the permissions and APIs that make those workflows possible.</p>
          <p>I study Applied Software Engineering at the Faculty of Technical Sciences, University of Novi Sad.</p>
          <a className="text-link" href={cv} download>Download CV <Arrow direction="down" /></a>
        </div>
        <dl className="skills">
          <div><dt className="mono">Frontend</dt><dd>React, TypeScript, JavaScript</dd></div>
          <div><dt className="mono">Backend</dt><dd>Laravel, PHP, Node.js, MySQL, Redis</dd></div>
          <div><dt className="mono">Deployment</dt><dd>Docker, Linux, Nginx, Git</dd></div>
          <div><dt className="mono">Also used</dt><dd>Python, TensorFlow, Solidity, C, C#</dd></div>
        </dl>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="shell contact-inner">
        <p className="section-index mono">03 / Contact</p>
        <h2 id="contact-title">Get in touch.</h2>
        <p>Available for remote, project-based freelance work.</p>
        <a className="contact-email" href={'mailto:' + email}>{email} <Arrow /></a>
        <div className="contact-socials">
          <a href={linkedIn}>LinkedIn <Arrow /></a>
          <a href={github}>GitHub <Arrow /></a>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header id="top" className="shell site-header">
        <a className="wordmark" href="#top" aria-label="Miloš Grebec, back to top">MG<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cv mono" href={cv} download>CV <Arrow direction="down" /></a>
      </header>

      <main id="main" tabIndex={-1}>
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="hero-kicker mono"><span className="status-dot" /> Available for freelance projects</p>
            <h1 id="hero-title">Miloš<br />Grebec<span>.</span></h1>
            <p className="hero-role">Freelance full-stack developer</p>
            <p className="hero-intro">I build React interfaces and Laravel APIs for business web applications.</p>
            <div className="hero-actions">
              <a className="button" href="#work">See my work <Arrow direction="down" /></a>
              <a className="text-link" href={'mailto:' + email}>Email me <Arrow /></a>
            </div>
          </div>
          <figure className="portrait">
            <div className="portrait-frame">
              <img src={portrait} alt="Miloš Grebec" width="621" height="960" />
            </div>
            <figcaption className="mono"><span>Based in Serbia</span><span>Remote</span></figcaption>
          </figure>
        </section>

        <div className="shell">
          <div className="primary-stack">
            <span className="mono">Core stack</span>
            <Stack technologies={['React', 'TypeScript', 'Laravel', 'MySQL', 'Docker']} />
          </div>
        </div>
        <Work />
        <About />
        <Contact />
      </main>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <span>© 2026 Miloš Grebec</span>
          <a className="mono" href="#top">Back to top <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </>
  )
}
