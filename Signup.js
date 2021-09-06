import React, { Component } from "react";


export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '', email: '', addr: '',
            contact: '', fax: '', holding: '', authperson: '', designation: '', gstno: '', panno: '',
            username: '', password: '',
        };

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            [event.target.email]: event.target.value,
            [event.target.addr]: event.target.value,
            [event.target.contact]: event.target.value,
            [event.target.fax]: event.target.value,
            [event.target.holding]: event.target.value,
            [event.target.authperson]: event.target.value,
            [event.target.designation]: event.target.value,
            [event.target.gstno]: event.target.value,
            [event.target.panno]: event.target.value,
            [event.target.username]: event.target.value,
            [event.target.password]: event.target.value,

        });

    }

    handleSubmit = (event) => {


        let response = fetch('http://localhost:8080/cust/addCustomer', {
            method: 'post',

            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            // We convert the React state to JSON and send it as the POST body
            body: JSON.stringify({
                cname: this.state.name,
                email: this.state.email,
                caddr: this.state.addr,
                telephone: this.state.contact,
                fax: this.state.fax,
                holding: this.state.holding,
                authperson: this.state.authperson,
                designation: this.state.designation,
                gstno: this.state.gstno,
                panno: this.state.panno,
                username: this.state.username,
                password: this.state.password

            }),
        });
        if (response) {
            alert('Your form submitted: ' + this.state.cname + '\n Please Login with Username and Password');
            this.props.history.push('./Login');
        }
        event.preventDefault();
    }

    render() {
        return (
            <div>
                
                <form id="myform" className="container signup ">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h1 className="login  ">SIGNUP</h1>
                    <br></br>      <br></br>
                    <div className="row">

                        <div className="col-sm-12 col-md-6 col-lg-6 ">

                            <div className="form-group ">

                                <input type="text" className="form-control " name="name" value={this.state.value} placeholder="Enter Company Name" onChange={this.handleChange} />
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6 col-lg-6 ">

                            <div className="form-group ">

                                <input type="email" name="email" value={this.state.value} required="true" className="form-control " placeholder="Enter Your Email" onChange={this.handleChange} />
                            </div>
                        </div>

                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="addr" value={this.state.value} required="true" className="form-control " placeholder="Enter Address" onChange={this.handleChange} />
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="contact" value={this.state.value} required="true" className="form-control " placeholder="Enter Contact No" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="fax" value={this.state.value} className="form-control " required="true" placeholder="Enter Fax" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="holding" value={this.state.value} className="form-control " required="true" placeholder="Enter Holding" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="authperson" value={this.state.value} className="form-control " required="true" placeholder="Enter Authentication Person" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="designation" value={this.state.value} className="form-control " required="true" placeholder="Enter Designation" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="gstno" value={this.state.value} className="form-control " required="true" placeholder="Enter GST-NO" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="panno" value={this.state.value} className="form-control " required="true" placeholder="Enter PAN-NO" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="text" name="username" value={this.state.value} className="form-control " required="true" placeholder="Enter Username" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">

                                <input type="password" name="password" value={this.state.value} className="form-control " required="true" placeholder="Enter Password" onChange={this.handleChange} />
                            </div>
                        </div>

                        <br></br>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">
                                <br></br>
                                <button onClick={this.handleSubmit} type="button" className="btn btn-primary btnsubmit">Signup</button>
                            </div></div>
                        <div className="col-sm-12 col-md-6  mx-auto ">

                            <div className="form-group">
                                <br></br>
                                <a href="../S4KVR Vehicle Configuration Signup Form.pdf" download>
                                    <button type="button" className="btn btn-primary btnsubmit">Download Form</button>
                                </a></div></div>

                    </div>

                </form>


            </div>

        );
    }
}
