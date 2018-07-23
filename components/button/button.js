import styled from 'styled-components';
import theme from '../../theme';

const Button = styled.button`
  color: ${props => (props.white || props.pure ? theme.baseColorLight : 'white')};
  background-color: ${props => (props.white || props.pure ? 'white' : theme.baseColor)};
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  vertical-align: middle;
  cursor: pointer;
  border-radius: 25px;
  user-select: none;
  padding: 10px 24px;
  border: 0;
  margin-top: 6px;
  transition: all 200ms ease;
  appearance: none;

  &:hover {
    background: ${props => (props.pure ? 'white' : theme.baseColorLight)};
    color: ${props => (props.pure ? theme.baseColor : 'white')};
  }
`;

export default Button;
