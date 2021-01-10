import  React from "react";


const ProductCard = (props) =>{
    const wishlist = () => {
        //props.product.id;
    }
  return(
        <div>
        {props.product.id} -{props.product.name}
        <button name="wishlist" onClick={wishlist} />
        </div>
  )
};
export default ProductCard;
