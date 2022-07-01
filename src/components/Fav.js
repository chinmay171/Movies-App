import { Component } from "react"

class Fav extends Component{
    constructor(){
        super();
        this.state = {
            genres : [],
            currGenre : "All Genres",
            movies: []
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
            genres:[...tempArr]
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
                movies:[...data]
            })
        }else{
            let FilteredArr = data.filter((movieObj)=>genreIds[movieObj.genre_ids[0]] == this.state.currGenre);
            this.setState({
                movies:[...FilteredArr]
            })
        }
    }
    
    render(){
        let genreIds = { 28: "Action", 12: "Adventure", 16: "Animation", 35: "Comedy", 80: "Crime", 99: "Documentary", 18: "Drama", 10751: "Family", 14: "Fantasy", 36: "History", 27: "Horror", 10402: "Music", 9648: "Mystery", 10749: "Romance", 878: "Science Fiction", 10770: "TV Movie", 53: "Thriller", 10752: "War", 37: "Western"}
        return(
            <div className="container">
                <div className="row">
                    <div className="col-3">
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
                    <div className="col-9 fav-table">
                        <div className="row">
                            <input type="text" className="form-control col" placeholder="Search"/>
                            <input type="number" className="form-control col"/>
                        </div>

                        <table className="table">
                            <thead>
                                <tr>
                                <th scope="col">Title</th>
                                <th scope="col">Genre</th>
                                <th scope="col">Popularity</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        this.state.movies.map((movieEle)=>(
                                            <tr>
                                                <th scope="row"><img  style={{width:"6rem",padding:"1rem"}} src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`}/>{  movieEle.title}</th>
                                                <td>{genreIds[movieEle.genre_ids[0]]}</td>
                                                <td>{movieEle.popularity}</td>
                                                <td>{movieEle.vote_average}</td>
                                                <td><button type="button" className="btn btn-danger">Delete</button></td>
                                            </tr>
                                        ))
                                    }
                            </tbody>
                        </table>

                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
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