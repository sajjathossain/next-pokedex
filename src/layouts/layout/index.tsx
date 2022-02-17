/** @format */

import React, { ReactNode } from 'react';
// import Navbar from 'layouts/navbar';
import SearchPokemon from 'components/search-pokemon';
import { useAtom } from 'jotai';
import { darkModeAtom } from 'store';
import loadable from '@loadable/component';

const Navbar = loadable(() => import('layouts/navbar'));

const Layout: React.FC<ReactNode> = ({ children }) => {
  const [darkmode] = useAtom(darkModeAtom);

  return (
    <div
      className={` max-w-screen min-h-screen  ${
        darkmode ? 'dark bg-gray-800 text-gray-100' : 'bg-gray-100'
      }`}
    >
      <Navbar />
      <SearchPokemon />
      <main className={'py-4'}>{children}</main>
    </div>
  );
};

export default Layout;
