import { Noto_Sans_Telugu, Plus_Jakarta_Sans } from 'next/font/google';
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
