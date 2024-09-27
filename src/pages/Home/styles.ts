import styled from 'styled-components';

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5.6rem;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.8rem;
  font-weight: 700;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background: transparent;
  height: 4rem;
  border: 0;
  border-bottom: 0.2rem solid ${(props) => props.theme['gray-500']};
  font-weight: 700;
  font-size: 1.6rem;
  padding: 0 0.8rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['green-500']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-500']};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;
  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 6.4rem;
`;

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1.6rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 3.2rem 1.6rem;
    border-radius: 0.8rem;
  }
`;

export const Separator = styled.div`
  padding: 3.2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 6.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

export const StartCountdownButton = styled.button`
  width: 100%;
  padding: 1.6rem;
  border: 0;
  border-radius: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  font-weight: 700;
  text-transform: capitalize;
  cursor: pointer;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }
`;
