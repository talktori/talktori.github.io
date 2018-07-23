import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url('/static/img/background-small.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  @media (min-width: 800px) {
    background-image: url('/static/img/background.jpg');
    min-height: auto;
    height: 100vh;
    min-height: 500px;
  }
`;

const Overlay = styled.div`
  background: ${props => (props.dark ? 'rgba(40, 41, 62, 0.5)' : 'rgba(40, 41, 62, 0.3)')};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const CenterContent = styled.div`
  width: 100%;
  position: relative;
  padding: 99px 0;

  @media (min-width: 800px) {
    padding: 0;
  }
`;

const HeaderContainer = ({ children, dark }) => (
  <Container>
    <Overlay dark={dark} />
    <CenterContent>
      { children }
    </CenterContent>
  </Container>
);
HeaderContainer.defaultProps = {
  dark: false,
};
HeaderContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  dark: PropTypes.bool,
};

export default HeaderContainer;
