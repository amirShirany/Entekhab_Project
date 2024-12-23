import PropTypes from "prop-types"
import CartItem from "./CartItem" // Add CartItem import

/**
 * Shopping cart component that displays items and total
 * @param {Object[]} items - Array of cart items
 * @param {number} total - Cart total amount
 */
function Cart({ items = [], total = 0 }) {
  return (
    <section className="cart" aria-label="Shopping Cart">
      <h2>Your Shopping Cart</h2>
      {!Array.isArray(items) ? (
        <p>Error loading cart items</p>
      ) : items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items" role="list">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      <div className="total">
        <h3>Total: ${(typeof total === "number" ? total : 0).toFixed(2)}</h3>
      </div>
    </section>
  )
}

Cart.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ),
  total: PropTypes.number,
}

Cart.defaultProps = {
  items: [],
  total: 0,
}

export default Cart
