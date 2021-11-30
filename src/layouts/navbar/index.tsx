/** @format */

import React from 'react';
import Link from 'next/link';
import { makePublicUrl } from 'lib/routes';
import Image from 'next/image';
import { getLocalImagePath } from 'lib/image';
import { useAtom } from 'jotai';
import { darkModeAtom } from 'store';

const Navbar = () => {
  const [darkmode, setDarkMode] = useAtom(darkModeAtom);
  const urls = [
    {
      path: '/home',
      name: 'Home',
    },
    {
      path: '/about',
      name: 'About',
    },
  ];

  const changeTheme = () => {
    setDarkMode(!darkmode);
  };

  return (
    <div
      className={`w-full h-auto ${
        darkmode ? 'bg-gray-700' : 'bg-gray-50'
      } shadow-sm`}
    >
      <div
        className={'w-3/4 mx-auto flex justify-between items-center px-4 py-2'}
      >
        <div className={'h-full cursor-pointer'}>
          <Link passHref href={makePublicUrl(urls[0].path)}>
            <Image
              alt={'logo'}
              unoptimized
              width={100}
              height={40}
              src={getLocalImagePath('logo.svg')}
            />
          </Link>
        </div>
        <div className={`flex space-x-4 justify-evenly`}>
          {urls.map((url, idx) => {
            return (
              <Link passHref key={idx} href={makePublicUrl(url.path)}>
                <p className={`link-hover ${darkmode && 'text-gray-100'}`}>
                  {url.name}
                </p>
              </Link>
            );
          })}
          <div className={`font-semibold cursor-pointer`} onClick={changeTheme}>
            {darkmode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke="bg-yellow-900"
                  fill="bg-yellow-900"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="bg-gray-100"
                viewBox="0 0 24 24"
                stroke="bg-gray-900"
              >
                <path
                  fill="bg-gray-900"
                  stroke="bg-gray-900"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
