// const initialState = { 
//     categoryList : [],
//     selectedCategory : ''
// };

function categoriesReducer(currentState = [], action){
    if (action.type === 'ADD_CATEGORY'){
        const newState = [...currentState, action.payload];
        return newState;
    }
        //return {...currentState, categoryList : [...currentState.categoryList, action.payload] };
    // if (action.type === 'SET_SELECTED_CATEGORY')
    //     return {...currentState, selectedCategory : action.payload }
    if (action.type === 'INIT_CATEGORIES'){
           return  action.payload;
    }
    
    return currentState;
}

export default categoriesReducer;