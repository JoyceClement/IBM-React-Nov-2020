import React, { Component } from 'react';
import CartItem from './cartItem';
const CartList = ({products  , remove}) => {
    const cartItems = products.map(product => (
                    <CartItem
                        key={product.id}
                        product={product}
                        remove={remove}
                    />

                )
                );
    return (
        <section className="list">
                 <ol>
                         {cartItems}
                 </ol>
                      
        </section>
    )       
    

}
export default CartList;