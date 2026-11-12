import localFont from 'next/font/local';
import Script from 'next/script';
import '@/styles/globals.css';

// Fonts are self-hosted from styles/fonts: the same variable font files Google Fonts serves (SIL Open Font
// License, see the OFL files there). Builds no longer download them from Google Fonts, which broke Vercel
// builds in November 2026 when Google returned font URLs that next/font/google could not parse.
// The unicode-range values are Google's "latin" and "telugu" subsets.
const jakarta = localFont({
  src: '../styles/fonts/plus-jakarta-sans-latin.woff2',
  weight: '400 800',
  style: 'normal',
  display: 'swap',
  declarations: [
    {
      prop: 'unicode-range',
      value:
        'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    },
  ],
});

// Telugu pages only: not preloaded, and the browser downloads it only when Telugu text appears.
const telugu = localFont({
  src: '../styles/fonts/noto-sans-telugu-telugu.woff2',
  weight: '400 700',
  style: 'normal',
  display: 'swap',
  preload: false,
  declarations: [
    {
      prop: 'unicode-range',
      value: 'U+0951-0952, U+0964-0965, U+0B83, U+0C00-0C7F, U+1CD5-1CD6, U+1CD8, U+1CDA, U+1CF2, U+200C-200D, U+25CC',
    },
  ],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N9D4XF64');`}
      </Script>
      <style jsx global>{`
        :root {
          --font-jakarta: ${jakarta.style.fontFamily};
          --font-telugu: ${telugu.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
