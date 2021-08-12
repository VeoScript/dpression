import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Amakan</title>
      </Head>
      <div className="flex flex-row items-center justify-center w-full h-screen">
        <h1 className="font-bold text-xl text-[#484848]">Welcome to Amakan POS</h1>
      </div>
    </>
  )
}

export default Home
