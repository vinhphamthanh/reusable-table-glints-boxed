import styled from 'styled-components';

const Title = styled.p`
  width: 100%;
  font-size: 28px;
  font-weight: bold;
`

export const Heading = ({ children }) => (<Title>{children}</Title>)
