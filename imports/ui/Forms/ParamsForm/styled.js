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
  background-color: grey;
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
  background-color: ${props=> props.active ? '#2867a7' : '#ff70ab'};
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
  @media all and (max-width: 700px) {
    height: calc(100vh - 100px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
`;
const GraphButton = styled.button`
  display: inline-block;
  position: relative;
  background-color: ${props => props.active ? '#2867a7' : 'rgba(0,0,0,.4)'};
  outline: none;
`;

export {
  Container,
  Heading,
  Toggle,
  Form,
  GraphButton
};
