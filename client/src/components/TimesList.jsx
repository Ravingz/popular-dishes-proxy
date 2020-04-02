import React from 'react';
import styled from 'styled-components'
import Timeslot from './Timeslot';

const TimeSelectorWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
`;

const TimeslotContainer = styled.div`
    /* height: 300px; */
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    /* padding: 8px 16px 8px 16px; */

`;
const Bottom = styled.text`
    font-size: 14px;
    font-weight: 500;
    padding: 4px;
`;


const TimesList = ({timeslots, date, party, time, restaurant }) => {
        if (party > restaurant.partySize[0]) {
            return (
                <div>Unfortunately, your party is too large to make an online booking at {restaurant.name}.</div>
            )
        } 
     
    return (
        <TimeSelectorWrapper>
            <TimeslotContainer>
                {timeslots.slice(0, 3).map(timeslot => 
                    <Timeslot timeslot={timeslot} date={date} party={party} time={time} currentRestaurant={restaurant}/>)}               
            </TimeslotContainer>
            <Bottom> You're in luck! We still have {timeslots.slice(0, 3).length} timeslots left</Bottom>
        </TimeSelectorWrapper>
    )
}
export default TimesList; 