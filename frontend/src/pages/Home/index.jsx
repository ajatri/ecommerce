import axios from "axios";
import { useEffect, useState } from "react";

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
        }).catch(console.log);
    }, []);
    return (<div>
        Products
        {
            products.map((product) =>
                <div style={{ color: "green" }}>
                    {product.id} - {product.name}
                </div>
            )
        }
    </div >)
}

export default Home;