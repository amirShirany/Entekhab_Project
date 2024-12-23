import PropTypes from "prop-types"

function CartItem({ item }) {
  return (
    <li className="cart-item">
      <span>{item.name}</span>
      <span>Quantity: {item.quantity}</span>
      <span>${item.price.toFixed(2)}</span>
    </li>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
}

export default CartItem