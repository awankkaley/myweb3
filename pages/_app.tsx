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


const theme = createTheme({
  typography: {
    "fontFamily": "Space Grotesk",
    "fontWeightLight": 300,
    "fontWeightRegular": 400,
    "fontWeightMedium": 500
  },
  
});

const MyApp = observer(({ Component, pageProps }: AppProps) => {
  const APP_ID = "rjoLU9Xzn42YC5WIV7gtQYUkXhFNb3dTavzbIZXF";
  const SERVER_URL = "https://rdohdza7sr8m.usemoralis.com:2053/server";


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
