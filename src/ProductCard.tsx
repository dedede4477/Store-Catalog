// src/ProductCard.tsx
import type { Product } from './product'; // Import the Product interface from product.ts

// 1. Define the props type
interface ProductCardProps {
  product: Product;
}

// 2. Destructure the product and apply the type
export default function ProductCard({ product }: ProductCardProps) {
  // Destructuring the product object properties
  const { name, category, price, image } = product;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 flex flex-col items-center text-center shadow-lg hover:shadow-2xl transition duration-300">
      <div className="text-6xl mb-4">{image}</div>
      <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
      <p className="text-sm text-gray-400 mb-3">{category}</p>
      <p className="text-lg font-semibold text-green-400 mb-4">${price.toFixed(2)}</p>
      <button className="mt-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full transition">
        Add to Cart
      </button>
    </div>
  );
}