import PropTypes from "prop-types"

const ProductFilters = ({
  categories = [],
  selectedCategory = "",
  priceRange = { min: 0, max: 1000000 },
  sortBy = "newest",
  onFilterChange,
  onSortChange,
  onPriceRangeChange,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h2 className="text-lg font-bold text-gray-800 mb-4">فیلترها</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">دسته‌بندی</h3>
        <select
          value={selectedCategory}
          onChange={(e) => onFilterChange(e.target.value)}
          className="w-full p-2 border rounded-md text-gray-700">
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

      {/* Price Range Filter */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-2">محدوده قیمت</h3>
        <div className="flex gap-2">
          <input
            type="number"
            placeholder="از"
            value={priceRange.min}
            onChange={(e) =>
              onPriceRangeChange({ ...priceRange, min: e.target.value })
            }
            className="w-1/2 p-2 border rounded-md"
          />
          <input
            type="number"
            placeholder="تا"
            value={priceRange.max}
            onChange={(e) =>
              onPriceRangeChange({ ...priceRange, max: e.target.value })
            }
            className="w-1/2 p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Sort Options */}
      <div className="mb-4">
        <h3 className="text-md font-medium mb-2">مرتب‌سازی</h3>
        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="w-full p-2 border rounded-md text-gray-700">
          <option value="newest">جدیدترین</option>
          <option value="price-asc">ارزان‌ترین</option>
          <option value="price-desc">گران‌ترین</option>
          <option value="popular">محبوب‌ترین</option>
        </select>
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
