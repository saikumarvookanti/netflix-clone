import React from 'react';
import "./SearchShow.css";

const baseURL="https://image.tmdb.org/t/p/original/";
const SearchShow = ({searchList}) => {
    return (
        <div className="search">
            <div className="search_fadeTop"></div>
            {searchList.data.results.map((movie)=>{
                return(
                    <>
                    <span className="search_data">
                    <img key={movie.id} className="search_poster" src={`${baseURL}${movie.poster_path}`} alt={movie.title} />
                    </span>
                    </>
                );
            })}
            
        </div>
    )
}

export default SearchShow
