import React from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from '../../assets/logo.svg';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  color: midnightblue;
`;

const rotate = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.5);
  }
  75% {
    transform: rotate(270deg) scale(1.3);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const Spin = styled.img`
  display: inline-block;
  animation: ${rotate} 1s linear infinite;
  width: 88px;
  height: 88px;
`;


const Loading = ({ loading }) => {
  return loading ?
    <Overlay><Spin src={Logo} /></Overlay> :
    null;
};

export default React.memo(Loading);
