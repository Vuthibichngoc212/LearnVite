import { Route, Routes } from "react-router-dom";
import Product from "./Product"; // Ensure correct file path
import Home from "./Home"; // Ensure correct file path

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}

export default App;
