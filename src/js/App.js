import React, {Component, Fragment} from 'react'
import Header from './components/Header'
import Movies from './components/Movies'

class App extends Component{
      constructor(){
            super();
            this.couner = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      }
      shouldComponentUpdate(){
         return false;
      }
      render(){
      	 return(
      	 	<Fragment>
                        <div style={{
                              margin: '0 auto',
                              maxWidth: 1280,
                              marginTop: 50
                        }}>
                           <Header/>
                           <div style={{textAlign: 'center'}}>
                              <div style={{
                                    width: '1100px',
                                    margin: 'auto',
                                    textAlign: 'left'
                              }}>
                              {this.couner.map((key)=><Movies key={key}/>)}
                              </div>
                           </div>
                        </div>
                   </Fragment>
      	 )
      }
}

export default App;