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
    const showcart = (props) => {
       
        const token = localStorage.getItem("token");
              console.log(token)
      
          axios.get("http://localhost:8000/cart/showcart",{
              headers: {
                  Authorization: "Bearer " + token
              }
          }).then((res) => {console.log(res.data.message.result);
      props.history.push({pathname : "/cart",
      state:{ans:res.data.message.result}});
      
             
      }).catch(console.log);
             
        
      };





    return (<div>
        
<button name="showcart" onClick={showcart}   >showcart </button>  
        Products
        {
            products.map((product) =>                
            <ProductCard key = {product.id}  product={product} />
            )
        }
    </div >)
}

export default Home;