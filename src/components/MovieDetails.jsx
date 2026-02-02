

function MovieDetails({movie}){

    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt={movie.title} />
            <h1 className="font-bold text-xl ml-1">{movie.title}</h1>
            <h3 className="font-bold">⭐{movie.vote_average.toFixed(1)}</h3>

            
        </div>
    )
}
export default MovieDetails;