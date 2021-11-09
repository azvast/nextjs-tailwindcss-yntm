import { ChainId, DAppProvider } from '@usedapp/core';
import { AppProps } from 'next/app';
import { GoogleAnalytics, usePagesViews } from 'nextjs-google-analytics';

import '@/styles/globals.css';

const config = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  usePagesViews();

  return (
    <DAppProvider config={config}>
      <GoogleAnalytics strategy='lazyOnload' />
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;
