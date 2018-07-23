import React from 'react';
import styled from 'styled-components';
import { MdMicNone, MdExposurePlus1 } from 'react-icons/lib/md';
import GoBook from 'react-icons/lib/go/book';

import theme from '../theme';
import Container from '../components/container';
import Title from '../components/title';

const Section = styled.div`
  padding: 55px 0;
  position: relative;
  overflow: hidden;
`;

const Description = styled.h3`
  margin-top: 15px;
  text-align: center;
  line-height: 24px;
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
  padding-bottom: 35px;

  &:last-child {
    padding-bottom: 0;
  }

  @media (min-width: 800px) {
    padding-bottom: 0;
    width: calc(100% * (1/3) - 15px);
    padding-right: 15px;
  }
`;

const SubTitle = styled.h4`
  font-size: 20px;
  line-height: 24px;
  color: ${theme.textColor};
  font-weight: 700;
  text-align: center;
`;

const Label = styled.div`
  padding-top: 15px;
  text-align: center;
  line-height: 24px;
`;

const CommingSoon = styled.span`
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
  margin: -10px 0 0 5px;
`;

const Icon = styled.i`
  font-size: 35px;
  height: 45px;
  color: ${theme.red};
  display: block;
  text-align: center;
`;

export default () => (
  <Section>
    <Container>
      <Title center>Features</Title>
      <Description>
        Ri will check your pronunciation and provide you professional advice.
      </Description>
      <Levels>
        <Level>
          <Icon><MdMicNone /></Icon>
          <SubTitle>
            Speak
          </SubTitle>
          <Label>
            Speak on a different topic with AI Coach. Just practice, practice and practice
          </Label>
        </Level>
        <Level>
          <Icon><GoBook /></Icon>
          <SubTitle>
            Read aloud
          </SubTitle>
          <Label>
            Ri is lstening, keeping track of your reading, correct your mistakes and
            generates speech which mimics any human voice and which sounds natural
          </Label>
        </Level>
        <Level>
          <Icon><MdExposurePlus1 /></Icon>
          <SubTitle>
            New features
            <CommingSoon>coming soon</CommingSoon>
          </SubTitle>
          <Label>
            It is self-taught AI based on user activity data.
            Help us to improve our AI algorithm in order to provide the best service ever
          </Label>
        </Level>
      </Levels>
    </Container>
  </Section>
);
