import styled from 'styled-components';

const TableCell = styled.th`
	text-transform: uppercase;
	padding: 5px 0;
  border-bottom: 1px solid aliceblue;
`

export const TableHead = ({ item }) => (
  <TableCell title={item}>{item}</TableCell>
);
