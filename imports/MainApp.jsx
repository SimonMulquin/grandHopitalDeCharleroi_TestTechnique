import React from 'react';
/*
Librairie propre au router, asymetricSsr permet de recevoir un composant différent à la première requête et de charger
l'application une fois que la communication avec le serveur est assurée.
 */
import { getStore, asymetricSsr } from 'meteor/ssrwpo:ssr';
//Librairies nécéssaires au fonctionnement de graphql
import { ApolloProvider, graphql } from 'react-apollo';
import client from './ApolloClient';
//Doit passer un composant "Root" au provider,
import Root from '/imports/ui/Layout/Layout.jsx';
//Librairie nécéssaire à rendre accessible le store redux
import { connect } from 'react-redux';

//ouvre un client Apollo ( nécéssaire pour accéder aux données des requêtes graphql ) et lui passe notre propre store redux
const ClientSetup = (props) => (
  <ApolloProvider store={getStore()} client={client}>
    <Root />
  </ApolloProvider>
);

//Server side rendering => Contenu initialement chargé par le navigateur, non sensible à la désactivation du javascript
const ServerSim = (props) => (
  <div className='noJs'>
    <div className="noJs_loader">
      <div className="noJs_box"></div>
      <div className="noJs_hill"></div>
    </div>
    <span className='noJs_text'>Chargement de l'application. Veillez à autoriser le javascript dans votre navigateur.</span>
  </div>
);

//Donne accès au store redux et aux actions à ClientSetup
const mapStateToProps = state => ({
});

const mapDispatchToProps = () => ({});

const MainApp = connect(mapStateToProps, mapDispatchToProps)(ClientSetup);



export default asymetricSsr(MainApp, ServerSim);
