"use client";
import { useProductStore } from "@/store/useProductStore";

export default function Checkout() {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useProductStore();
  const DELIVERY_PRICE = 150; // Fixed delivery cost

  // total price of products
  const productTotal = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  // Final total including delivery
  const finalTotal = productTotal > 0 ? productTotal + DELIVERY_PRICE : 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((product) => (
              <li key={product.id} className="flex justify-between items-center border-b py-2">
                <div>
                  <span>{product.name} - ${product.price} x {product.quantity}</span>
                  <p className="font-bold">Total: ${product.price * product.quantity}</p>
                </div>
                <div className="flex items-center">
                  <button className="p-2 bg-gray-300 mx-1" onClick={() => decreaseQuantity(product.id)}>-</button>
                  <span className="px-2">{product.quantity}</span>
                  <button className="p-2 bg-gray-300 mx-1" onClick={() => increaseQuantity(product.id)}>+</button>
                  <button className="ml-2 p-2 bg-red-500 text-white" onClick={() => removeFromCart(product.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4 p-4 bg-gray-100">
            <h2 className="text-xl font-bold">Subtotal: ${productTotal}</h2>
            <h2 className="text-xl font-bold">Delivery: ${DELIVERY_PRICE}</h2>
            <h2 className="text-xl font-bold mt-2">Total Price: ${finalTotal}</h2>
          </div>

          <button className="mt-4 p-3 bg-green-500 text-white w-full font-bold">
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
}
