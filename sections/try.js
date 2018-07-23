import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import theme from '../theme';
import Button from '../components/button';
import Container from '../components/container';

const Section = styled.div`
  padding: 55px 0;
  background: ${theme.baseColor};
  color: white;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 40px;
  line-height: 48px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export default () => (
  <Section>
    <Container>
      <Title>
        Try it free
      </Title>
      <Link href="/login">
        <Button pure>Request demo</Button>
      </Link>
    </Container>
  </Section>
);
