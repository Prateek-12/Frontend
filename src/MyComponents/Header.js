import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Header(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInAdmin, setIsLoggedInAdmin] = useState(false);

  useEffect(() => {
    let logged = localStorage.getItem("role");
    let loggedAdmin = localStorage.getItem("admin");

    if (logged) {
      setIsLoggedIn("logged if", true);
      console.log(isLoggedIn);
    } else if (loggedAdmin) {
      setIsLoggedInAdmin(true);
    } else {
      setIsLoggedIn(false);
      setIsLoggedInAdmin(false);
    }
  });
  function logoutHandle() {
    setIsLoggedIn(false);
    localStorage.removeItem("role");
    console.log("logout");
  }
  return (
    <>
      <nav className="navbar customNav navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {isLoggedInAdmin && (
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/bookings">
                    Bookings
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " aria-current="page" to="/flights">
                    Flights
                  </Link>
                </li>
                {/* <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      onClick={logoutHandle}
                      to="/login"
                    >
                      Logout
                    </Link>
                  </li> */}
              </ul>
            </div>
          )}
          {isLoggedIn ? (
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li> */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-current="page"
                    to="/search"
                  >
                    Search
                  </Link>
                </li>  */}
                {/* <li className="nav-item">
                  <Link
                    className="nav-link  "
                    aria-current="page"
                    to="/flights"
                  >
                    Flights
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link
                    className="nav-link active "
                    aria-current="page"
                    to="/booking"
                  >
                    Booking
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/checkIn">
                    Check In
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li> */}
              </ul>
              <div
                class="collapse navbar-collapse justify-content-end"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav ">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      onClick={logoutHandle}
                      to="/login"
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav ">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active "
                    aria-current="page"
                    to="/search"
                  >
                    Search
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link
                    className="nav-link  "
                    aria-current="page"
                    to="/flights"
                  >
                    Flights
                  </Link>
                </li>    */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/about">
                    About
                  </Link>
                </li>

                <li className="nav-item ">
                  <Link
                    className="nav-link active  "
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/adminlogin">
                    Admin Login
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
