import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navabar from '../components/Navabar';
import Footer from '../components/Footer';
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return(<>
  <div className='container mx-auto font-sans px-2  '>
  <NextNProgress 
   color="#53BD95"
   startPosition={0.2}
   stopDelayMs={200}
   height={3}
   showOnShallow={true}/>

     <Navabar/>
    <main className='pb-32'>
      <Component {...pageProps} /></main>

     <Footer/>
  
    
    </div>  
  </>);
  

  

  
}

export default MyApp
