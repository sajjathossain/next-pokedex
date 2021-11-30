/** @format */

import React from 'react';
import type { APIResponseInterface } from 'types';
import { makePublicUrl } from 'lib/routes';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useAtom } from 'jotai';
import { darkModeAtom } from 'store';

const PokeCard: React.FC<{ data: APIResponseInterface; idx: string }> = ({
  data,
  idx,
}) => {
  const router = useRouter();
  const [darkmode] = useAtom(darkModeAtom);
  const pushToURL = async () => {
    try {
      await router.push(makePublicUrl(`/pokemon/${idx}`));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`pokemon-card ${darkmode ? 'bg-gray-700' : 'bg-gray-50'}`}
      onClick={pushToURL}
    >
      <div className={'flex justify-self-center max-w-max mx-auto max-h-max'}>
        <Image
          alt={data.name}
          unoptimized
          height={200}
          width={200}
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${idx}.png`}
        />
      </div>
      <div className={`text-xl font-semibold capitalize text-center`}>
        {idx}. {data.name}
      </div>
    </div>
  );
};

export default PokeCard;
