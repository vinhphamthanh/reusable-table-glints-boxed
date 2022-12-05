import { nanoid } from '@reduxjs/toolkit';
import { memo } from 'react';
import styled from 'styled-components';
import TableCell from './TableCell';

const WrappedTableRow = styled.tr`
  border-bottom: 1px solid aliceblue;

  &:nth-child(even) {
    background-color: aliceblue;
  }
`;

const CheckBox = styled.input`
  margin: 0;
`;

const TableRow = ({
  data,
  onCheck,
}) => (
  <WrappedTableRow>
    <TableCell>
      <CheckBox type="checkbox" onChange={onCheck} />
    </TableCell>
    {Array.isArray(data) && data.length > 0 && data.map((item, index) => (
      <TableCell key={nanoid()} pos={index}>
          {typeof item === 'object' ?
            JSON.stringify(item) :
            item}
        </TableCell>
    ))}
  </WrappedTableRow>
);

export default memo(TableRow)
