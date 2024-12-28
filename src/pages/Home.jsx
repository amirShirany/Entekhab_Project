import { useState } from "react"
import ProductGrid from "../components/Products/ProductGrid"
import ProductFilters from "../components/Products/ProductFilters"
import productsData from "../data/products"

const Home = () => {
  const [products, setProducts] = useState(productsData)
  const [selectedCategory, setSelectedCategory] = useState("")
  const categories = [
    ...new Set(productsData.map((product) => product.category)),
  ]

  const handleSearch = (query) => {
    const filteredProducts = productsData.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  const handleFilterChange = (category) => {
    setSelectedCategory(category)
    const filteredProducts = category
      ? productsData.filter((product) => product.category === category)
      : productsData
    setProducts(filteredProducts)
  }

  return (
    <div>
      <ProductFilters
        onSearch={handleSearch}
        categories={categories}
        selectedCategory={selectedCategory}
        onFilterChange={handleFilterChange}
        onSortChange={() => {}}
        onPriceRangeChange={() => {}}
      />
      <ProductGrid products={products} />
    </div>
  )
}

export default Home
