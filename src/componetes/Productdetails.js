import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "./rtk/slices/products-clice";
import { addToCart } from "./rtk/slices/cart-slice";

function Productdetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const productNnm = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProduct(productId));
  }, []);
  const product = productNnm.map((product) => {
    return (
      <div key={product.id} className="col mt-3">
        <div className="cart">
          <img
            style={{ width: "45%" }}
            src={product.image}
            className="cart-img-top m-auto"
            alt={product.title}
          />
          <div className="cart-body">
            <h5 className="cart-title">{product.title}</h5>
            <h5 className="cart-title text-color">{product.category}</h5>
            <p className="cart-text">{product.description}</p>
            <h5 className="cart-title text-color">Price :{product.price} $</h5>
            <button
              className="btn btn-success"
              onClick={() => {
                dispatch(addToCart(product));
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="container">
      <div className="row">{product}</div>
    </div>
  );
}
export default Productdetails;
