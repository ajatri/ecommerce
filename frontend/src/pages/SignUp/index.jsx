import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const SignUp = (props) => {
    const [fn, setFirstName] = useState("");
    const [ln, setLastName] = useState("");
    const [pass, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();

    const signup = () => {
        axios.post("http://localhost:8000/users/add", {
            first_name:fn,
            last_name:ln,
            password:pass,
            email:email
            }
        ).then((res) => {
            history.push("/login");//home
        }).catch(console.log);
    }

    const paperStyle = {padding:20,height:"65vh",width:300,margin:"80px auto"}
    const avatarStyle = {backgroundColor:'#ffab10'}
    const btnStyle = {backgroundColor:'#ffab10',margin:"40px 40px 20px 100px",pading:40 }
    return (
        <div>
        <Grid >
            <Paper elevation={10} style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle} ><LockOutlinedIcon/></Avatar>
            </Grid>
            <h2 align="center"  >Create an account</h2>
            <Box m={0} pt={2}>
                <TextField label="First Name" placeholder="Enter your first name"  inputProps={{style:{border:"black"}}} fullWidth required 
                InputLabelProps={{
                    style: { color: 'black' }
                  }}></TextField>
                </Box>
                <Box m={0} pt={5}>
                <TextField label="Last Name" placeholder="Enter your last name" type="text"
                name="first_name" value={fn}
                onChange={(event) => setFirstName(event.target.value)} inputProps={{style:{border:"black"}}}  fullWidth required 
                InputLabelProps={{
                    style: { color: 'black' }
                  }}></TextField>
                </Box>
                <Box m={0} pt={5}>
                <TextField label="Password" placeholder="Enter your password" type="password" name="password" value={pass}
                onChange={(event) => setPassword(event.target.value)} inputProps={{style:{border:"black"}}} fullWidth required 
                InputLabelProps={{
                    style: { color: 'black' }
                  }} ></TextField>
                </Box>
                <Box m={0} pt={5}>
                <TextField label="Email" placeholder="Enter your email" type="text"
                name="email" value={email}
                onChange={(event) => setEmail(event.target.value)} inputProps={{style:{border:"black"}}} fullWidth required 
                InputLabelProps={{
                    style: { color: 'black' }
                  }}></TextField>
                </Box>
                <Button variant="contained" style={btnStyle} onClick={signup} color="primary">Signup</Button>
            </Paper>
        </Grid>
 </div>
    )
};



export default SignUp;