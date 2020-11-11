import cartApi from '../../products/services/cartApi';
//remove the cart item from the list 
function remove(product) {
    return function(dispatch){
        cartApi
            .remove(product)
            .then(() => {
                const action = { type: "REMOVE_FROM_CART", payload: product };
                dispatch(action);
            })
        
    }
}

export default remove;