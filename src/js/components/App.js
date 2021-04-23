import React, {Component} from 'react'
import HigherOrderComponent from './BasicHOC';

class App extends Component{
      shouldComponentUpdate(){
         return false;
      }
      render(){
             let NewComponent = HigherOrderComponent(<h1>Hi, this is my react project</h1>);
      	 return(
      	 	<div>
                        <NewComponent/>
                        <h1>Hi, this is my react project</h1>
                  </div>
      	 )
      }  
}

// export default HigherOrderComponent(<h1>Hi, this is my react project</h1>);