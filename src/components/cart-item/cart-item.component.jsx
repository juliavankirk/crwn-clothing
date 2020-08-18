import React from 'react';

import './cart-item.styles.scss';

/* Cart Item component that shows the corresponding
image, price, name, and quantity of each item added to cart
*/

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className='cart-item'>
        <img src={imageUrl} alt='item' />
        <div className='item-details'>
            <span className='name'>{name}</span>
            <span className='price'>
                {quantity} x ${price}
            </span>
        </div>
    </div>
);

export default CartItem;