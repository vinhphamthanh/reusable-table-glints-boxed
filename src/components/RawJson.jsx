import { nanoid } from '@reduxjs/toolkit';
import { memo } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Heading from './common/Heading';

const Container = styled.div`
  margin: 1em 0;
  display: flex;
  width: 100%;
  flex-direction: column;
`

const Line = styled.p`
  font-size: 12px;
	margin: 4px 0;
`;
const RawJson = ({ data }) => {
  const json = useSelector(state => state.json);
  const showList = Object.keys(json.dataChecked).filter(key => json.dataChecked[key]);
  const showJson = showList.map(index => data[index]);

  return showJson.length > 0 && (
    <Container>
      <Heading small>Data in JSON format</Heading>
			{showJson.map((item) => <Line key={nanoid()}>{JSON.stringify(item)}</Line>)}
		</Container>
  );
};

export default memo(RawJson)
