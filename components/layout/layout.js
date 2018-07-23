import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import resetCSS from '../reset-css';
import Navbar from '../navbar';
import BlankIfrmae from '../blank-iframe';
import Footer from '../footer';

const Layout = ({
  children, title, description, linkOnLogo, ogTitle, ogDescription,
}) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="shortcut icon" type="image/png" href="/static/favicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && <meta property="og:description" content={ogDescription} />}
      <meta property="og:image" content="https://talktori.com/static/img/background-small.jpg" />
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" />
    </Head>
    <style jsx global>{resetCSS}</style>
    <header>
      <Navbar linkOnLogo={linkOnLogo} />
    </header>
    { children }
    <Footer />
    <BlankIfrmae />
  </div>
);
Layout.defaultProps = {
  title: 'AI English tutor',
  description: 'Improve your English speaking skills and accent',
  linkOnLogo: false,
  ogTitle: '',
  ogDescription: '',
};
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
  linkOnLogo: PropTypes.bool,
};

export default Layout;
