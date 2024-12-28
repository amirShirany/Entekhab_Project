import PropTypes from "prop-types"
import { useState } from "react"

const ProductFilters = ({
  onSearch,
  categories = [],
  selectedCategory = "",
  priceRange = { min: 100, max: 1200 },
  sortBy = "newest",
  onFilterChange,
  onSortChange,
  onPriceRangeChange,
}) => {
  const [query, setQuery] = useState("")
  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
  }
  return (
    <div className="bg-white p-6 m-4 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <h2 className={headingClass}>فیلترها</h2>
      <form
        onSubmit={handleSearch}
        className="mx-auto p-4 bg-gray-100 rounded-lg shadow-md flex items-center space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="جستجوی محصولات..."
          className="flex-1 p-2 border border-gray-300 rounded-md text-gray-700"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out">
          جستجو
        </button>
      </form>
      <div className="space-y-6">
        <div>
          <h3 className={subHeadingClass}>دسته‌بندی</h3>
          <select
            value={selectedCategory}
            onChange={(e) => onFilterChange(e.target.value)}
            className={selectClass}>
            <option key="all" value="">
              همه دسته‌ها
            </option>
            {categories.map((category, index) => (
              <option key={`${category}-${index}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <h3 className={subHeadingClass}>محدوده قیمت</h3>
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="از"
              value={priceRange.min}
              onChange={(e) =>
                onPriceRangeChange({ ...priceRange, min: e.target.value })
              }
              className={inputClass}
            />
            <input
              type="number"
              placeholder="تا"
              value={priceRange.max}
              onChange={(e) =>
                onPriceRangeChange({ ...priceRange, max: e.target.value })
              }
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <h3 className={subHeadingClass}>مرتب‌سازی</h3>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className={selectClass}>
            <option value="newest">جدیدترین</option>
            <option value="price-asc">ارزان‌ترین</option>
            <option value="price-desc">گران‌ترین</option>
            <option value="popular">محبوب‌ترین</option>
          </select>
        </div>
      </div>
    </div>
  )
}

ProductFilters.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string,
  priceRange: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  sortBy: PropTypes.oneOf(["newest", "price-asc", "price-desc", "popular"]),
  onFilterChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onPriceRangeChange: PropTypes.func.isRequired,
}

export default ProductFilters

const selectClass =
  "w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-gray-700 bg-gray-50 hover:bg-white"
const inputClass =
  "w-1/2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-colors text-gray-700 bg-gray-50 hover:bg-white"
const headingClass = "text-xl font-bold text-gray-800 border-b pb-2 mb-4"
const subHeadingClass = "text-md font-medium text-gray-700 mb-3"
