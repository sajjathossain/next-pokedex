import React, {ReactNode} from 'react';
import Navbar from "layouts/navbar";
import SearchPokemon from "components/search-pokemon";

const Layout: React.FC<ReactNode> = ({ children }) => {
    return (
        <div className={"max-w-screen min-h-screen bg-gray-200"}>
            <Navbar/>
            <SearchPokemon/>
            <main className={'py-4'}>
                {children}
            </main>
        </div>
    );
};

export default Layout;
