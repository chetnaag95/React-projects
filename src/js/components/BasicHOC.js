import React, { Component } from 'react';

const higherOrderComponent = (WrappedComponent)=>{
    class HOC extends Component{
        render(){
            return(
                <h1>
                    this is it
                </h1>
            )
        }
    }
    return HOC;
}

export default higherOrderComponent;