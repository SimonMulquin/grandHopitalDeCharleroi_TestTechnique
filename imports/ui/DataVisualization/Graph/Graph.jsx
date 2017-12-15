import React from 'react';
//Composants stylisés
import components from './styled.js';
//Permet l'accès à redux
import { connect } from 'react-redux';

const { Container, Background, Title, XY, Unit, Level, Bars, Bar, ID, X } = components;

const levels = [1,2,3,4,5,6,7,8,9,10];

const Graph = ({toEval: {title, order, unit}, items, graphsToShow })=>{ if(_.some(graphsToShow, (graph)=>{if (graph.name === title) { return graph.toShow; }})) { return (
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
            <Bar title={`${item.value}${unit}`} key={index} number={index} height={`${item.value/order*26}px`}>
              <ID title={item.name}>{item.id}</ID>
            </Bar>
          ))}
        </Bars>
        <X>IDs:</X>
      </XY>
    </Background>
  </Container> )} else { return (<span></span>)}
};

const mapStateToProps = store => ({
  graphsToShow: store.graphsToShow
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
