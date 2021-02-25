import axios from "axios";
import { useEffect, useState } from "react";
import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link,IconButton} from "@material-ui/core"
import { useHistory } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const UserProfile = (props) => {
    const [address, setAddress] = useState([]);
    const [user, setUser] = useState([]);
    const history = useHistory();
console.log('heyyyyy how you doing')

    useEffect(() => {
       const token = localStorage.getItem("token");
       axios.get("http://localhost:8000/address", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            setAddress(res.data.address.result);
      }).catch(console.log);
    }, []);
  
    

    const addaddress = () => {
        history.push("/address")
    }

    const paperStyle1 = {padding:20,height:"30vh",width:"100%",margin:"80px auto"}
    const paperStyle ={backgroundColor:'#f8a919',height:"25vh",width:"100%"}
    const avatarStyle = {backgroundColor:'#6d6666',top:"30px",left:"835px"}
    const btnStyle = {backgroundColor:'white',top:"40px",left:"1090x"}
   // const ibtnStyle = {backgroundColor:'black'}
  
    const listItems = address.map((addresss) => (
        
        <div key={addresss.id}>
            <Grid>
                <Paper elevation ={10} style={paperStyle1} >
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
           
    
        </div>))
   
    return (
     <div>
          <Grid> 
                <Paper elevation ={3} style={paperStyle} >
                     
                    <Avatar style={avatarStyle}>
                    <AccountCircleIcon style={{fontSize:40,color:"white"}} />
                     </Avatar> <br></br>
                    
                     {/* <h3 align ="center">{address[0].landmark}</h3> */}
                     {/* <h3 align="center">{address.email} </h3> */}
                     <Button name="addaddress" onClick={addaddress} variant="contained" style={btnStyle}   >add address </Button>  
               
                </Paper>
            </Grid>
          {listItems}
         
          {address.id}
         
        
   
  </div >        
   )
}

export default UserProfile;