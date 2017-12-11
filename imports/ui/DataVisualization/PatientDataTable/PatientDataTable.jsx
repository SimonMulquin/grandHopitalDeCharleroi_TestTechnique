import React from 'react';
//Composants stylisés
import components from './styled.js';
//Nécéssaire pour formatter la date de naissance
import moment from 'moment';

const { Listed, Row, Name, Cat, Cell } = components;

//affiche le tableau avec toutes les infos dans la forme correcte. Number indique au composant un numéro (0,1,2 ou 3) utilisé pour choisir la couleur du tableau.
const PatientDataTable = ({number, patient})=>(
  <Listed number={number}>
    <Name>{`${patient.admin.prenom} ${patient.admin.nom}`}</Name>
    <Row><Cell>Date de naissance:</Cell><Cell>{moment(patient.admin.date_de_naissance).format('DD-MM-YYYY')}</Cell></Row>
    <Row><Cell>Genre:</Cell><Cell>{patient.admin.Genre}</Cell></Row>
    <Row><Cell>ID:</Cell><Cell>{patient.id}</Cell></Row>
    <Cat>Biométrie</Cat>
    <Row><Cell>Poids:</Cell><Cell>{patient.biometrie.poids}Kg</Cell></Row>
    <Row><Cell>Taille:</Cell><Cell>{patient.biometrie.taille}cm</Cell></Row>
    <Cat>Constantes biologiques</Cat>
    <Row><Cell>HbA1c:</Cell><Cell>{patient.const_biologique.HbA1c}</Cell></Row>
    <Row><Cell>Cholesterol total:</Cell><Cell>{patient.const_biologique.Cholesterol_total}mg/dl</Cell></Row>
    <Row><Cell>Cholesterol HDL:</Cell><Cell>{patient.const_biologique.Cholesterol_HDL}mg/dl</Cell></Row>
    <Cat>Paramètres</Cat>
    <Row><Cell>PSS:</Cell><Cell>{patient.parametres.PSS}mmHg</Cell></Row>
    <Cat>Assuétudes</Cat>
    <Row><Cell>Conso. tabagique:</Cell><Cell>{patient.assuetudes.Consommation_tabagique}</Cell></Row>
  </Listed>
);

export default PatientDataTable;
