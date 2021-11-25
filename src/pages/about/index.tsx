/** @format */

import React from 'react';
import Head from 'next/head';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Pokedex App useing next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={'w-full h-auto grid place-items-center'}>
        <p className={'text-3xl'}>
          This is a simple Pokedex app use Pokemon API.
        </p>
      </main>
    </>
  );
};

export default About;
