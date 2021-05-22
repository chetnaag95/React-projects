import React, {Component} from 'react'
import List from './List';
import WithLoadingComponent from './withLoading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {withAuth} from './withAuth'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory();
const ListWithLoading = WithLoadingComponent(List);


class App extends Component{
      // shouldComponentUpdate(){
      //    return false;
      // }
      render(){
            console.log("render App");
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
                        <Router history={history}>
                                    <Switch>
                                          <Route exact path="/">
                                                <ListWithLoading isLoading={false} repos={listOf}/>
                                          </Route>
                                          <Route path="/test">
                                                <ListWithLoading isLoading={false} repos={listOf}/>
                                          </Route>
                                    </Switch>
                        </Router>
                  </div>
      	 )
      }  
}

export default withAuth(App);

// export default HigherOrderComponent(<h1>Hi, this is my react project</h1>);



