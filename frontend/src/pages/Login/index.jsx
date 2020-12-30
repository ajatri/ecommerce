import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

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
            history.push("/");//home
        }).catch(console.log);
    }
    return (
        <div>
            <label>username</label>
            <input type="text"
                name="username" value={username}
                onChange={(event) => setUsername(event.target.value)}
            ></input>
            <label>password</label>
            <input type="password" name="password" value={password}
                onChange={(event) => setPassword(event.target.value)}
            ></input>
            <button onClick={login}>Login</button>
        </div>
    )
};

export default Login;