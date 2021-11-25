/** @format */

import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import PokeCard from 'components/poke-card';
import { useAtom } from 'jotai';
import { inputAtom, pokemonsAtom } from 'store';
import { useRouter } from 'next/router';
import { makePublicUrl } from 'lib/routes';
import { APIResponseInterface } from 'types';
import { getLocalImagePath } from '../../lib/image';

const Home: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState<APIResponseInterface[]>([]);
  const [pokemons] = useAtom(pokemonsAtom);
  const [input] = useAtom(inputAtom);

  useEffect(() => {
    const searches = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(input.toLowerCase()),
    );
    setData(searches);
    pokemons.length === 0 && router.push(makePublicUrl('/'));
  }, [input]);

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex App useing next.js" />
        <link rel="icon" href={getLocalImagePath('home.ico')} />
      </Head>

      <main className="w-3/4 mx-auto grid grid-cols-3 gap-6">
        {data ? (
          data.map((each, idx) => {
            return <PokeCard key={idx} idx={each.index} data={each} />;
          })
        ) : (
          <div
            className={
              'text-3xl text-yellow-500 font-semibold text-center w-full h-full'
            }
          >
            Loading...
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
