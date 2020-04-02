import React from 'react';
import styled from 'styled-components';
// import icon from '../dist/window-close-regular-24.png';
import Form from './Form';


const Background = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    z-index: 1;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background-color:  black;
    opacity: 80%;

`;
const Box = styled.div`
    display: inline-block;
    border: 2px solid red;
    z-index: 1;
    height: 400px;
    width: 400px;
    position: relative;
    top: 25%;
    left: 32%;
    bottom: 25%;
    right: 25%;
    max-width: 100%;
    max-height: 100%;
    line-height: 1.375em;
    @media (max-width: 768px) {
        width: 70%;
        height: 70%;
        }
    color: #484848;
    box-shadow: 1px 1px 20px 1px rgba(15,15,15,0.2);
    padding: 32px 32px 32px 32px;
    background-color: white;
    font-family: Circular, -apple-system, system-ui, Roboto, "Helvetica Neue", sans-serif;
    div {
        padding: 7px;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

`;
const Button = styled.button`
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
const Modal = (props) => {
    return (
        <Background> 
            <Box>
                <button onClick={props.close}>X</button>
                <Header> 
                    <div>Guests</div>
                        <div>{props.party}</div>
                    <div>Date</div>
                        <div>{props.date}</div>
                    <div>Time</div>
                        <div>{props.time}</div>
                    <div>Restaurant</div>
                        <div>{props.restaurant.name}</div>
                </Header>
                <div>You are almost done!</div>
                <div>We are holding this table for you</div>
                <Form/>
                
                <Button onClick={props.close}>Reserve</Button>
            </Box>
                
        </Background>
    )
}

export default Modal;