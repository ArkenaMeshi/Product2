import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  const { products, setProducts } = props;


  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>All Products : </h2>
      {products &&
        products.map((product, index) => {
          return (
            <Link key={index} to={`/products/${product._id}`}>
              {" "} <br/>
              {product.title}
            </Link>
          
          );
          
        })}
    </div>
  );

};
export default ProductList;

