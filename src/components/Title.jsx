import { Link } from "react-router-dom";

function Title(){

    return(
        <div>
        <Link to="/">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-red-700 via-gray-900 to-red-900 bg-clip-text text-transparent text-center
                        hover:scale-105 duration-500 active:animate-pop"
            style={{
        filter: 'drop-shadow(2px 2px 8px rgba(0, 0, 0, 0.6))'}}
        >MovieFIND</h1>
        </Link>
        </div>
    )
}
export default Title;