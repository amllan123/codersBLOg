import { MDXRemote,MDXRemoteSerializeResult } from 'next-mdx-remote'
export interface ICollectionResponse<T>{

    data:T
    meta:IResourceMeta;

}

export interface ICategory{
id:number;
attributes:ICategoryAttribute;


}

export interface ICategoryAttribute{

    Title:string;
    Slug:string
}

export interface IResourceMeta{
    pagination:IPagination;
}

export interface IPagination{
    page:number;
    pageSize:number;
    pageCount:number;
    total:number;

}

export interface IImageData{
      data:{
        attributes:{
         url:string;
         formats:{
            small:{
                url:string
            }
         }
        }
      }

}

export interface IAuthor{
    data:{
        attributes:{
            firstname:string
            lastname:string
            avtar:{
                data:{
                    attributes:{
                        formats:{
                            thumbnail:{
                                url:string
                            }
                        }
                    }
                }
            }

        }
    }
}
export interface IArticleAtrribute{
    Title:string
    Body:string | MDXRemoteSerializeResult;
    Slug:string
    Image:IImageData;
    createdAt:string 
    author:IAuthor;
    shortDescription:string
}

export interface IArticles{
id:number;
attributes:IArticleAtrribute;

} 


export interface IQueryOption{

    filters:any;
    populate:any
    sort:any;
    pagination:{
        page:number
        pageSize:number
    }
}