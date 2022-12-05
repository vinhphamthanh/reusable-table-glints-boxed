import styled from 'styled-components';

const TableCell = styled.td`
  min-height: 32px;
  min-width: 48px;
  padding: 5px;
`;

export const TableData = ({ children }) => (<TableCell>{children}</TableCell>)
