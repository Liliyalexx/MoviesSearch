//hooks
import { useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'


//components
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

function App() {
  //useState
const [movieData, setMovieData]=useState(null);
// let apiKey='3d2947ac'

// console.log(import.meta.env.VITE_apiKey);

async function search(searchTerm){
  try {
    if(searchTerm ===''){
      let min = 1000000;
      let max = 2000000;
      let rand = Math.round(Math.random()*(max-min)+min);
      console.log(rand);

    }else{
      let res = await axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_apiKey}&i=tt${rand}`)
    }
    //Make an apiCall and save response in variable
    let res = await axios.get(`http://www.omdbapi.com/?apikey=${import.meta.env.VITE_apiKey}&t=${searchTerm}`)
    //Save response data in state
    setMovieData(res.data)
  } catch (err) {
    console.error(err)
  }
}
useEffect(()=>{
 search('');
},[])
  return (
    <>
     <Form movieSearch={search}/>
     {movieData?<MovieDisplay movie = {movieData}/>:<p>Nothing to show</p>}
    </>
  )
}

export default App
