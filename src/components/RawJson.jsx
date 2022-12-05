import { nanoid } from '@reduxjs/toolkit';
import React from 'react';
import styled from 'styled-components';
// import { useAppSelector } from '../utils/hooks';

const Line = styled.p`
  font-size: 12px;
	margin: 4px 0;
`;
export const JsonDisplay = ({ data }) => {
  // const mapIndex = useAppSelector(state => state.json.mapIndex);
  // const displays = Object.keys(mapIndex).filter(key => mapIndex[key]);
  // const displayJson = displays.map(index => data[index]);

  return displayJson.length > 0 && (
    <>
			{displayJson.map((item) => <Line key={nanoid()}>{JSON.stringify(item)}</Line>)}
		</>
  );
};
