import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";



export const FavoritesContext = createContext();

export function FavoritesProvider({children}){
    const[favorites, setFavorites] = useState([]);

    useEffect(()=>{
        const favs = localStorage.getItem("favorites");
        if(favs){
            setFavorites(JSON.parse(favs))
        }
    },[])


    const addToFavorite = (movie)=>{
        const found = favorites.some(favorite => favorite.id === movie.id);
        if(!found){
            const newFavorites = [...favorites, movie];
            setFavorites(newFavorites);
            toast.success(`${movie.title}, ADDED TO FAVORITE`)
            localStorage.setItem("favorites", JSON.stringify(newFavorites))
        }

    };

    const removeFavorite = (ID)=>{
        const deleted = favorites.filter(favorite => favorite.id !== ID);
        setFavorites(deleted);
        toast.error('Removed from favorites');
        localStorage.setItem("favorites", JSON.stringify(deleted))
    };


    const value = {favorites,
            addToFavorite,
            removeFavorite
    };


    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorite = ()=>{
    const context = useContext(FavoritesContext);
    if(!context){
        throw new Error("Check PROVIDER!")
    };
    return context
}


