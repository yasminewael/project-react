import React from "react";
import { Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./product.css";

const Product = () => {
  const params = useParams();
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    getProductDetails();
  }, []);

  const getProductDetails = () => {
    return fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
  };
  return (
    <div className="d-flex justify-content-center">
      {singleProduct ? (
        <section className="product-section m-4">
          <h1 className="">Product</h1>

          <div className="container d-flex">
            <div className="w-75 p-3">
              <h2 className="my-4">{singleProduct.title}</h2>
              <p className="my-3 text-white-50">{singleProduct.category}</p>
              <p className="w-75 my-4">{singleProduct.description}</p>
              <p className="text-warning">Rate: {singleProduct.rating.rate}</p>
              <p>Rating By {singleProduct.rating.count} User</p>
              <h4 className="my-4">
                Product Price: {Math.ceil(singleProduct.price)} EGP
              </h4>
            </div>
            <figure className="w-25 my-3">
              <img className="w-100 " src={singleProduct.image} alt=""></img>
            </figure>
          </div>
        </section>
      ) : (
        <Spinner className="p-5 my-5 " animation="border" role="status">
          <span className="spinner visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Product;
