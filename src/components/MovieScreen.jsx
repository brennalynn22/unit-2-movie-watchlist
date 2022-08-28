import React from "react";
import MovieCard from "./MovieCard";


const MovieScreen = ({movieList,list, setPage, page, addMovie, removeMovie}) => {
    const increment =() => setPage(page+1);

    const decrement= () => setPage(page-1);

    const movieDisplay = movieList.map((movie, index)=>{
        return  <MovieCard key={index} list={list} removeMovie={removeMovie} movie={movie} addMovie ={addMovie}/>; 
    });

    

    return (
        <div className="page">
            <h1>Breezy's Movie Theatre</h1>
            <h3>Add a movie to your watchlist</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">
                {movieDisplay}
            </div>
            
        </div>
    );

};

export default MovieScreen