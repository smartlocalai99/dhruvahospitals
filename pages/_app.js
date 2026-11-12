import { Noto_Sans_Telugu, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import '@/styles/globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

// Telugu pages only: not preloaded, and the browser downloads it only when Telugu text appears.
const telugu = Noto_Sans_Telugu({
  subsets: ['telugu'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  preload: false,
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
