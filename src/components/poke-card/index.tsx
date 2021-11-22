import React from 'react';
import type {ResultInterface} from "../../types";
import Link from "next/link";
import {makePublicUrl} from "../../lib/routes";
import Image from "next/image";

const PokeCard: React.FC<{data: ResultInterface, idx: number}> = ({ data, idx }) => {
    return (
        <Link href={makePublicUrl(`/pokemon/${idx+1}`)} >
            <div className={"pokemon-card"}>
                <div className={"flex justify-self-center max-w-max mx-auto max-h-max"}>
                    <Image alt={data.name} unoptimized height={200} width={200} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idx+1}.png`} />
                </div>
                <div className={"text-xl font-semibold capitalize text-center"}>{idx+1}. {data.name}</div>
            </div>
        </Link>
    );
};

export default PokeCard;
