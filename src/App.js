import './App.css';
import Home from "./MyComponents/Home";
import Header from "./MyComponents/Header";
import ListFlightsComponent from "./MyComponents/ListFlightsComponent" 
import CreateFlightComponent from "./MyComponents/CreateFlightComponent" 
import UpdateFlightComponent from "./MyComponents/UpdateFlightComponent" 
import BookingPage from "./MyComponents/BookingPage"
import ListBookingsComponent from './MyComponents/ListBookingsComponent';
import CheckIn from './MyComponents/CheckIn';
import checkInDetails from './MyComponents/CheckInDetails';
import checkInConfirmation from './MyComponents/checkInConfirmation';
import SubmitForm from './MyComponents/SubmitForm';


import Showcase from './MyComponents/Showcase';

import Destinations from './MyComponents/Destinations';
// import SearchFlights from "./MyComponents/SearchFlights" 
import Search from "./MyComponents/Search" 
import AdminLogin from './MyComponents/AdminLogin';

import About from "./MyComponents/About"
import Login from "./MyComponents/Login"
import Registration from "./MyComponents/Registration"


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './MyComponents/Footer';
//import Destinations from './MyComponents/Destinations';

function App() {
  return (
    <>
      <Router>
        <Header title=" Welcome &#9992;" />
        <Switch>

          <Route exact path="/">
            <Showcase/>
            <Destinations/>
            {/* <Home /> */}
          </Route>
           {/* <Route path="/bookings" component={ListBookingsComponent} /> */}
           <Route path="/booking" component={BookingPage} />
          <Route path="/flights" component={ListFlightsComponent} />
          <Route path="/add-flight" component={CreateFlightComponent} />           
          {/* <Route path="/search" component={SearchFlights} /> */}
          <Route path="/search" component={Search} />
          <Route path="/update-flight/:flightNumber" component={UpdateFlightComponent} />
          <Route path="/booking/:flightNumber" component={BookingPage} />
          <Route path="/checkIn" component={CheckIn} />
          <Route path="/checkInDetails/:bookingId" component={checkInDetails} />
          <Route path="/checkInConfirmation" component={checkInConfirmation} />
          
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/register">
            <Registration />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/adminlogin">
            <AdminLogin/>
          </Route>



        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
