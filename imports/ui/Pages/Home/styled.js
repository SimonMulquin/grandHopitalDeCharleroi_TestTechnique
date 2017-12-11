import React from 'react';

import styled from 'styled-components';

const homeComponents = {
  Page: styled.main`
    display: block;
    position: relative;
    width: 100vw;
    height: auto;
  `,
  Container: styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0;
    margin: 0;
  `,
  List: styled.ul`
    display: block;
    position: relative;
    width: 100%;
    height: auto;
    padding: 0 8px;
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  `
};

export default homeComponents;
