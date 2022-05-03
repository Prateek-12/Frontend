import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import Service from "../Services/Service";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const SubmitForm = (props) => {
  const [flightNumber,setFlightNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("13");
  const [gender, setGender] = useState("");
  const [flights,getFlights] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Passenger Added");
    console.log(flightNumber);
    const userObj = { flightNumber,firstName, lastName, age, gender }
    props.setPassengers([...props.passengers, userObj]) //using spread operator added value of passengers to state setpassengers
    props.setAddingPassenger(false) // ye tab call hoga jab ham ksi pasenger ko cancel krenge
  };
  useEffect(()=>{
    Service.getFlights().then((res) => {
       getFlights(res.data);
   });    
},[]);
  return (
    <div className="w-100">
      <form className="text-primary" onSubmit={handleSubmit}>
        <div className="card flight-table mt-3 p-3" style={{ color: "black" }}>
          <div className="text-center">
            <div className="row mb-2">
              <div className="col-sm-6">
                <div>FLight Number</div>
                <select onChange={e => setFlightNo(e.target.value)}>
                {flights.length > 0 && flights.map((item) =>
                    <option value={item.flightNumber}>{item.flightNumber}</option>
                 )}
               </select>
              </div>

              <div className="col-sm-6">
                <div>First Name</div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>

              <div className="col-sm-6">
                <div> Last name</div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="row mb-2">
              <div className="col-sm-6">
                <div>Age</div>
                <input
                  type="number"
                  min={5}
                  max={100}
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  required
                />
              </div>

              <div className="col-sm-6">
                <div>Gender</div>
                <label>
                  {" "}
                  Male:
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    className="ml-1 mr-2"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                    required
                  />
                </label>
                <label>
                  {" "}
                  Female:
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    className="ml-1"
                    onChange={(event) => {
                      setGender(event.target.value);
                    }}
                    required
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="mx-auto">
            <button className="btn btn-primary" type="submit">Save</button>
          </div>
        </div>

      </form>
      <div className="text-center mt-2">
        <button className="btn btn-danger" onClick={() => props.setAddingPassenger(false)}>cancel</button>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default withRouter(SubmitForm);
