import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

const UserProfile = (props) => {
    const [address, setAddress] = useState([]);
    const history = useHistory();
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
  

    const addaddress = () => {
        history.push("/address")
    }
    
    const listItems = address.map((addresss) => (
        <div key={addresss.id}>
            Username :{addresss.email}<br></br>
            User:{addresss.first_name}<br></br>
            ADDRESS<br></br>
          {addresss.id}  : {addresss.state} 
    
        </div>))
   
    return (
     <div>
    {listItems}
     <button name="addaddress" onClick={addaddress}   >add address </button>  
  
    </div >        
   )
}

export default UserProfile;