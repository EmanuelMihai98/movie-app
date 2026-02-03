import { useFavorite } from "../context/FavoritesContext";
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";

function Favorites(){

    const {removeFavorite, favorites} = useFavorite();

    const count = favorites.length
    
    return(
        <div className="space-y-5 py-5">
            <h1 className="text-center font-bold text-xl bg-gradient-to-r from-pink-700 to-blue-600 bg-clip-text text-transparent">You have {count} favorites!</h1>
            {favorites.map(favorite => (
                <div key={favorite.id}
                    className="flex items-center gap-10 ml-2">
                    <Link to={`/details/${favorite.id}`}>
                        {favorite && (
                            <img src={`https://image.tmdb.org/t/p/w500${favorite.poster_path}`}
                             alt={favorite.title}
                             style={{width: "250px"}}
                             className="hover:rotate-2 transition-transform"
                             />)}
                    </Link>
                    <button className="h-fit  pl-4  pr-4 py-1 rounded bg-gradient-to-r from-red-500 via-red-700 to-red-900 border border-gray-900 hover:scale-125 duration-500 animate-pop"
                            onClick={()=> removeFavorite(favorite.id)}><BsFillTrash3Fill /></button>
                </div>
            ))}
        </div>
    )
}
export default Favorites;