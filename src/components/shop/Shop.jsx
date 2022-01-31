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

    <div className="">
      <h1 className="mt-5 mx-5">Shop</h1>
      <section className="d-flex flex-wrap justify-content-center">
        {products.map((product) => {
          return (
            <div className="productCardContaier w-25 my-3 p-2 me-5">
              <figure className=" d-flex justify-content-center">
                <img src={product.image} alt="" />
              </figure>
              <h5 className="m-4 text-center"> {product.title}</h5>
              <p className="text-warning">Rating: {product.rating.rate}</p>
              <p className="">Price: {product.price} EGP.</p>

              <Link
                to={`/shop/${product.id}`}
                key={product.id}
                className="btn btn-warning d-flex justify-content-center"
              >
                More Details
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Shop;
