import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
    }
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }

    return (
        <div>
            <h3 className="text-center mb-4 cartS p-2">Order Summary</h3>
            <h4 className="text-danger mt-2 mb-3">Course Ordered: <span>{cart.length}</span></h4>
            <h4 className="text-danger">Total Amount: <span className="ml-4">${formatNumber(total)}</span></h4>
            <button className="btn btn-success mt-2 px-5">Order Now</button>
        </div>
    );
};

export default Cart;