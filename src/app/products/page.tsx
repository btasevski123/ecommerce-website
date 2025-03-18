"use client";
import Link from 'next/link';
import { useProductStore } from '@/store/useProductStore';
import ProductCard from '@/components/ProductCard';

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  return (
    <>
      <div
        className="min-h-screen"
        // style={{
        //   backgroundImage: "url('/images/Group.png')",
        //   backgroundSize: "contain",
        //   backgroundPosition: "center",
        //   backgroundRepeat: "no-repeat",
        // }} this inline style is not good practice it was added just for testig and will be deleted
      >
        <div className="text-center mt-20 mb-60">
          <h1 className="text-4xl font-bold mb-4">Маици</h1>
          <span className="text-2xl mb-4">
            Долготраен квалитет и комфорт без компромис
          </span>
        </div>

        <div className="p-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} className="block">
                <ProductCard 
                  imageUrl={product.image} 
                  name={product.name} 
                  price={product.price}
                  colors={product.colors} 
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full px-6 md:px-16 lg:px-32 py-10 bg-gradient-to-b from-white to-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-8">
          <div className="flex flex-col items-center max-w-sm">
            <div className="text-4xl mb-3">📜</div>
            <h3 className="font-semibold text-lg text-gray-900">Customer Support</h3>
            <p className="text-gray-600 text-sm">
              Стоиме на располагање за константна поддршка и помош на нашите клиенти.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm">
            <div className="text-4xl mb-3">🛍️</div>
            <h3 className="font-semibold text-lg text-gray-900">Social Media</h3>
            <p className="text-gray-600 text-sm">
              Следете нè на друштвените мрежи, заедно да споделуваме моменти во EAM Облека.
            </p>
          </div>

          <div className="flex flex-col items-center max-w-sm">
            <div className="text-4xl mb-3">🚚</div>
            <h3 className="font-semibold text-lg text-gray-900">Delivery</h3>
            <p className="text-gray-600 text-sm">
              Сигурна достава со карго партнер. Наскоро низ ЕУ.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
