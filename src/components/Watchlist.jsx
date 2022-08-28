import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({list, removeMovie}) => {
    const movieDisplay =list.map((movie, index)=> {
        return <MovieCard key={index} removeMovie={removeMovie} list={list} git movie={movie}/>
    });
    // console.log(list)
    return (
        <div className="watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">
             {movieDisplay} 
            </div>
        </div>
    );
};
export default Watchlist;