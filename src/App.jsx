import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./ui/AppLayout";
import HomePage from "./features/home/HomePage";
import ProductDetail from "./features/product/ProductDetail";
import CheckoutPage from "./features/checkout/CheckoutPage";
import CartPage from "./features/cart/CartPage";
import ProductPage from "./features/product/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        {/* <Route element={<AppLayout />}>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Route> */}
        <Route path="headphone" element={<ProductPage />} />
        <Route path="speaker" element={<ProductPage />} />
        <Route path="earphone" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
