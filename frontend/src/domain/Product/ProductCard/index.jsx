import  React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link} from "@material-ui/core"


const ProductCard = ({ product: { id, name,price,num,num2,image} }) => { 
  
    const history = useHistory();
    const wishlist = () => {
       
        const token = localStorage.getItem("token");
        

        axios.post("http://localhost:8000/wishlist",{pid:id} ,{
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
 history.push("/");
           
  }).catch(console.log);
    };


    const cart = () => {const token = localStorage.getItem("token");
        

    axios.post("http://localhost:8000/cart",{pid:id} ,{
        headers: {
            Authorization: "Bearer " + token
        }
    }).then((res) => {
history.push("/");
       
}).catch(console.log);
};

const paperStyle = {height:"40vh", float:"left",  width: "460px",
padding: "5px",margin:"60px 80px 40px auto" }
const btnStyle = {backgroundColor:'#f8a919',margin:"55px 30px 30px 45px" }
const btnStyle1 = {backgroundColor:'#f8a919',margin:"50px 40px 20px 30px" }
//show cart
return(
     <div>
 <Grid>
    <Paper elevation ={5} style={paperStyle} > 
  <Grid align="center">
    
<img src={image}
 left="1000px" padding="30px"  width='100' height='100'/>



   <h3 margin-top="5px" margin-bottom="13px">  {name }</h3 > <h3 top="5px">Price :  {price}  </h3>
   </Grid>
   {num2>0 || <Button name="cart" variant="contained" style={btnStyle1}  onClick={cart}   >Add to cart </Button>
}
{   num>0 || <Button  variant="contained" style={btnStyle} name="wishlist" onClick={wishlist}   >Add to wishlist </Button>

 }       
   

</Paper>
</Grid>
 </div>
    
  )
};
export default ProductCard;
