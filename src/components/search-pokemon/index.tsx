/** @format */

import React, { useCallback } from 'react';
import { useAtom } from 'jotai';
import { darkModeAtom, inputAtom } from 'store';

const SearchPokemon = () => {
  const [data, setData] = useAtom(inputAtom);
  const [darkmode] = useAtom(darkModeAtom);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const eventTarget = event.target as HTMLInputElement;
      setData(eventTarget.value);
    },
    [setData]
  );

  return (
    <div className={'w-3/4 mx-auto flex justify-center mt-4 bg-transparent'}>
      <div
        className={`flex rounded-full px-4 w-2/4 max-h-max ${
          darkmode ? 'bg-gray-600' : 'bg-gray-50'
        } focus-within:ring-2 ring-blue-600`}
      >
        <input
          onChange={handleChange}
          value={data}
          className={`ring-0 outline-none border-0 h-10 bg-transparent flex flex-1
          `}
          type="text"
          placeholder={'Enter any pokemon name*'}
          autoComplete={'none'}
          required
        />
        <button className={'w-auto pointer-events-none'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 focus-within:text-blue-600
            `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchPokemon;
