import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/lib/fa';

import theme from '../../theme';

const Wrap = styled.footer`
  background: ${theme.darkColor};
  padding: 45px 10px;
  text-align: center;
  line-height: 24px;
`;

const Icon = styled.span`
  display: inline-block;
  padding: 0 5px 15px;
  color: white;
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
`;

const InlineBlock = styled.span`
  display: inline-block;
`;

const SupportLink = styled.a`
  transition: all 200ms ease;

  &:hover {
    color: #fff;
  }
`;

export default () => (
  <Wrap>
    <div>
      <Icon>
        <FaFacebook />
      </Icon>
      <Icon>
        <FaTwitter />
      </Icon>
      <Icon>
        <FaLinkedin />
      </Icon>
    </div>
    Copyright &copy; 2018 talktori.com. <InlineBlock>All rights reserved.</InlineBlock>
    <br />
    <SupportLink href="mailto:support@talktori.com">support@talktori.com</SupportLink>
  </Wrap>
);
