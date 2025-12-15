import { config } from '../data';

export default function About() {
  return (
    <main className="main page-content">
      <h1 className="page-title">about</h1>
      
      <div className="avatar-wrapper">
        <img src={config.avatar} alt={config.name} className="avatar avatar-large" />
      </div>

      <div className="about-content">
        {config.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="skills-section">
        <h2 className="section-title">skills</h2>
        <div className="skills-list">
          {config.skills.map((skill, i) => (
            <span key={i} className="skill-tag">{skill}</span>
          ))}
        </div>
      </div>
    </main>
  );
}
