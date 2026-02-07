import { useSearch } from "../context/SearchContext";

const SearchBar = ()=>{

     const {searchQuery, setSearchQuery} = useSearch();


     return(
          <div>
                <input
                value={searchQuery}
                placeholder="Search..."
                type="text"
                onChange={(e)=> setSearchQuery(e.target.value)}
                className="rounded bg-gray-200 border border-gray-300 hover:scale-105"
                />
          </div>
     )
    
}

export default SearchBar;