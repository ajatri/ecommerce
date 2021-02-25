import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {Grid,Paper,Avatar,TextField,Button,Box,Typography,Link} from "@material-ui/core"
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import '../../index.css'


const Login = (props) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const login = () => {
        axios.post("http://localhost:8000/auth/login", {
            user: {
                username, password
            }
        }).then((res) => {
            localStorage.setItem("token", res.data.token);
           alert('login ')
         history.push("/");
        
       
        }).catch(console.log);
    }


    const paperStyle = {padding:20,height:"50vh",width:300,margin:"80px auto"}
   const avatarStyle = {backgroundColor:'#f8a919'}
   const btnStyle = {backgroundColor:'#f8a919',margin:"50px 40px 20px 100px" }
   const userStyle ={margin:"200px auto"}
   
   return (
        <div>
<Grid>
    <Paper elevation ={10} style={paperStyle} > 
    <Grid align="center">
    <Avatar style={avatarStyle} ><LockOutlinedIcon/></Avatar>
  </Grid>
  <Box m={0} pt={5}>
  <TextField  label ="Username" placeholder="Enter Username" type="text"
                name="username" value={username} fullWidth required
                onChange={(event) => setUsername(event.target.value)}  InputLabelProps={{
                    style: { color:'black' }
                  }}/>
                </Box>
<Box m={0} pt={5}>
<TextField inputProps={{style:{border:"black"}}} label="Password" placeholder ="Enter Password" type="password" name="password" value={password}
                onChange={(event) => setPassword(event.target.value)} fullWidth required 
                InputLabelProps={{
                    style: { color: 'black' }
                  }}/>
                </Box>

<Button variant="contained" style={btnStyle} onClick={login} color="primary">Login</Button>
<Typography>New User?
    <Link href="/signup">Signup</Link>
</Typography>
    

    </Paper>
</Grid>
           
        </div>
    )
};

export default Login;