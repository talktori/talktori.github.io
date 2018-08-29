import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import resetCSS from '../reset-css';
import BlankIfrmae from '../blank-iframe';

const Layout = ({
  children, title, description, ogTitle, ogDescription,
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
      <meta property="og:image" content="https://talktori.com/static/img/screenshot.png" />
      <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
    </Head>
    <style jsx global>{resetCSS}</style>
    { children }
    <BlankIfrmae />
  </div>
);
Layout.defaultProps = {
  title: 'AI English tutor',
  description: 'Improve your professional communication in English',
  ogTitle: 'AI English tutor',
  ogDescription: 'Improve your professional communication in English',
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
};

export default Layout;
