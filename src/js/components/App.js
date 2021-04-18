import React, {Component} from 'react'
class App extends Component{
      shouldComponentUpdate(){
         return false;
      }
      render(){
      	 return(
      	 	<div>
                        <h1>Hi, this is my react project</h1>
                  </div>
      	 )
      }
}

export default App;