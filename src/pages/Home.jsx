import { useState, useEffect } from "react";
import MovieList from "../components/MoviesList";
import { TfiFaceSad } from "react-icons/tfi";

function Home(){
    const[movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);


    useEffect(()=>{
        fetchMovies();
    }, []);

    const fetchMovies = async()=>{
        setLoading(true)
        try{
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            if(!response.ok){
                throw new Error("Something went wrong!")
            };
            const data = await response.json()
            setMovies(data.results)
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };

    if(loading){
        return <h1 className="text-center text-bold pt-20 text-2xl text-green-400 animate-bounce">LOADING...</h1>
    };
    if(error){
        return <h1 className="text-center text-bold pt-20 text-2xl text-redd-400 animate-bounce">Something went wrong...<TfiFaceSad /></h1>
    };


    return(
        <div>
            <MovieList movies={movies} />
        </div>
    )
}

export default Home;