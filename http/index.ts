import axios from 'axios';


const api=axios.create({
baseURL:process.env.API_URL,
headers:{
    Authorization:`${process.env.AUTH_TOKEN}`
}

 
});

//category fetching
export const fetchCategories = async()=>api.get('/api/categories');

//article list fetching
 export const fetcArticles=async(queryString:string)=>api.get(`/api/articles?${queryString}`);

 //individual article fetch
 export const fetchArticle=async(queryString:string)=>api.get(`/api/articles?${queryString}`);