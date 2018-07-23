import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import HeaderContainer from '../components/header-container';
import { target } from '../components/blank-iframe';
import Container from '../components/container';
import Submit from '../components/submit';

const action = 'https://docs.google.com/forms/d/e/1FAIpQLSfL5ZuV1p9KQ2ZE2WBOt9izWJSUOhsPPu5JJ0nYzArbCOnjcA/formResponse';
const H1 = styled.h1`
  font-weight: 700;
  color: white;
  font-size: 50px;
  line-height: 50px;
`;

const Description = styled.h3`
  color: white;
  margin: 15px auto 0 auto;
  display: block;
  letter-spacing: 0;
  line-height: 22px;
`;

const Label = styled.label`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 9px;
  color: white;
  margin: 15px 0 5px 0;
  display: inline-block;
  padding-left: 24px;
`;

const Input = styled.input`
  display: block;
  width: 250px;
  padding: 12px 24px;
  font-size: 14px;
  line-height: 1.25;
  background-color: white;
  background-image: none;
  background-clip: padding-box;
  border: 0;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  border-radius: 25px;
`;

const Visible = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
`;

const InputWrap = styled.div`
  padding-bottom: 15px;
`;

export default class extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      sent: false,
    };
  }

  send = () => {
    this.setState({
      sent: true,
    });
  }

  render() {
    const { sent } = this.state;

    return (
      <Layout title="Login | Ri" linkOnLogo>
        <HeaderContainer dark>
          <Container>
            <Visible show={!sent}>
              <H1>
                Get Started
              </H1>
              <Description>
                Enter your details below
              </Description>
              <form
                method="POST"
                action={action}
                target={target}
                onSubmit={this.send}
              >
                <InputWrap>
                  <Label>
                    Email: *
                  </Label>
                  <div>
                    <Input type="email" name="emailAddress" placeholder="Your email address" required />
                  </div>
                  <Label>
                    First name: *
                  </Label>
                  <div>
                    <Input type="text" name="entry.2090309021" placeholder="Your first name" required />
                  </div>
                </InputWrap>
                <Submit type="submit" value="Continue" />
              </form>
            </Visible>
            <Visible show={sent}>
              <H1>
                Success
              </H1>
              <Description>
                You will be notified when we launch
              </Description>
            </Visible>
          </Container>
        </HeaderContainer>
      </Layout>
    );
  }
}
