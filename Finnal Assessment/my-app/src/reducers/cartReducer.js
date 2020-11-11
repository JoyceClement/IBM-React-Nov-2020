
function cartReducer(currentState = [], action) {
    if (action.type === 'INIT_CARTS'){
        return action.payload;
    }
    if (action.type === 'REMOVE_FROM_CART') {
        const newState = currentState.filter(p => p.id !== action.payload.id);
        return newState;
    }
    return currentState;

}
export default cartReducer