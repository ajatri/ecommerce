import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link} from "@material-ui/core"

const Address = (props) => {
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [rajya, setRajya] = useState("");
    const [name, setName] = useState("");
    const [house, setHouse] = useState("");
    const [area, setArea] = useState("");
    const history = useHistory();

    const addaddress = () => {
      const token = localStorage.getItem("token");
      
        axios.post("http://localhost:8000/address", {
            name:name,
            house:house,
            area:area,
          landmark:landmark,
           city: city,
           phone: phone,
           pin:pin,
         rajya: rajya
            },{
              headers: {
                  Authorization: "Bearer " + token
              }
          }
        ).then((res) => {
            history.push("/userprofile");
        }).catch(console.log);
    }
    const paperStyle = {padding:20,height:"85vh",width:300,margin:"80px auto"}
    const btnStyle = {backgroundColor:'#f8a919',margin:"50px 40px 20px 90px" }
    return (
        <div>
<Grid>
    <Paper elevation ={10} style={paperStyle} >   
        <Box m={0} pt={5}>
            <TextField   placeholder="Enter name" type="text"
                name="name" value={name} fullWidth required
                onChange={(event) => setName(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
        </Box>

        <Box m={0} pt={5}>
            <TextField   placeholder="House number or House name" type="text"
                name="house" value={house} fullWidth required
                onChange={(event) => setHouse(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
        </Box>
        
        
        <Box m={0} pt={5}>
            <TextField   placeholder="Road name, Area, colony" type="text"
                name="area" value={area} fullWidth required
                onChange={(event) => setArea(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
        </Box>

          
        <Box m={0} pt={5}>
            <TextField   placeholder="Landmark" type="text"
                name="landmark" value={landmark} fullWidth 
                onChange={(event) => setLandmark(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
        </Box>


        <Box m={0} pt={5}>
            <TextField   placeholder="City" type="text"
                name="city" value={city} fullWidth  required
                onChange={(event) => setCity(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
        </Box>
        
        <Box m={0} pt={5}>
            <TextField   placeholder="State" type="text"
                name="rajya" value={rajya} fullWidth required
                onChange={(event) => setRajya(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
        </Box>

        <Box m={0} pt={5}>
            <TextField   placeholder="Pin" type="text"
                name="pin" value={pin} fullWidth  required
                onChange={(event) => setPin(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
        </Box>

        
        <Box m={0} pt={5}>
            <TextField   placeholder="Phone no" type="text"
                name="phone" value={phone} fullWidth  required
                onChange={(event) => setPhone(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
        </Box>
        <Button onClick={addaddress} variant="contained" style={btnStyle}>Add address</Button>
    </Paper>
</Grid>
        </div>
    )
};



export default Address;