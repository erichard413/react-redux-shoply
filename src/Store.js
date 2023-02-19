import React from 'react';
import './Store.css';
import {useSelector} from 'react-redux';
import StoreList from './StoreList';

const Store = () => {    

    const products = useSelector(state => state.products);
    
    return (
        <div className="Store">
            <StoreList products={products} />
        </div>
    )
}

export default Store;