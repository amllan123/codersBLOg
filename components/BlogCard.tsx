import Link from 'next/link';
import Image from 'next/image';
import React from 'react'
import { IArticles } from '../types'
import {formatDate} from '../utils/index'
import { it } from 'node:test';
interface IPropType{
    items:IArticles;
}

const BlogCard = ({items}:IPropType) => {
  const url=process.env.API_URL;
  return (
    
    <div>
    <Link href={`/article/${items.attributes.Slug}`}>
            <h1 className=' text-lg text-gray-600 font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary'>{items.attributes.Title}</h1>
            
    </Link>
    <div className='flex items-center my-4'>
        <div className=' rounded-lg overflow-hidden flex items-center justify-center mr-2'>
            <Image src={`${url}${items.attributes.author.data.attributes.avtar.data.attributes.formats.thumbnail.url}`}
            height={40}
            width={40}
            />
        </div>
        <span className='text-sm font-bold text-gray-600'>
            {items.attributes.author.data.attributes.firstname}{" "}
            {items.attributes.author.data.attributes.lastname} on   </span>
        <span className='text-sm font-normal text-gray-400 ml-2'>
                {formatDate(items.attributes.createdAt)}
               
        </span>
    </div>


    <div className='text-gray-500'>
    {items.attributes.shortDescription.slice(0,250)} {items.attributes.shortDescription.length>=250?"...":" "}

    </div>

    </div>
  )
}

export default BlogCard