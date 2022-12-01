import type { AppProps } from 'next/app';

import { ThemeProvider } from '@zenprojects/ndp-design-system';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
