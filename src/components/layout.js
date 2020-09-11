import React from 'react';
import { Global, css } from '@emotion/core';
import  Helmet from 'react-helmet';
import useMetaData from '../hooks/use-siteMetadata';

import Header from './header';

const Layout = ({ children }) => {
    const { title, description } = useMetaData();

  return (
    <>
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          margin: 0;
        }
        html,
        body {
          margin: 0;
          color: #555;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          font-size: 18px;
          line-height: 1.4;
          /* remove margin for the main div that Gatsby mounts into */
          > div {
            margin-top: 0;
          }
        }
        a {
          text-decoration: none;
            color: #DCED31;
        }
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: #363537;
          line-height: 1.1;
          + * {
            margin-top: 0.5rem;
          }
        }
        h1 {
          font-size:4.209em;
        }
        h2 {
          font-size: 3.157em;
        }
        h3 {
          font-size: 2.369em;
        }
        h4 {
          font-size: 1.777em;
        }
        h5 {
          font-size: 1.333em;
        }
        strong {
          color: #222;
        }
        li {
          margin-top: 0.25rem;
        }
      `}
    />
    <Helmet>
      <html lang= "eng"/>
      <title>{title}</title>
      <meta name = "description" content = {description} />
    </Helmet>
    <Header />
    <main
      css={css`
        margin: 2rem auto;
        width:90vw;
        max-width: 550px;
      `}
    >
      {children}
    </main>
  </>
  )
};

export default Layout;