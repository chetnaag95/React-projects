import React, {Component} from 'react'
import List from './List';
import WithLoadingComponent from './withLoading'

const ListWithLoading = WithLoadingComponent(List);

class App extends Component{
      shouldComponentUpdate(){
         return false;
      }
      render(){
            let listOf = [
                  { fullName : 1 },
                  { fullName : 2 },
                  { fullName : 3 },
                  { fullName : 4 },
                  { fullName : 5 },
                  { fullName : 6 },
                  { fullName : 7 },
                  { fullName : 8 },
            ]
             
      	 return(
      	 	<div>
                        <ListWithLoading isLoading={false} repos={listOf}/>
                        <h1>Hi, this is my react project</h1>
                  </div>
      	 )
      }  
}

export default App;

// export default HigherOrderComponent(<h1>Hi, this is my react project</h1>);