import React from 'react';
import {Link} from 'react-router-dom';
import './StoreList.css';

const StoreList = ({products}) => {
    return (
        <div className="StoreList">
            <ul>
            {products.map(product => <li key={product.id}><Link id={`link-${product.name}`} to={`/products/${product.id}`}> {product.name.toUpperCase()}</Link></li>)}
            </ul>
        </div>
    )
}

export default StoreList;