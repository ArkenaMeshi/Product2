import React, { useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/Product';
import ProductList from '../components/ProductList';

const Main = (props) => {
    
    const [products, setProducts] = useState([]);
    
    return (
        <>
           <ProductForm products={products} setProducts={setProducts} />
            <hr/>
           <ProductList products={products} setProducts={setProducts} />
        </>
    )
}
export default Main;
