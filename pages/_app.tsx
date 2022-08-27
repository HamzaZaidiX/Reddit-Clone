import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import {RedditProvider} from '../context/RedditContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <RedditProvider>
    <Component {...pageProps} />
  </RedditProvider>
  )
}

export default MyApp
