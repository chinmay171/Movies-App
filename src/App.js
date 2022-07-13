import './App.css';
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import MovieList from './components/MovieList';
import Fav from "./components/Fav";
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
function App() {
  return(
    <BrowserRouter>
    <div className="wholePage">
      <NavBar/>
      <Routes>
        <Route path = "/" element={<><Banner/><MovieList/></>}/>
        <Route path = "/favourites" element={<Fav/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
