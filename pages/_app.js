import { Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-jakarta: ${jakarta.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
