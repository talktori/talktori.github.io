import React from 'react';
import styled from 'styled-components';
import { FaApple, FaAndroid, FaChrome } from 'react-icons/lib/fa';

import theme from '../theme';
import Container from '../components/container';
import Title from '../components/title';

const Section = styled.div`
  padding: 55px 0;
  position: relative;
`;

const Description = styled.h3`
  margin-top: 15px;
  text-align: left;
  line-height: 24px;
`;

const Wrap = styled.div`
  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Col = styled.div`
  @media (min-width: 800px) {
    width: 50%;
  }
`;

const I = styled.span`
  display: inline-block;
  width: 20px;
  padding-top: 5px;
  position: relative;
  bottom: 2px;
`;

const Img = styled.img`
  max-width: 90%;
`;

const Subtitle = styled.div`
  margin-top: 25px;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  color: ${theme.textColor};
`;

const AppStore = styled.span`
  display: inline-block;
  width: 100px;
  height: 43px;
  background: url('/static/img/appstore.png') no-repeat;
  background-size: contain;
`;

const AndroidPay = styled.span`
  display: inline-block;
  width: 129px;
  height: 43px;
  background: url('/static/img/google-play.png') no-repeat;
  background-size: contain;
  margin-left: 15px;
`;

export default () => (
  <Section>
    <Container>
      <Wrap>
        <Col>
          <Img src="/static/img/phone-app.jpg" />
        </Col>
        <Col>
          <Title>We have an awesome app</Title>
          <Description>
            Use on any devices:
            <ul>
              <li>
                <I><FaChrome /></I> Web
              </li>
              <li>
                <I><FaApple /></I> iPhone/iPad
              </li>
              <li>
                <I><FaAndroid /></I> Android
              </li>
            </ul>
            <Subtitle>
              Available soon:
            </Subtitle>
            <AppStore />
            <AndroidPay />
          </Description>
        </Col>
      </Wrap>
    </Container>
  </Section>
);
