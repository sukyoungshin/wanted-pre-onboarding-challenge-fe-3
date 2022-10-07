import styled from 'styled-components';
import { Colors } from '@/common/style-utils';

interface ButtonProps {
  onClick: () => void;
  children: string;
};

const Button = ({onClick, children}: ButtonProps) => {

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
};
export default Button;

const StyledButton = styled.button`
  margin: 40px 0;
  min-width: 100px;

  display: block;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  color: ${Colors.lightGrey};
  background-color: ${Colors.darkblack};
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border-color: ${Colors.purple};
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;