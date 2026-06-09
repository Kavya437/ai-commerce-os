"use client";

import { useState } from "react";
export default function CheckoutPage() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  return (
    <main className="min-h-screen bg-black text-white p-8">

      <div className="max-w-3xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          Checkout
        </h1>

        <div className="bg-zinc-900 p-8 rounded-xl">

          <div className="mb-6">
            <label className="block mb-2">
              Full Name
            </label>

            <input
              type="text"
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Email
            </label>

            <input
              type="email"
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">
              Phone Number
            </label>

            <input
              type="tel"
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>

          <div className="mb-6">
            <label className="block mb-2">
              Address
            </label>

            <textarea
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">
              City
            </label>

            <input
              type="text"
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2">
              Pincode
            </label>

            <input
              type="text"
              className="w-full p-3 rounded-lg bg-zinc-800"
            />
          </div>
          <div className="bg-zinc-800 p-6 rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between mb-2">
              <span>Smart Watch</span>
              <span>₹4,999</span>
            </div>

            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>₹99</span>
            </div>

            <hr className="my-3 border-zinc-700" />

            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹5,098</span>
            </div>
          </div>

          <button
            onClick={() => setOrderPlaced(true)}
            className="bg-green-600 px-6 py-3 rounded-lg hover:bg-green-500 transition-all"
          >
            Complete Payment
          </button>
          {orderPlaced && (
            <div className="mt-6 bg-green-900 text-green-300 p-4 rounded-lg">
              Order Placed Successfully ✅
            </div>
          )}

        </div>

      </div>

    </main>
  );
}