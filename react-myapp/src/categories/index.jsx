import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import categoryActionCreators from './actions';

import './index.css';


class Categories extends Component{
    state = {
        newCategorName : ''
    };

    onAddNewClick = () => {
        this.props.addNew(this.state.newCategorName);
    }

    onCateogoryChnage = (evt) =>{
        this.setState({ newCategorName : evt.target.value})
    }

    render(){
        const { addNew ,categories,load } = this.props;
        return(
            <div>
                <h3>Categores</h3>
                <input type="button" value="LOAD CATEOGORY" onClick={ load }/>
                <hr></hr>
               
                <label>Category Name :</label>
                <input type="text" onChange={this.onCateogoryChnage} />                
                <input type="button" value="Add New" onClick={this.onAddNewClick} />
                <ol>
                    { 
                        categories.map(category => (
                            <li 
                                key={category.id} 
                                
                            >
                                {category.name} 
                            </li>)
                        ) 
                    }
                </ol>
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const categories = storeState.categories;
    return { categories : categories};
}

function mapDispatchToProps(dispatch){
    const categoryActionDispatchers = bindActionCreators(categoryActionCreators, dispatch);
    return categoryActionDispatchers
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);