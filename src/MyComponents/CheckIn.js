import React, { useEffect, useState } from "react";
import Service from "../Services/Service";
import { useHistory } from "react-router-dom";

function CheckIn() {
  const history = useHistory();

    const userid = localStorage.getItem("role");
    const [bookings,setBooking] = useState([]);
    useEffect(() => {
    // Service.getCheckin().then((res) => {
    //     // getFlights(res.data);
    //     console.log("res.data",res)
    // });
    Service.getBookingById(userid).then((res) => {
        console.log("res data", res);
        setBooking(res.data);
    });
    }, []);
    const checkInHandler= (e)=>{
        history.push(`/checkInDetails/${e}`);

    }
     
    return (
    <div>
        {bookings.length > 0 && (
        <div className="row">
            {bookings.map((passenger, index) => (
            <div className="col-sm-4" onClick={() => {checkInHandler(passenger.bookingid);
              }}>
                <div
                className="card flight-table table-margin"
                style={{ color: "black" }}
                >
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                    <div>Passenger {index + 1}</div>
                    <div className="text-secondary"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div>
                    <span>Flight No: </span>
                    <span>{passenger.flightNumber}</span>
                    </div>
                    <div>
                    <span>Name: </span>
                    <span>
                        {passenger.passengerList[0].firstName} {passenger.passengerList[0].lastName}
                    </span>
                    </div>
                    <div>
                    <span>Gender: </span>
                    <span>{passenger.passengerList[0].gender}</span>
                    </div>
                    <div>
                    <span>Age: </span>
                    <span>{passenger.passengerList[0].age}</span>
                    </div>
                    <div>
                    <span>Booking Fare: </span>
                    <span>{passenger.bookingAmount}</span>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        )}
    </div>
    );
}

export default CheckIn;
