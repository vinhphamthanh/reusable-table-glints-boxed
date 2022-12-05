import styled from 'styled-components';

const TableCell = styled.td`
  min-height: 32px;
  min-width: 48px;
  padding: 4px;
  border-right: 1px solid aliceblue;
`;

export const TableData = ({ children }) => (<TableCell>{children}</TableCell>)
