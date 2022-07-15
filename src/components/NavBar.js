import {Component} from "react";
import { Link } from "react-router-dom";
import '../App.css';
class NavBar extends Component{
    render(){
        return(
            <div className="navBar">
                <h7 style={{textDecoration:"none",marginTop:"1rem"}}>SORT OUT</h7>
                <Link to = "/" style={{textDecoration:"none"}}><h1 className="movieBar">𝕄𝕆𝕍𝕀𝔼𝕊</h1></Link>
                <h7 style={{textDecoration:"none",marginLeft:"0.12rem",marginTop:"1rem"}}>WITH EASE</h7>
                <Link to = "/favourites" style={{textDecoration:"none", marginLeft:"0rem",marginTop:"0.1rem"}}><h2 className="fav">Favourites</h2></Link>
                <Link to = "/Fireauth" ><button className="signIn">Sign In</button></Link>
            </div>
        )
    }
}

export default NavBar;