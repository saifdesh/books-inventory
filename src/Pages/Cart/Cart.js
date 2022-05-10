import React from 'react';
import './Cart.css';

const Cart = ({ cart, handleRemoveFromcart }) => {
    return (
        <div className='cart'>
            <h6>Item Slected: {cart.length}</h6>

            {
                cart.map(book => <p>{book.name}
                    <button onClick={() => handleRemoveFromcart(book)}>X</button>
                </p>
                )
            }

        </div>
    );
};

export default Cart;