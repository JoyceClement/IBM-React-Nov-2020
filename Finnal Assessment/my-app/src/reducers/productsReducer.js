

// const Storage = (cartItems) => {
//     localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
// }

// export const sumItems = cartItems => {
//     Storage(cartItems);
//     let itemCount = cartItems.reduce((total,product) =>  total +product.quantity, 0);
//     let total = cartItems.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
//     return { itemCount ,total}
// }

// const storage = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

// const initialState = { 
//     cartItems: storage, ...sumItems(storage)
// };
function productsReducer(currentState = [], action) {
    if (action.type === 'ADD_PRODUCT') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'UPDATE_PRODUCT') {
        const updatedProduct = action.payload;
        const newState = currentState.map(p => p.id === updatedProduct.id ? updatedProduct : p);
        return newState;
    }
    if (action.type === 'REMOVE_PRODUCT') {
        const newState = currentState.filter(p => p.id !== action.payload.id);
        return newState;
    }
    if (action.type === 'REMOVE_MANY_PRODUCTS') {
        const productsToRemove = action.payload;
        const newState = currentState.filter(p => !productsToRemove.find(prod => prod.id === p.id));
        return newState;
    }

    if (action.type === 'ADD_CART_TO_PRODUCT') {

        // currentState = initialState;
        //     if (!currentState.find(item => item.id === action.payload.id)) {
        //         currentState.push({
        //             ...action.payload,
        //             quantity: 1
        //         })
        //     } 

        //     return {
        //         ...currentState,
        //         ...sumItems(currentState)
               
        //     }
        const newState = [...currentState, action.payload];//currentState.filter(p => p.id === action.payload.id);
        return newState;
    }

    if (action.type === 'REMOVE_CART_FROM_PRODUCT') {
        const newState = currentState.filter(p => p.id !== action.payload.id);
        return newState;
    }

    if (action.type === 'INIT_PRODUCTS'){
        return action.payload;
    }
    return currentState;
}

export default productsReducer;
