import { AppProps } from 'next/app'
import ReduxProvider from '../redux/provider'
import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/Layout/Layout'
import NextNProgress from 'nextjs-progressbar';



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ReduxProvider>
        <Layout>
          <NextNProgress />
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </ChakraProvider>
  )
}

export default MyApp
