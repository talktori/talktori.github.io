import React from 'react';

import styled from 'styled-components';
import { target } from '../blank-iframe';
import theme from '../../theme';

const action = 'https://docs.google.com/forms/d/e/1FAIpQLScFOnGlLMkffVO5Cg4hTBZG4QUaoiwS5EDKRLnvdzRtMuMoug/formResponse';

const Visible = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`;

const Wrap = styled.div`
  width: 338px;
  height: 48px;
  border: 1px solid ${theme.textColor};
  border-radius: 28px;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 205px;
  height: 48px;
  line-height: 28px;
  padding: 0 16px;
  background: transparent;
  border: 0;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.34px;
  line-height: 48px;
  color: #fff;

  &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${theme.textColor};
    opacity: 1;
  }
`;

const Submit = styled.button`
  height: 48px;
  width: 153px;
  border-radius: 28px;
  background-color: #6978A1;
  border: none;
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.34px;
  line-height: 24px;
  cursor: pointer;
`;

const Success = styled.div`
  display: flex;
  flex-direction: row;
`;

const SuccessIcon = styled.i`
  width: 48px;
  height: 48px;
  display: inline-block;
  background: url('/static/img/success@2x.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const SuccessText = styled.span`
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.34px;
  line-height: 48px;
  padding-left: 16px;
`;

const NoWrap = styled.span`
  white-space: nowrap;
  display: inline-block;
`;

export default ({ onSend, isSended }) => (
  <React.Fragment>
    <Visible show={!isSended}>
      <form
        method="POST"
        action={action}
        target={target}
        onSubmit={onSend}
      >
        <Wrap>
          <Input
            type="email"
            name="entry.881774922"
            placeholder="Enter your email"
            required
          />
          <input type="hidden" name="entry.1603799787" value="" />
          <Submit>Get early access</Submit>
        </Wrap>
      </form>
    </Visible>
    <Visible show={isSended}>
      <Success>
        <SuccessIcon />
        <SuccessText>
          You successfuly subscribed.&nbsp;
          <NoWrap>We’ll be in touch</NoWrap>
        </SuccessText>
      </Success>
    </Visible>
  </React.Fragment>
);
