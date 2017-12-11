import React from 'react';

import styled from 'styled-components';

const components = {
  Container: styled.li`
    display: inline-block;
    position: relative;
    width: 50%;
    height: auto;
    padding: 16px;
    margin: 0;
    text-align: center;
  `,
  Background: styled.div`
    dislay: inline-block;
    position: relative;
    width: 350px;
    height: 390px;
    padding: 0 0 30px 30px;
    margin: 0 auto;
    background-color: rgba(0,0,0,.2);
  `,
  Title: styled.h4`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 0 20px 0;
    margin: 0;
    text-decoration: underline;
    line-height: 1.7em;
  `,
  XY: styled.div`
    display: inline-block;
    position: relative;
    width: 280px;
    height: 280px;
    padding: 0;
    margin: 0 auto;
    border-left: solid black 1px;
    border-bottom: solid black 1px;
    text-align: left;
  `,
  Bars: styled.div`
    display: block;
    position:absolute;
    height: auto;
    width: auto;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
  `,
  Bar: styled.div`
    display: inline-block;
    position: relative;
    vertical-align: bottom;
    width: 40px;
    height: ${props => props.height};
    padding: 0;
    bottom: 0;
    margin: 0 0 0 20px;
    background-color: ${props => {switch(props.number){
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
  `
};

export default components;
