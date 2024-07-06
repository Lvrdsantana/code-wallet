
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FragmentsPage from './components/FragmentsPage';
import FragmentForm from './components/FragmentForm';
import CodeModal from './components/CodeModal';
import InfoPage from './components/InfoPage';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

const App = () => {
  const [fragments, setFragments] = useState([]);
  const [selectedFragment, setSelectedFragment] = useState(null);

  // Charger les fragments depuis localStorage au montage de l'application
  useEffect(() => {
    const storedFragments = JSON.parse(localStorage.getItem('fragments')) || [];
    setFragments(storedFragments);
  }, []);

  // Sauvegarder les fragments dans localStorage après toute modification
  useEffect(() => {
    localStorage.setItem('fragments', JSON.stringify(fragments));
  }, [fragments]);

  return (
    <Router>
      <div className="container">
        <DarkModeToggle />
        <Switch>
          <Route exact path="/">
            <FragmentsPage
              fragments={fragments}
              setFragments={setFragments}
              setSelectedFragment={setSelectedFragment} // Assure-toi de passer setSelectedFragment ici
            />
          </Route>
          <Route path="/form">
            <FragmentForm
              fragments={fragments}
              setFragments={setFragments}
              selectedFragment={selectedFragment} // Assure-toi que selectedFragment est passé ici si nécessaire
            />
          </Route>
          <Route path="/view">
            <CodeModal
              selectedFragment={selectedFragment} // Assure-toi que selectedFragment est passé ici si nécessaire
            />
          </Route>
          <Route path="/info">
            <InfoPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
