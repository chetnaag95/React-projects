import React, {Component, Fragment} from 'react';
import Search from './Search';
import Card from './Card';
import LoadMore from './LoadMore';
import WithLoading from './WithLoading';
const ListWithLoading = WithLoading(Card);

class App extends Component{
      constructor(){
            super();
            this.state = {
                  movies: [],
                  pageCounter: 1,
                  totalResults: 0,
                  keyword: null,
                  type: null,
                  plot: null,
                  yearOfRealease: null,
            };
            this.movieChange = this.movieChange.bind(this);
            this.searchMovies =  this.searchMovies.bind(this);
      }
      componentDidMount(){
      }
      movieChange(movieData){
            this.setState((state, props) => ({
                  movies : movieData.Search
            }));
      }
      pageNumber = () => {
            this.setState((state, props)=>({
                  pageCounter: state.pageCounter+1
            }))
            this.searchMovies();
      }
      searchMovies(e, movieName, movieType, moviePlot, movieReleaseYear){
            this.setState({loading: true});
            if(e)
               e.preventDefault();
            movieName = movieName || this.state.keyword;  
            movieType = movieType || this.state.type;
            moviePlot = moviePlot || this.state.plot;
            movieReleaseYear = movieReleaseYear || this.state.yearOfRealease;
            this.setState({keyword : movieName, type: movieType, plot: moviePlot, yearOfRealease: movieReleaseYear},  ()=>{
                  fetch(`http://www.omdbapi.com/?s=${this.state.keyword}&apikey=ece7bcc0&page=${this.state.pageCounter}&type=${this.state.type}&plot=${this.state.plot}&y=${this.state.yearOfRealease}`)
                  .then( r => r.json())
                  .then((result)=>{
                        if(e) {
                              this.setState((state,props) => ({
                                    movies: [...result.Search],  //If searched replace old content with new
                                    totalResults: result.totalResults,
                                    loading: false
                              }))
                        }else{
                              this.setState((state,props) => ({
                                    movies: [...this.state.movies, ...result.Search],  //concat using spread operator
                                    totalResults: result.totalResults,
                                    loading: false
                              }))
                        }
                  })
                  .catch()
            })   
            
        }
        
      render(){
      	return(
      	 	<Fragment>
                        <Search movies={this.movieChange} pageCounter={this.state.pageCounter} searchMovies={this.searchMovies} totalResults={this.state.totalResults}/>
                        <ListWithLoading isLoading={this.state.loading} cards={this.state.movies} />
                        <LoadMore page={this.pageNumber}/>
                  </Fragment>
      	)
      }
}

export default App;