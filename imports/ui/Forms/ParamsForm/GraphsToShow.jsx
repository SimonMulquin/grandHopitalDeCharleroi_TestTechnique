import React from 'react';
//Composants stylisés
import { GraphButton, GraphsList } from './styled.js';
//Permet l'accès à redux
import { connect } from 'react-redux';
//valueSet permet d'intéragir avec le store redux
import { valueSet } from 'meteor/ssrwpo:ssr';

const GraphsToShow = ({graphsToShow, toggleGraph})=>(
  <GraphsList>
    {graphsToShow.map((graph, index)=>(
      <GraphButton active={graph.toShow} onClick={()=>(toggleGraph(graphsToShow, graph))} key={index}>{graph.name}</GraphButton>
    ))}
  </GraphsList>
);

const mapStateToProps = store => ({
  graphsToShow: store.graphsToShow
});

//crée une réplique de graphsToShow en inversant la valeur booléene de toShow pour le graph recu en item
const mapDispatchToProps = dispatch => ({
  toggleGraph(graphs, item) {
    dispatch(valueSet('graphsToShow', graphs.map((graph, index)=>{
      if (graph.name != item.name) {
        return graph;
      } else {
        return {name: item.name, toShow: !item.toShow}
      }
    })));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(GraphsToShow);
