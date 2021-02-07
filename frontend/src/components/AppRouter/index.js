import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Login from "../../pages/Login"
import SignUp from "../../pages/SignUp"
import Home from "../../pages/Home"
import Wishlist from "../../pages/Wishlist"
import Cart from "../../pages/Cart"
import UserProfile from "../../pages/UserProfile"
import Address from "../../pages/Address"
import Checkout from "../../pages/Checkout"



const AppRouter = () => <Router>
    <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/cart">
            <Cart/>
        </Route>
        <Route path="/signup">
            <SignUp />
        </Route>
        <Route path="/wishlist">
            <Wishlist />
        </Route>
        <Route path="/userprofile">
            <UserProfile />
        </Route>
        <Route path="/address">
            <Address />
        </Route>
        <Route path="/checkout">
            <Checkout />
        </Route>
      <Route path="/">
            <Home />
        </Route>
       
    </Switch>
</Router>;

export default AppRouter;