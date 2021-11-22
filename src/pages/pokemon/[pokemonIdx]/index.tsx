import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router'
import Head from 'next/head'
import {getPokemonData} from 'api'
import Image from "next/image";

const PokemonIdx = () => {
    const router = useRouter();
    const [pokeData, setPokeData] = useState<any | null>(null);

    const getPokeData = async (pokemonIdx: string) => {
        try {
            const data = await getPokemonData(parseInt(pokemonIdx).toString())
            return await data;
        } catch (error) {
            console.log("pokeidx", error);
        }
    }

    useEffect(() => {
        const pokemonIdx = router.query?.pokemonIdx as string
        getPokeData(pokemonIdx).then(response => setPokeData(response))
    },[setPokeData])

    return pokeData ? (
        <>
            <Head>
                <title>{pokeData.name.toUpperCase()}</title>
            </Head>
            <main className={"min-w-full h-screen bg-transparent"}>
                <div className={"w-3/4 mx-auto min-h-full"}>
                    <div className={"flex gap-4"}>
                        <Image alt={pokeData.name} unoptimized width={400} height={400} src={pokeData.sprites.other["official-artwork"]["front_default"]} />
                        <div className={"flex flex-col justify-center space-y-2"}>
                            <div className={"text-xl font-medium capitalize"}>Name: {pokeData.name}</div>
                            <div>Height: {pokeData.height}</div>
                            <div>Base Experience: {pokeData["base_experience"]}</div>
                            { pokeData.stats.map((stat: any, idx: number) => {
                                return (
                                    <div key={idx} className={"grid grid-cols-3 space-x-4 capitalize"}>
                                        <div>{stat.stat.name}</div>
                                        <div>{stat["base_stat"]}</div>
                                        <div>{stat.effort}</div>
                                    </div>
                                )
                            }) }
                        </div>
                    </div>
                </div>
            </main>
        </>
    ) : null;
};

export default PokemonIdx;
