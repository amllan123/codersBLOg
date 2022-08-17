import React from 'react'
import { IArticles } from '../types';
import BlogCard from './BlogCard';
import BlogCardWithImage from './BlogCardWithImage';
export interface IPropType{
   articles: IArticles[]
}

function ArticleList({articles}:IPropType) {
  return (
    <>
    
    <div className='grid lg:grid-cols-2   gird-gap gap-8 mt-10'>
       {
         articles.map((article,idx)=>{
          return<>
          {
          idx===1?<BlogCardWithImage items={article}/>:<BlogCard items={article} key={article.id}/>
         }
         </>
          
          
          // <BlogCardWithImage items={article}/>
            // return <BlogCard items={article} key={article.id}/>;
            
            
         })}     

       


    </div>
    
    </>
  )
}

export default ArticleList