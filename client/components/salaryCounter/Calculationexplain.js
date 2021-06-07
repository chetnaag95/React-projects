import React, {Component} from 'react';

class Calculationexplain extends Component{
    render(){
      return(
           <div className="col-lg-5">
               <div className="card">
                   <div className="card-body">
                       <div className="card-title d-flex align-items-start justify-content-between">
                           <h5 className="mb-0">How can I calculate my monthly salary</h5>
                           <a href="#" className="font-12 text-muted">for year 2019-2020<i className="icon ion-ios-arrow-down"></i></a>
                       </div>

                       <div className="row">
                             <div className="col-sm-12 col-xs-12 text-body">
                             <h6>Here's how we calculated the Minimum Take Home Salary</h6>

                             <p className="text-body">
                                   <span className="steps">Step 1: </span>Gross Salary = Cost to Company (CTC) - Employer's PF Contribution (EPF) - Gratuity. 
                             </p>

                             <p className="text-body">
                                <span className="steps">Step 2: </span>Taxable Income = Gross Salary - Investments (80C) - HRA - Standard Deduction - Prof. Tax. - Medical Insurance - Tax. Saving Investments.
                             </p>

                             <p className="text-body">
                                 <span className="steps">Step 3: </span>Income Tax = ₹
                             </p>

                             <p className="text-body">
                                <span className="steps">Step 4: </span>In-hand/Take home salary = Gross Salary - Income Tax - Prof. Tax.
                             </p>

                           </div>
                       </div>

                   </div>
               </div>
           </div>
      )
    }
}

export default Calculationexplain;