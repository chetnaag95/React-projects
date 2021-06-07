import React, {Component, Fragment} from 'react';

class Footer extends Component {
    render(){
        return(
            <Fragment>
                <footer className="footer-area d-flex align-items-center flex-wrap">
                    <div className="copywrite-text">
                        <p>Copyright © 2019 created by <a href="/">salarycount.com</a></p>
                    </div>
                </footer>
           </Fragment>
        )
    }
}
export default Footer;
