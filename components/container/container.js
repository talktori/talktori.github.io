import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CentredBlock = styled.div`
  max-width: 1125px;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
`;

const Container = ({ children }) => (
  <CentredBlock>{children}</CentredBlock>
);
Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default Container;
