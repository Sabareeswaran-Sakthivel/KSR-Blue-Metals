import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head>
      <Script  src="https://checkout.razorpay.com/v1/checkout.js" strategy='beforeInteractive' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}