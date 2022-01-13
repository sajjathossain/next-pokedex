/** @format */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { getPokemonData } from 'api';
import Image from 'next/image';
import { getLocalImagePath } from '../../../lib/image';
import { useQuery } from 'react-query';

const PokemonIdx = () => {
  const router = useRouter();

  const getPokeData = async ({ queryKey }: { queryKey: any }) => {
    const data = await getPokemonData(parseInt(queryKey[1]).toString());
    return data;
  };

  const { data, isLoading } = useQuery(
    ['pokemon', router.query.pokemonIdx],
    getPokeData
  );

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Pokemon: Loading...</title>
          <link rel="icon" href={getLocalImagePath('/icon.ico')} />
        </Head>
        <div className="text-3xl text-yellow-500 text-center font-semibold">
          Loading data
        </div>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>
          Pokemon: {data.name[0].toUpperCase() + data.name.slice(1)}
        </title>
        <link rel="icon" href={getLocalImagePath('/icon.ico')} />
      </Head>
      <main
        className={
          'min-w-full h-screen bg-transparent flex align justify-center'
        }
      >
        <div className={'w-3/4 mx-auto min-h-full'}>
          <div className={'flex gap-4'}>
            <Image
              alt={data.name}
              unoptimized
              width={400}
              height={400}
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${router.query.pokemonIdx}.png`}
            />
            <div
              className={`flex flex-col justify-center space-y-2
              `}
            >
              <div className={'flex justify-between capitalize'}>
                <p className={'font-semibold'}>Name: </p>
                <p>{data.name}</p>
              </div>
              <div className={'flex justify-between capitalize'}>
                <p className={'font-semibold'}>Height:</p>
                <p>{data.height}</p>
              </div>
              <div className={'flex justify-between capitalize'}>
                <p className={'font-semibold'}>Weight:</p>
                <p>{data.weight}</p>
              </div>
              <div className={'flex justify-between capitalize'}>
                <p className={'font-semibold'}>Base Experience:</p>
                <p>{data.base_experience}</p>
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
              {data.stats.map((stat: any, idx: number) => {
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
  );
};

export default PokemonIdx;
