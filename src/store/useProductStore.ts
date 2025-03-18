import { create } from "zustand";
import { persist } from "zustand/middleware";
import { products, Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

interface ProductStore {
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      products,
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const existingProduct = state.cart.find((p) => p.id === product.id);
          if (existingProduct) {
            return {
              cart: state.cart.map((p) =>
                p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
              ),
            };
          }
          return { cart: [...state.cart, { ...product, quantity: 1 }] };
        }),
      removeFromCart: (id) =>
        set(() => ({
          cart: get().cart.filter((p) => p.id !== id),
        })),
      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        })),
      decreaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart
            .map((p) =>
              p.id === id ? { ...p, quantity: p.quantity - 1 } : p
            )
            .filter((p) => p.quantity > 0), //  if quantity is 0 remove the product
        })),
    }),
    { name: "cart-storage" }
  )
);
