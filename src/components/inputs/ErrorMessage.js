import React from 'react';
import styled from 'styled-components';

const ErrorWrap = styled.div`
  color: red;
  p {
    color: red;
    font-size: 12px;
  }
`;

const ErrorMessage = ({ children }) => {
  return (
    <ErrorWrap tabindex="0">
      <p>{children}</p>
    </ErrorWrap>
  );
};

export default ErrorMessage;
