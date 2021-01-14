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

      



    return (<div>
        
<button name="showwishlist" onClick={showwishlist}   >show wishlist </button>  

        Products
        {
            products.map((product) =>                
            <ProductCard key = {product.id}  product={product} />
            )
        }
    </div >)
}

export default Home;