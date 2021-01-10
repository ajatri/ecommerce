import axios from "axios";
import React from "react";


const ProductCard = ({ product: { id, name } }) => {
  const wishlist = () => {
    const token = localStorage.getItem("token");
    axios.post("http://localhost:8000/products/wishlist", {
      pid: id
    }, {
      headers: {
        Authorization: "Bearer " + token
      }
    }).then((res) => {

    }).catch(console.log);
  }
  return (
    <div>
      {id} -{name}
      <button name="wishlist" onClick={wishlist} >wishlist</button>
    </div>
  )
};
export default ProductCard;
