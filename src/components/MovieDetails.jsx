

function MovieDetails({movie}){

    return(
        <div> 
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                         alt={movie.title}
                         className="md:mx-auto lg:mx-auto" />
            <h1 className="font-bold text-xl ml-1 md:text-center lg:text-center">{movie.title}</h1>
            <h3 className="font-bold md:text-center lg:text-center">⭐{movie.vote_average.toFixed(1)}</h3>

            
        </div>
    )
}
export default MovieDetails;