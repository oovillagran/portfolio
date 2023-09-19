'use client';
import './globals.css';
import { Inter } from 'next/font/google';
import { AnimatePresence } from 'framer-motion';
import { DarkModeProvider } from './DarkModeContext';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <DarkModeProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </DarkModeProvider>
  )
}

export function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode='wait' initial={false}>
      <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
  );
}
