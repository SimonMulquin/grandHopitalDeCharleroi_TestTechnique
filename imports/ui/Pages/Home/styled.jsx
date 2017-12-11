import React from 'react';

import styled from 'styled-components';

const homeComponents = {
  Page: styled.main`
    display: block;
    position: relative;
    width: 100vw;
    height: auto;
  `,
  List: styled.ul`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 16px 0 0;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  `,
  Listed: styled.li`
    display: inline-block;
    position: relative;
    width: 23%;
    height: auto;
    padding: 0;
    margin: 1%;
    border-radius: 10px;
    box-shadow: 0 1px 2px 1px rgba(0,0,0, .6);
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
  Row: styled.div`
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    border-top: 1px solid black;
    background: rgba(255,255,255,.3);
  `,
  Name: styled.h3`
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: center;
    line-height: 1.6em;
  `,
  Cat: styled.h4`
    display: block;
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    border-top: 1px solid black;
    text-align: center;
    line-height: 1.6em;
  `,
  Cell: styled.span`
    display: inline-block;
    position: relative;
    width: 50%;
    height: auto;
    padding: 0 8px;
    line-height: 1.6em;
    &:nth-child(2){
      border-left: 1px solid black;
    }
  `,
};

export default homeComponents;
