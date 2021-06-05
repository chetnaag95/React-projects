import React, {Component} from 'react';
import MovieDetails from './movieDetails';

class Card extends Component {
    constructor(){
        super();
        this.state = {
            movieData : []
        }
    }
    movieDetails = (imdbID) => {
        this.isRender = false;
        fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=ece7bcc0`)
        .then(r=> r.json())
        .then((result)=>{
            this.setState({movieData : result})
        }).catch((err)=>{

        })
    }
    render(){
        return(
            <section>
                <div className="container">
                    <div className="row" id="movies">
                        {this.props.cards && this.props.cards.map((movie, index)=>(
                            <div className="col-12 col-md-6 col-lg-4 d-flex" key={index} data-bs-toggle="modal" data-bs-target="#modalSignupVertical" onClick={()=>this.movieDetails(movie.imdbID)}> 
                                <div className="card mb-6 shadow-light-lg lift lift-lg">
                                    <a className="card-img-top" href="#!">
                                        <img src={movie.Poster} alt="..." className="card-img-top" />
                                    </a>
                                    <a className="card-body" href="#!">
                                        <h3>{movie.Title}</h3>
                                        <p className="mb-0 text-muted"></p>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <MovieDetails movieData={this.state.movieData} />
            </section>
        )
    }
}

export default Card;