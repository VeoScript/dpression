import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '~/layouts/default'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dpression</title>
      </Head>
      <Layout>
        <h1 className="font-ubuntu text-3xl">dpression</h1>
      </Layout>
    </>
  )
}

export default Home
