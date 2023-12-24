import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./componetes/AppNavbar";
import HomePage from "./componetes/HomePage";
import Contact from "./componetes/Signup";
import About from "./componetes/About";
import Login from "./componetes/Login";
import Sidbar from "./componetes/Sidbar";
import Products from "./componetes/Products";
import Productdetails from "./componetes/Productdetails";
import Categories from "./componetes/Categories";
import Categoriesdetails from "./componetes/Categoriesdetails";
import Carts from "./componetes/Cart";
import Checkout from "./componetes/Checkout";
 
function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="row contant">
          <div
            className="sidbar col-2 text-white-50 d-none d-lg-block"
            id="sidbar"
          >
            <Sidbar />
          </div>
          <div className=" col-8 flex-1">
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<Login />} />
              <Route path="/products" element={<Products />} />
              <Route path="/products/:productId" element={<Productdetails />} />
              <Route path="/products/categories" element={<Categories />} />
              <Route path="/carts" element={<Carts />} />
              <Route
                path="/products/category/:categoryName"
                element={<Categoriesdetails />}
              />
              </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
