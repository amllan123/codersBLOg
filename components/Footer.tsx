import React from 'react'

import Image from 'next/image';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram,faTwitter,faLinkedinIn,} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link';



function Footer() {
  
  const newLocal = "https://www.instagram.com/amllan/";
  return (<>
  <footer className=' container  bottom-0  mb-0 '>
 <div className='container mx-auto flex items-center   justify-between  flex-col sm:flex-row py-8  '>
  <a href="/" className='flex items-center justify-center md:justify-start text-gray-900'>
  
   <Image src="/cod.png" height={30} width={30}/>
   <span className=' font-normal ml-4 text-primary'>
    Coders Blog
     </span>
     <div className='text-gray-600 m-2'><span className=' text-sm  font-normal text-gray-600'>| © 2022 @CodeAmllan</span> </div>
  </a>

  
  <div> 
    <ul className='flex'>
   <li><a href={newLocal} className=' mr-3  ml-2'><FontAwesomeIcon icon={faInstagram }   style={{ fontSize: 20, color: "gray" }}/></a></li>
   <li> <a href="#" className='mr-3 '><FontAwesomeIcon  icon={faTwitter}  style={{ fontSize: 20, color: "gray",  }} /></a></li>
    
   <li><a href="https://www.linkedin.com/in/amllan-bhukta-88611220b/" className='mr-3'><FontAwesomeIcon icon={faLinkedinIn}  style={{ fontSize: 20, color: "gray" }}/></a></li>

    </ul>
    
   

  </div>
  

 </div>
 </footer>
  </>
    
  );
}

export default Footer