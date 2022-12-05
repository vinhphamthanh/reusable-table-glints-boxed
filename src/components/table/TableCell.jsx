import { memo } from 'react';
import styled from 'styled-components';

const TData = styled.td`
  min-height: 32px;
  min-width: 48px;
  padding: 5px;
`;

const TableCell = ({ children }) => (
  <TData>{children}</TData>
);

export default memo(TableCell);
