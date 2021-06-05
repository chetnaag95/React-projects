import React, {Component} from 'react';

class movieDetails extends Component {
    constructor(){
        super();
    }
    render(){
        console.log(this.props);
        return(
            <div className="modal fade" id="modalSignupVertical" tabIndex="-1" role="dialog" aria-labelledby="modalSignupVerticalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <div className="text-center">
                                <img src={this.props.movieData.Poster} alt={this.props.movieData.Title} className="img-fluid mb-3" style={{width: '200px'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default movieDetails;