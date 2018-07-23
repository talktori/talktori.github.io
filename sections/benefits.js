import React from 'react';
import styled from 'styled-components';
import { MdWork, MdPeople } from 'react-icons/lib/md';
import { FaGlobe } from 'react-icons/lib/fa';

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
  color: ${theme.textColor};
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
      <Title center>With Ri app you design your dream life</Title>
      <Levels>
        <Level>
          <Icon><MdWork /></Icon>
          <Description>
            New job
          </Description>
        </Level>
        <Level>
          <Icon><MdPeople /></Icon>
          <Description>
            New friends
          </Description>
        </Level>
        <Level>
          <Icon><FaGlobe /></Icon>
          <Description>
            New countries
          </Description>
        </Level>
      </Levels>
    </Container>
  </Section>
);
