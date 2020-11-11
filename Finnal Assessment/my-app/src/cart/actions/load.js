import cartApi from '../../products/services/cartApi';
//load the cart items when cart menu clicked
function load(){
    return function(dispatch){
        cartApi
            .getAll()
            .then(function(products){
                const action = { type: "INIT_CARTS", payload: products };
                dispatch(action);
            });
    }
}

export default load;