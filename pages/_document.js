import { Html, Head, Main, NextScript } from 'next/document';

export default function Document({ __NEXT_DATA__ }) {
  // Telugu pages live under /te/; everything else is English.
  const lang = __NEXT_DATA__.page.startsWith('/te/') ? 'te-IN' : 'en-IN';
  return (
    <Html lang={lang}>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icon-32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#123E7D" />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N9D4XF64"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
