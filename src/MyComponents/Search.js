import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Search.css"
import { Button, Table } from "react-bootstrap";
import Service from "../Services/Service";
import Logout from "./Logout";
import { withRouter } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Search() {
    const history = useHistory();                                  
    const [flights, setFlights] = useState([]);
    const [airportList, setAirportList] = useState([]);
    const [takeoff, setFlightTakeOffStation] = useState("");
    const [landing, setFlightLandingStation] = useState("");
    const [departureDate,setDepartureDate] = useState("");

    useEffect(() => {                          // after that what you want to do
        Service.getFlights()
            .then((response) => {
                setAirportList(response.data);
                
            })
            .catch((error) => console.error(`Error :  ${error}`));
    }, []);     // [ ye ni lgaenge to infine time chlega]

    const searchFlights = async (event) => {
        event.preventDefault();
        let search = {           
            takeoff,
            landing,
            departureDate,
        };
        const flightResp = await Service.getByTakeoffAndLandingAndDepartureDate(  // takeoff or landing ka object create krega or ye api call krega get krlega jo bhi iske beech me flights hogi
            search
        );
        console.log(flightResp);
        setFlights(flightResp.data);// jo bhi ai se value aai use set krdia
    };

    const selectFlight = (id) => {
        toast.success("Login to book your flight!",{autoClose: 3000});
         setTimeout(()=>{
            history.push(`/login`);

         },2500)  



          // history.push(`/login`);
        };

    // const selectFlight = (id) => {
    //     history.push(`/booking/${id}`);
    // };

    return (


        
        <div style={{ backgroundImage: 'url("demo2.jpg")' , backgroundRepeat:'no-repeat', backgroundSize: 'cover',  backgroundPosition: 'center' }}>
            <Logout />
            <div className="container" >
                <div className="row mt-5 pt-5">
                    <div className="search">
                        <div className="search--tabs">
                            <button className="active">Search</button>
                        </div>
                        <div className="search--form">
                            <label> Source : </label>
                            <select
                                className="form-control"
                                name="departureAirport"
                                value={takeoff || ""}     //null aaegi to "" ye aa jaega
                                onChange={(e) => {
                                    setFlightTakeOffStation(e.target.value);
                                }}
                            >
                                <option value="">-</option>    
                                {airportList.map((flight) => (               // backend se jo data aaya {aaray of object} use loop krke print krre hh options ki form me   
                                    <option
                                        key={flight.flightNumber}                      //unique
                                        value={flight.takeoff}
                                    >
                                        {flight.takeoff}           {/* option me jo value show hogi */}
                                    </option>
                                ))}
                            </select>

                            <label> Destination : </label>
                            <select
                                className="form-control"
                                name="destinatonAirport"
                                value={landing || ""}
                                onChange={(e) => {
                                    setFlightLandingStation(e.target.value);
                                }}
                            >
                                <option value="">-</option>
                                {airportList.map((flight) => (
                                    <option
                                        key={flight.flightNumber}
                                        value={flight.landing}
                                    >
                                        {flight.landing}
                                    </option>
                                ))}
                            </select>

                            <label> Departure Date : </label>
                            <select
                                className="form-control"
                                name="Departure-Date "
                                value={departureDate || ""}
                                onChange={(e) => {
                                    setDepartureDate(e.target.value);
                                }}
                            >
                                <option value="">-</option>
                                {airportList.map((flight) => (
                                    <option
                                        key={flight.flightNumber}
                                        value={flight.departureDate}
                                    >
                                        {flight.departureDate}
                                    </option>
                                ))}
                            </select>

                            <button className="btn" onClick={searchFlights}>Search</button>
                        </div>
                    </div>


                    {flights.length !== 0 ? (
                        <div className="col-lg-8 mb-5 grid-margin" style={{ margin: "auto"  }}>
                            <div className="card h-100 flight-table" style={{ color: "black"  }}>
                                <h4 className="card-header">
                                    Available Flights {takeoff} - {landing}
                                </h4>
                                <div className="card-body">
                                    <Table
                                        striped
                                        bordered
                                        hover
                                        style={{
                                            height: "250px",
                                            overflow: "scroll",
                                            display: "block",
                                            color: "black"
                                        }}
                                    >
                                        <thead>     
                                            <tr>
                                                <th>FlightNumber</th>
                                                <th>Takeoff</th>
                                                <th>Departure Date and Time</th>
                                                {/* <th>Departure Time</th> */}
                                                <th>Landing</th>
                                                <th>Arrival Date and Time</th>
                                                {/* <th>Arrival Time</th> */}
                                                <th>Flight Fare</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {flights.map((flight) => (
                                                <tr key={flight.flightNumber}>
                                                    <td>{flight.flightNumber}</td>
                                                    <td>{flight.takeoff}</td>
                                                    <td>{flight.departureDate}</td>
                                                    {/* <td>{flight.departureTime}</td> */}
                                                    <td>{flight.landing}</td>
                                                    <td>{flight.arrivalDate}</td>
                                                    {/* <td>{flight.arrivalTime}</td> */}
                                                    <td>{flight.flightFare}</td>
                                                    <td>
                                                        {" "}
                                                        <button
                                                            onClick={() => selectFlight(flight.flightNumber)}
                                                            className="btn btn-info"
                                                        >
                                                            Select
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    ) : null}   
                </div>
            </div>
            <ToastContainer />
        </div>

        
    );
}

export default withRouter(Search);