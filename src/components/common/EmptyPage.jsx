import styled from 'styled-components';
import Heading from './Heading';

const Container = styled.div`
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const EmptyPage = () => {
  return (
    <Container>
      <Heading small>There is no item. Please try again!</Heading>
    </Container>
  );
};
