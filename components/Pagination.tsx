import React from 'react'
import qs from 'qs';
import {useRouter} from 'next/router';
interface IProptype{
  page:number
  pageCount :number
  reDirectUrl:string
}

function Pagination({page,pageCount,reDirectUrl}:IProptype) {

  const router=useRouter();

  const handlePaginate=(direction:number)=>{
      if(direction===1 && isNextDisabled()){
        return;
      }
      if(direction===-1 && isPrevDisabled()){
        return;
      }
      
      const queryString=qs.stringify({
             
        ...router.query,

        page:page + direction,
      })

      router.push(`${reDirectUrl}?${queryString}`)
       
  }

  const isNextDisabled=()=>{
      return page>=pageCount;
  }
  const isPrevDisabled=()=>{
    return page<= 1 ;
}
  return (
    <>  <div className='flex  mt-6 justify-center'>
      <button className={`${'bg-primary py-2 px-2 text-white w-24 rounded hover:bg-primary-dark transition-all'} ${isPrevDisabled() ? 'disabled' : ''}`} onClick={() => handlePaginate(-1)}
      >Previous</button><button
        onClick={() => handlePaginate(1)}
        className={`${'bg-primary py-2 px-2 text-white w-24 rounded hover:bg-primary-dark transition-all ml-4'}  ${isNextDisabled() ? 'disabled' : ''}`}>Next</button>


    </div></>
  
  )
}

export default Pagination