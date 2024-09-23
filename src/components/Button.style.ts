import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100px;
  height: 40px;

  border-radius: 4px;
  margin: 4px;

  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
`;
