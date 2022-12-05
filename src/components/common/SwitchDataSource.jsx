import { memo } from 'react';
import styled from 'styled-components';
import { DATA_TYPES } from '../../constants/http';

const Container = styled.div`
  display: flex;
  gap: 24px;
  border: 1px solid dodgerblue;
  border-radius: 4px;
  padding: 1em 2em;
  margin: 1em auto;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: darkred;
`;

const Source = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  padding: 0 8px;
  font-style: italic;
  cursor: pointer;
`;
const SwitchDataSource = ({
  onSelect,
  dataSource,
}) => {
  return (
    <Container>
      <Title>Switch data source</Title>
      {Object.values(DATA_TYPES).map((type, index) => (
        <Source key={index}>
          <input
            id={type} type="radio" name="source-test" checked={type === dataSource} value={type}
            onChange={onSelect}
          />
          <Label htmlFor={type}>{type}</Label>
        </Source>
      ))}
    </Container>
  );
};

export default memo(SwitchDataSource);
