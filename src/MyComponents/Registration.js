
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import UserService from "../Services/UserService";
// import '../App.css';

export class Registration extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            usernameError: '',
            emailError: '',
            passwordError: '',
            msg: ''
        }

        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveUserData = this.saveUserData.bind(this);
    }

    //validation
    valid() {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (this.state.username.length < 4 && this.state.email.length < 6 && this.state.password.length < 6) {
            this.setState({
                usernameError: "*Required",
                emailError: "*Required",
                passwordError: "*Required",
            })
        }
        else if (this.state.username.length < 4) {
            this.setState({
                usernameError: "Invalid Username"
            })
        }
        else if (this.state.email.length < 6) {
            this.setState({
                emailError: "Email id is not valid"
            })
        }
        else if (!regex.test(this.state.email)) {
            this.setState({
                emailError: "This is not a valid email format!"
            })
        }
        else if (this.state.password.length < 6) {
            this.setState({
                passwordError: "Password length should be more than 6"
            })
        }
        else {
            return true;
        }

    }

    //for save
    saveUserData = (e) => {
        e.preventDefault();
        if (this.valid()) {
            let user = {
                username: this.state.username, email: this.state.email, password: this.state.password
            };
            console.log('user => ' + JSON.stringify(user));

            UserService.createUsers(user).then(res => {
                this.setState({
                    msg: "Registration Successful"
                })
            })
        }
    }

    changeUserNameHandler = (event) => {
        this.setState({ username: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }

    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }


    render() {
        return (

            <div>
                <div className="homecontainer">
                </div>
                <section
                    className="vh-100 bg-image"
                    style={{ backgroundColor: "#C3CCC6" }}
                >
                    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                        <div className="container h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                                    <div className="card" style={{ borderRadius: "4rem" }}>
                                        <div className="card-body p-5">
                                            <h2 className="text-uppercase text-center mb-5">
                                                Sign-Up
                                            </h2>

                                            <form>
                                                <div className="form-outline mb-4"></div>

                                                <div className="input-container">
                                                    <label className="form-label passwordLabel">UserName : </label>
                                                    <input  type="text" name="name" required placeholder="Enter Your UserName" value={this.state.username} onChange={this.changeUserNameHandler} />
                                                    <p style={{ color: "red" }}>{this.state.usernameError}</p>
                                                </div>
                                                <div className="input-container">
                                                    <label className="form-label passwordLabel">Email : </label>
                                                    <input type="email" className="form-control form-control-lg"
                                                     name="email" required placeholder="Enter Your Email" 
                                                     value={this.state.email} 
                                                     onChange={this.changeEmailHandler} />
                                                    <p style={{ color: "red" }}>{this.state.emailError}</p>

                                                </div>
                                                <div className="input-container">
                                                    <label>Password : </label>
                                                    <input type="password" name="password" required placeholder="Enter Password" value={this.state.password} onChange={this.changePasswordHandler} />
                                                    <p style={{ color: "red" }}>{this.state.passwordError}</p>
                                                </div>

                                                <div onClick={this.saveUserData} className="button-container">
                                                    <input type="submit" value="Register" />
                                                </div>
                                                <p className="text-center text-muted mt-5 mb-0">
                                                    Have already an account?{" "}
                                                    <a href="/login" className="fw-bold text-body">
                                                        <u>Login here</u>
                                                    </a>
                                                </p>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
            </div >

        )
    }
}

export default Registration