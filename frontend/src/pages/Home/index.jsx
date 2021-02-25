import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../domain/Product/ProductCard";
import { useHistory } from "react-router-dom";
import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link,IconButton} from "@material-ui/core"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Home = () => {
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
       const token = localStorage.getItem("token");
       axios.get("http://localhost:8000/products", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            setProducts(res.data.products.result);
      }).catch(console.log);
    }, []);
  
    //show cart
    const showwishlist = () => {
        history.push("/wishlist")
    };
 
    const showcart = () =>{
        history.push("/cart")
    };
    const profile = () =>{
        history.push("/userprofile")
    };
  
  
  
    const logout= () => { 
     localStorage.clear();
     history.push("/login");
    }
    const ibtnStyle = {padding:20,margin:"2px 200px 50px 50px"}
    const paperStyle ={backgroundColor:'#f8a919',height:"15vh",width:"100%"}
    const ibtnStyle1 = {margin:"30px auto",top:"-15px",left:"1020px"}
    const ibtnStyle2 = {margin:"50px auto",top:"-15px",left:"1040px"}
    const btnStyle3 = {margin:"50px auto",top:"-15px",left:"1070px", backgroundColor:"white" }
    return (
     <div>
         <Grid>
    <Paper elevation ={3} style={paperStyle} > 
    
    <IconButton  style={ibtnStyle} name="profile" onClick={profile}  
        >
     <AccountCircleIcon style={{ fontSize:40,color:"black"}} />
     </IconButton>
                  
    
    <IconButton  style={ibtnStyle1} name="showcart" onClick={showcart}  
         >
        <ShoppingCartIcon style={{ fontSize:40,color:"black"}} />
    </IconButton>

    <IconButton style={ibtnStyle2} name="showwishlist" onClick={showwishlist}   >
    <FavoriteIcon  style={{ fontSize:40,color:"black"}}/>
    </IconButton> 
    
<Button name="logout" onClick={logout} style={btnStyle3}  >logout</Button>
       
</Paper>
</Grid> 

       
        {
            products.map((product) =>                
            <ProductCard key = {product.id}  product={product} />
            )
        }
    </div >        
   )
}

export default Home;