import { Link } from "react-router-dom";
import { useFavorite } from "../context/FavoritesContext";
import { useSearch } from "../context/SearchContext";

function Navbar(){

    const {searchQuery, setSearchQuery} = useSearch();
    const {favorites} = useFavorite();

    const count = favorites.length;

    return(
        <nav className="flex justify-evenly py-1 bg-gradient-to-r from-red-900 via-yellow-600 to-red-900 ">
            <Link to="/"
                className="text-white font-bold hover:scale-125 duration-700 hover:text-black transition-colors duration-200">Home</Link>
            <input
                value={searchQuery}
                placeholder="Search..."
                type="text"
                onChange={(e)=> setSearchQuery(e.target.value)}
                className="rounded bg-gradient-to-r from-gray-100 to-gray-400"
                />
            <Link to="/favorites"
                className="text-white font-bold hover:scale-125 duration-700 hover:text-black transition-colors duration-200">Favorites({count})</Link>
        </nav>
    )
}
export default Navbar;