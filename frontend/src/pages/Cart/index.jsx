
import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
       axios.get("http://localhost:8000/cart/showcart", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            setCart(res.data.cart.result);
           
  }).catch(console.log);
    }, []);

const listItems = cart.map((carts) => (
    <div key={carts.id}>
      {carts.name}  : {carts.price}

    </div>

  ));

return(<div> {listItems}</div>)

}
export default Cart;