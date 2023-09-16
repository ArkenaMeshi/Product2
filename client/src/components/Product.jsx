import React, { useState } from "react";
import axios from "axios";

const Product= (props) => {
  const { products, setProducts } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
 

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setProducts();

    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setProducts([...products, res.data]);
       
       
      })
      .catch((err) => console.log(err));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h3>Product Manager</h3>
      <p>
        <label>Title</label>
        <br />
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
      </p>
      <p>
        <label>Price</label>
        <br />
        <input type="number" onChange={(e) => setPrice(e.target.value)} />
      </p>
      <p>
        <label>Description</label>
        <br />
        <input type="text" onChange={(e) => setDescription(e.target.value)} />
      </p>
     
      <button>Create</button>
    </form>
  );
};
export default Product;