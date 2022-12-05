import { memo } from 'react';
import styled from 'styled-components';

const Title = styled.p`
  width: 100%;
  ${({ small }) => {
    if (small) {
      return `
        font-size: 20px;
        color: dodgerblue;
      `
    }
    
    return `
      font-size: 28px;
      color: darkmagenta;
      margin: 0 0 2rem;
    `
  }};
  font-weight: bold;
`

const Heading = ({ children, small }) => (<Title small={small}>{children}</Title>)

export default memo(Heading);
