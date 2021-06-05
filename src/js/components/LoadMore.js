import React, {Component} from 'react';

class LoadMore extends Component {
    constructor(){
        super();
    }
    render(){
        return(
            <section className="py-7 py-md-10">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-9 col-lg-8 col-xl-7">
                            <a href="#!" className="btn w-100 btn-outline-gray-300 d-flex align-items-center" id="load_more" onClick={()=>{ this.props.page() }}> <span className="mx-auto">Load more</span>  <i className="fe fe-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default LoadMore