import React from 'react';
import { useHistory } from 'react-router-dom';
import './InfoPage.css'
const InfoPage = () => {
  const history = useHistory();

  return (
    <div>
      <h1>Info</h1>
      <p>1. Les fonctionnalités
CodeWallet est une application destinée à faciliter la gestion et l'organisation de vos extraits de code. Voici quelques fonctionnalités clés :
<br /><br /><br /><br />
Gestion des extraits de code : Ajoutez, modifiez et supprimez facilement vos extraits de code.
Mode sombre : Fonctionnalité permettant de basculer entre le mode clair et le mode sombre pour une meilleure expérience visuelle.
Stockage local : Utilisation de localStorage pour stocker les extraits de code localement.
Navigation intuitive : Interface utilisateur conviviale avec une navigation claire entre les pages.
2. Infos sur les développeurs
Développeur principal : Aboya Cyril
<br /><br /><br />
Formation : Troisième année d'études en développement informatique.
Compétences : Maîtrise de React, Electron, et gestion des données locales avec localStorage.
Expérience : Développement complet de l'application CodeWallet, y compris la conception, l'implémentation et le déploiement.
3. Info sur le cadre légal de gestion des données de l’application
Cadre légal de gestion des données :
<br /><br /><br />
Protection des données : Respect des normes de protection des données personnelles telles que GDPR (General Data Protection Regulation) pour les utilisateurs européens.
Collecte et utilisation des données : Les données des utilisateurs, telles que les extraits de code, sont stockées localement uniquement sur l'appareil de l'utilisateur à l'aide de localStorage. Aucune donnée n'est collectée ou stockée sur des serveurs distants.
Transparence : L'application informe clairement les utilisateurs sur la manière dont leurs données sont gérées et utilisées, conformément aux politiques de confidentialité incluses dans l'application.
Ces informations devr</p>
      <button onClick={() => history.push('/')}>Back</button>
    </div>
  );
};

export default InfoPage;
