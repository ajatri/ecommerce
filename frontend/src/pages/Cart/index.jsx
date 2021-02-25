
import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link} from "@material-ui/core"

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
    const paperStyle = {height:"40vh", float:"left",  width: "300px",
padding: "5px",margin:"60px 80px 40px auto" }

const listItems = cart.map((carts) => (
    <div key={carts.id}>
      <Grid>
    <Paper elevation ={5} style={paperStyle} > 
  <Grid align="center">
    
<img src={carts.image}
 left="1000px" padding="30px"  width='100' height='100'/>



   <h3 margin-top="5px" margin-bottom="13px">  {carts.name }</h3 > <h3 top="5px">Price :  {carts.price}  </h3>
   </Grid>
   </Paper>
   </Grid>

    </div>

  ));
  

  const checkout = () => {
    history.push("/checkout")
}
const btnStyle = {backgroundColor:'#ffab10',position:"absolute" ,margin:"600px 100px 130px -250px" }

return(<div>

  {listItems}
  <Button name="checkout" onClick={checkout} style={btnStyle}   >Buy</Button> 
</div>)

}
export default Cart;