import React, { Component, Fragment, PureComponent } from 'react';
import Child_A from './Child_A'
import Child_B from './Child_B'

export default class Parent extends PureComponent{
    componentDidMount(){
        setInterval(()=>{
              this.setState( { name : "himasnhu"  })
        }, 2000)
     }
    render(){
        console.log("Parent");
        return(
            <Fragment>
                <Child_A />
                <Child_B />
            </Fragment>
        )
    }
} 