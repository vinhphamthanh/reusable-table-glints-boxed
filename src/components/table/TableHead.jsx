import styled from 'styled-components';
import { memo } from 'react';

const TableCell = styled.th`
	text-transform: uppercase;
  background: dodgerblue;
  text-align: left;
  color: white;
  padding: 5px;
`

const TableHead = ({ item, onSort }) => {
  const handleSort = () => onSort(item)
  return (
    <TableCell title={item} onClick={handleSort}>{item}</TableCell>
  );
}

export default memo(TableHead)
