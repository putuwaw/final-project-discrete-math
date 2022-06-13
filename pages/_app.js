import '../styles/globals.css'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {

  return(
    <>
      <Script src="/js/data.js"></Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp