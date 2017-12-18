import React from 'react';

import styled from 'styled-components';

import { Link } from 'react-router-dom';

//404

const NotFound = styled.main`
  display: block;
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  padding: 35vh 0 0 0;
  margin: 0;
  text-align: center;
  color: #f90a6e;
  font-size: 32px;
  font-weight: 700;
`;

//Header

const StyledHeader = styled.header`
  display: block;
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  padding: 0;
  margin: 0;
  background: white;
  box-shadow: 0 1px 2px 1px rgba(0,0,0,.8);
  z-index: 999;
  overflow: hidden;
  @media all and (max-width: 1280px) {
    height: ${props => props.isMenuOpen ? '100vh' : '60px'};
  }
`;

const MainTitle = styled(Link)`
  display: inline-block;
  position: absolute;
  left: 20px;
  top: 0;
  height: 60px;
  width: 120px;
  padding: 8px 12px;
  margin: 0;
  color: black;
  background: url('/logo.jpg') no-repeat center;
  background-size: contain;
`;

const ParamsButton = styled.button`
  display: block;
  position: absolute;
  left: 140px;
  top: 0;
  height: 60px;
  width: auto;
  color: black;
  font-weight: bold;
  outline: none;
  border: 0;
  padding: 6px;
  margin: 0;
  background: white;
`;

const Menu = styled.nav`
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0 100px 0 140px;
  justify-content: flex-end;
  box-shadow: 0 1px 2px 1px rgba(0,0,0,.8);
  @media all and (max-width: 1280px) {
    flex-direction: column;
    justify-content: flex-start;
    padding: 60px 0 0 0;
    height: auto;
    text-align: center;
  }
`;

const Target = styled.span`
  display: inline-block;
  position: relative;
  width: auto;
  height: 60px;
  line-height: 60px;
  padding: 0 18px;
  margin: 0 30px;
  color: ${props => {switch(props.number){
    case 0:
      return '#2867a7';break;
    case 1:
      return '#4eaeba';break;
    case 2:
      return '#ff70ab';break;
    case 3:
      return '#f90a6e';break;
    default:
      return 'black';
  }}};
  font-weight: 200;
  font-size: 18px;
  @media all and (max-width: 1280px) {
    border-top: black solid 1px;
    margin: 0;
  }
`;

const MenuButton = styled.button`
  display: none;
  position: absolute;
  right: 10px;
  top: 0;
  height: 60px;
  width: 60px;
  padding: 12px;
  margin: 0;
  border: 0;
  background: white;
  @media all and (max-width: 1280px) {
    display: block;
  }
`;

const Icon = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 5px;
  background-color: ${props => props.isMenuOpen ? 'transparent' : '#f90a6e'};
  outline: none;
  transition: .3s;
  &:before {
    content: ' ';
    display: block;
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 5px;
    background-color: #f90a6e;
    ${props => props.isMenuOpen ? `
      transform: translate3d(0, -12px, 0) rotate(45deg) ;
    ` : null}
    transition: .3s;
  }
  &:after {
    content: ' ';
    display: block;
    position: absolute;
    top: -10px;
    width: 100%;
    height: 5px;
    background-color: #f90a6e;
    ${props => props.isMenuOpen ? `
      transform: translate3d(0, 8px, 0) rotate(-45deg) ;
    ` : null}
    transition: .3s;
  }
`;
const Delete = styled.button`
  position: relative;
  display: inline-block;
  background-color: red;
  color: white;
  border-radius: 100%;
  outline: none;
  border: 0;
  line-height: 20px;
  width: 20px;
  text-align: center;
  margin-left: 12px;
`;

//Page

const Page = styled.div`
  display: block;
  position: relative;
  height: auto;
  width: 100%;
  margin: 0;
  padding: 60px 0 0 0;
`;

const Veil = styled.div`
  display: block;
  position: fixed;
  left: 0;
  top: 60px;
  z-index: 999;
  height: 100%;
  width: 100%;
  background-color: rgba(0,0,0,.5);
  padding: 5% 10%;
  margin: 0;
  text-align: center;
  @media all and (max-width: 1280px) {
    padding: 5%;
  }
  @media all and (max-width: 700px) {
    padding: 0;
  }
`;



export {
  NotFound,
  StyledHeader,
  MainTitle,
  Menu,
  ParamsButton,
  Target,
  MenuButton,
  Icon,
  Delete,
  Page,
  Veil
};
