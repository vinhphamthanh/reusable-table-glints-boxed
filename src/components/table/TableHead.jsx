import styled from 'styled-components';

const TableCell = styled.th`
	text-transform: uppercase;
  background: dodgerblue;
  text-align: left;
  color: white;
  padding: 5px;
`

export const TableHead = ({ item }) => (
  <TableCell title={item}>{item}</TableCell>
);
