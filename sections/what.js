import React from 'react';
import styled from 'styled-components';
import { FaCalendar, FaClockO } from 'react-icons/lib/fa';
import { MdLayers, MdPhoneIphone } from 'react-icons/lib/md';

import theme from '../theme';
import Container from '../components/container';
import Title from '../components/title';

const Section = styled.div`
  padding: 35px 0;

  @media (min-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Text = styled.div`
  @media (min-width: 800px) {
    width: 60%;
  }
`;

const Description = styled.div`
  margin-top: 15px;
  line-height: 24px;

  @media (min-width: 800px) {
    padding-right: 100px;
  }
`;

const Icons = styled.div`
  margin-top: 25px;
  clear: both;

  @media (min-width: 800px) {
    width: 40%;
    margin-top: 0;
  }
`;

const Box = styled.div`
  display: inline-block;
  background: ${props => (props.highlight ? theme.red : theme.baseColor)};
  color: white;
  text-align: center;
  border-radius: 7px;
  box-shadow: 0px 0px 25px rgba(151, 160, 191, 0.3);
  margin: 0 0 10px 10px;
  width: calc(100% * (1/2) - 5px);
  height: 100px;

  &:last-child {
    clear: right;
  }

  &:nth-child(odd) {
    margin: 0 0 10px 0;
  }

  &:nth-child(even) {
    margin: 0 0 0 10px;
  }

  @media (min-width: 800px) {
    width: calc(100% * (1/2) - 10px);
    &:nth-child(odd) {
      margin: 0 0 10px 10px;
    }
  }
`;

const BoxCenter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > i {
    width: 100%;
    height: 32px;
    font-size: 26px;
  }

  > div {
    width: 100%;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
  }
`;

export default () => (
  <Container>
    <Section id="product">
      <Text>
        <Title>About Ri</Title>
        <Description>
          In Ri we believe in a connected world.
          <br />
          People are united by many things.
          <br />
          And language - is KEY.
          <br />
          <br />
          We created this app to improve your speech.
          To improve your accent.
          And help you to speak about everything that matters to you.
          Anywhere and anytime.
        </Description>
      </Text>
      <Icons>
        <Box>
          <BoxCenter>
            <i><MdPhoneIphone /></i>
            <div>Virtual tutor</div>
          </BoxCenter>
        </Box>
        <Box>
          <BoxCenter>
            <i><FaCalendar /></i>
            <div>Available 24/7</div>
          </BoxCenter>
        </Box>

        <Box>
          <BoxCenter>
            <i><FaClockO /></i>
            <div>Quick results</div>
          </BoxCenter>
        </Box>
        <Box highlight>
          <BoxCenter>
            <i><MdLayers /></i>
            <div>Personalized</div>
          </BoxCenter>
        </Box>
      </Icons>
    </Section>
  </Container>
);
