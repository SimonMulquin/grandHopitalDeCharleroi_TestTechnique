import React, {Component} from 'react';

import styled from 'styled-components';

const Input = styled.input`
  display: inline-block;
  position: relative;
  width: auto;
  height: auto;
  padding: 4px;
  margin: 6px;
  outline: none;
`;

const TextInput = ({ input, placeholder}) => {
  return (
    <Input {...input} type='text' placeholder={placeholder} />
  );
}

export default TextInput;
