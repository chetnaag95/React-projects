import React, { Component, Fragment } from 'react';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Calculationexplain from './salaryCounter/Calculationexplain';
import Calculator from './salaryCounter/Calculator';

class Home extends Component{
    render(){
        return(
            <Fragment>
                <div className="ecaps-page-wrapper sidemenu-hover-deactive">
		            <div className="ecaps-page-content">
                    <Header/>
		                <div className="main-content">
		                    <div className="container-fluid">
                               <div className="row">
                                    <Calculator/>
                                    <Calculationexplain/>
                               </div> 
		                    </div>
                            <Footer/>
		                </div>
		            </div>
			    </div>
            </Fragment>
        )
    }
}
export default Home;