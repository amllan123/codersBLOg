import { serialize } from 'next-mdx-remote/serialize';
import { IArticles } from '../types';

export const formatDate=(dateString:string):string=>{

    const date=new Date(dateString).toLocaleDateString('en-in',{
     year:'numeric',
     month:'long',
     day:'numeric'

    })

return date;
}

export const debounce=(fn:()=>void,timeout=300)=>{
  let timer:NodeJS.Timeout;

     const debounced=(...args:any)=>{
        clearTimeout(timer);
        timer=setTimeout(() => {
            fn.apply(this,args);
        }, timeout);
     }

     return debounced;

}

export const serializemarkdown= async(item:IArticles)=>{
const body = await  serialize(item.attributes.Body as string);
return{
    ...item,
    attributes:{
        ...item.attributes,
        Body:body
    }
}
 
}