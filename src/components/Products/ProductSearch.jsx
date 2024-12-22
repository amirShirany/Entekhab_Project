import { useState } from "react"
import PropTypes from "prop-types"

const ProductSearch = ({ onSearch }) => {
  const [query, setQuery] = useState("")

  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center space-x-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="جستجوی محصولات..."
        className="w-full p-2 border rounded-md text-gray-700"
      />
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md">
        جستجو
      </button>
    </form>
  )
}

ProductSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default ProductSearch
