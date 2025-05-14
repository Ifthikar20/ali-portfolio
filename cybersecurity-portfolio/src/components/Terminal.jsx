// File: src/components/Terminal.jsx
import React, { useEffect, useState, useRef } from 'react';

function Terminal() {
  const [lines, setLines] = useState([
    { content: 'launch_portfolio.sh', type: 'command', visible: true, typing: true },
    { content: 'Initializing secure connection...', type: 'text', visible: false },
    { content: 'Running security protocols...', type: 'text', visible: false },
    { content: 'Welcome to my portfolio', type: 'text', visible: false },
    { content: '_', type: 'cursor', visible: false }
  ]);

  const typingTimerRef = useRef(null);
  const currentLineRef = useRef(0);
  const currentCharRef = useRef(0);
  
  useEffect(() => {
    const typeNextChar = () => {
      const currentLine = lines[currentLineRef.current];
      if (!currentLine || currentLine.type !== 'command') {
        clearTimeout(typingTimerRef.current);
        setTimeout(showNextLine, 500);
        return;
      }
      
      const text = currentLine.content;
      if (currentCharRef.current < text.length) {
        setLines(prevLines => {
          const newLines = [...prevLines];
          newLines[currentLineRef.current] = {
            ...newLines[currentLineRef.current],
            displayContent: text.substring(0, currentCharRef.current + 1)
          };
          return newLines;
        });
        currentCharRef.current++;
        typingTimerRef.current = setTimeout(typeNextChar, 50 + Math.random() * 50);
      } else {
        clearTimeout(typingTimerRef.current);
        setTimeout(showNextLine, 500);
      }
    };
    
    const showNextLine = () => {
      currentLineRef.current++;
      if (currentLineRef.current < lines.length) {
        setLines(prevLines => {
          const newLines = [...prevLines];
          newLines[currentLineRef.current] = {
            ...newLines[currentLineRef.current],
            visible: true
          };
          return newLines;
        });
        
        if (lines[currentLineRef.current].type === 'command') {
          currentCharRef.current = 0;
          typingTimerRef.current = setTimeout(typeNextChar, 300);
        } else {
          setTimeout(showNextLine, 300);
        }
      }
    };
    
    // Start typing
    typingTimerRef.current = setTimeout(typeNextChar, 500);
    
    return () => {
      clearTimeout(typingTimerRef.current);
    };
  }, [lines]);

  return (
    <div className="terminal">
      <div className="terminal-header">
        <div className="terminal-button"></div>
        <div className="terminal-button"></div>
        <div className="terminal-button"></div>
      </div>
      <div className="terminal-body">
        <div className="line">
          <span className="prompt">$</span> 
          <span className="command">{lines[0].displayContent || ''}</span>
        </div>
        {lines[1].visible && <div className="line">{lines[1].content}</div>}
        {lines[2].visible && <div className="line">{lines[2].content}</div>}
        {lines[3].visible && <div className="line">{lines[3].content}</div>}
        {lines[4].visible && (
          <div className="line">
            <span className="prompt">$</span> 
            <span className="command blink">_</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Terminal;