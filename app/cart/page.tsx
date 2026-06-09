"use client";

import { useState } from "react";
export default function CartPage() {
  const [quantity, setQuantity] = useState(1);
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <h1 className="text-5xl font-bold text-center mb-12">
        Shopping Cart
      </h1>

      <div className="max-w-3xl mx-auto bg-zinc-900 p-8 rounded-xl">

        <h2 className="text-2xl font-bold mb-4">
          Smart Watch
        </h2>

        <div className="flex items-center gap-3 mb-4">
          <button
            onClick={() => quantity > 1 && setQuantity(quantity - 1)}
            className="bg-red-600 px-3 py-1 rounded"
          >
            -
          </button>

          <span>Quantity: {quantity}</span>

          <button
            onClick={() => setQuantity(quantity + 1)}
            className="bg-green-600 px-3 py-1 rounded"
          >
            +
          </button>
        </div>

        <p className="text-xl font-semibold mb-6">
          ₹{4999 * quantity}
        </p>

        <a
          href="/checkout"
          className="inline-block bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition-all"
        >
          Proceed to Checkout
        </a>

      </div>

    </main>
  );
}