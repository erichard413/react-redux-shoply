import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {useParams} from 'react-router-dom';
import './StoreItem.css';
import {useSelector, useDispatch} from 'react-redux';
import {ADD_CART, REMOVE_CART} from './reducers/reduceKeyword';


const StoreItem = () => {
    const [count, setCount] = useState(1);
    const productId = useParams();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const products = useSelector(state => state.products);
    const product = products.filter(p=> p.id === productId.id);
    const {id, name, description, image_url, price} = product[0];

    const addToCart = () => {
        let payload;
        let cartItem = cart.filter(c=> c.id === id);
        let cartFilter = cart.filter(c=> c.id !== id);
        
        cartItem.length > 0 ? payload=[...cartFilter, {...cartItem[0], count: cartItem[0].count + count}] : payload= [...cartFilter, {...product[0], count}];
        
        dispatch({
            type: ADD_CART,
            payload
        })

    }
    const removeFromCart = () => {
        let removedArray = cart.filter(p => p.id !== id);
        dispatch({
            type: REMOVE_CART,
            payload: removedArray
        })
    }

    const handleCountChange = (e) => {
        setCount(+e.target.value)
    }

    return (
        <div className='StoreItem'>
            <h2>{name.toUpperCase()}</h2>
                <div>
                    <img src={image_url} alt={`image-${name}`} />
                </div>
                    <ul>
                        <li>{description}</li>
                        <li>${price}</li>
                    </ul>
        
            <div className="StoreItem-buttons">
                <input
                    type="number"
                    value={count}
                    onChange = {handleCountChange}
                />
                <button className="addToCart" onClick={addToCart}>Add to Cart</button>  <button className="removeFromCart" onClick={removeFromCart}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default StoreItem;