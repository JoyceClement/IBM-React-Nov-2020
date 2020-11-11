
import React, { useState } from 'react';
const CartItem = ({product ,remove}) => {
    const { name, description, price, category } = product;
    return (
        <li>
        <span>
            {name}
        </span>
        <span> {category} </span>
        <div>{description}</div>
        <div className="price">Rs.{price}</div>
        <br />
        <input type="button" value="REMOVE FROM CART" onClick={() => remove(product)} />
        <div className ="field">
        </div>
       
       
       
    </li>
    )
}

export default CartItem