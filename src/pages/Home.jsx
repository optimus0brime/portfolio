import { config } from '../data';
import Terminal from '../components/Terminal';

export default function Home() {
  return (
    <main className="main">
      <h1 className="tagline">{config.tagline}</h1>

      <div className="avatar-wrapper">
        <img src={config.avatar} alt={config.name} className="avatar" />
      </div>

      <p className="intro">{config.intro}</p>

      <div className="bio">
        {config.bio.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <div className="links">
        {config.links.map((link, i) => (
          <span key={i}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="link">
              {link.name}
            </a>
            {i < config.links.length - 1 && <span className="separator">|</span>}
          </span>
        ))}
      </div>

      <Terminal command={config.terminal.command} />
    </main>
  );
}
