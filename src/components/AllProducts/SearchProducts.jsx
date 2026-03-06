'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchProducts = () => {
    const params = useSearchParams()
    const router = useRouter()
    const handleSearch = (e) => {
        e.preventDefault()
        const newParams = new URLSearchParams(params)
        if(e.target.value){
            newParams.set('search', e.target.value)
        }else{
            newParams.delete('search')
        }
        // console.log(newParams.toString())
        // console.log(e.target.search.value)
        router.push(`/all-products?${newParams.toString()}`)
    }
    return (
        <div>
                <div className='relative flex items-center'>
                <input onChange={handleSearch} className='min-w-80 border border-gray-400 px-4 py-2 rounded-2xl' type="text" name="search" />
                <input className='btn btn-primary rounded-r-2xl absolute right-0' type="submit" value="Search" />
                </div>
        </div>
    );
};

export default SearchProducts;