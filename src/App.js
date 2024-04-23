import {useEffect,useState} from "react";
import './App.css';
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
// 5a7e3b84
const API_URL='https://www.omdbapi.com/?i=tt3896198&apikey=bfd1869e';
const movie1={
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"
};

const App =() =>{
    const [movies, setMovies]=useState([]);
    const [searchTerm,setSearchTerm]=useState([]);
    // Call a function that is going to fetch our movies
    const SearchMovies=async(title)=>{
        const response =await fetch(`${API_URL}&s=${title}`);
        const data= await response.json();
        // console.log(data.Search); 
        setMovies(data.Search); 

    }
    useEffect(()=>{
        SearchMovies('all');
    },[]);
    return(
        <div className="app">
            <h1>Movie Show</h1>
            <div className="search">
                <input placeholder="Search for Movies " 
                value={searchTerm} 
                onChange={(e)=>setSearchTerm(e.target.value)}>
                </input>
                {/* <svg onClick={()=>{}} width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg"> 
                <path d="M29.8594 29.8594L39.4219 39.4219" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M17.9062 33.0469C26.2682 33.0469 33.0469 26.2682 33.0469 17.9062C33.0469 9.54431 26.2682 2.76562 17.9062 2.76562C9.54431 2.76562 2.76562 9.54431 2.76562 17.9062C2.76562 26.2682 9.54431 33.0469 17.9062 33.0469Z" stroke="#D88769" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/> 
                </svg> */}
                 <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                alt="search" onClick={()=>SearchMovies(searchTerm)}></img>
            </div>
            {
                movies?.length>0 
                ? (<div className="container">
                {/* <MovieCard movie1={movies[0]}></MovieCard> */}
                {movies.map((movie)=> (<MovieCard movie = {movie}></MovieCard>))}
            </div>
            ):(
                <div className="empty"> 
                    <h2>No movies Found!</h2>
                </div>
)
            }       
        </div>
    );
}
export default App;
