import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import MovieList from "../components/MoviesList";
import { TfiFaceSad } from "react-icons/tfi";
import { useSearch } from "../context/SearchContext";


function Home(){
    const[movies, setMovies] = useState([]);
    const[loading, setLoading] = useState(false);
    const[error, setError] = useState(null);
    const[currentPage, setCurrentPage] = useState(1);
    const[totalPages, setTotalPages] = useState(0);


    const {movies: searchResults, searchQuery} = useSearch();

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
            setTotalPages(data.total_pages)
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    };


    const handlePageChange = (selectedPage) =>{
        setCurrentPage(selectedPage.selected + 1);
        window.scrollTo({top: 0, behavior: "smooth"});
    }
    const moviesToDisplay = searchQuery ? searchResults : movies
    if(loading){
        return <h1 className="text-center text-bold pt-20 text-2xl text-green-400 animate-bounce">LOADING...</h1>
    };
    if(error){
        return <h1 className="text-center text-bold pt-20 text-2xl text-redd-400 animate-bounce">Something went wrong...<TfiFaceSad /></h1>
    };


    return(
        <div>
            <MovieList movies={moviesToDisplay} />
            {!searchQuery && totalPages > 0 && (
                <ReactPaginate
                    previousLabel={"< Previous"}
                    nextLabel={"Next >"}
                    pageCount={totalPages > 500 ? 500 : totalPages}
                    onPageChange={handlePageChange}
                    forcePage={currentPage - 1}

                       containerClassName={'flex items-center justify-center gap-2 mt-10'}
                    pageClassName={'hidden sm:block'}
                    pageLinkClassName={'px-4 py-2 border border-gray-600 rounded-lg hover:bg-gray-700 transition text-gray-300'}
                    activeClassName={'bg-blue-600 border-blue-600'}
                    activeLinkClassName={'text-white'}
                    previousClassName={'text-gray-300 hover:bg-gray-700'}
                    previousLinkClassName={'px-4 py-2 border border-gray-600 rounded-lg transition'}
                    nextClassName={'text-gray-300 hover:bg-gray-700'}
                    nextLinkClassName={'px-4 py-2 border border-gray-600 rounded-lg transition'}
                    disabledClassName={'opacity-50 cursor-not-allowed'}
                    disabledLinkClassName={'hover:bg-transparent'}
                    breakLabel={'...'}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                />
            )}
        </div>
    )
}

export default Home;