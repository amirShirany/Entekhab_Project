export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
};

export const calculateTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
};

export const filterProducts = (products, criteria) => {
  return products.filter(product => {
    return Object.keys(criteria).every(key => 
      product[key] === criteria[key]
    );
  });
};