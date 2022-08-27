import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel='shortcut icon'
          href='https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png'
          type='image/x-icon'
        />
      </Head>
      <body className='bg-[#030303] text-white'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
