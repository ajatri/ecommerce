import axios from "axios";
import { useEffect, useState } from "react";

import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link} from "@material-ui/core"

import { useHistory } from "react-router-dom";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
       axios.get("http://localhost:8000/wishlist/wishlist", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            setWishlist(res.data.wishlist.result);
            console.log(res.data.wishlist.result)
           
  }).catch(console.log);
    }, []);
    const paperStyle = {height:"40vh", float:"left",  width: "60",
    padding: "5px",margin:"60px 80px 40px auto" }
const listItems = wishlist.map((wishlists) => (
    <div key={wishlists.id}>
       <Grid>
    <Paper elevation ={5} style={paperStyle} > 
  <Grid align="center">
    
<img src={wishlists.image}
 left="1000px" padding="30px"  width='100' height='100'/>



   <h3 margin-top="5px" margin-bottom="13px">  {wishlists.name }</h3 > <h3 top="5px">Price :  {wishlists.price}  </h3>
   </Grid>
   </Paper>
   </Grid>


    </div>

  ));

return(<div> {listItems}</div>)

}
export default Wishlist;