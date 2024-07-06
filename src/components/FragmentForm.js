
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './FragmentForm.css'; // Importer le fichier CSS pour FragmentForm

const FragmentForm = ({ fragments, setFragments, selectedFragment }) => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (selectedFragment) {
      setTitle(selectedFragment.title);
      setCode(selectedFragment.code);
    }
  }, [selectedFragment]);

  const handleSave = () => {
    if (selectedFragment) {
      setFragments(
        fragments.map((fragment) =>
          fragment === selectedFragment ? { ...fragment, title, code } : fragment
        )
      );
    } else {
      const newFragments = [...fragments, { title, code }];
      setFragments(newFragments);
    }
    saveFragmentsToLocal([...fragments, { title, code }]);
    history.push('/');
  };

  const handleDelete = () => {
    setFragments(fragments.filter((fragment) => fragment !== selectedFragment));
    saveFragmentsToLocal(fragments.filter((fragment) => fragment !== selectedFragment));
    history.push('/');
  };

  const saveFragmentsToLocal = (fragments) => {
    localStorage.setItem('fragments', JSON.stringify(fragments));
  };

  return (
    <div className="fragment-form-container">
      <h1>{selectedFragment ? 'Edit Fragment' : 'New Fragment'}</h1>
      <form onSubmit={handleSave}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Code:
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={10}
            required
          />
        </label>
        <div className="button-group">
          <button type="submit">{selectedFragment ? 'Update' : 'Save'}</button>
          {selectedFragment && (
            <button type="button" onClick={handleDelete} className="delete-button">
              Delete
            </button>
          )}
          <button type="button" className="cancel" onClick={() => history.push('/') }>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default FragmentForm;
