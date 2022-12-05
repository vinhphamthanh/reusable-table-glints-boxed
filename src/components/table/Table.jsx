import { nanoid } from '@reduxjs/toolkit';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import TableHead from './TableHead';
import TableRow from './TableRow';

const WrappedContainer = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 32px;
`

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  padding-left: 30px;
`;

export const Table = ({
  data,
  onCheck,
  onSort,
}) => {
  const [headData, bodyData] = useMemo(() => {
    let dataHead = [], dataBody = [];
    if (data.length > 0) {
      dataHead = Object.keys(data[0]);
      dataBody = data.map(datum => Object.values(datum));
    }

    return [dataHead, dataBody];
  }, [data]);

  return (
    <WrappedContainer>
      <TableContainer>
        <thead>
          <tr>
            <TableHead>''</TableHead>
            {headData?.length > 0 && headData.map(h => (
              <TableHead key={nanoid()} onSort={onSort} item={h} />
            ))}
          </tr>
        </thead>
        <tbody>
        {
          headData?.length > 0
          && bodyData?.map(
            (item, index) => (
             <TableRow key={nanoid()} data={item} onCheck={onCheck(index)} />
            ))
        }
        </tbody>
      </TableContainer>
    </WrappedContainer>
  );
};
