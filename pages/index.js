import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';

const Wrap = styled.header`
  position: relative;
`;

const Header = styled.header`
  height: 40px;
  padding: 15px 24px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 112px;
  height: 40px;
  display: inline-block;
`;

const Content = styled.section`
  max-width: 1100px;
  min-height: calc(100vh - 250px);
  padding: 15px 24px 75px 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h2`
  color: #0F328D;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.96px;
  line-height: 36px;

  > span {
    color: white;
  }

  @media (min-width: 768px) {
    font-size: 40px;
    line-height: 56px;
  }
`;

const Description = styled.h2`
  font-size: 18px;
  font-weight: 500;
  letter-spacing: -0.43px;
  line-height: 24px;
  padding: 16px 0 48px 0;
`;

const Footer = styled.footer`
  padding: 32px 24px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  > a {
    display: block;
    margin: 25px 25px 0 0;
    text-decoration: underline;
    transition: all 200ms ease;

    @media (min-width: 768px) {
      margin: 0 50px 0 0;
      display: inline-block;

      &:nth-child(3), :nth-child(4) {
        float: right;
      }
    }

    &:hover {
      color: #fff;
    }
  }
`;

const Preview = styled.i`
  width: 100%;
  min-width: 100px;
  max-width: 515px;
  height: 500px;
  display: block;
  background: url('/static/img/preview2@2x.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto;
`;

const Row = styled.div`
  width: 100%;
  padding: 25px 0;
  @media (min-width: 768px) {
    padding: 0;
    width: 50%;
  }
`;

const Button = styled.a`
  height: 48px;
  padding: 0 32px;
  border-radius: 28px;
  background-color: #0F328D;
  color: white;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
`;

const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 11px;
`;

const AppleIcon = styled.i`
  width: 24px;
  height: 24px;
  display: block;
  background: url('/static/img/apple-icon@2x.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 5px;
`;

export default () => (
  <Layout>
    <Wrap>
      <Header>
        <Logo src="/static/img/logo3@2x.png" alt="Talk to Ri" />
      </Header>
      <Content>
        <Row>
          <Title>
            <span>English</span> and Soft Skills
            <br />
            for Tech Specialists
          </Title>
          <Description>
            Prepare for job interviews, presentations, small talks,
            integration in multicultural teams and many more on real work cases.
          </Description>
          <Button href="https://itunes.apple.com/us/app/talk-to-ri-business-english/id1435391859?mt=8">
            <ButtonContent>
              <AppleIcon />
              Download&nbsp;<h1>Talk to Ri</h1>
            </ButtonContent>
          </Button>
        </Row>
        <Row>
          <Preview />
        </Row>
      </Content>
      <Footer>
        <a href="mailto:support@talktori.com">Support@talktori.com</a>
        <a href="https://www.facebook.com/talktori/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="/privacy-policy.html">Privacy Poicy</a>
        <a href="/terms-of-use.html">Terms of Use</a>
      </Footer>
    </Wrap>
  </Layout>
);
