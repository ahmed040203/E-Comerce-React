import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteFromcart } from "./rtk/slices/cart-slice";
import { Link } from "react-router-dom";

function Carts() {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  const totalPrice = carts.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  const handleClearCart = () => {
    dispatch(clear());
  };

  const handleDeleteFromCart = (cartItem) => {
    dispatch(deleteFromcart(cartItem));
  };

  const cartItems = carts.map((cart) => (
    <tr key={cart.id}>
      <td>{cart.id}</td>
      <td className="d-none d-lg-block" style={{ height: "87px" }}>
        {cart.title}
      </td>
      <td>
        <img src={cart.image} style={{ width: "70px", height: "70px" }} alt="" />
      </td>
      <td>{cart.price} $</td>
      <td>{cart.quantity}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDeleteFromCart(cart)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-3">
      <h2>Welcome to Cart</h2>
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="mt-3">
          Total Price: <span className="price">{totalPrice}</span> $
        </h5>
        <div>
          <Link to="/checkout">
            <button className="btn btn-primary btn-sm mr-2">Checkout</button>
          </Link>
          <button className="btn btn-danger btn-sm" onClick={handleClearCart}>
            Clear Cart
          </button>
        </div>
      </div>
      <table className="table table-striped table-hover mt-4">
        <thead>
          <tr>
            <th>ID</th>
            <th className="d-none d-lg-block">Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{cartItems}</tbody>
      </table>
    </div>
  );
}

export default Carts;
