import React from 'react';
import styled from 'styled-components';

export const target = 'blank-iframe';

const Iframe = styled.iframe`
  position: fixed;
  opacity: 0;
  top: -1000px;
  left: -99999px;
`;

export default () => (
  <Iframe name={target} id={target} src="about:blank" title="fetch" />
);
