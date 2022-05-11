import React, { Component } from "react";
import Service from "../Services/Service";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import "./ListFlightsComponent.css"

const logout = () => {
  localStorage.removeItem("role");
};

class ListFlightsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flights: [],
    };

    this.addFlight = this.addFlight.bind(this);
    this.editFlight = this.editFlight.bind(this);
    this.deleteFlight = this.deleteFlight.bind(this);
  }

  deleteFlight(flightNumber) {
    Service.deleteFlight(flightNumber).then((res) => {
      this.setState({
        flights: this.state.flights.filter(
          (flight) => flight.flightNumber !== flightNumber
        ),
      });
    });
  }

  editFlight(flightNumber) {
    this.props.history.push(`/update-flight/${flightNumber}`);
  }

 componentDidMount() {         // sbse phle ye fun chlega
    Service.getFlights().then((res) => {
      this.setState({ flights: res.data });
    });
  }

  addFlight() {
    this.props.history.push("/add-flight");
  }

  render() {
    return (
      <div style={{ color: "white" }}>
        <div className="mx-n3">
        </div>
        <div className="d-flex p-2 mx-n3 flight-table table-margin">
          <div className="mx-auto text-center">
            <h2 className="mx-auto">Flights List</h2>
          </div>
          <div className="mt-1">
            <button className="btn btn-primary" onClick={this.addFlight}>
              Add Flight
            </button>
          </div>
        </div>
        <div className="row mainNav flight-table">
          <Table hover striped bordered
            style={{ alignSelf: "center", color: "black" }}
          >
            <thead>
              <tr>
                <th>Flight Number</th>
                <th>Flight Name</th>
                <th>Takeoff</th>
                <th>Landing</th>
                <th>Layover</th>
                <th>Duration</th>
                <th>Departure Date</th>
                 {/* <th>Departure Time</th> 
                 <th>Arrival Time</th>  */}
                <th>Arrival Date</th>
                <th>Flight Fare</th>
                <th>Seats</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.flights.map((flight) => (
                <tr key={flight.flightNumber}>
                  <td>{flight.flightNumber}</td>
                  <td>{flight.flightName}</td>
                  <td>{flight.takeoff}</td>
                  <td>{flight.landing}</td>
                  <td>{flight.layover.toString()}</td>
                  <td>{flight.duration}</td>
                  <td>{flight.departureDate}</td>
                   {/* <td>{flight.departureTime}</td>
                  <td>{flight.arrivalTime}</td>  */}
                  <td>{flight.arrivalDate}</td>
                  <td>{flight.flightFare}</td>
                  <td>{flight.totalSeats}</td>
                  <td>
                    <button
                      onClick={() => this.editFlight(flight.flightNumber)}
                      className="btn btn-info"
                      style={{ marginRight: "10px" }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => this.deleteFlight(flight.flightNumber)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default withRouter(ListFlightsComponent);
