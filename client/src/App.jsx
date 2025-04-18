
import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = ()=>{
  const user = useSelector(state=>state.user.currentUser)
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<ProductList />} /> 
        <Route path="/products/category/:category" element={<ProductList/>} /> 
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={user?<Home></Home>:< Login />} />
        <Route path="/register" element={user?<Home></Home>:<Register />} /> 
      </Routes>
    </Router>
  )
};

export default App
