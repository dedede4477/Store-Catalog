// src/product.ts

// 1. Define the shape of our data using an Interface
export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

// 2. Type the array with the Interface
export const products: Product[] = [
  { id: 1, name: "Wireless Mouse", category: "Accessories", price: 25.99, image: "🖱️" },
  { id: 2, name: "Mechanical Keyboard", category: "Accessories", price: 89.99, image: "⌨️" },
  { id: 3, name: "27-inch 4K Monitor", category: "Displays", price: 349.99, image: "🖥️" },
  { id: 4, name: "Noise-Cancelling Headphones", category: "Audio", price: 199.99, image: "🎧" },
  { id: 5, name: "Portable Bluetooth Speaker", category: "Audio", price: 49.99, image: "🔊" },
  { id: 6, name: "1TB External SSD", category: "Storage", price: 119.99, image: "💾" },
  { id: 7, name: "USB-C Hub Multiport", category: "Accessories", price: 39.99, image: "🔌" },
  { id: 8, name: "1080p Webcam", category: "Video", price: 59.99, image: "📷" },
  { id: 9, name: "Gaming Laptop", category: "Computers", price: 1299.99, image: "💻" },
  { id: 10, name: "Smartphone Gimbal", category: "Video", price: 89.99, image: "📱" },
  { id: 11, name: "Mechanical Pencil", category: "Stationery", price: 4.99, image: "✏️" },
];