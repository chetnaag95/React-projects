import React, {Component, Fragment} from 'react';

class Header extends Component{
    render(){
        return(
            <header className="top-header-area d-flex align-items-center justify-content-between">
                <div className="left-side-content-area d-flex align-items-center">
		            <div className="ecaps-triggers mr-1">
						<img class="desktop-logo" src="https://stylemycv.s3.ap-south-1.amazonaws.com/public/salarycount-fonts/clipart1541261.png" alt="Desktop Logo" />
		            </div>
					<div className="d-flex align-items-baseline">
						<h5 class="mb-0"><em>SalaryCount</em></h5>
						<span class="ml-1 font-13" ><em>take home calculator</em></span>
					</div>
                </div>
                <div className="right-side-navbar d-flex align-items-center justify-content-end"></div>
            </header>
        )
    }
}
export default Header;