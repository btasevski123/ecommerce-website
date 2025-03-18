"use client";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/useProductStore";
import { useParams } from "next/navigation";
import { Product } from "@/data/products";

export default function ProductDetail() {
  const { products, addToCart, cart } = useProductStore();
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (params?.id) {
      const foundProduct = products.find((p) => p.id === params.id) || null;
      setProduct(foundProduct);
    }
  }, [params?.id, products]);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>${product.price}</p>
      <button
        className="mt-4 p-2 bg-blue-500 text-white"
        onClick={() => {
          addToCart(product);
          console.log("Cart Updated:", cart);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
