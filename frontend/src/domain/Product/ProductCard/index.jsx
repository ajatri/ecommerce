import  React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


const ProductCard = ({ product: { id, name,price,num} }) => { 
   
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


    


        
    
  return(
     <div>
      
       {id} - {name} - {price} 
{   num>0 || <button name="wishlist" onClick={wishlist}   >wishlist </button>

 }       
     
       
  
      
    
        </div>
    
  )
};
export default ProductCard;
