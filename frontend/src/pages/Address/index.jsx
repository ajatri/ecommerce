import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Address = (props) => {
    const [landmark, setLandmark] = useState("");
    const [city, setCity] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");
    const [rajya, setRajya] = useState("");
    const history = useHistory();

    const addaddress = () => {
      const token = localStorage.getItem("token");
      
        axios.post("http://localhost:8000/address", {
          landmark:landmark,
           city: city,
           phone: phone,
           email: email,
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
    return (
        <div>
            <label>Landmark</label>
            <input type="text"
                name="landmark" value={landmark}
                onChange={(event) => setLandmark(event.target.value)}
            ></input>
            <label>city</label>
            <input type="text"
                name="city" value={city}
                onChange={(event) => setCity(event.target.value)}
            ></input>
            <label>Pin code</label>
            <input type="number"
                name="pin" value={pin}
                onChange={(event) => setPin(event.target.value)}
            ></input>
            <label>Email</label>
            <input type="text"
                name="email" value={email}
                onChange={(event) => setEmail(event.target.value)}
            ></input>
              <label>Phone</label>
             <input type="number"
                name="phone" value={phone}
                onChange={(event) => setPhone(event.target.value)}
            ></input>
               <label>State</label>
             <input type="text"
                name="rajya" value={rajya}
                onChange={(event) => setRajya(event.target.value)}
            ></input>
            <button onClick={addaddress}>Add address</button>
        </div>
    )
};



export default Address;