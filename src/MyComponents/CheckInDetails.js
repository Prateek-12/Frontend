import React, { useEffect, useState } from 'react'
import Service from '../Services/Service'
import { useParams } from "react-router-dom";

function CheckInDetails() {
  // getBookingDetailsById
  const {bookingId} = useParams();
  const [bookingData,setBookingData] = useState([])

  useEffect(()=>{
    Service.getBookingDetailsById(bookingId).then((res)=>{
      console.log(bookingId);
      console.log(res);
      setBookingData(res.data);
    })
  },[])

  return (
    <div>
    <div className="homecontainer">
    </div>
    <section className="vh-100" style={{ backgroundColor: "#C3CCC6" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "4rem" }}
            >
              <div className="card-body p-5 text-center">
                <h3 className="mb-4"><b>Welcome OnBoard! <br/><b>PLEASE</b> Check In</b></h3>
                <div className="form-outline mb-4">
                  <label className="form-label passwordLabel" htmlFor="typeEmailX-2">
                    FirstName
                  </label>
                  <input
                    type="text"
                    required placeholder="Enter Your FirstName"
                    id="typeEmailX-2"
                    disabled
                    className="form-control form-control-lg"
                    name="firstName"
                    value={bookingData.passengerList[0].firstName} 
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label passwordLabel" htmlFor="typePasswordX-2">
                    LastName
                  </label>
                  <input
                    type="text"
                    disabled
                    required
                    placeholder="Enter Your LastName"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    name="lastName"
                    value={bookingData.passengerList[0].lastName} 
                  />
                </div>
                <div className="form-outline mb-4">
                  <label className="form-label passwordLabel" htmlFor="typePasswordX-2">
                  Seat Number
                  </label>
                  <input
                    type="text"
                    required placeholder="Enter Seat Number"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    name="seatNumber"
                    // value={}
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label passwordLabel" htmlFor="typePasswordX-2">
                  Check In Time
                  </label>
                  <input
                    type="date"
                    required 
                    placeholder="Enter Seat Number"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    name="seatNumber"
                    // value={}
                  />
                </div>
                
                <div className="form-outline mb-4">
                  <label className="form-label passwordLabel" htmlFor="typePasswordX-2">
                  Flight Number
                  </label>
                  <input
                    type="text"
                    required placeholder="Enter Seat Number"
                    id="typePasswordX-2"
                    disabled
                    className="form-control form-control-lg"
                    name="flightNumber"
                    value={bookingData.flightNumber}
                  />
                </div>        
                {/* Checkbox */}

                <button
                  className="buttonLogin btn-lg"
                  type="submit"
                  name="submit"
                  value="submit"
                  // onClick={this.onSubmit}
                >
                  Check In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default CheckInDetails;
