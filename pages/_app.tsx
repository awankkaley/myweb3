import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { observer } from 'mobx-react-lite';
import Head from 'next/head'
import { MoralisProvider } from 'react-moralis';
import React from 'react';



const MyApp = observer(({ Component, pageProps }: AppProps) => {
  const APP_ID = "rjoLU9Xzn42YC5WIV7gtQYUkXhFNb3dTavzbIZXF";
  const SERVER_URL = "https://rdohdza7sr8m.usemoralis.com:2053/server";


  return (
    <>
      <Head>
        <title>Viaje Admin Panel</title>
        <meta name="description" content="Viaje Admin Panel" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
        <Component {...pageProps} />
      </MoralisProvider>
    </>
  );
});
export default MyApp
