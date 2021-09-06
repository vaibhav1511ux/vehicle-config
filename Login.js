import React, { Component } from "react";
import './App.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Message: '',
            customer: '',
            username: '',
            password: ''
        };
        this.loginClicked = this.loginClicked.bind(this);
    }
    handleChange = (event) => {
        this.setState({
            [event.target.username]: event.target.value,
            [event.target.password]: event.target.value
        })
    }
    async loginClicked() {
        let logD = {
            "username": this.refs.username.value,
            "password": this.refs.password.value

        };
        let d = JSON.stringify(logD);
        console.log(JSON.parse(d));
        await fetch("http://localhost:8080/cust/validate",
            {
                method: 'POST', headers: { 'Content-type': 'application/json' },
                body: d
            })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        customer: result
                    });
                }

            );
        console.log(this.state.customer)
        localStorage.setItem('uname', this.refs.username.value)
        localStorage.setItem('email', this.state.customer.email)
        localStorage.setItem('id', this.state.customer.id)
        console.log(localStorage.getItem('email'))
        if (this.state.customer) {
            alert('Successful Login: ' + this.refs.username.value + '\n ');
            this.props.history.push('./welcome');
        }
        else {
            alert("HTTP-Error: ");
        }


        //   if (res) {
        //     alert("success");
        //     this.props.history.push('./Welcome');
        // } else {
        //     alert("HTTP-Error: " + response.status);
        // }
    }

    render() {
        return (
            <div>
                <div className="container loginbg" >
                    <form>
                        <br></br>

                        <div className="row">
                           
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-3  m-5">
                                <br></br>
                                <h1 className="login mt-5">LOGIN</h1>
                                <div className="form-group">
                                    <input type="email" className="form-control d-block" ref="username" required="true" placeholder="Enter username" active />
                                </div>

                                <div className="form-group  ">
                                    <input type="password" className="form-control " ref="password" required="true" placeholder="Enter password" />
                                </div>
                                <div className="form-group  ">
                                    <button type="button" onClick={this.loginClicked} className="btn btn-danger button ">Login</button>
                                    <p className="forgot-password" >
                                        Forgot <a href="/forgotp">password?</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div></div>

        );
    }
}