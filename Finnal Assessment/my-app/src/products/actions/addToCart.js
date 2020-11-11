
import cartApi from '../services/cartApi';
//add to cart 
function addToCart (product){
    return function(dispatch){
        cartApi
            .addToCart(product)
            .then(() => {
                const action = { type: "ADD_CART_TO_PRODUCT", payload: product };
                dispatch(action);
            })
    }
}

export default addToCart;