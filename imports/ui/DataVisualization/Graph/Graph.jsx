import React from 'react';
//Composants stylisés
import components from './styled.js';

const { Container, Background, Title, XY, Unit, Level, Bars, Bar, ID, X } = components;

const levels = [1,2,3,4,5,6,7,8,9,10];

const Graph = ({toEval: {title, order, unit}, items})=>(
  <Container>
    <Background>
      <Title>{title}</Title>
      <XY>
        {levels.map((level, index)=>(
          <Level key={index} position={`${level*26}px`}>{order*level}</Level>
        ))}
        <Unit>{unit}</Unit>
        <Bars>
          {items.map((item, index)=>(
            <Bar title={`${item.value}+${unit}`} key={index} number={index} height={`${item.value/order*26}px`}>
              <ID title={item.name}>{item.id}</ID>
            </Bar>
          ))}
        </Bars>
        <X>IDs:</X>
      </XY>
    </Background>
  </Container>
);

export default Graph;
