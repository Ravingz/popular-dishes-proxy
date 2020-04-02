import React, { useEffect } from 'react';
import styled from 'styled-components';
import TimesList from './TimesList';
import useToggle from './Hooks/useToggle';

// const StyledButton = styled.button`
//   border: none;
//   padding: 12px 16px 12px 16px;
//   background-color: #da3743;
//   color: #fff;
//   cursor: pointer;
//   width: 100%;
//   /* height: 100%; */

// `;
const StyledButton = styled.button`
  border: none;
  padding: 12px 16px 12px 16px;
  background-color: #da3743;
  color: #fff;
  cursor: pointer;
  width: 100%;
  &:hover {
    opacity: 75%;
  }
  /* height: 100%; */

`;
const Button = ({show}) => {
  
    const [openTimes, setTimes] = useToggle(true);

    return (
      <div>
        <StyledButton onClick={() => {setTimes(); show() }}>Find a Table</StyledButton>
      </div>
    );  
  }

  export default Button;