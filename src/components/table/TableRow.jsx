import { nanoid } from '@reduxjs/toolkit';
import styled from 'styled-components';
import { TableData } from './TableData';

const WrappedTableRow = styled.tr`
  border-bottom: 1px solid aliceblue;

  &:nth-child(even) {
    background-color: aliceblue;
  }
`;

const CheckBox = styled.input`
  margin: 0;
`;

export const TableRow = ({
  data,
  onCheck,
}) => {
  const handleChange = evt => {
    const { checked } = evt.target;
    onCheck(checked);
  };
  return (
    <WrappedTableRow>
      <TableData>
        <CheckBox type="checkbox" onChange={handleChange} />
      </TableData>
      {Array.isArray(data) && data.length > 0 && data.map((item, index) => (
        <TableData key={nanoid()} pos={index}>
          {typeof item === 'object' ?
            JSON.stringify(item) :
            item}
        </TableData>
      ))}
    </WrappedTableRow>
  );
};
