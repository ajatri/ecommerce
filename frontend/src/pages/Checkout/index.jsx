import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

import { useHistory } from "react-router-dom";

const Checkout = (props) => {
    const [address, setAddress] = useState([]);
    const history = useHistory();
console.log('heyyyyy how you doing')
    useEffect(() => {
       const token = localStorage.getItem("token");
       axios.get("http://localhost:8000/address/address", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            setAddress(res.data.address.result);
      }).catch(console.log);
    }, []);
  

    const buy = () => {
            alert('Hello');
       }
    
    const profile = () => {
        history.push("/userprofile")
    }
    const listItems = address.map((addresss) => (
        <div key={addresss.id}>
         
          <input type="radio" value="listItems" name="listItems"/>  {addresss.id}  : {addresss.state}
        </div>))
   
    return (
     <div> 
      

    {listItems}
    <button name="profile" onClick={profile}   >Add address </button>  
    <Popup trigger={<button> Buy now</button>} position="right center" modal>
    <div>Order placed</div>
  </Popup> 
    </div >        
   )
}

export default Checkout;