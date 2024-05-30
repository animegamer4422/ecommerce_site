import React from 'react';
import prod from '../products_Acessories.json';
import Image from 'next/image';
interface Product_Acessories {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

const Products_Acessories = () => {
  const products_acessories: Product_Acessories[] = prod;

  if (!products_acessories || products_acessories.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <div className="container mx-auto mt-12 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products_acessories.map((product) => (
          <div key={product.id} className="rounded-lg bg-base-100 shadow-md overflow-hidden flex flex-col">
            <Image src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4 flex flex-col flex-grow text-white">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="flex-grow">{product.description}</p>
              <p className="text-lg font-semibold mt-4">Price: ${product.price}</p>
              <button className="mt-auto bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products_Acessories;