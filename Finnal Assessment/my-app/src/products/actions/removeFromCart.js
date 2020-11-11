import productsApi from '../services/productsApi';

function removeFromCart(product){
    return function(dispatch){
        productsApi
            .removeFromCart(product)
            .then(() => {
                const action = { type: "REMOVE_CART_FROM_PRODUCT", payload: product };
                dispatch(action);
            })
        
    }

}

export default removeFromCart;