import styled from 'styled-components';
import { memo } from 'react';

const TableCell = styled.th`
	text-transform: uppercase;
  background: dodgerblue;
  text-align: left;
  color: white;
  padding: 5px;
`

const TableHead = ({ item }) => (
  <TableCell title={item}>{item}</TableCell>
);

export default memo(TableHead)
