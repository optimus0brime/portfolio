import { config } from '../data';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <main className="main page-content">
      <h1 className="page-title">blog</h1>
      
      <div className="blog-list">
        {config.posts.map((post, i) => (
          <Link key={i} to={`/blog/${post.slug}`} className="blog-card">
            <span className="blog-date">{post.date}</span>
            <h2 className="blog-title">{post.title}</h2>
            <p className="blog-excerpt">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
