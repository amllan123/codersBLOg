import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Navabar() {
  return (
    <>
     <nav className="flex item-center justify-between py-6 sm:py-8  ">
      <Link href='/'>
           <div className='flex items-center cursor-pointer sm:py-2'>
             <Image src="/cod.png" height={40} width={40}/>
             <span className='font-bold ml-4 text-primary'>
                Coder's Blog
             </span>
           </div>
      </Link>

      <ul className='flex  items-center  flex-col sm:flex-row'>
        <li className='mr-6 font-medium text-gray-600'>
            <a href="#">Products</a>
        </li>
        <li className='mr-6 font-medium text-gray-600'>
            <a href="#">Pricing</a>
        </li>  <li className='mr-6 font-medium text-gray-600'>
            <a href="#">Docs</a>
        </li>  <li className='mr-6 font-medium text-gray-600'>
            <a href="#">Comapny</a>
        </li>
      </ul>


       <ul className=' flex items-center   text-grey-600 flex-col sm:flex-row '>
      <li className='mr-6'>  <a href="#" className='hover:text-gray-400 transition-all' >
            Log In
        </a></li>
        <li className=''>  <a href="#" className='bg-primary  py-1 px-2 rounded-sm text-white hover:bg-primary-dark transition-all'>
            Sign Up
        </a></li>
       </ul>
     </nav>
    
    </>
  )
}

export default Navabar