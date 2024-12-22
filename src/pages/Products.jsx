import { useState } from "react"
import ProductSearch from "../components/Products/ProductSearch"
import ProductGrid from "../components/Products/ProductGrid"
import ProductFilters from "../components/Products/ProductFilters"

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("")
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 })
  const [sortBy, setSortBy] = useState("newest")

  // Mock categories data
  const categories = ["لپ تاپ", "موبایل", "تبلت", "ساعت هوشمند"]

  const handleSearch = (query) => {
    setSearchQuery(query)
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    )
    setProducts(filteredProducts)
  }

  const handleFilterChange = (category) => {
    setSelectedCategory(category)
  }

  const handleSortChange = (sort) => {
    setSortBy(sort)
  }

  const handlePriceRangeChange = (range) => {
    setPriceRange(range)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <ProductSearch onSearch={handleSearch} />
      <div className="flex gap-6 mt-6">
        <ProductFilters
          categories={categories}
          selectedCategory={selectedCategory}
          priceRange={priceRange}
          sortBy={sortBy}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
          onPriceRangeChange={handlePriceRangeChange}
        />
        <ProductGrid products={products} />
      </div>
    </div>
  )
}

export default Products
