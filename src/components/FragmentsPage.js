
import React from 'react';
import { useHistory } from 'react-router-dom';
import './FragmentsPage.css'; // Importer le fichier CSS pour FragmentsPage

const FragmentsPage = ({ fragments, setFragments, setSelectedFragment }) => {
  const history = useHistory();

  const handleNewClick = () => {
    setSelectedFragment(null);
    history.push('/form');
  };

  const handleEditClick = (fragment) => {
    setSelectedFragment(fragment);
    history.push('/form');
  };

  const handleViewClick = (fragment) => {
    setSelectedFragment(fragment);
    history.push('/view');
  };

  return (
    <div className="fragments-page-container">
      <h1>Code Wallet</h1>
      <div className="button-group">
        <button onClick={handleNewClick}>New</button>
        <button onClick={() => history.push('/info')}>Info</button>
      </div>
      <ul className="fragment-list">
        {fragments.map((fragment, index) => (
          <li key={index} className="fragment-item">
            <span>{fragment.title}</span>
            <div>
              <button onClick={() => handleEditClick(fragment)}>Edit</button>
              <button onClick={() => handleViewClick(fragment)}>View</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FragmentsPage;
