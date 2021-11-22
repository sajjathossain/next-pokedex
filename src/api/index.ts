import {ResultInterface} from "../types";
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/'

export const getAllPokemons = async (): Promise<ResultInterface[]> => {
    const res = await fetch(baseUrl);
    const data = await res.json();
    return data.results;
}