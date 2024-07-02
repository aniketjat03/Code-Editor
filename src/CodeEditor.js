import React, { useState } from 'react';
import { Prism } from 'prism-react-renderer';
import './prism.css';

// Add the necessary language support
(typeof global !== 'undefined' ? global : window).Prism = Prism;
require('prismjs/components/prism-jsx');

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  return (
    <div style={{ position: 'relative', fontFamily: 'monospace', fontSize: '14px' }}>
      <textarea
        value={code}
        onChange={handleChange}
        spellCheck="false"
        style={{
          position: 'absolute',
          top: 0,
          left: '25%',
          width: '50%',
          height: '200px',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          padding: '10px',
          border: '1px solid black',
          borderRadius: '5px',
          outline: 'none',
          background: 'transparent',
          color: 'transparent',
          caretColor: 'black',
          zIndex: 1,
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
        }}
      />
      <pre
        aria-hidden="true"
        style={{
          margin: 0,
          position: 'absolute',
          top: 0,
          left: '25%',
          width: '50%',
          height: '200px',
          padding: '10px',
          //paddingTop: '10px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          backgroundColor: 'transparent', // Ensuring no background color
        }}
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(code, Prism.languages.jsx, 'jsx'),
        }}
      />
    </div>
  );
};

export default CodeEditor;
