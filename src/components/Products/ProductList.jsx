import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function ProductList() {
  const { addToCart } = useContext(CartContext);

  // Ensure addToCart is not undefined
  if (!addToCart) {
    console.error('addToCart is undefined');
  }

  // Your component logic here
}

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default ProductList;