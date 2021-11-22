import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {ResultInterface} from "../../types";
import {getAllPokemons} from "../../api";

const initialState = [
    {
        name: "",
        url: ""
    }
]

const Home = () => {
    const [data, setData] = useState<ResultInterface[]>(initialState);
    useEffect(() => {
        const getData = async () => {
            return await getAllPokemons()
        }

        getData().then(response => setData(response))
    }, [setData])

    console.table(data)

    return (
        <>
           <Head>
                <title>Home</title>
                <meta name="description" content="Pokedex App useing next.js" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
            </main>
        </>
    );
};

export default Home;
