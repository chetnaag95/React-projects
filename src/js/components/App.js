import React, {Component, PureComponent} from 'react'
import Parent from './Parent'

class App extends PureComponent{
      shouldComponentUpdate(){
         return false;
      }
      render(){
      	 return(
      	 	<div>
                        <h1>Hi, this is my react project</h1>
                        <Parent/>
                  </div>
      	 )
      }
}

export default App;