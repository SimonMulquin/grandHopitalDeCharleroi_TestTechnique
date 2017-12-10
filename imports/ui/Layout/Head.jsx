import React from 'react';
//Permet d'écrire le head de l'application React
import Helmet from 'react-helmet';
//head
const Head = () => (
  <Helmet
    meta={[
      { property: 'og:type', content: "website" },
      { property: 'og:site_name', content: "Simon Mulquin - Test technique" },
      { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
    ]}>
    <title>Simon Mulquin - Test technique</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:300|Roboto+Slab|Source+Sans+Pro:400,700" rel="stylesheet"/>
  </Helmet>
);

export default Head;
