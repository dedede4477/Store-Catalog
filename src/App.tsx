// src/App.tsx
import { useState } from 'react';
import { products } from './product'; 
import ProductCard from './ProductCard'; 

function App() {
  // State for the price filter
  const [maxPrice, setMaxPrice] = useState<number>(0);

  // Filter logic
  const filteredProducts = products.filter((product) => {
    return maxPrice === 0 || product.price <= maxPrice;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-2 text-blue-400">Delta Electronics</h1>
        <p className="text-gray-400">Your one-stop shop for premium gadgets.</p>
      </header>

      {/* Filter Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between bg-gray-800 p-4 rounded-lg mb-8 border border-gray-700">
        <div className="flex items-center gap-4">
          <label htmlFor="priceFilter" className="font-semibold text-lg">
            Filter by Max Price:
          </label>
          <select
            id="priceFilter"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value={0}>Show All Products</option>
            <option value={50}>Under $50</option>
            <option value={100}>Under $100</option>
            <option value={500}>Under $500</option>
            <option value={1500}>Under $1500</option>
          </select>
        </div>
        
        <p className="mt-4 md:mt-0 text-gray-400">
          Showing <span className="text-white font-bold">{filteredProducts.length}</span> products
        </p>
      </div>

      {/* Product Grid */}
      <main className="max-w-7xl mx-auto">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Using map() to render the ProductCard component */}
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400 text-xl mt-10">
            No products found under ${maxPrice}.
          </div>
        )}
      </main>
    </div>
  );
}

export default App;