import React, { useState } from 'react';
import styled from 'styled-components';

const TimeSelectorWrapper = styled.div`
  display: inline-block;
`;

const SelectWrapper = styled.select`
  width: 200px;
  height: 30px;
  padding: 5px 24px 5px 30px;
  border-radius: 3px;
  border-color: #cccccc;
  background-color: white;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

const TimeSelector = (props) => {
    const defaultState = '';
    const label = 'time-selector';
    const timeslots = ['12:00 AM', '12:30 AM', '1:00 AM', '1:30 AM', '2:00 AM', '2:30 AM', '3:00 AM', '3:30 AM', '4:00 AM', '4:30 AM', '5:00 AM', '5:30 AM', '6:00 AM', '6:30 AM', '7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM', '10:30 PM', '11:00 PM', '11:30 PM'];
    const [state, setState] = useState(defaultState);
    const{ onTimeSelect } = props;
    
    return (   
        <TimeSelectorWrapper> 
            <label htmlFor={label}>
                {/* {label} */}
                <SelectWrapper 
                id={label}
                value={state}
                onChange={e => {setState(e.target.value);
                onTimeSelect(e.target.value)}}
                onBlur={e => setState(e.target.value)}
                disabled={!timeslots.length}
                > 
                    {timeslots.map(item => 
                        <option key={item} value={item}>{item}</option>)}
                </SelectWrapper>
            </label>
            </TimeSelectorWrapper>
    )
}

export default TimeSelector;