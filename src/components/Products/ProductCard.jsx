import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import PropTypes from "prop-types"

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)
  // Ensure addToCart is not undefined
  if (!addToCart) {
    console.error("addToCart is undefined")
  }

  // Your component logic here

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800 mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">
        {product.price.toLocaleString()} تومان
      </p>
      <button className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg transition-colors">
        افزودن به سبد خرید
      </button>
    </div>
  )
}

ProductCard.propTypes = {
  addToCart: PropTypes.func.isRequired,
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProductCard
