import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import BookingRoom from './Components/BookingRoom/BookingRoom';
import Hotel from './Components/Hotel/Hotel';
import Login from './Components/Login/Login';
import NotMatched from './Components/NotMatched/NotMatched';
import PrivateRoute from './Components/PrivateRoute/PrivateRout';
import Header from './Components/Header/Header';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
      <Header></Header>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about/:bookId">
            <BookingRoom/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/booking/:detailId">
            <Hotel/>
          </PrivateRoute>
          <Route path="*">
            <NotMatched/>
          </Route>
        </Switch>
      </Router>
      
      </UserContext.Provider>
  );
}

export default App;
