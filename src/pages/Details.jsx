import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import { useFavorite } from "../context/FavoritesContext";

function Details(){
    const[movie, setMovie] = useState(null);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[trailer, setTrailer] = useState(null);

    const {addToFavorite, removeFavorite, favorites} = useFavorite();

    const isFavorite = movie ? favorites.some(favorite => favorite.id === movie.id) : false;

    const{id} = useParams();

    const favTrue = "bg-gradient-to-r from-green-300 via-emerald-500 to-emerald-700 pl-1 pr-1 border-1 rounded hover:scale-105 duration-300 active:animate-pop"
    const favFalse = "bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 pl-1 pr-1 border-1 rounded hover:scale-105 duration-300 active:animate-pop"


    useEffect(()=>{
        fetchID();
        fetchTrailer();
    }, [id])

    const fetchID = async()=>{
        setLoading(true);
        try{
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
            if(!response.ok){
                throw new Error("Something went wrong")
            };
            const data = await response.json()
            setMovie(data);
        }catch(error){
            setError(error.message)
        }finally{
            setLoading(false)
        };
    };

    const fetchTrailer = async()=>{
        try{
            const API_KEY = import.meta.env.VITE_TMDB_API_KEY
            const url =(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}`)

            const response = await fetch(url)
            const data = await response.json()

            const trailerVideo = data.results.find(
                video => video.type === "Trailer" && video.site === "YouTube"
            )

            

            if(trailerVideo){
                setTrailer(trailerVideo.key)
            }
        }catch(error){
            console.log("No trailer found")
        } 
    }

    if(loading){
            return <h1 className="text-center pt-20 text-bold text-2xl text-green-400 animate-bounce">LOADING...</h1>
        };
        if(error){
            return <h1 className="text-center pt-20 text-bold text-2xl text-redd-400 animate-bounce">Something went wrong...<TfiFaceSad /></h1>
        };
    

    
    return(
    <div>
        {movie && <MovieDetails movie={movie}/>}
        <h1 className="pt-3 font-bold ml-1">🎥Trailers:</h1>
        {trailer && (
             <iframe
                width="390"
                height="315"
                src={`https://www.youtube.com/embed/${trailer}`}
                allowFullScreen />
        )}
        <div className="flex justify-center py-6">
            <button className={isFavorite ? favTrue : favFalse }
                onClick={()=> isFavorite ? removeFavorite(movie.id) : addToFavorite(movie)}>Favorite</button>
        </div>
    </div>)
}

export default Details;