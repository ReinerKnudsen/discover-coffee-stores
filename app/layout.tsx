import type { Metadata } from 'next';
import { IBM_Plex_Sans, Allerta_Stencil } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  display: 'swap',
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-ibm-plex-sans',
});

const alertaStencil = Allerta_Stencil({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-allerta-stencil',
});

export const metadata: Metadata = {
  title: 'Discover Coffee Stores',
  description: 'The clever way to discover your local coffee providers',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${ibmPlexSans.variable} ${alertaStencil.variable}`}>{children}</body>
    </html>
  );
}
