import axios from "axios";

const endpoint = "http://localhost:3030/carts/";
function getAll(){
    return axios.get(endpoint)
        .then(response => response.data);
}

function addToCart(cartData){
    //if (cartData.id === 0){
     return axios.post(endpoint, cartData)
       .then(response => response.data);
    //  } else {
    //     return axios.put(`${endpoint}/${cartData.id}`, cartData)
    //        .then(response => response.data);
    //  }
}

function remove(productData){
    return axios
      .delete(`${endpoint}/${productData.id}`)
      .then(response => response.data);
}

export default { addToCart , getAll , remove}