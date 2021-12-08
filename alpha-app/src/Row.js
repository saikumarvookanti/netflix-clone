import React from 'react';
import { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer";

const baseURL="https://image.tmdb.org/t/p/original/";

function Row  ({title,fetchUrl,isLargeRow}) {
 const [Movies, setMovies] = useState([]);
 const [trailerUrl,setTrailerUrl]=useState('');
 useEffect(() => {
    async function fetchData(){
        const request=await axios.get(fetchUrl);
        setMovies(request.data.results);
    }
    fetchData();
 }, [fetchUrl]);

 const opts={
     height:"390",
     width:"100%",
     playerVars:{
         autoplay:1,
     }
 }

 const handleClick=(movie)=>{
     if(trailerUrl){
         setTrailerUrl('');
     }
     else{
        movieTrailer( movie?.name || "")
        .then((url) =>{
            console.log(url);
            const urlParams=new URLSearchParams( new URL(url).search);
            setTrailerUrl(urlParams.get('v'));

        })
        .catch((error)=>console.log(error));
     }

 }
    return (
        <div className="rowClass">
            <h2 className="row_title">{title}</h2>
            <div className="row_posters">
                {Movies.map(movie =>{return (
                    <img key={movie.id} onClick={()=>handleClick(movie)}className={`row_poster ${isLargeRow && "row_posterLarge"}`} src={`${baseURL}${isLargeRow ? movie.poster_path :movie.backdrop_path}`} alt={movie.name} />
                );})}
                
            </div>
           {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />  }
                </div>
    )
}

export default Row;
