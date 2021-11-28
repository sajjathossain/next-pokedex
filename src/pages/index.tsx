import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { makePublicUrl } from 'lib/routes';
import { useAtom } from 'jotai';
import { pokemonsAtom } from 'store';
import { getAllPokemons } from 'api';
import { APIResponseInterface } from '../types';
import { APIResponseInterface } from 'types';

const Index: NextPage = () => {
  const router = useRouter();
  const [pokemon, setPokemon] = useAtom(pokemonsAtom);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllPokemons();
        const data = await res.map((each: any, idx: number) => {
          return {
            ...each,
            index: ('00' + (idx + 1)).slice(-3),
          };
        });
        return await data.sort(
          (a: APIResponseInterface, b: APIResponseInterface) => a.name > b.name
        );
      } catch (error) {
        console.log(error);
      }
    };

    getData().then((res) => setPokemon(res));
    pokemon.length > 0 && router.push(makePublicUrl('/home'));
  }, [pokemon]);

  return null;
};

export default Index;
