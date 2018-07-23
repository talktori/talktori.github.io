import styled from 'styled-components';
import theme from '../../theme';

const Title = styled.h2`
  font-weight: 700;
  font-size: 26px;
  line-height: 26px;
  color: ${theme.textColor};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export default Title;
