import { memo } from 'react';
import styled from 'styled-components';

const Title = styled.p`
  width: 100%;
  font-size: 28px;
  font-weight: bold;
`

const Heading = ({ children }) => {
  console.log('Rerender me????')
  return (<Title>{children}</Title>)
}

export default memo(Heading);
