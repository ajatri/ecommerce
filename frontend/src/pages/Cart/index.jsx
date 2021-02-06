
import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
       axios.get("http://localhost:8000/cart/cart", {
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
  

  const checkout = () => {
    history.push("/checkout")
}
return(<div> 
  {listItems}
  <button name="checkout" onClick={checkout}   >Buy</button> 
</div>)

}
export default Cart;