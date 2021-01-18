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
        <Route path="/">
            <Home />
        </Route>
    </Switch>
</Router>;

export default AppRouter;