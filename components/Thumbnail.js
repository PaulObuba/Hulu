import { ThumbUpIcon } from "@heroicons/react/outline";
import Image from "next/image";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ result }, ref) => {
    const BASE_URL = 'https://image.tmdb.org/t/p/w500'
    console.log(result)
    return (
        <div ref={ref}
        className='group cursor-pointer p-2 transform transition duration-200 ease-in sm:hover:scale-105 hover:z-50'>
            <Image
            className='rounded-md'
                layout='responsive'
                src={`${BASE_URL}${result.poster_path}`}
                height={1000}
                width={1920}
            />
            <div>
                <p className='truncate max-w-md p-2'>{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{result.title || result.original_title}</h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.release_date}
                    <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumbnail;
