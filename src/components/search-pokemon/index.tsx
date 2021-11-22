import React, {ChangeEventHandler, useState} from 'react';

const SearchPokemon = () => {
    const [data, setData] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const eventTarget = event.target as HTMLInputElement
        setData(eventTarget.value)
    }

    const handleSearch = () => {
        alert(data)
    }

    return (
        <div className={"w-3/4 mx-auto flex justify-center mt-4 "}>
            <div className={"flex rounded-full px-4 w-2/4 max-h-max bg-gray-100 focus-within:ring-2 ring-blue-600"}>
                <input onChange={handleChange} value={data} className={"ring-0 outline-none border-0 h-10 bg-transparent flex flex-1"} type="text" placeholder={"Enter any pokemon name*"} autoComplete={"none"} required/>
                <button className={"w-auto"} onClick={handleSearch}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default SearchPokemon;
