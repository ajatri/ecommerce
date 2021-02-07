import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'react-popup';

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
          {addresss.id}  : {addresss.state}
    
        </div>))
   
    return (
     <div>
        <button name="buy" onClick={buy}   >Buy now </button>  
    {listItems}
    <button name="profile" onClick={profile}   >Add address </button>  
    </div >        
   )
}

export default Checkout;