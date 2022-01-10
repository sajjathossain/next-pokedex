import type { GetServerSideProps, NextPage } from 'next';
import { useCallback, useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { inputAtom } from 'store';
import { getAllPokemons } from 'api';
import { APIResponseInterface } from 'types';
import Head from 'next/head';
import { getLocalImagePath } from 'lib/image';
import PokeCard from 'components/poke-card';

interface IProps {
  data: APIResponseInterface[];
}

const Index: NextPage<IProps> = ({ data }) => {
  const [pokemons, setPokemons] = useState<APIResponseInterface[]>([]);
  const [input] = useAtom(inputAtom);
  const stringified = JSON.stringify(data);

  const searchData = useCallback(() => {
    const searches = JSON.parse(stringified).filter(
      (pokemon: APIResponseInterface) =>
        pokemon.name.toLowerCase().includes(input.toLowerCase())
    );

    setPokemons(searches);
  }, [input, stringified]);

  // @desc this will run only on onmount
  useEffect(() => {
    setPokemons(data);
  }, [data]);

  useEffect(() => {
    searchData();
  }, [searchData]);

  return (
    <>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Pokedex App useing next.js" />
        <link rel="icon" href={getLocalImagePath('home.ico')} />
      </Head>

      <main className="w-3/4 mx-auto grid grid-cols-3 gap-6">
        {pokemons ? (
          pokemons.map((each, idx) => {
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

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await getAllPokemons();
  const data = await res.map((each: any, idx: number) => {
    return {
      ...each,
      index: ('00' + (idx + 1)).slice(-3),
    };
  });
  const sorted = await data.sort(
    (a: APIResponseInterface, b: APIResponseInterface) => a.name > b.name
  );
  return {
    props: {
      data: sorted,
    },
  };
};
