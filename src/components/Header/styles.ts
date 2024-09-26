import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    a {
      width: 4.8rem;
      height: 4.8rem;

      display: flex;
      align-items: center;
      justify-content: center;

      color: ${(props) => props.theme.white};

      border-top: 0.3rem solid transparent;
      border-bottom: 0.3rem solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`;
