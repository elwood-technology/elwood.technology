import type {Metadata, Viewport} from 'next';
import type {PropsWithChildren} from 'react';
import {Open_Sans} from 'next/font/google';

import './global.css';

const inter = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title:
    'Elwood Technology | Software Development &amp; Consulting | hello@elwood.technology',
  description:
    'Santa Monica, California Software Development &amp;amp; Consulting',
  keywords:
    'software, development, dev shop, consulting, node, ios, android, java, javascript',
  openGraph: {
    title: 'Elwood Technology | Software Development &amp;amp; Consulting',
    description:
      'Santa Monica, California Software Development &amp;amp; Consulting',
    type: 'website',
  },
  applicationName: 'Elwood Technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const ld = {
  '@context': 'http://schema.org',
  '@type': 'Organization',
  url: 'https://elwood.technology',
  name: 'Elwood Technology, LLC | Software Development &amp; Consulting',
  logo: 'https://elwood.technology/icon.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-419-862-5845',
    email: 'hello@elwood.technology',
    contactType: 'customer service',
  },
  sameAs: [
    'https://plus.google.com/u/1/b/117172292821813006162/117172292821813006162',
    'https://github.com/elwood-technology',
    'https://twitter.com/hello_elwood',
    'https://www.facebook.com/elwood.technology',
    'https://angel.co/elwood-technology',
    'https://www.linkedin.com/company/elwood-technology/',
    'https://www.instagram.com/hello_elwood/',
  ],
};

export default function Layout(props: PropsWithChildren) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}}
        />
        {props.children}
      </body>
    </html>
  );
}
