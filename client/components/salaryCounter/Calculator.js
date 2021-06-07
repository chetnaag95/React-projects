import React, {Component} from 'react';

class Calculator extends Component{
    render(){
        return(
            <div className="col-lg-7">
                <div className="card card-body">
                    <h4 className="card-title">Take Home Salary Calculator India</h4>
                    <div className="row">
                        <div className="col-sm-12 col-xs-12">
                            <form>

                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail111">Enter your Annual Salary (CTC)</label>
                                    <input type="text" ref={this.ctc} className="form-control" id="exampleInputEmail111"  onInput="" placeholder="ex - 350000"/>
                                </div>
                                
                                <div className="form-group d-flex flex-end">
                                    <button type="submit" className="btn btn-dark" onClick="">Reset all</button>
                                </div>

                                <div className="form-group">
                                </div>
                                
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="example-disable">House rent <em className="font-12">per month</em></label>
                                            <input type="text" className="form-control no-border" id="example-disable" disabled="true" value=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="example-disable">Basic salary <em className="font-12">per month</em></label>
                                            <input type="text" className="form-control no-border" id="example-disable" disabled="true" value=""/>
                                        </div>
                                    </div>
                                </div>


                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="example-disable">Investments (80C) <em className="font-12">per year</em></label>
                                            <input type="text" className="form-control no-border" id="example-disable" disabled="true" value=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="example-disable">HRA (as in payslip) <em className="font-12">per month</em></label>
                                            <input type="text" className="form-control no-border" id="example-disable" disabled="true" value=""/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="example-disable">Medical insurance premium <em className="font-12">per month</em></label>
                                            <input type="text" className="form-control no-border" id="example-disable" disabled="true" value=""/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group mb-3">
                                            <label htmlFor="example-disable">EPF <em className="font-12">per month</em></label>
                                            <input type="text" className="form-control no-border" id="example-disable" disabled="true" value=""/>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Calculator;