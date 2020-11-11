import React, { useEffect } from 'react';
import CartList from './views/cartList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cartActionCreators from './actions';
// load cart item 
const Cart = ({load,data , remove}) => {
    useEffect(load, [load]);
    return (
       <div>
           <h3>Cart Details</h3>
           <hr />
           {
                data.length > 0 ?
                <CartList products ={data}  
                remove = {remove}
                    />:
                    <div >
                    Your cart is empty
                </div>
           }
                   
           
       </div>
   );
}

const mapStateToProps = ( {products, categories ,cart }) => {
    return { data: cart };
}

const mapDispatchToProps = dispatch => bindActionCreators(cartActionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
