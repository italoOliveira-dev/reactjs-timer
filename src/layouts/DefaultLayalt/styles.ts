import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 112rem;
  height: calc(100vh - 16rem);
  margin: 8rem auto;
  padding: 4rem;

  background-color: ${(props) => props.theme['gray-800']};
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;
`;
