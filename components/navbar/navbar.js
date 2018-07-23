import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import PropTypes from 'prop-types';

import Container from '../container';
import Button from '../button';
import theme from '../../theme';

const Header = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 74px;
  background: ${theme.darkColor};
  transition: background 300ms ease;
  z-index: 100;

  @media (min-width: 800px) {
    position: fixed;
    background: transparent;
  }
`;

const Logo = styled.span`
  font-weight: 700;
  color: white;
  font-size: 47px;
  line-height: 47px;
  text-align: center;
  padding: 15px 0 0 0;
  display: inline-block;
`;

const Ul = styled.ul`
  list-style: none;
  display: ${props => (props.open ? 'block' : 'none')};
  background: ${theme.darkColor};
  margin: 0 -15px;
  padding: 0 0 25px 0;

  @media (min-width: 800px) {
    display: block;
    background: transparent;
    margin: 0;
    padding: 0;
    float: right;
  }
`;

const Li = styled.li`
  padding: 15px 0 0 12px;
  display: block;

  @media (min-width: 800px) {
    float: left;
  }
`;

const A = styled.a`
  display: block;
  color: white;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  padding: 18px;
  text-decoration: none;
  transition: color 200ms ease;

  &:hover {
    color: ${theme.baseColorLight};
  }
`;

const Icon = styled.i`
  position: absolute;
  top: 26px;
  right: 20px;
  width: 18px;
  height: 22px;
  cursor: pointer;
  display: block;

  @media (min-width: 800px) {
    display: none;
  }

  > span:nth-child(1) {
    top: ${props => (props.open ? '10px' : '5px')};
    opacity: ${props => (props.open ? '0' : '1')};
  }

  > span:nth-child(2) {
    top: 10px;
    transform: ${props => (props.open ? 'rotate(45deg)' : 'rotate(0deg)')};
    transition-delay: ${props => (props.open ? '0.2s' : '0s')};
  }

  > span:nth-child(3) {
    top: 10px;
    transform: ${props => (props.open ? 'rotate(-45deg)' : 'rotate(0deg)')};
    transition-delay: ${props => (props.open ? '0.2s' : '0s')};
  }

  > span:nth-child(4) {
    top: ${props => (props.open ? '10px' : '15px')};
    opacity: ${props => (props.open ? '0' : '1')};
  }
`;

const Line = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  opacity: 1;
  left: 0;
  border-radius: 3px;
  transition: 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.15);
  transform: rotate(0deg);
  transition-delay: 0s;
  background: ${theme.baseColor};
`;

export default class extends React.Component {
  static propTypes = {
    linkOnLogo: PropTypes.bool.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      isScrolledDown: false,
      open: false,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const scrollTop =
      window.pageYOffset
      || window.document.documentElement.scrollTop
      || window.document.body.scrollTop
      || 0;

    this.setState({
      isScrolledDown: scrollTop > 0,
    });
  }

  toggleNav = () => {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const { isScrolledDown, open } = this.state;
    const { linkOnLogo } = this.props;

    // Hotfix related to hotjar issue (dynamic CSS class generation)
    const headerStyle = {
      ...(isScrolledDown && { background: theme.darkColor }),
    };

    return (
      <Header style={headerStyle}>
        <Container>
          {linkOnLogo &&
            <Link href="/" passHref>
              <a>
                <Logo>Ri</Logo>
              </a>
            </Link>
          }
          {!linkOnLogo &&
            <Logo>Ri</Logo>
          }
          <Icon onClick={this.toggleNav} open={open}>
            <Line />
            <Line />
            <Line />
            <Line />
          </Icon>
          <Ul open={open}>
            <Li>
              <A href="/#product">Product</A>
            </Li>
            <Li>
              <Link href="/contact" passHref>
                <A>Contact</A>
              </Link>
            </Li>
            <Li>
              <Link href="/login" passHref>
                <A>Sign In</A>
              </Link>
            </Li>
            <Li>
              <Link href="/login">
                <Button white={!isScrolledDown}>Request Demo</Button>
              </Link>
            </Li>
          </Ul>
        </Container>
      </Header>
    );
  }
}
