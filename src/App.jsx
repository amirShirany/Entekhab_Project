import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import { CartProvider } from "./context/CartContext"
import Header from "./components/Layout/Header"
import Footer from "./components/Layout/Footer"

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </CartProvider>
    </>
  )
}

export default App
