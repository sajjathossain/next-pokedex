/** @format */

import { atom } from 'jotai';
import { ResultInterface } from 'types';

export const pokemonsAtom = atom<ResultInterface[]>([]);
export const searchedPokemonAtom = atom<ResultInterface[]>([]);
export const inputAtom = atom<string>('');
