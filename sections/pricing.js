import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import theme from '../theme';
import Button from '../components/button';
import Container from '../components/container';
import Title from '../components/title';

const Section = styled.div`
  background: ${theme.backgroundLight};
  padding: 55px 0 75px;
`;

const Levels = styled.div`
  margin-top: 35px;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Level = styled.div`
  position: relative;
  background: white;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  box-shadow: 0px 0px 25px rgba(151, 160, 191, 0.3);
  margin-bottom: 35px;
  padding: 48px 0 0;
  text-align: center;

  &:last-child {
    margin-bottom: 0;
  }

  @media (min-width: 800px) {
    width: calc(100% * (1/4) - 15px);
    margin-right: 15px;
    margin-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const SubTitle = styled.h4`
  font-size: 20px;
  line-height: 24px;
  color: ${theme.textColor};
  font-weight: 700;
  position: relative;

  > span {
    font-size: 13px;
    position: absolute;
    top: 24px;
    display: table;
    width: 100%;
  }
`;

const Price = styled.h4`
  background: #f8f8fa;
  margin: 30px 0 24px;
  font-size: 24px;
  font-weight: 700;
  color: ${theme.textColor};
  line-height: 48px;

  > span {
    font-size: 13px;
  }
`;

const Item = styled.h5`
  color: ${props => (props.disabled ? '#cbdcea' : theme.textColor)};
  text-decoration: ${props => (props.disabled ? 'line-through' : 'none')};
  line-height: 24px;

  > b {
    font-weight: 700;
  }
`;

const Choose = styled.div`
  position: relative;
  top: 15px;
`;

const Badge = styled.span`
  display: inline-block;
  border-radius: 25px;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 10px;
  line-height: 10px;
  color: white;
  padding: 4px 10px;
  background-color: ${theme.baseColor};
  position: absolute;
  top: 25px;
  right: 25px;
`;

export default () => (
  <Section id="pricing">
    <Container>
      <Title center>Pricing</Title>
      <Levels>
        <Level>
          <SubTitle>Basic</SubTitle>
          <Price>
            Free
          </Price>
          <Item>
            <b>1</b> hour / day
          </Item>
          <Item>
            Reading aloud
          </Item>
          <Item>
            Speaking
          </Item>
          <Item disabled>
            Vocabulary suggestions
          </Item>
          <Item disabled>
            Advanced checks
          </Item>
          <Item disabled>
            Advanced confidence
          </Item>
          <Item disabled>
            Topic focus
          </Item>
          <Choose>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </Choose>
        </Level>
        <Level>
          <SubTitle>Pro <span>(free / 14 days)</span></SubTitle>
          <Price>
            $9 <span>/ per month</span>
          </Price>
          <Item>
            <b>4</b> hours / day
          </Item>
          <Item>
            Reading aloud
          </Item>
          <Item>
            Speaking
          </Item>
          <Item>
            Vocabulary suggestions
          </Item>
          <Item disabled>
            Advanced checks
          </Item>
          <Item disabled>
            Advanced confidence
          </Item>
          <Item disabled>
            Topic focus
          </Item>
          <Choose>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </Choose>
        </Level>
        <Level>
          <SubTitle>Premium</SubTitle>
          <Badge>Most Popular</Badge>
          <Price>
            $29 <span>/ per month</span>
          </Price>
          <Item>
            <b>Unlimited</b> hours
          </Item>
          <Item>
            Reading aloud
          </Item>
          <Item>
            Speaking
          </Item>
          <Item>
            Vocabulary suggestions
          </Item>
          <Item>
            Advanced checks
          </Item>
          <Item>
            Advanced confidence
          </Item>
          <Item disabled>
            Topic focus
          </Item>
          <Choose>
            <Link href="/login">
              <Button>Get Started</Button>
            </Link>
          </Choose>
        </Level>
        <Level>
          <SubTitle>Enterprise</SubTitle>
          <Price>
            Custom
          </Price>
          <Item>
            <b>Unlimited</b> hours
          </Item>
          <Item>
            Reading aloud
          </Item>
          <Item>
            Speaking
          </Item>
          <Item>
            Vocabulary suggestions
          </Item>
          <Item>
            Advanced checks
          </Item>
          <Item>
            Advanced confidence
          </Item>
          <Item>
            Topic focus
          </Item>
          <Choose>
            <Link href="/contact">
              <Button>Contact Us</Button>
            </Link>
          </Choose>
        </Level>
      </Levels>
    </Container>
  </Section>
);
