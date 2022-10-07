import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { WalletWrapper } from '../context/WalletContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <WalletWrapper><Component {...pageProps} /></WalletWrapper>
}

export default MyApp
