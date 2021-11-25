/** @format */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getPokemonData } from 'api';
import Image from 'next/image';
import { pokeDataInterface } from 'types';

const PokemonIdx = () => {
  const router = useRouter();
  const [pokeData, setPokeData] = useState<pokeDataInterface | null>(null);

  const getPokeData = async (pokemonIdx: string) => {
    try {
      const data = await getPokemonData(parseInt(pokemonIdx).toString());
      return await data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const pokemonIdx = router.query.pokemonIdx as string;
    getPokeData(pokemonIdx).then((response) => setPokeData(response));
  }, [setPokeData]);

  return pokeData ? (
    <>
      <Head>
        <title>Pokemon: {pokeData.name[0].toUpperCase() + pokeData.name.slice(1)}</title>
        <link rel='icon' href={'/images/icon.ico'} />
      </Head>
      <main
        className={
          'min-w-full h-screen bg-transparent flex align justify-center'
        }
      >
        <div className={'w-3/4 mx-auto min-h-full'}>
          <div className={'flex gap-4'}>
            <Image
              alt={pokeData.name}
              unoptimized
              width={400}
              height={400}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${router.query.pokemonIdx}.png`}
            />
            <div className={'flex flex-col justify-center space-y-2'}>
              <div className={'flex justify-between capitalize'}>
                <p className={'font-semibold'}>Name: </p>
                <p>{pokeData.name}</p>
              </div>
              <div className={'flex justify-between capitalize'}>
                <p className={'font-semibold'}>Height:</p>
                <p>{pokeData.height}</p>
              </div>
              <div className={'flex justify-between capitalize'}>
                <p className={'font-semibold'}>Weight:</p>
                <p>{pokeData.weight}</p>
              </div>
              <div className={'flex justify-between capitalize'}>
                <p className={'font-semibold'}>Base Experience:</p>
                <p>{pokeData.base_experience}</p>
              </div>
              <div
                className={
                  'grid grid-cols-3 justify-evenly capitalize font-semibold'
                }
              >
                <div>Stat</div>
                <div className={'text-center'}>Base Stat</div>
                <div className={'text-center'}>Effort</div>
              </div>
              {pokeData.stats.map((stat: any, idx: number) => {
                return (
                  <div
                    key={idx}
                    className={'grid grid-cols-3 justify-evenly capitalize'}
                  >
                    <div>{stat.stat.name}</div>
                    <div className={'text-center'}>{stat['base_stat']}</div>
                    <div className={'text-center'}>{stat.effort}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </>
  ) : (
    <Head>
      <title>Pokemon: Loading...</title>
      <link rel='icon' href={'/images/icon.ico'} />
    </Head>
  );
};

export default PokemonIdx;
