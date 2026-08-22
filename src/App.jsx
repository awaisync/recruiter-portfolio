import React, { useEffect, useMemo, useState } from "react";

const experience = [
  {
    dates: "Apr 2023 - Sep 2024",
    location: "Islamabad, Pakistan",
    company: "IMARAT",
    title: "Software Engineer II",
    highlights: [
      "Built cross-platform mobile apps with React Native, TypeScript, and Redux.",
      "Developed REST APIs with Java and Spring Boot; integrated AWS, Google Maps, and third-party APIs.",
      "Supported CI/CD, cloud deployment, releases, production support, and Agile delivery.",
    ],
  },
  {
    dates: "Jul 2019 - Mar 2023",
    location: "Pakistan",
    company: "Hospicare Systems",
    title: "Field Service Engineer",
    highlights: [
      "Installed, commissioned, and maintained 50+ automated diagnostic instruments across hospital laboratories.",
      "Diagnosed electro-mechanical, electronic, firmware, pneumatic, and network faults.",
      "Integrated instruments with LIS/HIS using HL7/ASTM and delivered application training and customer support.",
    ],
    logos: [
      { src: "/brands/abbott.png", alt: "Abbott" },
      { src: "/brands/grifols.png", alt: "Grifols" },
    ],
  },
  {
    dates: "Jul 2018 - Jun 2019",
    location: "Pakistan",
    company: "EmbedTek Solutions",
    title: "Embedded Software Engineer",
    highlights: [
      "Built IoT systems with STM32, Raspberry Pi, and Arduino.",
      "Developed C/C++ firmware, low-level drivers, real-time control logic, and wireless connectivity.",
      "Profiled device power with Joulescope, X-NUCLEO-LPM01A, and STM32CubeMonitor-Power.",
    ],
  },
];

const skillGroups = [
  { category: "Software", title: "Software Engineering", skills: "Java, Spring Boot, React Native, TypeScript, REST APIs, CI/CD, Git, JIRA" },
  { category: "Embedded", title: "Embedded & IoT", skills: "STM32, C/C++, Raspberry Pi, Arduino, low-power IoT, hardware debugging" },
  { category: "Embedded", title: "Wireless & Protocols", skills: "LoRaWAN, BLE, Wi-Fi, Zigbee, Sigfox, NB-IoT, TCP/IP, Modbus, SPI, I²C, UART" },
  { category: "Data", title: "Data & AI/ML", skills: "Python, Pandas, NumPy, Scikit-learn, PyTorch, Jupyter Notebook, data engineering" },
  { category: "Service", title: "Diagnostics & Service", skills: "Installation, commissioning, preventive maintenance, calibration, HL7/ASTM, LIS/HIS" },
  { category: "Embedded", title: "Engineering Tools", skills: "STM32Cube tools, Joulescope UI, Xilinx Vivado, MATLAB, Proteus, LTspice" },
];

const education = [
  {
    period: "2025 - 2026",
    degree: "Master of Science - Electronics and ICT Engineering",
    institution: "University of Antwerp, Belgium",
    icon: "/brands/uantwerp.svg",
    details: "Great Distinction · Specialisation in IoT, low-power wireless communication, and embedded systems.",
    thesis: "Weather Impacts on Public Transport - data-engineering and machine-learning pipelines for next-hour station ridership forecasting.",
  },
  {
    period: "2014 - 2018",
    degree: "Bachelor of Electrical Engineering (Power)",
    institution: "Air University, Pakistan",
    details: "Four-year degree covering power systems, power electronics, control, industrial automation, and embedded systems.",
    thesis: "ESP32 WiFi Home Automation and Power Usage Metering System using ATmega2560.",
  },
];

const selectedWork = [
  {
    image: "/work/hospicare-m2000.jpg",
    alt: "Awais Ibrahim beside an Abbott m2000 molecular diagnostics system.",
    category: "Field service engineering",
    title: "Molecular diagnostics support",
    summary: "Hands-on installation, commissioning, preventive maintenance, and technical support for automated molecular diagnostic workflows.",
    tags: ["Abbott m2000", "Commissioning", "Laboratory automation"],
  },
  {
    image: "/work/hospicare-alinity.jpg",
    alt: "Abbott Alinity automated diagnostic instrument in a laboratory.",
    category: "Molecular diagnostics",
    title: "Abbott Alinity m support",
    summary: "Field-service and application support for Alinity m, an integrated molecular diagnostics analyser designed for random-access PCR testing, STAT prioritisation, streamlined workflows, and high-throughput routine testing.",
    tags: ["Alinity m", "PCR workflows", "Random access", "Service delivery"],
  },
  {
    image: "/work/hospicare-panther.jpg",
    alt: "Awais Ibrahim beside a Grifols Procleix Panther system.",
    category: "Donor screening",
    title: "Procleix Panther service",
    summary: "Certified service training and field-support experience for the Procleix Panther system: a compact, fully automated NAT platform for efficient blood and plasma donor screening, with user-friendly software and automated maintenance.",
    tags: ["Grifols", "Procleix Panther", "NAT screening", "Service training"],
  },
  {
    image: "/work/imarat-team.jpeg",
    alt: "Awais Ibrahim receiving Employee of the Month recognition at IMARAT.",
    category: "Employee recognition",
    title: "Employee of the Month at IMARAT",
    summary: "Worked in an Agile engineering environment on mobile and backend products supporting IMARAT’s digital real-estate platforms.",
    tags: ["Product delivery", "Agile", "React Native", "Spring Boot"],
  },
  {
    image: "/work/propsure-dashboard.png",
    alt: "Prop-tech analytics dashboard interface.",
    category: "Product engineering",
    title: "PropSure property verification",
    summary: "Contributed to property-technology delivery around PropSure's land-information ecosystem, including Online Property Verification System workflows that support transparent property verification and informed investment decisions.",
    tags: ["LIMS", "OPVS", "Property data", "API integration"],
  },
  {
    image: "/work/graana-mobile.png",
    alt: "Graana mobile property application interface.",
    category: "Mobile engineering",
    title: "Graana property-search app",
    summary: "Developed and maintained cross-platform features for a property-search experience centred on fast discovery, verified listings, smart filters, project exploration, and direct agent contact.",
    tags: ["React Native", "TypeScript", "Redux", "Verified listings"],
  },
];

function SectionHeading({ number, title }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{number}</p>
      <h2>{title}</h2>
    </div>
  );
}

function useScrollReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [activeSkillFilter, setActiveSkillFilter] = useState("All");
  const [activeWork, setActiveWork] = useState(null);
  const visibleSkills = useMemo(
    () => activeSkillFilter === "All" ? skillGroups : skillGroups.filter((group) => group.category === activeSkillFilter),
    [activeSkillFilter],
  );

  useScrollReveal();

  useEffect(() => {
    if (!activeWork) return undefined;

    const handleEscape = (event) => {
      if (event.key === "Escape") setActiveWork(null);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeWork]);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="Awais Ibrahim home">AI<span>.</span></a>
          <nav aria-label="Primary navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a className="nav-contact" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Electronics & ICT Engineer</p>
              <h1>Awais<br /><em>Ibrahim</em></h1>
              <p className="hero-copy">Embedded systems, low-power IoT, software engineering, data, and field service engineering.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contact">Get in touch</a>
                <a className="button button-secondary" href="#experience">View experience</a>
              </div>
            </div>
            <aside className="hero-aside" aria-label="Professional summary">
              <div className="hero-card">
                <p className="card-label">Based in</p>
                <p className="card-value">Bocholt, Belgium</p>
                <p className="card-label">Focus</p>
                <p className="card-value">Embedded · Software · AI/ML · Field Service</p>
                <div className="hero-education">
                  <img className="hero-university-mark" src="/brands/uantwerp.svg" alt="University of Antwerp" />
                  <div>
                    <p className="card-label">Education</p>
                    <p className="card-value">MSc Electronics & ICT Engineering<br />University of Antwerp</p>
                  </div>
                </div>
              </div>
              <div className="signal-card" aria-hidden="true">
                <span className="signal-core">AI</span>
                <span className="signal-chip chip-one">IoT</span>
                <span className="signal-chip chip-two">Data</span>
                <span className="signal-chip chip-three">Service</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section reveal" id="about">
          <div className="container split-section">
            <p className="section-kicker">01 / About</p>
            <div>
              <h2>Engineering across hardware, software, and data.</h2>
              <p className="lead">Master’s graduate in Electronics and ICT Engineering from the University of Antwerp with experience in embedded IoT systems, diagnostic laboratory automation, and mobile and backend software development.</p>
              <p>I combine practical hardware troubleshooting with C/C++ firmware, Java/Spring Boot APIs, React Native applications, and data-engineering workflows. I enjoy solving real engineering problems from device level to deployment.</p>
            </div>
          </div>
        </section>

        <section className="section section-tint reveal" id="experience">
          <div className="container">
            <SectionHeading number="02 / Experience" title="Professional experience" />
            {experience.map((role) => (
              <article className="experience-card" key={role.company}>
                <div className="experience-meta"><span>{role.dates}</span><span>{role.location}</span></div>
                <div className="experience-content">
                  <p className="company">{role.company}</p>
                  <h3>{role.title}</h3>
                  <ul>{role.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  {role.logos && (
                    <div className="experience-logos" aria-label="Systems supported">
                      <span>Systems supported</span>
                      {role.logos.map((logo) => <img src={logo.src} alt={logo.alt} key={logo.alt} />)}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section work-section reveal" id="work">
          <div className="container">
            <SectionHeading number="03 / Selected work" title="Engineering in the field and in production" />
            <p className="work-intro">A selection of real environments and products across diagnostic laboratory automation and digital property platforms. Select a card for context.</p>
            <div className="work-grid">
              {selectedWork.map((item) => (
                <button className="work-card" key={item.title} type="button" onClick={() => setActiveWork(item)}>
                  <img src={item.image} alt={item.alt} loading="lazy" />
                  <span className="work-card-content">
                    <span className="work-category">{item.category}</span>
                    <strong>{item.title}</strong>
                    <span className="work-open">View context <span aria-hidden="true">↗</span></span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="section reveal" id="skills">
          <div className="container">
            <SectionHeading number="04 / Skills" title="Technical toolkit" />
            <div className="skill-filter" role="group" aria-label="Filter skills by area">
              {["All", "Software", "Embedded", "Data", "Service"].map((filter) => (
                <button
                  className={activeSkillFilter === filter ? "is-active" : ""}
                  key={filter}
                  onClick={() => setActiveSkillFilter(filter)}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>
            <div className="skills-grid">
              {visibleSkills.map((group) => (
                <article className="skill-card" key={group.title} tabIndex="0"><h3>{group.title}</h3><p>{group.skills}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-tint reveal" id="education">
          <div className="container">
            <SectionHeading number="05 / Education" title="Academic background" />
            <div className="education-grid">
              {education.map((item) => (
                <article className="education-card" key={item.degree}>
                  <p className="period">{item.period}</p>
                  <div className="education-heading">
                    {item.icon && <img src={item.icon} alt="University of Antwerp" />}
                    <div>
                      <h3>{item.degree}</h3>
                      <p className="institution">{item.institution}</p>
                    </div>
                  </div>
                  <p>{item.details}</p>
                  <p className="thesis"><strong>Thesis:</strong> <em>{item.thesis}</em></p>
                </article>
              ))}
            </div>
            <article className="research-feature">
              <div>
                <p className="section-kicker">Research internship / M4S Lab</p>
                <h3>Weather impacts on public transport</h3>
                <p>Master's thesis research at M4S Lab — Modelling for Sustainability, University of Antwerp, in collaboration with the Smart Public Transport Lab, TU Delft, Netherlands.</p>
              </div>
              <ul>
                <li>Built a data-engineering pipeline by integrating Washington, D.C. Metrorail demand data with meteorological data.</li>
                <li>Designed supervised machine-learning workflows covering data validation, feature engineering, training, and performance evaluation.</li>
                <li>Evaluated Random Forest models and a spatio-temporal Graph Neural Network for next-hour station-ridership forecasting.</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="section contact-section reveal" id="contact">
          <div className="container contact-grid">
            <div>
              <p className="section-kicker">06 / Contact</p>
              <h2>Let’s discuss your next engineering challenge.</h2>
            </div>
            <div className="contact-links">
              <a href="mailto:awaisibrahim11@gmail.com">awaisibrahim11@gmail.com</a>
              <a href="tel:+32465925322">+32 465 925 322</a>
              <a href="https://www.linkedin.com/in/awais-ibrahim-4710b9213/" target="_blank" rel="noreferrer">LinkedIn profile ↗</a>
            </div>
          </div>
        </section>
      </main>

      {activeWork && (
        <div className="work-dialog-backdrop" role="presentation" onClick={() => setActiveWork(null)}>
          <section className="work-dialog" aria-label={`${activeWork.title} details`} role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
            <button className="work-dialog-close" type="button" onClick={() => setActiveWork(null)} aria-label="Close project details">×</button>
            <img src={activeWork.image} alt={activeWork.alt} />
            <div className="work-dialog-copy">
              <p className="work-category">{activeWork.category}</p>
              <h2>{activeWork.title}</h2>
              <p>{activeWork.summary}</p>
              <div className="work-tags">{activeWork.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </section>
        </div>
      )}

      <footer className="site-footer">
        <div className="container"><span>© {new Date().getFullYear()} Awais Ibrahim</span><span>Electronics & ICT Engineer</span></div>
      </footer>
    </>
  );
}
