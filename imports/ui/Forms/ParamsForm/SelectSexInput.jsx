import React, {Component} from 'react';

import styled from 'styled-components';

const Select = styled.select`
  display: inline-block;
  position: relative;
  width: auto;
  height: auto;
  padding: 4px;
  margin: 6px;
  outline: none;
  width: 206px;
`;

const SelectSexInput = ({ input }) => {
  return (
    <Select {...input} >
      <option value="both">genre</option>
      <option value="Female">Femme</option>
      <option value="Male">Homme</option>
    </Select>
  );
}

export default SelectSexInput;
