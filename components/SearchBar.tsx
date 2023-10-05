'use client'
import { debounce } from 'lodash';
import React, { ChangeEvent, useCallback, useState } from 'react';
import axios from 'axios';
import { Products } from '../types/products';
import { useRouter } from 'next/router';

const SearchBar = () => {
    const [input, setInput] = useState('');
    const [searchResult, setSearchResult] = useState<Products[]>([]);
    const router = useRouter();

    const debounceFn = useCallback(debounce(handleDebounceFn, 1000), []);
    function handleDebounceFn(input) {
        axios.get('https://api.escuelajs.co/api/v1/products/', {
            params: {
                title: input
            }
        }).then((res: any) => {
            console.log('res =>', res.data);
            
            setSearchResult(res.data);
        });
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        e.preventDefault;
        setInput(e.target.value);
        debounceFn(e.target.value);
    }

    function handleNavigation(id: number) {
        router.push('/products/' + id);
        setSearchResult([]);
    }

    return (
        <div className="form-control relative">
            <input value={input} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto relative" onChange={handleChange} />
           {searchResult.length > 0 && <div id="nay" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-55 absolute top-16">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
                    {searchResult?.slice(0,10)?.map(item => {
                        return (
                            <li key={item.id}>
                                <button onClick={() => handleNavigation(item.id)} type="button" className="inline-flex w-full text-black px-4 py-2 hover:bg-white-500 dark:hover:bg-gray-600 dark:hover:text-white">{item.title}</button>
                            </li>
                        )
                    }
                    )
                    }
                </ul>
            </div>}
        </div>
    )
}

export default SearchBar