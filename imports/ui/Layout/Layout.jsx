import React from 'react';
/*
Switch est un composant englobant les différentes routes et gérant le routing, Route est un composant qui contient
et passe plusieurs informations sur le routing (ex: url, composant à monter, parametres dde l'url , ... )
*/
import { Switch, Route, withRouter } from 'react-router-dom';
//Permet l'accès à redux
import { connect } from 'react-redux';
//Différents du layout
import Header from './Header.jsx';
import {NotFound, Page, Veil} from './styled.jsx';
import Head from './Head.jsx';
//Composants à construire dans les routes
import Home from '/imports/ui/Pages/Home/Home.jsx';
//formulaires de parametrage
import ParamsForm from '/imports/ui/Forms/ParamsForm/ParamsForm.jsx';

//Par défaut, renvoie le composant NotFound, similaire à une erreur 404.
const Root = (props) => (
  <div id='base'>
    <Head />
      <Page>
        {!props.isParamsOpen ? null :
          <Veil>
            <ParamsForm />
          </Veil>
        }
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route default render={()=>(<NotFound>Aucune donnée connue pour cette url.</NotFound>)} />
        </Switch>
        <footer>
          Application démo développée par Simon Mulquin
        </footer>
      </Page>
  </div>
);

//Donne accès au store redux et aux actions à Root
const mapStateToProps = store => ({
  isParamsOpen: store.isParamsOpen
});

const mapDispatchToProps = dispatch => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Root));
