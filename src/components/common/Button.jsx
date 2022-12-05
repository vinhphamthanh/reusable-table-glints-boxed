import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
	border: 1px solid cornflowerblue;
	padding: 8px 24px;
	border-radius: 4px;
	background-color: ${({ disabled }) => {
  if (!disabled) return 'cornflowerblue'
  return 'white'
}};
	color: ${({ disabled }) => {
  if (!disabled) return 'white'
  return 'cornflowerblue'
}};
	text-transform: uppercase;
	cursor: pointer;
	&:disabled {
		cursor: default;
	}
`

export const Button = ({ active, onClick, title }) => {
  return (
    <Container disabled={!active} onClick={onClick}>{title}</Container>
  )
}
