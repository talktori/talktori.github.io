import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import HeaderContainer from '../components/header-container';

const H1 = styled.h1`
  font-weight: 700;
  color: white;
  font-size: 50px;
  line-height: 50px;
  text-align: center;
  padding: 0 15px;
`;

const Description = styled.h3`
  color: white;
  width: 70%;
  margin: 15px auto 0 auto;
  display: block;
  letter-spacing: 0;
  line-height: 22px;
  text-align: center;
`;

const A = styled.a`
  color: white;
  text-decoration: underline;
  margin-top: 15px;
  display: inline-block;

  &:hover {
    text-decoration: none;
  }
`;

export default () => (
  <Layout title="Contact Us | Ri" linkOnLogo>
    <HeaderContainer dark>
      <H1>
        Contact Us
      </H1>
      <Description>
        Have any questions? We’d love to hear from you.
        <br />
        <A href="mailto:support@talktori.com">support@talktori.com</A>
      </Description>
    </HeaderContainer>
  </Layout>
);
