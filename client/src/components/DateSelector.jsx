import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';
import useToggle from './Hooks/useToggle';

const StyledButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #d8d9db;
  &:hover {
    border-bottom: solid 2px #bf1722;
  };
  height: 30px;
  background-color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  text-align: left;
`;

const DateSelector = ({ dateSelected, onDateClick }) => { 
  const [openCalendar, setOpenCalendar] = useToggle(false);
  return (
    <div>
      <StyledButton onClick={setOpenCalendar}>{dateSelected.toString()}
      </StyledButton>
      { openCalendar && <Calendar onDateClick={onDateClick} closeCalendar={setOpenCalendar}/> }
    </div> 
  );
};

export default DateSelector;