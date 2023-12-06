import React, { useState } from 'react';

const ProductDetail = () => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);

  const product = {
    title: 'Product Title',
    description: 'Description of the product goes here...',
    price: '$19.99',
    image: 'https://via.placeholder.com/250',
  };

  const addToCart = () => {
    // Logic to add product to cart
    setAddedToCart(true);
    // You can implement your cart functionality here
  };

  const addToWishlist = () => {
    // Logic to add product to wishlist
    setAddedToWishlist(true);
    // You can implement your wishlist functionality here
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>

        {!addedToCart ? (
          <button onClick={addToCart}>Add to Cart</button>
        ) : (
          <p>Added to Cart!</p>
        )}

        {!addedToWishlist ? (
          <button onClick={addToWishlist}>Add to Wishlist</button>
        ) : (
          <p>Added to Wishlist!</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
