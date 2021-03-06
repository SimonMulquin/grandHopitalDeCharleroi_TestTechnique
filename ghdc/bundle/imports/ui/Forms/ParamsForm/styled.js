import React from 'react';

import styled, {keyframes} from 'styled-components';

const Container = styled.div`
  display: inline-block;
  position: relative;
  width: 700px;
  height: auto;
  overflow: hidden;
  padding: 0;
  margin: 0 auto;
  background-color: #e6e6e6;
  border: solid white 2px;
  border-radius: 12px;
  @media all and (max-width: 1280px) {
    width: 500px;
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
  background-color: white;
  border: solid #0F3B70 ${props => props.active ? '2px' : '0'};
  box-shadow: 0 1px 2px 1px rgba(0,0,0,.2);
  padding: 6px;
  outline: none;
  margin: 8px;
  border-radius: 6px;
  color: ${props => props.active ? '#0F3B70' : 'black'};
  width: 46%;
  transition: 0.3s;
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
  box-shadow: 0 1px 2px 1px rgba(0,0,0,.2);
  border-radius: 6px;
  background-color: #fff;
`;
const SearchParamsForm = styled.form`
  display: block;
  position: relative;
  padding: 10px;
  margin: 0;
  width: 100%;
  height: auto;
`;
const SearchParamsContainer = styled.div`
  dispaly: block;
  position: relative;
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;
  border-bottom: solid black 1px;
  text-align: left;
`;
const SubmitButton = styled.button`
  display: inline-block;
  position: relative;
  width: auto;
  line-height: 40px;
  padding: 0 12px;
  margin: 6px;
  background-color: #fff;
  box-shadow: 0 1px 2px 1px rgba(0,0,0,.2);
  color: #0F3B70;
  font-weight: 700;
  font-size: 14px;
  border-radius: 6px;
  outline: none;
  border: #0F3B70 solid 1px;
  vertical-align: bottom;
`;

const resetAnimation = keyframes`
  0% {transform: rotate(0);}
  100% {transform: rotate(-360deg);}
`;
const ResetButton = styled.button`
  display: inline-block;
  position: relative;
  height: 40px;
  width: 40px;
  background: transparent url(/reset.png) no-repeat center;
  background-size: cover;
  padding: 8px;
  margin: 6px;
  border: 0;
  outline: none;
  vertical-align: bottom;
  transition: .3s;
  &:active {
    animation: ${resetAnimation} .5s linear;
  }
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
