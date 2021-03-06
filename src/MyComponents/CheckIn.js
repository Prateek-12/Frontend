import React, { useEffect, useState } from "react";
import Service from "../Services/Service";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CheckIn() {
  const history = useHistory();

  const userid = localStorage.getItem("role");
  const [bookings, setBooking] = useState([]);

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
  const checkInHandler = ( id) => {
    history.push(`/checkInDetails/${id}`); // as a varaiable use krne ke lie back tick ue kia vrna vo e ko bhi string manta
  };

  return (
    <div>
      {bookings.length > 0 && (
        <div className="row">
          {bookings.map((passenger, index) => (
            <div
              className="col-sm-4"
              style={{ cursor: "pointer" }}
              onClick={() => {
                checkInHandler(passenger.bookingid);
              }}
              key={index}
            >
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
                      {passenger.passengerList[0].firstName}{" "}
                      {passenger.passengerList[0].lastName}
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
                    <span>Booking Fare: Done : </span>
                    <span>{passenger.bookingAmount}</span>
                  </div>
                  {/* <div>
                    <span>Booking Fare: Done : </span>
                    <span>{passenger.bookingAmount}</span>
                  </div> */}


                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default CheckIn;
