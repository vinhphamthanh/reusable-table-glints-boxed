import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import styled from 'styled-components';
import { Button } from './Button';

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  max-width: 374px;
  justify-content: space-between;
  margin: 2em auto;
`;

const Page = styled.span`
	min-width: 24px;
	text-align: center;
	font-size: 12px;
	color: ${({ active }) => active ? 'red' : 'inherit'}
`
export const Paging = ({ onPaging, page, totalPage, isVisible }) => {
  const handleBack = () => {
    onPaging(-1)
  }

  const handleNext = () => {
    onPaging(1)
  };

  return isVisible && (
    <Container>
			<Button active={page > 1} onClick={handleBack} title="Back" />
      {Array.from({ length: totalPage }, (_, i) => (
        <Page key={nanoid()} active={page === i + 1}>{i + 1}</Page>
      ))}
      <Button active={page < totalPage} onClick={handleNext} title="Next" />
		</Container>
  );
};
