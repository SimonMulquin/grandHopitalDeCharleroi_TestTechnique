import React from 'react';
//Composants stylisés
import components from './styled.js';

const { Container, Background, Title, XY, Bars, Bar } = components;

//affiche le tableau avec toutes les infos dans la forme correcte. Number indique au composant un numéro (0,1,2 ou 3) utilisé pour choisir la couleur du tableau.
const Graph = ({toEval: {title, order, unit}, patientsValues})=>(
  <Container>
    <Background>
      <Title>{title}</Title>
      <XY>
        <Bars>
          {patientsValues.map((value, index)=>(
            <Bar number={index} height={`${value}px`}/>
          ))}
        </Bars>
      </XY>
    </Background>
  </Container>
);

export default Graph;
