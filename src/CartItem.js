import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_COUNT, SUB_COUNT} from './reducers/reduceKeyword';
import './CartItem.css';

const CartItem = ({product}) => {
    const dispatch = useDispatch();
    const {id, name, description, image_url, price, count} = product;
    const cart = useSelector(state=>state.cart);


    const increment = () => {
        const cartFilter = cart.filter(c => c.id !== id);
        let cartItem = cart.filter(c=> c.id === id);
        cartItem[0].count = count + 1;

        let payload = [...cartFilter, cartItem[0]];

        dispatch({type: ADD_COUNT, payload});
    }

    const decrement = () => {
        const cartFilter = cart.filter(c => c.id !== id);
        let cartItem = cart.filter(c=> c.id === id);
        cartItem[0].count = count - 1;
        let payload;
        cartItem[0].count === 0 ? payload = [...cartFilter] : payload = [...cartFilter, cartItem[0]];
        dispatch({type: SUB_COUNT, payload});
    }



    return (
        <div className='CartItem'>
            <h3>{name.toUpperCase()} x {count}</h3>
            <div className="CartItem-details">
                <div className="CartItem-div-left">
                    <img src={image_url} alt={`image-${name}`} />
                </div>
                <div className="CartItem-div-right">          
                    <ul>
                        <li>{description}</li>
                        <li>${(price * count).toFixed(2)}</li>
                    </ul>
                </div>
            </div>
            <div className="CartItem-buttons">
                <button onClick={decrement}>-</button>
                {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default CartItem;