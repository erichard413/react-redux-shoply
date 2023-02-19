import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartItem from './CartItem';
import './Cart.css';

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector(state=> state.cart);
    let sortedCart = cart.sort((p1, p2) => (p1.name > p2.name) ? 1 : (p1.name < p2.name) ? -1 : 0);

    const discount = useSelector(state=> state.discount);
    

    const applyDiscount = (e) => {
        let discountPercent;
        if (cart.length === 0) {
            return alert("CANNOT APPLY DISCOUNT, CART IS EMPTY!");
        }
        if(discount !== 0) {
            return alert('DISCOUNT IS ALREADY APPLIED!');
        }
        
        let code = document.querySelector('.discountcode').value;
        
        if (code === 'REMOVE10') {
            discountPercent = .10
        }
        if (code === 'REMOVE20') {
            discountPercent = .20
        }
        if (code === 'REMOVE30') {
            discountPercent = .30
        }

        dispatch({
            type: 'DISCOUNT',
            discount: discountPercent
             })
    }
    
    let total = sortedCart.reduce((acc, cart) => {return acc + cart.price * cart.count}, 0).toFixed(2)

    return (
        <>
            <div>
                <label htmlFor="discount-code">DISCOUNT CODE</label>
                <input
                className="discountcode"
                name="discount-code"
                type="text" />
                <button onClick={applyDiscount}>APPLY</button>
            </div>
            <div className="Cart">
                {sortedCart.map(c=> <CartItem key={c.id} product={c}/>)}
            </div>
            <div className="CartTotal">
                Total: { (total - (total*discount)).toFixed(2) }
            </div>
        </>

    )
}

export default Cart;