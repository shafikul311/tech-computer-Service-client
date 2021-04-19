import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import Admin from './Components/Admin/Admin/Admin';
import OrderList from './Components/Admin/OrderList/OrderList';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import ManageService from './Components/Admin/ManageService/ManageService';
import Review from './Components/Shared/User/Review/Review';
import BookedServiceList from './Components/Shared/User/BookedServiceList/BookedServiceList';
import BookNow from './Components/Shared/User/BookNow/BookNow';
import PrivateRoute from './Components/Login/PrivateRoute';
import { createContext, useState } from 'react';



export const UserContext = createContext()

function App() {
  const [loggedInUser ,setLoggedInUser] = useState({});


  return (
    <div>
       <UserContext.Provider value={[loggedInUser ,setLoggedInUser]}>
         <h6>{loggedInUser.name}</h6>
          <Router>
            <Switch>
              <Route  exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <PrivateRoute path="/review">
                <Review/>
              </PrivateRoute>
              <PrivateRoute path="/admin">
                <Admin />
              </PrivateRoute>
              <Route path="/addService">
                <AddService/>
              </Route>
              <Route path="/orderList">
                <OrderList />
              </Route>
              <Route path="/makeAdmin">
                <MakeAdmin />
              </Route>
              <Route path="/manageService">
                <ManageService />
              </Route>
              <Route path="/bookedServiceList">
                <BookedServiceList/>
              </Route>
              <PrivateRoute path="/bookNow/:_id">
                <BookNow/>
              </PrivateRoute>
            </Switch>
        </Router>

    </UserContext.Provider>
      
    </div>
  );
}

export default App;
