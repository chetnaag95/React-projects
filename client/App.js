import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import MainRouter from './MainRouter';
import './assets/main.css';

class App extends Component{
      shouldComponentUpdate(){
         return false;
      }
      render(){
      	return(
                  <Router>
                        <MainRouter />
                  </Router>
      	)
      }
}

export default App;