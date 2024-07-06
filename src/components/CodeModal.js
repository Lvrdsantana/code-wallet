
import React from 'react';
import { useHistory } from 'react-router-dom';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import './CodeModal.css'; // Assure-toi d'importer le fichier CSS

const CodeModal = ({ selectedFragment }) => {
  const history = useHistory();

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedFragment.code);
  };

  return (
    <div className="modal">
      <h1>{selectedFragment.title}</h1>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: hljs.highlightAuto(selectedFragment.code).value,
          }}
        ></code>
      </pre>
      <button onClick={handleCopy}>Copy</button>
      <button onClick={() => history.push('/')}>Close</button>
    </div>
  );
};

export default CodeModal;
