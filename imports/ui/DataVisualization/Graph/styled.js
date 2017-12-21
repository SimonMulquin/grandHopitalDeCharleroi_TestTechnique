import React from 'react';

import styled from 'styled-components';

const components = {
  Container: styled.li`
    display: inline-block;
    position: relative;
    width: 23%;
    height: auto;
    padding: 0;
    margin: 1%;
    text-align: center;
    @media all and (max-width: 1280px) {
      width: 48%;
    }
    @media all and (max-width: 700px) {
      width: 98%;
    }
  `,
  Background: styled.div`
    dislay: inline-block;
    position: relative;
    width: 100%;
    height: 393px;
    padding: 0 0 30px 30px;
    margin: 0 auto;
    background-color: #f9f9f9;
    overflow: hidden;
    box-shadow: 0 1px 2px 1px rgba(0,0,0,.2);
    border-radius: 12px;
  `,
  Title: styled.h4`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 0 40px 0;
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
  Unit: styled.span`
    display: block;
    position: absolute;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    left: -11%;
    top: -26px;
    color: grey;
  `,
  Level: styled.span`
    display: block;
    position: absolute;
    width: 111%;
    height: auto;
    left: -11%;
    bottom: ${props => props.position};
    padding: 0;
    margin: 0;
    border-bottom: grey solid 1px;
    color: grey;
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
  `,
  ID: styled.span`
    display: block;
    position: absolute;
    width: 40px;
    height: 28px;
    padding: 0;
    margin: 0;
    text-align: center;
    top: 100%;
  `,
  X: styled.span`
    display: block;
    position: absolute;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    top: 100%;
    left: -11%;
  `
};

export default components;
