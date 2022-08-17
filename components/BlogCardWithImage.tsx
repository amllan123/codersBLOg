import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { IArticles} from '../types'
interface IPropType{
    items:IArticles
}

const BlogCardWithImage = ({items}:IPropType) => {
  return (
    <>
     <div className=' bg-gradient-to-r from-violet-500 to-violet-900 rounded-md flex items-center h-64'>
         
         <Link href={`/article/${items.attributes.Slug}`}>

            <span className="text-2xl w-2/3 text-white p-6 font-bold  after:content-[''] after:bg-primary after:block  after:w-16 after:h-2 after:rounded-md after:mt-2 cursor-pointer">
                {items.attributes.Title}
            </span>
         </Link>

         <Image src='/gitbook-icon.svg'
            height={100}
            width={100} />
        
        
        </div> 
    
    
    </>
  )
}

export default BlogCardWithImage