import React from 'react';

export default ()=>{    
    const loadingBoxes = [];
    for(var i=0; i<20; i++){
        loadingBoxes.push(<div className="card mb-6 shadow-light-lg lift lift-lg" key={i} style={{width: '30%', marginRight: '3%'}}><div className="card mb-6 shadow-light-lg lift lift-lg"><a className="card-body wrapper" href="#!"><p className="mb-0 text-muted"></p><div className="comment animate"></div></a></div></div>);
    }
    return(
        <section><div className="container"><div className="row" id="movies"><div className="col-12 col-md-6 col-lg-4 d-flex" style={{flexWrap: 'wrap', width: '100%'}}>{loadingBoxes}</div></div></div></section>
    )
}