import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {ResultInterface} from "../../types";
import {getAllPokemons} from "../../api";
import PokeCard from 'components/poke-card'

const Home = () => {
    const [data, setData] = useState<ResultInterface[] | null>(null);
    useEffect(() => {
        const getData = () => {
            return getAllPokemons()
        }

        getData().then(response => setData(response))
    }, [setData])

    return (
        <>
           <Head>
                <title>Home</title>
                <meta name="description" content="Pokedex App useing next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-3/4 mx-auto grid grid-cols-3 gap-6">
                {
                    data ? data.map((each, idx) => {
                     return <PokeCard key={idx} idx={idx} data={each} />
                    }) : <div className={"text-3xl text-yellow-500 font-semibold text-center w-full h-full"}>Loading...</div>
                }
            </main>
        </>
    );
};

export default Home;
