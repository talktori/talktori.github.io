import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Layout from '../components/layout';
import HeaderContainer from '../components/header-container';
import Button from '../components/button';
import What from '../sections/what';
import Benefits from '../sections/benefits';
import App from '../sections/app';
import Try from '../sections/try';

const H1 = styled.h1`
  font-weight: 700;
  color: white;
  font-size: 42px;
  line-height: 42px;
  text-align: center;
  padding: 0 15px;

  @media (min-width: 800px) {
    font-size: 50px;
    line-height: 50px;
  }
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

const GetStartedWrap = styled.div`
  text-align: center;
  margin-top: 15px;
`;

export default () => (
  <Layout
    ogTitle="AI English tutor"
    ogDescription="Improve your English speaking skills and accent"
  >
    <HeaderContainer>
      <H1>
        AI English tutor
      </H1>
      <Description>
        Improve your English speaking skills and accent
        <br />
      </Description>
      <GetStartedWrap>
        <Link href="/login">
          <Button>Request demo</Button>
        </Link>
      </GetStartedWrap>
    </HeaderContainer>
    <What />
    <Benefits />
    <App />
    <Try />
  </Layout>
);
