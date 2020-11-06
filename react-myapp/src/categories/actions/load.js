import axios from 'axios';

function load(){
    return function(dispatch){
        axios
            .get('http://localhost:3030/categories')
            .then(response => response.data)
            .then(function(categories){
               
                const action = { type: "INIT_CATEGORIES", payload: categories};
                dispatch(action);
            });
    }
}

export default load;