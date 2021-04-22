import React, {Component} from 'react'
import Child from './Child'


class App extends Component{
      state = {
         count: 0
      }
      componentDidMount(){
      }
      componentDidUpdate(){
  
      }
      render(){
      	 return(
      	 	<div>
                        <h1>Hi, this is my react project</h1>
                        <button onClick={()=>{ this.setState({ count : this.state.count+1 })}}>Click here</button>
                        <Child data={this.state.count}/>
                  </div>
      	 )
      }
}

export default App;