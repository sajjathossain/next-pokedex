import React from 'react';
import Link from 'next/link'
import {makePublicUrl} from "../../lib/routes";
import {useRouter} from "next/router";
import Image from 'next/image'
import {getLocalImagePath} from "../../lib/image";

const Navbar = () => {
    const router = useRouter()
    return (
        <div className={"w-full h-auto bg-gray-50 shadow-sm"}>
            <div className={"w-3/4 mx-auto flex justify-between items-center px-4 py-2"}>
            <div className={"h-full"}>
                <Image alt={"logo"} unoptimized width={100} height={40} src={getLocalImagePath("logo.svg")} />
            </div>
            <div className={"flex space-x-4 justify-evenly"}>
                <Link href={makePublicUrl("/home")}>
                    <p className={"link-hover"}>Home</p>
                </Link>
                <Link href={makePublicUrl("/about")}>
                    <p className={"link-hover"}>About</p>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Navbar;
