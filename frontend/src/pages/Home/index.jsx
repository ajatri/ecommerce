import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../domain/Product/ProductCard";
import { useHistory } from "react-router-dom";

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
  
    const signout= () => { 
     localStorage.clear();
     history.push("/login");
    }
    
    return (
     <div>
        <button name="showwishlist" onClick={showwishlist}   >show wishlist </button>  
        <button name="showcart" onClick={showcart}   >showcart </button>  
        <button name="signout" onClick={signout}   >signout </button>
        Products
        {
            products.map((product) =>                
            <ProductCard key = {product.id}  product={product} />
            )
        }
    </div >        
   )
}

export default Home;