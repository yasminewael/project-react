import React from "react";
import "./Shop.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  };

  return (
    <div className="shop-Container">
      <h1 className="mt-5 mx-5">Shop</h1>
      <section className="d-flex flex-wrap justify-content-center">
        {products.map((product) => {
          console.log("single product", product);
          return (
            <Link
              to={`/shop/${product.id}`}
              key={product.id}
              className="shopLink w-25 me-5 my-3 py-2 px-2"
            >
              <div className="img d-flex">
                <img className="" src={product.image} alt="" />
              </div>










+              <h6 className="card-details card-title mt-3 text-center"> {product.title}</h6>
              <p className="card-details">
                <span className="card-details">Price:</span> {product.price}
              </p>
              <p className="card-details">
                <span className="card-details">Rating:</span> {product.rating.rate}
              </p>
            </Link>
          );
        })}
      </section>
    </div>
  );
};

export default Shop;
