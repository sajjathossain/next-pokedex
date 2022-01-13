/** @format */

import React from 'react';
import type { APIResponseInterface } from 'types';
import { makePublicUrl } from 'lib/routes';
import Image from 'next/image';
import { useAtom } from 'jotai';
import { darkModeAtom } from 'store';
import Link from 'next/link';

interface IProps {
  data: APIResponseInterface;
  idx: string;
}

const PokeCard: React.FC<IProps> = ({ data, idx }) => {
  const [darkmode] = useAtom(darkModeAtom);

  return (
    <Link passHref href={makePublicUrl(`/pokemons/${idx}`)}>
      <div
        className={`pokemon-card ${darkmode ? 'bg-gray-700' : 'bg-gray-50'}`}
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
    </Link>
  );
};

export default PokeCard;
