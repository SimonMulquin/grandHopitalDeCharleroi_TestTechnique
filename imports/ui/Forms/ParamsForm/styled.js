import React from 'react';

import styled from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 700px;
  height: auto;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
  background-color: #c7c7c7;
  border: solid white 2px;
  border-radius: 12px;
  @media all and (max-width: 1280px) {
    width: 500px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  @media all and (max-width: 700px) {
    width: 100%;
    border-radius: 0;
    border: 0;
    height: 100%;
  }
`;
const Heading = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border-bottom: white 2px solid;
`;
const Toggle = styled.button`
  display: inline-block;
  position: relative;
  width: 50%;
  height: auto;
  line-height: 40px;
  font-weight: bold;
  background-color: ${props=> props.active ? '#2867a7' : 'rgba(0,0,0,.4)'};
  outline: none;
  border: 0;
  text-decoration: ${props=> props.active ? 'underline' : 'none'};
`;
const Form = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 500px;
  padding: 0;
  margin: 0;
  overflow-x: hidden;
  overflow-y: scroll;
  @media all and (max-width: 700px) {
    height: calc(100vh - 100px);
  }
`;
const GraphsList = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: auto;
  padding: 10px 7%;
  margin: 0;
`;
const GraphButton = styled.button`
  display: inline-block;
  position: relative;
  background-color: ${props => props.active ? '#6995c2' : 'rgba(0,0,0,.4)'};
  outline: none;
  margin: 8px;
`;

const PatientsToAdd = styled.div`
  display: block;
  position: relative;
  padding: 10px;
  margin: 0;
  width: 100%;
  height: auto;
`;

const AddPatient = styled.button`
  display: ${props => props.active ? 'none' : 'inline-block'};
  position: relative;
  width: auto;
  height: auto;
  padding: 6px;
  margin: 6px;
`;
const SearchParamsForm = styled.form`

`;
const SearchParamsContainer = styled.div`
  border-bottom: solid black 1px;
`;
const SubmitButton = styled.button`

`;
const ResetButton = styled.button`

`;

export {
  Container,
  Heading,
  Toggle,
  Form,
  GraphsList,
  GraphButton,
  PatientsToAdd,
  AddPatient,
  SearchParamsForm,
  SearchParamsContainer,
  SubmitButton,
  ResetButton
};
