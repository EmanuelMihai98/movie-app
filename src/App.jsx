import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details"
import { FavoritesProvider } from "./context/FavoritesContext";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import { SearchProvider } from "./context/SearchContext";

function App(){




  return(
    <SearchProvider>
    <FavoritesProvider>
    <BrowserRouter>
    <div className="pb-5">
    <Title />
    </div>
    <div className="pb-3">
    <Navbar />
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

      </Routes>
      </BrowserRouter>
      </FavoritesProvider>
      </SearchProvider>
  )
}
export default App;