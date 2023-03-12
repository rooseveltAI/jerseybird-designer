import { ChakraProvider } from '@chakra-ui/react'
// import 'fonts.css'
import Head from 'next/head'
import 'remixicon/fonts/remixicon.css'
import theme from 'theme'

const LayoutDefault = ({ children }: any) => <>{children}</>

function App({ Component, pageProps }: any) {
  const Layout = Component.Layout || LayoutDefault
  const layoutProps = pageProps.layoutProps || {}

  return (
    <ChakraProvider theme={theme}>
      {/* <Head>
        <title>Toxic free social network for teens</title>
        <meta name="description" content="webelong" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
