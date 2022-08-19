import React from 'react'
import Link from 'next/link'
import { ICategory } from '../types'
import {useRouter} from 'next/router';
import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearchengin} from '@fortawesome/free-brands-svg-icons'

interface IPropType{
    categories: ICategory[]
    handleOnsearch:(query:string)=>void

}
function Tab({categories, handleOnsearch}:IPropType) {
  const router=useRouter();
 
  
  const iscategory=(category:ICategory)=>{

    return category.attributes.Slug===router.query.category;
  }
  

  
  
  return (
   
   <>
  <div className=' border-b-2 my-1 flex items-center justify-between  border-gray-100 '>
<ul className='flex  items-center'>
  <li className={'mr-6 pb-4 border-b-4 '+`
       ${
         
         router.pathname==='/'
         ?'border-primary text-primary'
         :'border-white  text-gray-500' 
     
     
     }`}> <Link href="/">Recent</Link></li>
  {
    categories.map(category=>{
       return ( 
     
       
       <li
       key={category.id}
       className={'mr-6 pb-4 border-b-4 '+`
       ${
         
         iscategory(category)
         ?'border-primary text-primary'
         :'border-white  text-gray-500' 
     
     
     }`}>

<Link href={`/Category/${category.attributes.Slug}`}>{category.attributes.Title}</Link> 
       </li>)

    })
  }
 
</ul>



<div className='flex  items-center mb-4' >
<FontAwesomeIcon icon={faSearchengin}  style={{ fontSize: 20, color: "gray" }}/>
<input 
onChange={(e)=>handleOnsearch(e.target.value)}
placeholder='Search'
type="text"
className='mr-8 ml-4 text-gray-400 outline-none '
                 
                    />

</div>


</div> 
   </>
  )
}

export default Tab