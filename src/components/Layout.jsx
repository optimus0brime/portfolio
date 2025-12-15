import { Link } from 'react-router-dom';
import { config } from '../data';

export default function Layout({ children }) {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav-left">
          <Link to="/" className="nav-link">home</Link>
          <Link to="/projects" className="nav-link">projects</Link>
          <Link to="/about" className="nav-link">about</Link>
          <Link to="/blog" className="nav-link">blog</Link>
        </div>
        <div className="nav-right">
          <a href={`mailto:${config.email}`} className="nav-link">contact</a>
        </div>
      </nav>

      {children}

      <footer className="footer">
        <p>
          source: <a href={`https://${config.source}`} target="_blank" rel="noopener noreferrer">{config.source}</a>
        </p>
        <p>© {config.name} {config.year}</p>
      </footer>
    </div>
  );
}
