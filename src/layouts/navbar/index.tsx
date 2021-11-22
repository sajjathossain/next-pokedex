import React from 'react';
import Link from 'next/link'
import {makePublicUrl} from "../../lib/routes";
import {useRouter} from "next/router";

const Navbar = () => {
    const router = useRouter()
    return (
        <div className={"w-full h-auto bg-gray-50 flex justify-between items-center px-4 py-2 shadow-sm"}>
            <div className={"text-2xl"}>Next Pokedex</div>
            <div className={"flex space-x-4 justify-evenly"}>
                <Link href={makePublicUrl("/home")}>
                    <p className={"link-hover"}>Home</p>
                </Link>
                <Link href={makePublicUrl("/about")}>
                    <p className={"link-hover"}>About</p>
                    </Link>
            </div>
        </div>
    );
};

export default Navbar;
