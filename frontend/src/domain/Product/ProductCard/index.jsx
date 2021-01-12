import  React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const ProductCard = ({ product: { id, name,price,num,num2} }) => { 
  
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


        
    
  return(
     <div>
      
       {id} - {name} - {price} -{num2}-{num}
{   num>0 || <button name="wishlist" onClick={wishlist}   >wishlist </button>

 }       
    {num2>0 || <button name="cart" onClick={cart}   >cart </button>
}
       
  
      
    
        </div>
    
  )
};
export default ProductCard;
