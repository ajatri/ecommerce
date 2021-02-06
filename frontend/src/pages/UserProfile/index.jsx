import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

const UserProfile = (props) => {
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
  

    const addaddress = () => {
        history.push("/address")
    }
    
    const listItems = address.map((addresss) => (
        <div key={addresss.id}>
          {addresss.id}  : {addresss.state}
    
        </div>))
   
    return (
     <div>
        <button name="addaddress" onClick={addaddress}   >add address </button>  
    {listItems}
  
    </div >        
   )
}

export default UserProfile;