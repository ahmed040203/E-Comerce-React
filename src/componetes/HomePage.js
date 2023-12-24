import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./rtk/slices/products-clice";
import { Link } from "react-router-dom";
import { addToCart } from "./rtk/slices/cart-slice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  const product = products.map((product) => {
    return (
      
      <div key={product.id} className="col mt-3">
        <div className="cart" style={{ width: "18rem" }}>
          <img
            style={{ height: "18rem", maxWidth: "90%" }}
            src={product.image}
            className="cart-img-top m-auto"
            alt={product.title}
          />
          <div className="cart-body">
            <h5 className="cart-title">{product.title}</h5>
            <h5 className="cart-title text-color">Price :{product.price} $</h5>
            <span>
              <Link
                to={`/products/${product.id}`}
                className="btn btn-primary btn-sm"
              >
                View Details
              </Link>
              <button
                className="btn btn-success btn-sm m-3"
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              >
                Add To cart
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <><br></br><div className=" container">
      <h1>Home page</h1>
      <div className="row">{product}</div>
    </div></>
  );
}

export default Products;
