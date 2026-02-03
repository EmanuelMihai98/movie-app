import { Link } from "react-router-dom";


const MovieList = ({movies})=>{
    

    return(
        <div className="space-y-4 py-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-1 mr-1">
            {movies.map(movie => (
            <div key={movie.id}
                className="bg-gray-400">
                <Link to={`/details/${movie.id}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt={movie.title}
                         className="hover:rotate-2 transition-transform"/>

                    <h1 className="font-bold text-xl ml-1">{movie.title}</h1>
                    <h3 className="font-bold">⭐{movie.vote_average.toFixed(1)}</h3>
                </Link>
            </div>
            ))}
        </div>
    )
}
export default MovieList