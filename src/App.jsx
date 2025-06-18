import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import HomePage from "./features/home/HomePage";
import ProductDetail from "./features/product/ProductDetail";
import CheckoutPage from "./features/checkout/CheckoutPage";
import CartPage from "./features/cart/CartPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
