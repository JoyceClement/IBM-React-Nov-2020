import categoriesAPI from '../services/categoriesAPI'

function addNew(categoryName){
    
    return function(dispatch){
        const newCategoryData = { id : 0, name : categoryName};

        categoriesAPI
            .save(newCategoryData)
            .then(newCategory => {
                const action = { type: "ADD_CATEGORY", payload: newCategory };
                dispatch(action);
            })

           
    };
     
}
    export default addNew;