import React, { useEffect, useState } from "react";
import Service from "../Services/Service";
import { useHistory } from "react-router-dom";
function CheckInConfirmation() {

    const userid = localStorage.getItem("role");
    const [time,setTime] = useState("");
    const [bookings,setBooking] = useState([]);
    useEffect(() => {
    Service.getCheckin().then((res) => {
        console.log("res data", res);
        setBooking(res.data);
        let time = res.data.checkInTime;
        console.log("type of ",typeof(res.data.checkInTime))
        time = new Date(time).toLocaleTimeString();
        setTime(time);
    });
    }, []);
  return (
    <div  style={{ backgroundImage: 'url("reg.jpg")' , backgroundRepeat:'no-repeat', backgroundSize: 'cover',  backgroundPosition: 'center' }} >
        {bookings.length > 0 && (
        <div className="row">
            {bookings.map((passenger, index) => (
            <div className="col-sm-4" 
            // onClick={() => {checkInHandler(passenger.bookingid);}}
            >
                <div
                className="card flight-table table-margin"
                style={{ color: "black" }}
                >
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                    <div>CheckIn {index + 1}</div>
                    <div className="text-secondary"></div>
                    </div>
                </div>
                <div className="card-body">
                <div>
                    <span>CheckIn ID:</span>
                    <span>{passenger.checkinId}</span>
                    </div>
                    <div>
                    <span>Flight No: </span>
                    <span>{passenger.flightNumber}</span>
                    </div>
                    <div>
                    <span>Name: </span>
                    <span>
                        {passenger.firstName} {passenger.lastName}
                    </span>
                    </div>
                    <div>
                    <span>Seat Number: </span>
                    <span>{'A-16'}</span>
                    </div>
                    <div>
                    <span>CheckIn Date: </span>
                    <span>{new Date(passenger.flightDate).toLocaleDateString()}</span>
                    </div>
                    <div>
                    <span>CheckIn Time: </span>
                    <span>{new Date(passenger.checkInTime).toLocaleTimeString()}</span>
                    </div>
                </div>
                </div>
            </div>
            ))}
        </div>
        )}
    </div>
  )
}

export default CheckInConfirmation