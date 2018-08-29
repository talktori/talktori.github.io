import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import EarlyAccess from '../components/early-access';

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

const HideOnMobile = styled.span`
  @media (max-width: 767px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 184px;
  height: 40px;
  display: inline-block;
`;

const Content = styled.section`
  max-width: 1100px;
  min-height: calc(100vh - 250px);
  padding: 55px 24px 105px 24px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Title = styled.h1`
  color: #FFFFFF;
  font-size: 28px;
  font-weight: bold;
  letter-spacing: -0.96px;
  line-height: 36px;

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
  max-width: 1100px;
  padding: 32px 24px;
  position: absolute;
  bottom: 0;
  left: 0;

  > a {
    display: block;
    margin: 25px 25px 0 0;
    text-decoration: underline;
    transition: all 200ms ease;

    @media (min-width: 768px) {
      margin: 0 50px 0 0;
      display: inline-block;
    }

    &:hover {
      color: #fff;
    }
  }
`;

const Preview = styled.i`
  width: 338px;
  height: 682px;
  display: block;
  background: url('/static/img/preview@2x.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`;

const Row = styled.div`
  padding: 25px 0;
  @media (min-width: 768px) {
    padding: 0;
    width: 50%;
  }
`;

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isSended: false,
    };
  }

  onSend = () => {
    this.setState({
      isSended: true,
    });
  }

  render() {
    const { isSended } = this.state;

    return (
      <Layout>
        <Wrap>
          <Header>
            <Logo src="/static/img/logo@2x.png" alt="Talk to Ri" />
            <HideOnMobile>
              <EarlyAccess isSended={isSended} onSend={this.onSend} />
            </HideOnMobile>
          </Header>
          <Content>
            <Row>
              <Title>
                Improve your professional communication in English
              </Title>
              <Description>Practice industry-specific conversations by voice</Description>
              <EarlyAccess isSended={isSended} onSend={this.onSend} />
            </Row>
            <Row>
              <Preview />
            </Row>
          </Content>
          <Footer>
            <a href="mailto:support@talktori.com">Support@talktori.com</a>
            <a href="https://www.facebook.com/talktori/">Facebook</a>
          </Footer>
        </Wrap>
      </Layout>
    );
  }
}
