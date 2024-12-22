function Cart({ items, total }) {
  return (
    <div className="cart">
      <h2>Your Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map(item => (
          <CartItem key={item.id} item={item} />
        ))
      )}
      <div className="total">
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Cart;