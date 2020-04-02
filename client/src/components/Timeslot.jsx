import React from 'react';
import styled from 'styled-components';
import useToggle from './Hooks/useToggle';
import Modal from './Modal';

const TimeslotWrapper = styled.button`
    border: none;
    height: 35px;
    width: 45px;
    margin: 8px;
    font-size: 10px;
    background-color: #da3743;
    color: #fff;
    cursor: pointer;
    &:hover {
    opacity: 75%;
    }

`;
const Timeslot = ({timeslot, date, time, party, currentRestaurant }) => {
    const [openModal, setOpenModal] = useToggle(false);

    return(
    <div>
        <TimeslotWrapper onClick={setOpenModal}>{timeslot}</TimeslotWrapper>
        {openModal && <Modal close={setOpenModal} openModal={openModal} date={date} time={time} party={party} restaurant={currentRestaurant}/>}
        </div>
    

    )
}

export default Timeslot;