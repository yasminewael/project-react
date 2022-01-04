import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Counter from "./components/counter/Counter";
import Shop from "./components/shop/Shop";
import Product from "./components/product/Product";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/counter" element={<Counter />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
