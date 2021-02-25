import axios from "axios";
import { useEffect, useState } from "react";
import React from 'react';
import ReactDom from 'react-dom';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link} from "@material-ui/core"

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
       const btnStyle = {backgroundColor:'#f8a919',top:"50px",left:"1180px"}
       const btnStyle2 = {backgroundColor:'#f8a919',top:"30px",left:"800px",bottom:"70px"}
       const paperStyle1 = {padding:20,height:"30vh",width:"100%",margin:"60px auto"}
    const profile = () => {
        history.push("/userprofile")
    }
    const listItems = address.map((addresss) => (
        
        <div key={addresss.id}>
           
           <Grid>
                <Paper elevation ={5} style={paperStyle1} > 
          <input type="radio" value="listItems" name="listItems"/> 
                    {addresss.name}  <br></br> 
                    {addresss.houseno} <br></br> 
                    {addresss.area}<br></br>
                    {addresss.landmark}<br></br>
                    {addresss.city}<br></br>
                    {addresss.state}<br></br>
                    {addresss.pin}<br></br>
                    {addresss.phone}<br></br>
                    </Paper>
                </Grid>
               
        </div>
       
        ))
   
    return (
     <div> 
          <Button name="profile" onClick={profile} variant="contained" style={btnStyle}   >Add address </Button>  

    {listItems}

    <Popup trigger={<Button variant="contained" style={btnStyle2}> Buy now</Button>} position="right center" modal>
    <div>Order placed</div>
  </Popup> 
    </div >        
   )
}

export default Checkout;