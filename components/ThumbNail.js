import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'


const ThumbNail = ({ result }) => {
    // now if u see the results objeect in console u will see that the image is in a string format to make it a url we need a base_url
    const BASE_URL = "https://image.tmdb.org/t/p/original/"
    return (
        <div className='group cursor-pointer m-2 mb-4 p-2 border border-slate-800 transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image
                // it could be in 1 out 0f 3 places
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
                    `${BASE_URL}${result.poster_path}`}
                width={100}
                height={100}
                
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>

                <h1 className='mt-2 text-xl transition duration-100 ease-in-out group-hover:font-bold'>{result.title || result.original_name}</h1>

                {/* ?if mediatype is given */}
                <p className='flex items-center opacity-40 group-hover:opacity-100'>{result.media_type && `${result.media_type} `}  _  {" "}
                    {result.release_date || result.first_air_date}.{" "}
                    <ThumbUpIcon className='h-5 mx-2' />
                    {result.vote_count}
                </p>
            </div>
        </div>

    )
}

export default ThumbNail