import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { observer } from 'mobx-react-lite';
import Head from 'next/head'
import { MoralisProvider } from 'react-moralis';
import React from 'react';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import '@fontsource/space-grotesk/300.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import { env } from 'process';


const theme = createTheme({
  typography: {
    "fontFamily": "Space Grotesk",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },

});

theme.typography.h3 = {
  fontSize: '1.6rem',
  '@media (min-width:600px)': {
    fontSize: '1.8rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '3.0rem',
  },
};

theme.typography.h6 = {
  fontSize: '0.9rem',
  '@media (min-width:600px)': {
    fontSize: '1rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.3rem',
  },
};

const MyApp = observer(({ Component, pageProps }: AppProps) => {
  const APP_ID = "U6c1sWGjNVgPDCsVjGIDOsRydLZ0k3dvaOsDf66U";
  const SERVER_URL = "https://9fwajutcjusc.usemoralis.com:2053/server";


  return (
    <>
      <Head>
        <title>More.</title>
        <meta name="description" content="Viaje Admin Panel" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MoralisProvider>
    </>
  );
});
export default MyApp
