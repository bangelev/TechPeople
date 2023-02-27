import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import Layout from '../components/layout/Layout'
import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import Loading from '../components/layout/Loading'
import '../styles/gameCollage.css'
import '../styles/index.css'
import '../styles/login.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Tech People" key="title" />
        <link href="/favicon3.png" rel="icon" />
      </Head>
      <SessionProvider session={session}>
        <NextUIProvider>
          <Layout>
            <Loading />
            <Component {...pageProps} />
          </Layout>
        </NextUIProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
