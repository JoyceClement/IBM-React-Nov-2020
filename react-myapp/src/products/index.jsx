import React, { Component } from 'react';
import ProductStats from './view/ProductStats';
import ProductEditor from './view/ProductEditor';
import ProductsList from './view/ProductList';
import '../categories/index'


import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import productActionCreators from './actions';

import './index.css';


class Products extends Component {
    render() {
        const { data, toggleOutOfStock, remove, removeOutOfStock, addNew  } = this.props;
        return (
            <div>
                <h3>Products</h3>
                <hr />
                <ProductStats products={data.products} />
                <ProductEditor addNew={addNew} categoryList={data.categories} />
                <ProductsList
                    products={data.products}
                    toggleOutOfStock={toggleOutOfStock}
                    remove={remove}
                    removeOutOfStock={removeOutOfStock}
                />
            </div>
        )
    }
}

function mapStateToProps(storeState){
    const products = storeState.products;
    //return { data : products };
    return { data : storeState };
}

function mapDispatchToProps(dispatch){
    const productActionDispatchers = bindActionCreators(productActionCreators, dispatch);
    return productActionDispatchers;
}

export default connect(mapStateToProps , mapDispatchToProps)(Products);