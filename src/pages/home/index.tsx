import React, {useEffect, useState} from 'react';
import Head from "next/head";
import PokeCard from 'components/poke-card';
import {useAtom} from "jotai";
import {inputAtom, pokemonsAtom, searchedPokemonAtom} from "store";
import {useRouter} from "next/router";
import {makePublicUrl} from "../../lib/routes";

const Home = () => {
    const router = useRouter()
    const [data, setData] = useState<any>([]);
    const [searchData,] = useAtom(searchedPokemonAtom)
    const [pokemons,] = useAtom(pokemonsAtom)
    const [input,] = useAtom<string>(inputAtom)

    useEffect(() => {
        input && searchData ? setData(searchData) : setData(pokemons)
        !pokemons && router.push(makePublicUrl('/'));
    }, [input, data, searchData]);

    return (
        <>
            <Head>
                <title>Home</title>
                <meta name="description" content="Pokedex App useing next.js"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className="w-3/4 mx-auto grid grid-cols-3 gap-6">
                {
                    data ? data.map((each: any, idx: number) => {
                        return <PokeCard key={idx} idx={each.index} data={each}/>
                    }) : <div
                        className={"text-3xl text-yellow-500 font-semibold text-center w-full h-full"}>Loading...</div>
                }
            </main>
        </>
    );
};

export default Home;
