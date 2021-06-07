import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';

class MainRouter extends Component{
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}>
                </Route>
            </Switch>
        )
    }
}
export default MainRouter;