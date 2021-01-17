import axios from "axios";
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("token");
       axios.get("http://localhost:8000/wishlist/wishlist", {
            headers: {
                Authorization: "Bearer " + token
            }
        }).then((res) => {
            setWishlist(res.data.wishlist.result);
            console.log(res.data.wishlist.result)
           
  }).catch(console.log);
    }, []);

const listItems = wishlist.map((wishlists) => (
    <div key={wishlists.id}>
      {wishlists.name}  : {wishlists.price}

    </div>

  ));

return(<div> {listItems}</div>)

}
export default Wishlist;