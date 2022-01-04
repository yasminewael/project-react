import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./product.css";


const Product = () => {
 const params = useParams();
const [singleProduct, setSingleProduct] = useState(null);

useEffect(() => {
getProductDetails();
}, [])

const getProductDetails = () =>{
    return fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => setSingleProduct(json));
}
return(
    <div >
        {singleProduct ? (
            <div className="d-flex
            align-items-center justify-content-center
            flex-wrap container">
                 <div className="w-25 me-4">
            <img className="img w-100" src={singleProduct.image} alt="" />
          </div>
          <div className="text-center mt-2">
            <h3>{singleProduct.title}</h3>
            <p>Category: {singleProduct.category}</p>
            <p>Price: {singleProduct.price}</p>
            <p>Rate: {singleProduct.rating.rate}</p>
            <p>Description: {singleProduct.description}</p>
            </div>
</div>
            
        ):(
            <p>Please wait</p>
        )}
    </div>
)
}

export default Product;
