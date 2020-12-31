import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
    return (
        <div>
            <label>First Name</label>
            <input type="text"
                name="first_name" value={fn}
                onChange={(event) => setFirstName(event.target.value)}
            ></input>
            <label>Last Name</label>
            <input type="text"
                name="last_name" value={ln}
                onChange={(event) => setLastName(event.target.value)}
            ></input>
            <label>password</label>
            <input type="password" name="password" value={pass}
                onChange={(event) => setPassword(event.target.value)}
            ></input>
            <label>Email</label>
            <input type="text"
                name="email" value={email}
                onChange={(event) => setEmail(event.target.value)}
            ></input>
            <button onClick={signup}>Signup</button>
        </div>
    )
};



export default SignUp;