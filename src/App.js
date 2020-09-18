import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Booking from './Components/Booking/Booking';
import CheckOut from './Components/CheckOut/CheckOut';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Main from './Components/Main/Main';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Header></Header>
       <Switch>
          <Route exact path="/">
            <Main></Main>
          </Route>
          <Route path="/home">
            <Main></Main>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/checkout/:title">
            <CheckOut></CheckOut>
          </PrivateRoute>
          <Route path="*">
              Error 404
          </Route>
       </Switch>
    </Router>
    
    </UserContext.Provider>
  );
}

export default App;
