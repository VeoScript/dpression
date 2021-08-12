import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dpression</title>
      </Head>
      <div className="flex flex-row items-center justify-center w-full h-screen">
        <h1 className="font-ubuntu text-3xl text-uranus-dim">dpression</h1>
      </div>
    </>
  )
}

export default Home
