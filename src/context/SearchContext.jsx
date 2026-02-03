import { useState, useEffect, createContext, useContext } from "react";

export const SearchContext = createContext();

export function SearchProvider({children}){
    const[searchQuery, setSearchQuery] = useState("");
    const[movies, setMovies] = useState([]);
    const[error, setError] = useState(null);


    const searchMovies = async(query)=>{
        try{
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
            if(!response.ok){
                throw new Error("Cant find the movie")
            };
            const data = await response.json();
            const moviesWithPosters = data.results.filter(movie=> movie.poster_path);
            setMovies(moviesWithPosters)
        }catch(error){
            setError(error.message)
        }
    }

    useEffect(()=>{
        if(!searchQuery){
            setMovies([]);
            return;
        }
        const timer = setTimeout(()=>{
            if(searchQuery){
                searchMovies(searchQuery);
            }
        }, 500);
        return ()=> clearTimeout(timer);
    },[searchQuery]);


    const value = {searchQuery, setSearchQuery, movies, error,searchMovies}
    return(
        <SearchContext.Provider value={value} >
            {children}
        </SearchContext.Provider>
    )
}

export const useSearch = ()=>{
    const context = useContext(SearchContext);
    if(!context){
        throw new Error("Check the PROVIDER")
    };
    return context
}