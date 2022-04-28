import React, { useEffect, useState } from 'react'
import Service from '../Services/Service'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

function CheckInDetails() {
  const history = useHistory();

  // getBookingDetailsById
  const {bookingId} = useParams();
  const [bookingData,setBookingData] = React.useState([])
  const [firstName,setFirstName] = React.useState("")
  const [lastName,setLastName] = React.useState("")
  const [seatNumber,setSeatNumber] = React.useState("")
  const [date,setDate] = React.useState("")
  const [flightno,setFlightNumber] = React.useState("")
  const [obj,setObj] = React.useState({})

  useEffect(()=>{
    Service.getBookingDetailsById(bookingId).then((res)=>{
      console.log(bookingId);
      console.log(res);
      setBookingData(res.data);
    })
  },[])

//  const onSubmit=()=>{
//    console.log("firstName",firstName);
//    console.log("lastName",lastName);
//    setObj({
//     firstName:firstName,
//     lastName:lastName,
//     seatNumber:seatNumber,
//     date:date,
//     flightno:flightno,
//     flightDate:date,
//   })
//    console.log(setObj);
//    Service.checkIn(obj).then((res)=>{
//      console.log(res);
//    })
//  }

 const onSubmit = async () => {
   let time = new Date(date).toLocaleTimeString()
  const obj = {
    firstName:bookingData.passengerList[0].firstName ?? "",
    lastName:bookingData.passengerList[0].lastName ?? "",
    seatNumber:seatNumber,
    checkInTime:date,
    flightNumber:bookingData.flightNumber ?? "",
    flightDate:date,
  };
  const resp = await Service.checkIn(obj);
  console.log(resp);
  setTimeout(()=>{
    history.push(`/checkInConfirmation`);

  },2000)
};

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
              { bookingData.length!==0 &&
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
                    onChange={e => setFirstName(e.target.value)}
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
                    onChange={e => setLastName(e.target.value)}

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
                    onChange={e => setSeatNumber(e.target.value)}

                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label passwordLabel" htmlFor="typePasswordX-2">
                  Check In Time
                  </label>
                  <input
                    type="datetime-local"
                    required 
                    placeholder="Enter Seat Number"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                    name="seatNumber"
                    // value={}
                    onChange={e=> setDate(e.target.value)}
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
                    onChange ={ e=> setFlightNumber(e.target.value)}
                  />
                </div>        
                {/* Checkbox */}

                <button
                  className="buttonLogin btn-lg"
                  type="submit"
                  name="submit"
                  value="submit"
                  onClick={onSubmit}
                >
                  Check In
                </button>
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default CheckInDetails;
