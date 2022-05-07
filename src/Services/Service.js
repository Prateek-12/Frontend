import axios from 'axios';

const FLIGHT_API_BASE_URL = "http://localhost:9001/fbs/search";

const BOOKING_API_BASE_URL = "http://localhost:9002/fbs/booking";

const CHECKIN_API_BASE_URL = "http://localhost:9003/fbs/checkin";

const Payment = "http://localhost:9004/"

let Service = {
    //Flights API's
    getFlights : () => {return axios.get(FLIGHT_API_BASE_URL+"/flights");},
    createFlight : (flight) => {return axios.post(FLIGHT_API_BASE_URL+"/addFlight",flight);}, 
    getFlightsByFlightNumber : (flightNumber) => {return axios.get(FLIGHT_API_BASE_URL+"/flights/"+flightNumber);},
    updateFlight : (flight, flightNumber) => {return axios.put(FLIGHT_API_BASE_URL+"/updateFlight/"+flightNumber, flight);},
    deleteFlight : (flightNumber) => {return axios.delete(FLIGHT_API_BASE_URL+"/flight/delete/"+flightNumber)},
    getByTakeoffAndLandingAndDepartureDate : ({takeoff, landing}) => {
        const url = FLIGHT_API_BASE_URL+"/flight/"+takeoff+"/"+landing;
        console.log(url);
        return axios.get(url);
    },

    // CheckIn API's
    getCheckin : () => { return axios.get(CHECKIN_API_BASE_URL+"/");},
    checkIn :(checkInObj)=>{ return axios.post(CHECKIN_API_BASE_URL+"/create",checkInObj)},

    // Booking API's
    createBooking : (booking) => {return axios.post(BOOKING_API_BASE_URL+"/addBooking", booking);},
    getBookings : () => {return axios.get(BOOKING_API_BASE_URL+"/allBookings");},
    deleteBooking : (bookingid) => {return axios.delete(BOOKING_API_BASE_URL+"/deleteBooking/"+bookingid);},
    getBookingById : (userId) => { return axios.get(BOOKING_API_BASE_URL+"/getBookingsByUserId/"+userId)},
    getBookingDetailsById :(bookingId) => {return axios.get(BOOKING_API_BASE_URL+"/getBooking/"+bookingId)},
    // http://localhost:9002/fbs/booking/getBooking/7 create
      

    //payment 
    paymentRedirect : () => { return axios.get(Payment)}


}


export default Service;