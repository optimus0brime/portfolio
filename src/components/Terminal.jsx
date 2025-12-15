import { useState, useEffect } from 'react';

export default function Terminal({ command }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= command.length) {
        setDisplayText(command.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [command]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <span className="terminal-dot"></span>
        <span className="terminal-dot"></span>
        <span className="terminal-dot"></span>
      </div>
      <div className="terminal-body">
        <span className="terminal-prompt">$ </span>
        <span className="terminal-text">{displayText}</span>
        <span className={`terminal-cursor ${showCursor ? 'visible' : ''}`}>█</span>
      </div>
    </div>
  );
}
