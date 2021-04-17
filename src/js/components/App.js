import React, {Component} from 'react'
import TestError from './TestError';
import ErrorBoundary from './ErrorBoundary'

class App extends Component{
      shouldComponentUpdate(){
         return false;
      }
      render(){
      	 return(
                  <div>
                        <h1>Hi, this is my react project</h1>
                              <TestError test="value_1"/>
                              <TestError test="value_2"/>
                        <ErrorBoundary>
                              <TestError test="value_3"/>
                        </ErrorBoundary>
                  </div>
      	 )
      }
}

export default App;