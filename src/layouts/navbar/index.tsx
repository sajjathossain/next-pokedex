import React from 'react';
import Link from 'next/link'
import {makePublicUrl} from "../../lib/routes";
import Image from 'next/image'
import {getLocalImagePath} from "../../lib/image";

const Navbar = () => {
    const urls = [
        {
            path: "/",
            name: "Home"
        }, {
            path: "/about",
            name: "About"
        }];

    return (
        <div className={"w-full h-auto bg-gray-50 shadow-sm"}>
            <div className={"w-3/4 mx-auto flex justify-between items-center px-4 py-2"}>
                <div className={"h-full cursor-pointer"}>
                    <Link href={"/"}>
                        <Image alt={"logo"} unoptimized width={100} height={40} src={getLocalImagePath("logo.svg")}/>
                    </Link>
                </div>
                <div className={"flex space-x-4 justify-evenly"}>
                    {urls.map((url, idx) => {
                        return (
                            <Link key={idx} href={makePublicUrl(url.path)}>
                                <p className={"link-hover"}>{url.name}</p>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
