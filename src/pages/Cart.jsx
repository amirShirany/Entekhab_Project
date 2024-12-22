import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import CartItem from "../components/Cart/CartItem"

const Cart = () => {
  const { cartItems, totalPrice } = useContext(CartContext)

  return (
    <div className="cart">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      )}
    </div>
  )
}

export default Cart
