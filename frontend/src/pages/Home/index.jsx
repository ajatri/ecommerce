import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../domain/Product/ProductCard";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        

        axios.get("http://localhost:8000/products", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            
            setProducts(res.data.products.result);
            console.log(res.data.products.result)
  }).catch(console.log);
    }, []);
    return (<div>
        Products
        {
            products.map((product) =>                
            <ProductCard key = {product.id}  product={product} />
            )
        }
    </div >)
}

export default Home;