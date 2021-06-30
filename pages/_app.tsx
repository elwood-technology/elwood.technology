import Head from "next/head";
import type { AppProps } from 'next/app'

import '../styles/globals.scss'

const ld = {
  "@context": "http://schema.org",
  "@type": "Organization",
  url: "https://elwood.technology",
  name: "Elwood Technology, LLC | Software Development &amp; Consulting",
  logo: "https://elwood.technology/icon.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-419-862-5845",
    email: "hello@elwood.technology",
    contactType: "customer service"
  },
  sameAs: [
    "https://plus.google.com/u/1/b/117172292821813006162/117172292821813006162",
    "https://github.com/elwood-technology",
    "https://twitter.com/hello_elwood",
    "https://www.facebook.com/elwood.technology",
    "https://angel.co/elwood-technology",
    "https://www.linkedin.com/company/elwood-technology/",
    "https://www.instagram.com/hello_elwood/"
  ]
};

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Elwood Technology | Software Development &amp; Consulting | hello@elwood.technology</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="apple-touch-icon" href="/icon.png" />
      <meta name="description" content="Software Development &amp;amp; Consulting | hello@elwood.technology" />
      <meta name="keywords" content="software, development, dev shop, consulting, node, ios, android, java, javascript" />
      <meta property="og:title" content="Elwood Technology | Software Development &amp;amp; Consulting" />
      <meta property="og:description" content="Santa Monica, California Software Development &amp;amp; Consulting" />
      <meta property="og:type" content="website" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld)}} />      
      <link rel="icon" href="/favicon.ico" />
    </Head>
  <Component {...pageProps} /></>
}
export default MyApp
