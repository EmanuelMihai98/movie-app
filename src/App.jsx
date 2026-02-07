import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Login from "./pages/Login";
import { FavoritesProvider } from "./context/FavoritesContext";
import { SearchProvider } from "./context/SearchContext";
import { LoginProvider} from "./context/LoginContext";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import SearchBar from "./components/SearchBar";


function App(){



  return(
    <LoginProvider>
    <SearchProvider>
    <FavoritesProvider>
    <BrowserRouter>
    <div className="pb-5">
    <Title />
    </div>
    <div className="pb-3">
    <Navbar />
    </div>
    <div className="ml-[27%] md:ml-[37%] lg:ml-[42%]">
    <SearchBar />
    </div>
    <Routes>
      <Route
        path="/"
        element={<Home />}
        />

      <Route
        path="/details/:id"
        element={<Details />}
        />

      <Route
        path="/favorites"
        element={<Favorites />}
        />
      
      <Route
        path="/login"
        element={<Login />}
        />

      </Routes>
      </BrowserRouter>
      </FavoritesProvider>
      </SearchProvider>
      </LoginProvider>
  )
}
export default App;