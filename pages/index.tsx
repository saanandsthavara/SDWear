/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>SDWear - Feel Fashion</title>
        <meta
          name='description'
          content='SDWear - Feel Fashion'></meta>
      </Head>
      <Navbar />
      <img
        src='/background.png'
        alt=''
        width='100%'
      />
      <Footer />
    </div>
  );
};

export default Home;
