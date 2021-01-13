/*
import  React from "react";
import axios from "axios";
import {useEffect} from "react";
import { useHistory } from "react-router-dom";

const cart = props=>{const location = useLocation();
useEffect(()=>{

console.log(location.state.result);



},[location])};

 

export default cart;*/
import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../../domain/Product/ProductCard";
import { useHistory,useLocation } from "react-router-dom";

  

const Cart = ()=>{
    const location= useLocation();
    console.log(location.state.ans)
 


return(
    

<div>llocation={location.state} </div>




)
}

    
    
  


export default Cart;