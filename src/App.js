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

function App() {
  return (
    <div>
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
          <Route path="/review">
            <Review/>
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/addService">
            <AddService />
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
            <ManageService />
          </Route>
        </Switch>
    </Router>
      
    </div>
  );
}

export default App;
