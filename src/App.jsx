import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details"
import { FavoritesProvider } from "./context/FavoritesContext";

function App(){




  return(
    <FavoritesProvider>
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Home />}
        />

      <Route
        path="/details/:id"
        element={<Details />}
        />

      </Routes>
      </BrowserRouter>
      </FavoritesProvider>
  )
}
export default App;