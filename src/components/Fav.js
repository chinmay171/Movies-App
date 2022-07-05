import { Component } from "react"
import { movies } from "../movieData";

class Fav extends Component{
    constructor(){
        super();
        this.state = {
            genres : [],
            currGenre : "All Genres",
            movies: [],
            currText: "",
            movies2: []
        }
    }
    componentDidMount(){
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let data = JSON.parse(localStorage.getItem("movies-app") || "[]");
        let tempArr = [];
        tempArr.push("All Genres");
        data.map((movieObj)=>{
            if(!tempArr.includes(genreIds[movieObj.genre_ids[0]])){
                tempArr.push(genreIds[movieObj.genre_ids[0]]);
            }
        })
        this.setState({
            movies:[...data],
            genres:[...tempArr],
            movies2: [...data]
        })
    }

    // handleGenre=(genre)=>{
    //     this.setState({
    //         currGenre : genre
    //     },this.filterMovies)
    // }

    handleGenre = (genre)=>{
        this.setState({
            currGenre :genre
        },this.filterMovies)
    }

    filterMovies = ()=>{
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        let data = JSON.parse(localStorage.getItem("movies-app") || '[]');
        if(this.state.currGenre == "All Genres"){
            this.setState({
                movies:[...data],
                movies2:[...data]
            })
        }else{
            let FilteredArr = data.filter((movieObj)=>genreIds[movieObj.genre_ids[0]] == this.state.currGenre)
            this.setState({
                movies:[...FilteredArr],
                movies2:[...FilteredArr]
            })
        }
    }
    
    handleChangeText = (inputValue)=>{
        this.setState({
            currText: inputValue
        }, this.searchMovies);
    }

    searchMovies = ()=>{
        if(this.state.currText != ''){
            let FilteredArr = this.state.movies2.filter((movieObj)=>{
                let title = movieObj.original_title.toLowerCase();
                return title.includes(this.state.currText.toLowerCase());
            })
            this.setState({
                movies: [...FilteredArr]
            })
        }
        else{
            this.setState({
                movies : [...this.state.movies2]
            })
        }
    }

    sortPopularAsce=()=>{
        let temp = this.state.movies.map((movieObj)=>movieObj);
        temp.sort(function(obj1, obj2){
            return obj1.popularity - obj2.popularity;
        })
        this.setState({
            movies:[...temp],
            movies2:[...temp]
        })
    }

    sortPopularDesc=()=>{
        let temp = this.state.movies.map((movieObj)=>movieObj);
        temp.sort(function(obj1, obj2){
            return obj2.popularity - obj1.popularity;
        })
        this.setState({
            movies:[...temp],
            movies2:[...temp]
        })
    }

    sortRatingAsce=()=>{
        let temp = this.state.movies.map((movieObj)=>movieObj);
        temp.sort(function(obj1, obj2){
            return obj1.vote_average - obj2.vote_average;
        })
        this.setState({
            movies:[...temp],
            movies2:[...temp]
        })
    }

    sortRatingDesc=()=>{
        let temp = this.state.movies.map((movieObj)=>movieObj);
        temp.sort(function(obj1, obj2){
            return obj2.vote_average - obj1.vote_average;
        })
        this.setState({
            movies:[...temp],
            movies2:[...temp]
        })
    }
//let FilteredArr = data.filter((movieObj)=>genreIds[movieObj.genre_ids[0]] == this.state.currGenre)
    deleteMovieObj=(id)=>{
        let newMovieList=[];
        newMovieList = this.state.movies.filter((movieObj)=>movieObj.id != id);
        this.setState({
            movies: [...newMovieList],
            movies2:[...newMovieList]
        })
        localStorage.setItem("movies-app", JSON.stringify(newMovieList));
    }
    render(){
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        return(
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <ul className="list-group genre-selector">
                            {
                                this.state.genres.map((genre)=>(
                                    this.state.currGenre == genre ?(
                                        <li className="list-group-item active">{genre}</li>
                                    ):
                                    (<li className="list-group-item" onClick={()=>this.handleGenre(genre)}>{genre}</li>)
                                ))
                            }
                        </ul>
                    </div>
                    <div className="col-8 fav-table">
                        <div className="row">
                            <input type="text" className="form-control col" placeholder="Search" value = {this.state.currText} onChange={(e)=>this.handleChangeText(e.target.value)}/>
                            <input type="number" className="form-control col"/>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col"className="topic text-center">Title</th>
                                <th scope="col"className="topic text-center">Genre</th>
                                <th scope="col" className="topic text-center">
                                    <i class="fa fa-sort-up" style={{marginTop:"0.5rem",padding:"0.25rem",border:"0.25px solid black"}} onClick={this.sortPopularAsce}></i>
                                        Popularity
                                    <i class="fa fa-sort-down" style={{marginBottom:"0.5rem",padding:"0.25rem",border:"0.25px solid black"}} onClick={this.sortPopularDesc}></i>
                                </th>
                                <th scope="col" className="topic text-center">
                                    <i class="fa fa-sort-up" style={{marginTop:"0.5rem",padding:"0.25rem",border:"0.25px solid black"}} onClick={this.sortRatingAsce}></i>
                                        Rating
                                    <i class="fa fa-sort-down" style={{marginBottom:"0.5rem",padding:"0.25rem",border:"0.25px solid black"}} onClick={this.sortRatingDesc}></i>
                                </th>
                                <th scope="col" className="topic text-center">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        this.state.movies.map((movieEle)=>(
                                            <tr>
                                                <th scope="row"><img  style={{width:"6rem",padding:"1rem"}} src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`}/>{  movieEle.title}</th>
                                                <td className="text-center">{genreIds[movieEle.genre_ids[0]]}</td>
                                                <td className="text-center">{movieEle.popularity}</td>
                                                <td className="text-center">{movieEle.vote_average}</td>
                                                <td className="text-center"><button type="button" className="btn btn-danger" onClick={()=>this.deleteMovieObj(movieEle.id)}>Delete</button></td>
                                            </tr>
                                        ))
                                    }
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination text-center">
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default Fav;