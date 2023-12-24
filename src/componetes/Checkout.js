import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "./rtk/slices/cart-slice";

function Checkout() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const price = carts.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const handleClearCart = () => {
    dispatch(clear());
  };

  const handleCheckout = () => {
    dispatch(clear());
    alert("Thank you for your purchase!");
  };

  return (
    <div className="container mt-3">
      <h2>Checkout</h2>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mt-3">
          Total Price :<span className="price">{price}</span> $
        </h5>
        <button
          className="btn btn-danger btn-sm mr-2"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button className="btn btn-primary btn-sm" onClick={handleCheckout}>
          Confirm Purchase
        </button>
      </div>
    </div>
  );
}

export default Checkout;
