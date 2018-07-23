import React from 'react';
import styled from 'styled-components';

import theme from '../theme';
import Container from '../components/container';
import Title from '../components/title';

const Section = styled.div`
  background: ${theme.backgroundLight};
  padding: 55px 0;
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
  padding-left: 64px;
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

const Num = styled.div`
  color: #909aaa;
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 94px;
  font-weight: 900;
  opacity: 0.15;
`;

const SubTitle = styled.h4`
  font-size: 20px;
  line-height: 24px;
  color: ${theme.textColor};
  font-weight: 700;
`;

const Label = styled.div`
  padding-top: 15px;
  line-height: 24px;
`;

export default () => (
  <Section>
    <Container>
      <Title center>The Three Levels Of English Pronunciation Are</Title>
      <Description>
        Ri will get you up to &quot;Level 3&quot;!
      </Description>
      <Levels>
        <Level>
          <Num>1</Num>
          <SubTitle>
            English speakers don’t understand you
          </SubTitle>
          <Label>
            At this level, your pronunciation of English words is so different
            that native English speakers find it very difficult to understand you
          </Label>
        </Level>
        <Level>
          <Num>2</Num>
          <SubTitle>
            English speakers understand you with concentration
          </SubTitle>
          <Label>
            At this level, native English speakers can understand you,
            but they need to pay attention carefully because of your accent
          </Label>
        </Level>
        <Level>
          <Num>3</Num>
          <SubTitle>
            English speakers understand you easily
          </SubTitle>
          <Label>
            Get here using Ri
          </Label>
        </Level>
      </Levels>
    </Container>
  </Section>
);
