import React, { Component } from 'react';


export default class Child extends Component{
    constructor(){
        super();
        this.state = {
            curretValue : 0
        }
    }
    static getDerivedStateFromProps(props, state){
        console.log(props);
        return {
            curretValue : props.data*10
        }
    }
    render(){
        console.log("render child")
        return(
            <h1>Child   { this.state.curretValue}</h1>
        )
    }
}