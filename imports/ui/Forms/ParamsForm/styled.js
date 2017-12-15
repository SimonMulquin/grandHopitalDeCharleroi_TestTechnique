import React from 'react';

import styled from 'styled-components';

const components = {
  Container: styled.div`
    display: inline-block;
    position: relative;
    width: 700px;
    height: 450px;
    overflow: hidden;
    padding: 0;
    margin: 0 auto;
    background-color: grey;
    border: solid white 2px;
    border-radius: 12px;
    @media all and (max-width: 1280px) {
      500px;
    }
    @media all and (max-width: 700px) {
      width: 100%;
    }
  `,
  Heading: styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
    border-bottom: white 2px solid;
  `,
  Toggle: styled.button`
    display: inline-block;
    position: relative;
    width: 50%;
    height: auto;
    line-height: 2em;
    font-weight: bold;
    background-color: ${props=> props.active ? '#2867a7' : '#ff70ab'};
    outline: none;
    border: 0;
    text-decoration: ${props=> props.active ? 'underline' : 'none'};
  `,
};

export default components;
