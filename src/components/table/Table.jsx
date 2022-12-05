import { nanoid } from '@reduxjs/toolkit';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

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
}) => {
  const searchData = [];
  const [headData, bodyData] = useMemo(() => {
    let dataHead = [], dataBody = [];
    if (searchData.length > 0) {
      dataHead = Object.keys(searchData[0]);
      dataBody = searchData.map(datum => Object.values(datum));
    } else if (data?.length > 0) {
      dataHead = Object.keys(data[0]);
      dataBody = data.map(datum => Object.values(datum));
    }

    return [dataHead, dataBody];
  }, [data, searchData]);

  const handleCheck = pos => value => {
    // dispatch(jsonActions.setIndex({ [pos]: value }));
  };
  return (
    <WrappedContainer>
      <TableContainer>
        <thead>
          <tr>
            <TableHead>''</TableHead>
            {headData?.length > 0 && headData.map(h => (
              <TableHead key={nanoid()} item={h} />
            ))}
          </tr>
        </thead>
        <tbody>
        {
          headData?.length > 0
          && bodyData?.map(
            (item, index) => (
             <TableRow key={nanoid()} data={item} onCheck={handleCheck(index)} />
            ))
        }
        </tbody>
      </TableContainer>
    </WrappedContainer>
  );
};
