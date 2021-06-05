import React, {Component, createRef} from 'react';

export default class Search extends Component {
    constructor(){
        super();
        this.movieName = createRef();
        this.state = {
            type: "",
            plot: "",
            year: ""
        }
    }
    selectCss = {
        background: '#335eea',
        color: 'white',
        padding: '12px',
        borderRadius: '6px',
        border: 'none',
        marginLeft: '10%',
        marginRight: '10px'
    }
    getYears = () => {
        let maxYear = new Date().getFullYear();
        let minYear = 1970;
        let years = [];

        for (var i = maxYear; i >= minYear; i--) {
            years.push(i)
        }
        return(<select style={this.selectCss} value={this.state.year} onChange={this.changeYearOfRelease}>
            <option value="">Year</option>
            {years.map((year, index)=><option value={year} key={index}>{year}</option>
            )}
        </select>)
    }
    changeMovieType = (e) => {
        this.setState((state)=>({
            type: e.target.value
        }))
    }
    changePlot = (e) => {
        this.setState((state)=>({
            plot: e.target.value
        }))
    }
    changeYearOfRelease = (e) => {
        this.setState((state)=>({
            year: e.target.value
        }))
    }
    render() {
        return(
            <section className="py-6">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form className="rounded shadow">
                                <div className="input-group input-group-lg">
                                    <span className="input-group-text border-0 pe-1">
                                        <i className="fe fe-search"></i>
                                    </span>
                                    <input type="text" className="form-control border-0 px-1" aria-label="Search Movies..." placeholder="Search Movies..." ref={this.movieName} />
                                    <span className="input-group-text border-0 py-0 ps-1 pe-3">
                                        <span className="h6 text-uppercase text-muted d-none d-md-block mb-0 me-5" id="total_results">
                                            {this.props.totalResults} results
                                        </span>
                                        <span className="dropdown pl-1">
                                            {this.getYears()}
                                        </span>
                                        <span className="dropdown pl-1">
                                            <select style={this.selectCss} value={this.state.type} onChange={this.changeMovieType}>
                                                <option value="">Type</option>
                                                <option value="movie">Movies</option>
                                                <option value="series">Series</option>
                                                <option value="episode">Episode</option>
                                            </select>
                                        </span>
                                        <span className="dropdown pl-1" value={this.state.plot} onChange={this.changePlot}>
                                            <select style={this.selectCss}>
                                                <option value="">Plot</option>
                                                <option value="short">Short</option>
                                                <option value="full">Full</option>
                                            </select>
                                        </span>
                                        <button className="btn btn-sm btn-primary" id="search_movies" onClick={(e) => {this.props.searchMovies(e, this.movieName.current.value, this.state.type, this.state.plot, this.state.year)}} style={{marginLeft:'10px'}}>Search</button>
                                    </span>
                                    
                                </div>
                               
                            </form>
                           
                        </div>
                    </div>
                </div>
            </section>
        )
    }
} 