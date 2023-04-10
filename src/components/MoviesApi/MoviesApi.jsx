import MovieCard from "../Movies/Movies"
import React, { useEffect, useState } from "react"


const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=fd1210df2a8d5a285861160abceb6cbd"
const MoviesApi = () => {

const [movies, setMovies] = useState([])

useEffect(() => {
fetch(API_URL)
.then((res)=>res.json())
.then(data=> {
    console.log(data)
setMovies(data.results)
console.log(data)
})
}, [])

return (
    <div className="container">
        <div className="grid">
            {movies.map((movieReq)=> 
            <MovieCard key={movieReq.id} {...movieReq}/>)}
        </div>
    </div>
)
}

export default MoviesApi