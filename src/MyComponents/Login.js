import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import UserService from "../Services/UserService"
import '../App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class Login extends Component {  
  state = {
    username: "",
    password: "",
  };
  onUsernameChange = (event) => {
    this.setState({
      username : event.target.value,                     //evwnt ko target krke value put krdo
    });
  };
  onPasswordChange = (event) => {
    this.setState({
      password : event.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    let loginData = this.state;
    console.log("submitted", loginData);
    console.log("userData => " + JSON.stringify(loginData));

    UserService.loginUser(loginData).then((res) => {
      console.log("res", res);
      if (res.data) {
       // localStorage.removeItem("user");
        localStorage.setItem("role", res.data.id);        //jo bhi response.data.id ke andr aari hh use role me store krde
        toast.success("Logged In Successfully!",{autoClose: 2000});
        setTimeout(()=>{
          window.location.href = "/booking";  //booking pe redirect krva dia
      

        },2000)         

      }

    });

  };
  render() {
    return (
      <>
      <div>
        <div className="homecontainer">
        </div>
        <section className="vh-100" style={{ backgroundImage: 'url("reg.jpg")' , backgroundRepeat:'no-repeat', backgroundSize: 'cover',  backgroundPosition: 'center' }}>
          <div className="container py-5 h-100">
            {/* <img src='air.jpg' alt='madam' /> */}
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                <div
                  className="card shadow-2-strong"
                  style={{ borderRadius: "4rem" }}
                >
                  <div className="card-body p-5 text-center">
                    <h3 className="mb-4"><b>Sign in</b></h3>
                    <div className="form-outline mb-4">
                      <label className="form-label passwordLabel" htmlFor="typeEmailX-2">
                        Username
                      </label>
                      <input
                        type="text"
                        required placeholder="Enter Your Username"
                        id="typeEmailX-2"
                        className="form-control form-control-lg"
                        name="name"
                        value={this.state.username} //ye input field ki value hh
                        onChange={this.onUsernameChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label className="form-label passwordLabel" htmlFor="typePasswordX-2">
                        Password
                      </label>
                      <input
                        type="password"
                        required placeholder="Enter Your Password"
                        id="typePasswordX-2"
                        className="form-control form-control-lg"
                        name="password"
                        value={this.state.password} onChange={this.onPasswordChange}
                      />
                    </div>
                    {/* Checkbox */}
                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        {" "}
                        Remember password{" "}
                      </label>
                    </div>

                    <button
                      className="buttonLogin btn-lg"
                      type="submit"
                      name="submit"
                      value="submit" onClick={this.onSubmit}
                    >
                      Login
                    </button>
                    <p className="text-center text-muted mt-5 mb-0">Don't have an account? <a href="/register" className="fw-bold text-body"><u>Register here</u></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />

      </div>
     

      </>
    );
  }
}